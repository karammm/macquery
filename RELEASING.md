# Releasing

Publishing is **tag-driven**. Merging to `main` does not deploy — bumping the
version is an explicit decision, which is the point of semver.

## Cutting a release

From an up-to-date `main`:

```bash
npm run release:patch   # 1.0.0 -> 1.0.1   backward-compatible bug fix
npm run release:minor   # 1.0.0 -> 1.1.0   backward-compatible new capability
npm run release:major   # 1.0.0 -> 2.0.0   incompatible change
```

Each script runs `npm version`, which bumps `package.json`, commits, and
creates the matching `vX.Y.Z` tag, then pushes the commit and tag together.
Pushing the tag is what triggers deployment.

Choose the bump per [Semantic Versioning 2.0.0](https://semver.org/):

| Bump  | When |
|-------|------|
| MAJOR | Incompatible change — a redesign, a removed page, a changed URL |
| MINOR | New functionality, backward compatible — a new page or section |
| PATCH | Backward-compatible fixes — copy corrections, bug fixes, styling |

## What happens on a tag push

`.github/workflows/release.yml` runs four jobs:

1. **Verify** — checks the tag is valid semver (using the regex published by
   semver.org) and that it matches `package.json`. A mismatch fails the run
   rather than shipping a mislabelled build.
2. **Build** — `npm ci && npm run build`, uploading `dist/` as an artifact.
3. **Deploy** — syncs to the S3 bucket behind CloudFront that serves
   www.macquery.in, invalidates the CDN, waits for the invalidation, then
   fetches the live site and asserts it is serving this build's asset hash.
   Skipped for pre-releases.
4. **Release** — creates a GitHub Release with generated notes.

Caching is split deliberately. Vite fingerprints everything under `/assets`,
so those get `max-age=31536000, immutable`. `index.html`, `robots.txt` and
`sitemap.xml` keep stable names and get `max-age=0, must-revalidate` —
otherwise a visitor keeps an old `index.html` pointing at asset files that no
longer exist.

Note that semver.org is explicit that `v1.2.3` is a *tag name*; the version
itself is `1.2.3`. The workflow strips the `v` before validating.

## Pre-releases

```bash
npm version prerelease --preid=beta -m "release: v%s"   # 1.0.0 -> 1.0.1-beta.0
git push --follow-tags
```

A pre-release tag is built and published as a GitHub pre-release but **is not
deployed**. A beta should never quietly become the live site.

## Manual deploy

`Actions → Release → Run workflow` with **Deploy** ticked deploys the selected
ref without creating a tag or release. For emergencies, not routine use.

## One-time setup still required

`www.macquery.in` resolves to `dl7j4bwemy1ki.cloudfront.net` and is served by
S3 behind CloudFront. The deploy job needs credentials for that account, which
must be added by someone with repository admin — **the deploy job fails with a
clear error until they exist.**

Add these under Settings → Secrets and variables → Actions:

| Secret | What it is |
|--------|------------|
| `S3_BUCKET` | Bucket name serving the site (no `s3://` prefix) |
| `CLOUDFRONT_DISTRIBUTION_ID` | Distribution in front of that bucket |
| `AWS_REGION` | Region of the bucket, e.g. `ap-south-1` |
| `AWS_ROLE_ARN` | IAM role for OIDC — **preferred** |

If OIDC is more setup than you want right now, add `AWS_ACCESS_KEY_ID` and
`AWS_SECRET_ACCESS_KEY` instead and leave `AWS_ROLE_ARN` unset. The workflow
handles either without edits, but OIDC issues short-lived credentials per run
rather than parking long-lived keys in the repository, so prefer it.

The IAM role or user needs `s3:ListBucket` and `s3:PutObject`/`s3:DeleteObject`
on the bucket, plus `cloudfront:CreateInvalidation` and
`cloudfront:GetInvalidation` on the distribution. Nothing wider.

Optionally add a protection rule on the `production` environment so only tags
can deploy to it.

## What was removed and why

- **`static.yml`** uploaded the repository root (`path: '.'`) and never ran a
  build, so GitHub Pages could only ever serve unbuilt source. That is why
  `karammm.github.io/macquery/` still ships an `index.html` pointing at
  `/src/main.jsx`, which resolves only under the Vite dev server. It never
  published the real site; CloudFront did.
- **The `gh-pages` script and dependency**, which was a third, manual way to
  publish to a branch nothing served. There is now one path to production.
