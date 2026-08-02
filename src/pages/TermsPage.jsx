import { Link } from 'react-router-dom'
import LegalLayout, { LegalSection, LegalList } from '../components/LegalLayout'
import { company, terms } from '../data/legal'

export default function TermsPage() {
  return (
    <LegalLayout
      seo={{
        title: 'Terms of Use | MacQuery',
        description:
          'The terms governing use of macquery.in — scope, intellectual property, acceptable use, disclaimers and liability.',
        keywords: 'MacQuery terms of use, website terms, legal',
        path: '/terms',
      }}
      label="Legal"
      title={<>Terms of <span className="text-gradient">Use</span></>}
      intro="The rules for this website. Client work is governed by its own signed agreement, not by this page."
    >
      <LegalSection title="What these terms cover">
        <p>
          These terms apply to your use of {company.site} and nothing else. They are between you
          and {company.legalName}, the partnership operating under the {company.brand} brand.
        </p>
        <p>
          They do not govern any engagement. If we work together, the scope, fees, warranties,
          liability, intellectual property assignment, confidentiality and data protection
          obligations are set out in a separate signed agreement and a data processing
          agreement, both of which take precedence over anything here.
        </p>
      </LegalSection>

      <LegalSection title="Nothing here is an offer or advice">
        <p>
          The content on this site — including anything written about regulation such as the EU
          AI Act, the GDPR, NIS2 or DORA — is published for general information. It is not
          legal advice, it is not regulatory advice, and it does not create a client
          relationship. Rules change and apply differently depending on your circumstances.
          Take qualified advice before acting.
        </p>
        <p>
          Descriptions of services, timelines and outcomes are indicative. They become binding
          only when written into a signed agreement.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The design, text, graphics and code of this site belong to {company.legalName} or its
          licensors, except where a third party is credited. Client names, logos and product
          names shown in case studies remain the property of their respective owners and are
          used to describe work performed.
        </p>
        <p>
          You may read, quote briefly with attribution, and link to this site. You may not
          reproduce it substantially, resell it, or present it as your own.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You agree not to:</p>
        <LegalList
          items={[
            'Use the contact form to send unsolicited marketing, spam or malicious content.',
            'Attempt to gain unauthorised access to the site, its hosting, or any connected system.',
            'Interfere with the availability of the site for others.',
            'Scrape or harvest content or contact details at a scale that burdens the service.',
          ]}
        />
      </LegalSection>

      <LegalSection title="Availability and third-party links">
        <p>
          We aim to keep the site available but do not guarantee uninterrupted access, and we
          may change or withdraw content at any time. Where we link to third-party sites, we do
          not control them and are not responsible for their content or their privacy
          practices.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          To the fullest extent permitted by law, {company.legalName} is not liable for
          indirect or consequential loss, or for loss of profit, revenue, data or goodwill,
          arising from use of this website.
        </p>
        <p>
          Nothing in these terms limits liability for death or personal injury caused by
          negligence, for fraud, or for any other liability that cannot lawfully be excluded.
          If you are a consumer, your mandatory statutory rights are unaffected.
        </p>
      </LegalSection>

      <LegalSection title="Privacy">
        <p>
          How we handle personal data is described in the{' '}
          <Link to="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link>{' '}
          and the{' '}
          <Link to="/cookies" className="text-purple-400 hover:text-purple-300">Cookie Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by {terms.governingLaw}, and the courts of{' '}
          {terms.jurisdiction} have exclusive jurisdiction over any dispute arising from them.
          If you are a consumer resident in the EU, this does not deprive you of the protection
          of mandatory provisions of the law of your country of residence.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms:{' '}
          <a className="text-purple-400 hover:text-purple-300" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
