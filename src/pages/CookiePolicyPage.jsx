import { Link } from 'react-router-dom'
import LegalLayout, { LegalSection, LegalTable } from '../components/LegalLayout'
import { openCookieSettings } from '../lib/consent'

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      seo={{
        title: 'Cookie Policy | MacQuery',
        description:
          'Exactly which cookies macquery.in sets, what each one does, how long it lasts, and how to change or withdraw your choice at any time.',
        keywords: 'MacQuery cookie policy, cookies, ePrivacy, consent, Google Analytics cookies',
        path: '/cookies',
      }}
      label="Legal"
      title={<>Cookie <span className="text-gradient">Policy</span></>}
      intro="This site sets no cookies unless you say yes. Here is precisely what changes if you do."
    >
      <LegalSection title="The short version">
        <p>
          Nothing that identifies you is stored on your device when you arrive. We load no
          analytics tag, and we set no cookie, until you actively accept in the banner.
          Declining is a single click and costs you no functionality whatsoever.
        </p>
        <p>
          We deliberately do not use Google Consent Mode on its own, because that still loads
          the tag and sends signals to Google before you have agreed to anything. We withhold
          the tag entirely instead.
        </p>
      </LegalSection>

      <LegalSection title="Strictly necessary storage">
        <p>
          Two items are kept in your browser&apos;s local storage. Neither is a tracking cookie,
          neither is sent to any server, and both exist only to respect choices you made.
        </p>
        <LegalTable
          head={['Key', 'Purpose', 'Lifetime']}
          rows={[
            ['macquery-cookie-consent', 'Remembers whether you accepted or declined analytics, so we stop asking.', 'Until you clear it'],
            ['macquery-theme', 'Remembers whether you chose the light or dark theme.', 'Until you clear it'],
          ]}
        />
      </LegalSection>

      <LegalSection title="Analytics cookies — only after you accept">
        <p>
          If, and only if, you accept, we load Google Analytics 4. It sets the following
          first-party cookies and transmits your IP address, device and browser data and the
          pages you view to Google LLC in the United States.
        </p>
        <LegalTable
          head={['Cookie', 'Purpose', 'Lifetime']}
          rows={[
            ['_ga', 'Distinguishes visitors so visits can be counted without double-counting you.', '2 years'],
            ['_ga_<container-id>', 'Persists session state for Google Analytics 4.', '2 years'],
            ['_gid', 'Distinguishes visitors within a rolling 24-hour window.', '24 hours'],
          ]}
        />
        <p>
          Legal basis: your consent, under GDPR Art. 6(1)(a) and Art. 5(3) of the ePrivacy
          Directive as implemented in your country.
        </p>
      </LegalSection>

      <LegalSection title="Changing your mind">
        <p>
          You can withdraw consent as easily as you gave it, at any time, with no explanation
          required. When you withdraw, we stop loading the tag and delete the analytics cookies
          already on your device.
        </p>
        <p>
          <button
            type="button"
            onClick={openCookieSettings}
            className="btn-outline text-sm"
          >
            Open cookie settings
          </button>
        </p>
        <p>
          The same control sits in the footer of every page. You can also clear cookies through
          your browser settings, which resets the banner and makes us ask again.
        </p>
      </LegalSection>

      <LegalSection title="More detail">
        <p>
          Recipients, retention periods, international transfers and your rights are set out in
          the{' '}
          <Link to="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link>.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
