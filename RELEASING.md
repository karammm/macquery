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
2. **Build** — `npm ci && npm run build`, uploading `dist/` as a Pages artifact.
3. **Deploy** — publishes to GitHub Pages. Skipped for pre-releases.
4. **Release** — creates a GitHub Release with generated notes.

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

These need repository admin and have not been done:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
   The source is currently the `main` branch at `/`, which serves the raw
   repository — that is why `karammm.github.io/macquery/` currently ships
   `index.html` pointing at `/src/main.jsx`, which only works under the Vite
   dev server. Until this is switched, `deploy-pages` cannot publish.

2. **Confirm the custom domain.** `www.macquery.in` currently serves a build
   that matches neither `main` nor the `gh-pages` branch, so it is being
   published from somewhere outside this repository. Point it at this Pages
   site (Settings → Pages → Custom domain) before relying on this pipeline,
   or the two will fight over the domain.

   The build assumes a root path. If you ever publish without a custom domain,
   set the repository variable `VITE_BASE` to `/macquery/`.

3. **Optional:** add a deployment protection rule on the `github-pages`
   environment so only tags can deploy.

The previous `static.yml` workflow has been removed. It uploaded the repository
root (`path: '.'`) and never ran a build, so it could only ever publish
unbuilt source. The `gh-pages` npm script and dependency are gone too — there
is now one way to publish, not three.
