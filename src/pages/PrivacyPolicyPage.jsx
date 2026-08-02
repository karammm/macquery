import { Link } from 'react-router-dom'
import LegalLayout, { LegalSection, LegalList, LegalTable } from '../components/LegalLayout'
import { company, privacy, subProcessors } from '../data/legal'

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      seo={{
        title: 'Privacy Policy | MacQuery',
        description:
          'How MacQuery (SIILARD LABS LLP) collects, uses, stores and transfers personal data, the legal basis for each purpose, and how to exercise your rights under the GDPR.',
        keywords: 'MacQuery privacy policy, GDPR, data protection, personal data, data transfers',
        path: '/privacy',
      }}
      label="Legal"
      title={<>Privacy <span className="text-gradient">Policy</span></>}
      intro="What we collect, why we collect it, who else sees it, and how to make us stop."
    >
      <LegalSection title="Who is responsible for your data">
        <p>
          {company.brand} is a brand of {company.legalName}, a limited liability partnership
          registered in India. {company.legalName} is the controller for the personal data
          described here.
        </p>
        <p>
          Registered office: {company.registeredOffice.lines.join(', ')}.
          <br />
          Email: <a className="text-purple-400 hover:text-purple-300" href={`mailto:${company.email}`}>{company.email}</a>
          {' · '}Phone: {company.phone}
        </p>
        <p>
          Privacy enquiries: {privacy.contactEmail}
        </p>
        <p>
          Representative in the European Union (GDPR Art. 27): {privacy.artifact27Representative}
        </p>
      </LegalSection>

      <LegalSection title="What we collect">
        <p>
          We do not require an account, we do not sell anything on this site, and we do not
          build advertising profiles. There are exactly three ways we receive data from you.
        </p>
        <LegalList
          items={[
            'The contact form. Name, email address and message are required; phone number and project type are optional. This goes to us so we can reply to your enquiry.',
            'Analytics, only if you accept it. If you accept in the cookie banner, Google Analytics records your IP address, device and browser characteristics and the pages you view. If you decline, or ignore the banner, no analytics tag is ever loaded and no analytics cookie is set.',
            'Server logs. Our host records the IP address and basic request metadata of every visitor, which is unavoidable in serving a page over the internet, and is used only to operate and secure the site.',
          ]}
        />
        <p>
          If you start a chat using the WhatsApp button, that conversation happens on WhatsApp
          and is governed by Meta&apos;s own terms and privacy policy, not this one.
        </p>
      </LegalSection>

      <LegalSection title="Why we are allowed to use it">
        <LegalTable
          head={['Data', 'Purpose', 'Legal basis (GDPR Art. 6)']}
          rows={[
            [
              'Contact form submission',
              'Responding to your enquiry and, where it leads somewhere, discussing a possible engagement',
              'Art. 6(1)(b) — steps taken at your request before entering a contract',
            ],
            [
              'Analytics',
              'Understanding which pages are useful so we can improve them',
              'Art. 6(1)(a) — your consent, which you can withdraw at any time',
            ],
            [
              'Server logs',
              'Delivering the site, and detecting abuse or attacks',
              'Art. 6(1)(f) — our legitimate interest in a working, secure website',
            ],
          ]}
        />
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          Contact form submissions are retained for {privacy.contactFormRetention}, after which
          they are deleted. If an enquiry becomes a client relationship, the data moves into
          that engagement&apos;s own retention terms, which we agree with you in the contract.
        </p>
        <p>
          Analytics data is retained according to the retention window configured in Google
          Analytics. Server logs are kept for the period set by our hosting provider.
        </p>
      </LegalSection>

      <LegalSection title="Who else receives it">
        <p>
          We do not sell personal data and we do not share it for anyone else&apos;s marketing.
          The following processors handle data on our behalf:
        </p>
        <LegalTable
          head={['Recipient', 'Role', 'Location', 'Data']}
          rows={subProcessors.map((p) => [p.name, p.role, p.location, p.data])}
        />
      </LegalSection>

      <LegalSection title="Transfers outside the European Economic Area">
        <p>
          This matters more for us than for most vendors, so we would rather be direct about it.
          {' '}{company.legalName} is established in India. India has no European Commission
          adequacy decision, so any transfer of personal data from the EEA to us is a transfer
          to a third country.
        </p>
        <p>
          Where that happens, the transfer is made under the European Commission&apos;s Standard
          Contractual Clauses, supported by a transfer impact assessment and by technical
          measures including encryption in transit and at rest and access control on a
          need-to-know basis. Some of our processors are also established in the United States
          and rely on their own transfer mechanisms.
        </p>
        <p>
          The Firestore database holding contact form submissions is located in{' '}
          {privacy.firestoreRegion}.
        </p>
        <p>
          If you are evaluating us as a supplier, we will provide our SCCs, transfer impact
          assessment and a data processing agreement on request — just ask.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          If the GDPR applies to you, you have the right to request access to your personal
          data, correction of it, erasure of it, restriction of how we process it, portability
          of it, and to object to processing based on legitimate interests. Where processing
          rests on consent, you may withdraw that consent at any time without affecting
          processing carried out before you withdrew it.
        </p>
        <p>
          To exercise any of these, email us. We will respond within one month. You also have
          the right to lodge a complaint with the supervisory authority in your country of
          residence, workplace, or where you believe an infringement occurred.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          The site sets no cookies until you accept analytics. Full detail of what is set,
          why, and for how long is in the{' '}
          <Link to="/cookies" className="text-purple-400 hover:text-purple-300">Cookie Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          If we change how we handle personal data we will update this page and move the date
          at the top. Material changes to processing that relies on your consent will be put to
          you again rather than applied quietly.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
