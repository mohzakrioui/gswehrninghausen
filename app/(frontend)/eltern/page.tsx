import { Metadata } from 'next'
import PageHero from '../../../components/ui/PageHero'
import { Phone, ExternalLink, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Eltern',
  description: 'Informationen fuer Eltern der Grundschule Wehringhausen: Krankmeldung, Edupage, Kontakt und haeufige Fragen.',
}

const faqs = [
  {
    q: 'Wie melde ich mein Kind krank?',
    a: 'Bitte melden Sie Ihr Kind vor Unterrichtsbeginn krank. Sie koennen uns telefonisch unter 02331 / 348190 erreichen oder die Abwesenheit direkt ueber Edupage melden.',
  },
  {
    q: 'Wie erreiche ich die Klassenlehrerin?',
    a: 'Ueber Edupage koennen Sie direkt und sicher mit der Klassenlehrerin kommunizieren. Die E-Mail-Adressen aller Lehrerinnen finden Sie auch auf unserer Kontaktseite.',
  },
  {
    q: 'Wo finde ich aktuelle Informationen der Schule?',
    a: 'Aktuelle Mitteilungen und Informationen erhalten Sie ueber Edupage. Bitte stellen Sie sicher, dass Sie dort registriert sind und die App installiert haben.',
  },
  {
    q: 'Wie funktioniert die Anmeldung fuer die OGS?',
    a: 'Fuer die Anmeldung zur Offenen Ganztagsschule wenden Sie sich bitte ans Schulsekretariat: Mo - Fr, 7:30 - 13:00 Uhr, Tel. 02331 / 348190.',
  },
  {
    q: 'Was passiert bei vorzeitiger Abholung aus der OGS?',
    a: 'Bitte melden Sie eine vorzeitige Abholung ueber Edupage oder telefonisch im Sekretariat an, damit wir Ihr Kind rechtzeitig vorbereiten koennen.',
  },
  {
    q: 'An wen wende ich mich bei Problemen oder Sorgen?',
    a: 'Sprechen Sie zuerst die Klassenlehrerin an. Bei weitergehendem Bedarf steht Ihnen auch unser Schulsozialarbeiter Simon Rybarczyk zur Verfuegung.',
  },
]

export default function ElternPage() {
  return (
    <>
      <PageHero title="Eltern" subtitle="Alles Wichtige fuer Eltern der GS Wehringhausen" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {/* Edupage CTA */}
        <section className="rounded-2xl border-2 p-8" style={{ borderColor: 'var(--color-primary)', background: 'var(--color-primary-light, #f0fdf4)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
            Elternportal Edupage
          </h2>
          <p className="text-gray-700 mb-5">
            Ueber <strong>Edupage</strong> erhalten Sie alle aktuellen Informationen der Schule,
            koennen Nachrichten an Lehrerinnen senden und Abwesenheiten melden. Bitte registrieren
            Sie sich, falls noch nicht geschehen.
          </p>
          <a
            href="https://gswehringhausen.edupage.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--color-primary)' }}
          >
            <ExternalLink className="h-4 w-4" />
            Zu Edupage
          </a>
        </section>

        {/* Krankmeldung */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Krankmeldung
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
            <p className="text-gray-700">
              Bitte melden Sie Ihr Kind <strong>vor Unterrichtsbeginn</strong> ab. Es gibt zwei
              Moeglichkeiten:
            </p>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
              <div>
                <p className="font-medium text-gray-800">Telefonisch</p>
                <a href="tel:+4923313481900" className="text-gray-600 hover:underline">
                  02331 / 348190
                </a>
                <p className="text-sm text-gray-500">Mo - Fr, 7:30 - 13:00 Uhr</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="h-5 w-5 shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
              <div>
                <p className="font-medium text-gray-800">Ueber Edupage</p>
                <p className="text-sm text-gray-600">
                  Abwesenheit direkt im Elternportal eintragen - rund um die Uhr moeglich.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
            Haeufige Fragen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 group">
                <summary className="flex items-center justify-between cursor-pointer font-medium text-gray-800 list-none">
                  {faq.q}
                  <ChevronDown className="h-4 w-4 shrink-0 ml-2 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  )
              }
