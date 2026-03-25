import { Metadata } from 'next'
import PageHero from '../../../components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Schulleben',
  description: 'Einblicke in das Schulleben der Grundschule Wehringhausen: JueL, Lernzeiten, AGs und mehr.',
}

const highlights = [
  {
    title: 'Jahrgangsuebergreifendes Lernen (JueL)',
    text: 'Kinder der Klassen 1/2 und 3/4 lernen gemeinsam in altersgemischten Gruppen. Sie helfen sich gegenseitig, lernen voneinander und entwickeln soziale Kompetenz im Alltag.',
    emoji: '🌱',
  },
  {
    title: 'Lernzeiten',
    text: 'Feste Lernzeiten im Schulalltag geben Kindern Raum fuer selbststaendiges Arbeiten und individuelles Ueben - begleitet von unseren Lehrerinnen.',
    emoji: '📚',
  },
  {
    title: 'Schulsozialarbeit',
    text: 'Unser Schulsozialarbeiter Simon Rybarczyk ist Ansprechpartner fuer Kinder, Eltern und Lehrerinnen bei Fragen rund um Schule, Familie und soziales Miteinander.',
    emoji: '🤝',
  },
  {
    title: 'Elterncafe',
    text: 'Regelmaessig laden wir Eltern zum Elterncafe ein. Ein lockeres Treffen zum Austausch, Kennenlernen und gemeinsamen Gespraech.',
    emoji: '☕',
  },
  {
    title: 'Projekttage & Feste',
    text: 'Ob Sommerfest, Laternenzug oder Schulprojekttage - bei uns ist immer etwas los. Gemeinsame Erlebnisse staerken das Wir-Gefuehl in unserer Schulgemeinschaft.',
    emoji: '🎉',
  },
  {
    title: 'Arbeitsgemeinschaften (AGs)',
    text: 'In verschiedenen AGs koennen Kinder ihre Interessen und Talente entfalten - ob Sport, Kreativitaet oder andere Bereiche. Das Angebot wechselt je nach Schuljahr.',
    emoji: '🎨',
  },
]

export default function SchullebenPage() {
  return (
    <>
      <PageHero title="Schulleben" subtitle="Gemeinsam lernen, spielen und wachsen" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        <section>
          <p className="text-gray-700 leading-relaxed text-lg">
            An der Grundschule Wehringhausen ist Schule mehr als Unterricht. Wir gestalten einen
            Schulalltag, der Kinder ganzheitlich foerdert, staerkt und begeistert. Hier sind einige
            Einblicke in unser vielfaeltiges Schulleben.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border-2 p-8 text-center" style={{ borderColor: 'var(--color-primary)', background: 'var(--color-primary-light, #f0fdf4)' }}>
          <p className="text-gray-700 text-lg mb-2">
            Aktuelle Termine und Ankuendigungen finden Sie immer aktuell auf
          </p>
          <a
            href="https://gswehringhausen.edupage.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg hover:underline"
            style={{ color: 'var(--color-primary)' }}
          >
            Edupage - unserem Schulportal
          </a>
        </section>

      </div>
    </>
  )
}
