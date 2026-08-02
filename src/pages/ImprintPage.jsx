import LegalLayout, { LegalSection, LegalFacts } from '../components/LegalLayout'
import { company, privacy } from '../data/legal'

export default function ImprintPage() {
  return (
    <LegalLayout
      seo={{
        title: 'Imprint / Impressum | MacQuery',
        description:
          'Provider identification for macquery.in — SIILARD LABS LLP, registered office, representatives and contact details, as required by §5 DDG.',
        keywords: 'MacQuery imprint, Impressum, Anbieterkennzeichnung, SIILARD LABS LLP',
        path: '/imprint',
      }}
      label="Legal"
      title={<>Imprint <span className="text-gradient">/ Impressum</span></>}
      intro="Provider identification under §5 DDG (Germany) and equivalent disclosure rules elsewhere in the EU."
    >
      <LegalSection title="Provider">
        <LegalFacts
          rows={[
            { label: 'Legal entity', value: company.legalName },
            { label: 'Trading as', value: company.brand },
            { label: 'Legal form', value: 'Limited Liability Partnership (India)' },
            { label: 'LLPIN', value: company.llpin },
            { label: 'Designated partners', value: company.designatedPartners },
            {
              label: 'Registered office',
              value: company.registeredOffice.lines.join(', '),
            },
            {
              label: company.secondOffice.label,
              value: company.secondOffice.lines.join(', '),
            },
          ]}
        />
      </LegalSection>

      <LegalSection title="Contact">
        <LegalFacts
          rows={[
            {
              label: 'Email',
              value: (
                <a className="text-purple-400 hover:text-purple-300" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              ),
            },
            { label: 'Phone', value: company.phone },
            {
              label: 'Website',
              value: (
                <a className="text-purple-400 hover:text-purple-300" href={company.site}>
                  {company.site}
                </a>
              ),
            },
          ]}
        />
      </LegalSection>

      <LegalSection title="Responsible for content">
        <p>
          {company.designatedPartners}, at the registered office given above.
        </p>
      </LegalSection>

      <LegalSection title="EU representative">
        <p>
          Representative in the European Union for data protection purposes (GDPR Art. 27):{' '}
          {privacy.artifact27Representative}
        </p>
      </LegalSection>

      <LegalSection title="Online dispute resolution">
        <p>
          The European Commission provides a platform for online dispute resolution at{' '}
          <a
            className="text-purple-400 hover:text-purple-300"
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ec.europa.eu/consumers/odr
          </a>
          . We are neither obliged nor willing to participate in dispute resolution proceedings
          before a consumer arbitration board.
        </p>
      </LegalSection>

      <LegalSection title="Liability for links">
        <p>
          Our site contains links to external websites over which we have no control. We accept
          no responsibility for their content. Responsibility rests with the respective provider
          or operator. Should we become aware of an infringement, we will remove the link
          promptly.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
