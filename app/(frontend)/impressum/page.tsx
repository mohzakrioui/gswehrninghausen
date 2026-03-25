import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Grundschule Wehringhausen, Hagen.',
}

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Impressum</h1>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">Angaben gemaess § 5 TMG</h2>
        <p className="text-gray-600">
          Grundschule Wehringhausen<br />
          Mineralstrasse 37<br />
          58089 Hagen
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">Vertretungsberechtigte Person</h2>
        <p className="text-gray-600">
          Jennifer Rohn (Schulleiterin)
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">Kontakt</h2>
        <p className="text-gray-600">
          Telefon: 02331 / 348190<br />
          E-Mail: <a href="mailto:100189@schule.nrw.de" className="underline">100189@schule.nrw.de</a>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">Aufsichtsbehoerde</h2>
        <p className="text-gray-600">
          Bezirksregierung Arnsberg<br />
          Seibertzstrasse 1<br />
          59821 Arnsberg
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">Haftungsausschluss</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Die Inhalte unserer Seiten wurden mit groesster Sorgfalt erstellt. Fuer die Richtigkeit,
          Vollstaendigkeit und Aktualitaet der Inhalte koennen wir jedoch keine Gewaehr uebernehmen.
          Als Diensteanbieter sind wir gemaess § 7 Abs. 1 TMG fuer eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">Urheberrecht</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
          deutschen Urheberrecht. Beitraege Dritter sind als solche gekennzeichnet. Die Vervielfaeltigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts
          beduerfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </div>
  )
}
