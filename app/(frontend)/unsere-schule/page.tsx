import { Metadata } from 'next'
import PageHero from '../../../components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Unsere Schule',
  description: 'Lernen Sie die Grundschule Wehringhausen kennen.',
}

export default function UnsereSchulePage() {
  return (
    <>
      <PageHero title="Unsere Schule" subtitle="Gemeinsam wachsen - einzeln entfalten" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Unser Leitbild</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Gemeinsam wachsen - einzeln entfalten</strong> - dieser Leitsatz beschreibt unser
            Verstaendnis von Schule. Wir moechten, dass jedes Kind seinen eigenen Lernweg geht und dabei
            in einer starken Gemeinschaft gehalten wird.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unsere Schule ist ein Ort des Vertrauens, der Sicherheit und der Freude am Lernen. Wir
            begleiten jedes Kind individuell und foerdern Staerken, waehrend wir Schwaechen gemeinsam angehen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Unsere Schule</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Die Grundschule Wehringhausen liegt im Herzen des gleichnamigen Stadtteils in Hagen (NRW).
            Rund 200 Schuelerinnen und Schueler besuchen unsere Schule.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Adresse:</strong> Mineralstrasse 37, 58089 Hagen<br />
            <strong>Telefon:</strong> 02331 / 348190<br />
            <strong>E-Mail:</strong> 100189@schule.nrw.de
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Unser paedagogisches Konzept</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-2">JaeL - Jahrgangsuebergreifendes Lernen</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In unserem JueL-Konzept lernen Kinder der Klassen 1 und 2 sowie 3 und 4 gemeinsam in
                altersgemischten Gruppen. Das foerdert soziales Lernen und eigenverantwortliches Arbeiten.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-2">Individuelle Foerderung</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Jedes Kind wird dort abgeholt, wo es steht. Durch differenzierte Aufgaben und gezielte
                Foerderstunden unterstuetzen wir jeden Lernenden optimal.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-2">Lernzeiten</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strukturierte Lernzeiten geben den Kindern Zeit fuer selbststaendiges Arbeiten, Ueben
                und Vertiefen - begleitet von erfahrenen Lehrkraeften.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-2">Schulsozialarbeit</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unser Schulsozialarbeiter Simon Rybarczyk unterstuetzt Kinder und Familien und ist
                Ansprechpartner fuer alle Beteiligten.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Schulleitung</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ background: 'var(--color-primary)' }}>R</div>
              <div>
                <p className="font-semibold text-gray-800">Frau Rohn</p>
                <p className="text-sm text-gray-500">Schulleiterin</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ background: 'var(--color-primary)' }}>A</div>
              <div>
                <p className="font-semibold text-gray-800">Frau Al-Madani</p>
                <p className="text-sm text-gray-500">Konrektorin</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
      }
