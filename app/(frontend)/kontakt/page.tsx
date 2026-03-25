import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import PageHero from '../../../components/ui/PageHero'
import MapClientWrapper from '../../../components/sections/MapClientWrapper'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktinformationen der Grundschule Wehringhausen.',
}

const teacherGroups = [
  {
    group: 'Schulleitung',
    members: [
      { name: 'Frau Rohn (Schulleiterin)', email: '100189@nrw.schule.de' },
      { name: 'Frau Al-Madani (Konrektorin)', email: 'britta.al-madani@100189.nrw.schule.de' },
    ],
  },
  {
    group: 'E-Klassen (Jahrgang 1/2)',
    members: [
      { name: 'E1 Hasen: Frau Konetzka', email: 'sabine.konetzka@100189.nrw.schule.de' },
      { name: 'E2 Waschen: Frau Oelschlegel', email: 'melanie.oelschlegel@100189.nrw.schule.de' },
      { name: 'E3 Eulen: Frau Koschinsky', email: 'olivia.koschinsky@100189.nrw.schule.de' },
      { name: 'E4 Igel: Frau Stuerzekarn', email: 'anna.stuerzekarn@100189.nrw.schule.de' },
      { name: 'E5 Ameisen: Frau Al-Madani', email: 'britta.al-madani@100189.nrw.schule.de' },
    ],
  },
  {
    group: 'F-Klassen (Jahrgang 3/4)',
    members: [
      { name: 'F1 Fuechse: Frau Brand', email: 'carina.brand@100189.nrw.schule.de' },
      { name: 'F3 Eichhoernchen: Frau Schulte', email: 'maria.schulte@100189.nrw.schule.de' },
      { name: 'F5 Fledermaeuse: Frau Drabek', email: 'sarah.drabek@100189.nrw.schule.de' },
    ],
  },
]

export default function KontaktPage() {
  return (
    <>
      <PageHero title="Kontakt" subtitle="Wir freuen uns ueber Ihre Nachricht" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left column: contact info + Edupage + map */}
          <div className="space-y-8">

            {/* Contact card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5">
              <h2 className="text-2xl font-bold text-gray-800">Grundschule Wehringhausen</h2>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <p className="font-medium text-gray-800">Mineralstrasse 37</p>
                  <p className="text-gray-600">58089 Hagen</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <a href="tel:+4923313481900" className="text-gray-700 hover:underline">
                  02331 / 348190
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <a href="mailto:100189@schule.nrw.de" className="text-gray-700 hover:underline">
                  100189@schule.nrw.de
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <p className="font-medium text-gray-800">Sekretariat</p>
                  <p className="text-gray-600">Mo - Fr: 7:30 - 13:00 Uhr</p>
                </div>
              </div>
            </div>

            {/* Edupage box */}
            <div className="rounded-2xl border-2 p-8" style={{ borderColor: 'var(--color-primary)', background: 'var(--color-primary-light, #f0fdf4)' }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                Elternkommunikation ueber Edupage
              </h2>
              <p className="text-gray-700 mb-5">
                Fuer Nachrichten an die Schule oder Ihre Klassenlehrerin nutzen Sie bitte unser
                Elternportal <strong>Edupage</strong>. Dort koennen Sie sicher und direkt mit uns kommunizieren.
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
            </div>

            {/* Krankmeldung notice */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-bold text-amber-800 mb-2">Krankmeldung</h3>
              <p className="text-amber-700 text-sm">
                Bitte melden Sie Ihr Kind <strong>vor Unterrichtsbeginn</strong> krank &ndash; entweder
                telefonisch unter <strong>02331 / 348190</strong> oder ueber <strong>Edupage</strong>.
              </p>
            </div>

            {/* Map */}
            <MapClientWrapper />
          </div>

          {/* Right column: teacher emails */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">E-Mail-Adressen der Lehrerinnen</h2>
            {teacherGroups.map((group) => (
              <div key={group.group} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-700 mb-4" style={{ color: 'var(--color-primary)' }}>
                  {group.group}
                </h3>
                <ul className="space-y-3">
                  {group.members.map((m) => (
                    <li key={m.email} className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-700">{m.name}</span>
                      <a
                        href={`mailto:${m.email}`}
                        className="text-sm font-mono hover:underline"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {m.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
            }
