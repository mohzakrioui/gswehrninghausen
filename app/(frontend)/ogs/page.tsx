import { Metadata } from 'next'
import PageHero from '../../../components/ui/PageHero'
import { Clock, Users, UtensilsCrossed, Calendar, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'OGS - Offene Ganztagsschule',
  description: 'Informationen zur Offenen Ganztagsschule (OGS) der Grundschule Wehringhausen.',
}

const features = [
  {
    icon: 'clock',
    title: 'Betreuungszeiten',
    text: 'Mo - Fr von Unterrichtsende bis 15:00 Uhr oder 16:00 Uhr. Ferienbetreuung ist ebenfalls moeglich.',
  },
  {
    icon: 'users',
    title: 'Platzangebot',
    text: 'Ab August 2025 bieten wir Platz fuer 100 Kinder in 6 thematisch gestalteten Raeumen.',
  },
  {
    icon: 'food',
    title: 'Warmes Mittagessen',
    text: 'Taeglich gibt es ein frisch zubereitetes warmes Mittagessen - selbstverstaendlich auch Halal.',
  },
  {
    icon: 'heart',
    title: 'Bezugserziehersystem',
    text: 'Jedes Kind hat eine feste Bezugserzieherin, die es kennt, begleitet und bei Beduerfnissen anspricht.',
  },
]

export default function OgsPage() {
  return (
    <>
      <PageHero title="OGS" subtitle="Offene Ganztagsschule an der GS Wehringhausen" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Was ist die OGS?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Offene Ganztagsschule (OGS) bietet Ihrem Kind eine verlassliche Betreuung nach dem
            Unterricht in einem foerdernden und sicheren Umfeld. Traeger unserer OGS ist die
            <strong> Stadt Hagen</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unser offenes Konzept verbindet freies Spielen, gemeinsames Essen, Hausaufgabenbetreuung
            und vielfaeltige Angebote - individuell abgestimmt auf die Beduerfnisse der Kinder.
          </p>
        </section>

        {/* Feature grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
            Unser Angebot
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <Clock className="h-7 w-7 mb-3" style={{ color: 'var(--color-primary)' }} />
              <h3 className="font-bold text-gray-800 mb-2">Betreuungszeiten</h3>
              <p className="text-gray-600 text-sm">
                Mo - Fr von Unterrichtsende bis 15:00 oder 16:00 Uhr.
                Ferienbetreuung auf Anfrage ebenfalls moeglich.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <Users className="h-7 w-7 mb-3" style={{ color: 'var(--color-primary)' }} />
              <h3 className="font-bold text-gray-800 mb-2">Platzangebot</h3>
              <p className="text-gray-600 text-sm">
                Ab August 2025 bieten wir Platz fuer 100 Kinder in 6 thematisch gestalteten Raeumen.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <UtensilsCrossed className="h-7 w-7 mb-3" style={{ color: 'var(--color-primary)' }} />
              <h3 className="font-bold text-gray-800 mb-2">Warmes Mittagessen</h3>
              <p className="text-gray-600 text-sm">
                Taeglich frisch zubereitet - selbstverstaendlich auch Halal. Kosten werden separat
                abgerechnet.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <Heart className="h-7 w-7 mb-3" style={{ color: 'var(--color-primary)' }} />
              <h3 className="font-bold text-gray-800 mb-2">Bezugserziehersystem</h3>
              <p className="text-gray-600 text-sm">
                Jedes Kind hat eine feste Bezugserzieherin, die es kennt, begleitet und bei
                Beduerfnissen gezielt anspricht.
              </p>
            </div>
          </div>
        </section>

        {/* Abholzeiten */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Abholzeiten & Abmeldung
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 shrink-0" style={{ color: 'var(--color-primary)' }} />
              <span className="text-gray-700"><strong>15:00 Uhr</strong> - regulaere Abholzeit</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 shrink-0" style={{ color: 'var(--color-primary)' }} />
              <span className="text-gray-700"><strong>16:00 Uhr</strong> - verlaengerte Betreuung</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Bei vorzeitiger Abholung oder Abwesenheit melden Sie Ihr Kind bitte ueber
              <strong> Edupage</strong> ab.
            </p>
          </div>
        </section>

        {/* Anmeldung */}
        <section className="rounded-2xl border-2 p-8" style={{ borderColor: 'var(--color-primary)', background: 'var(--color-primary-light, #f0fdf4)' }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
            Anmeldung & Kontakt
          </h2>
          <p className="text-gray-700 mb-2">
            Fuer Anmeldungen und Fragen zur OGS wenden Sie sich bitte an das Schulsekretariat:
          </p>
          <p className="text-gray-700">
            <strong>Telefon:</strong> 02331 / 348190<br />
            <strong>Sekretariat:</strong> Mo - Fr, 7:30 - 13:00 Uhr<br />
            <strong>E-Mail:</strong> 100189@schule.nrw.de
          </p>
        </section>

      </div>
    </>
  )
        }
