import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklaerung der Grundschule Wehringhausen, Hagen.',
}

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Datenschutzerklaerung</h1>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-700">1. Verantwortliche Stelle</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Verantwortlich fuer die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten
          im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br /><br />
          Grundschule Wehringhausen<br />
          Mineralstrasse 37, 58089 Hagen<br />
          Telefon: 02331 / 348190<br />
          E-Mail: 100189@schule.nrw.de<br />
          Schulleiterin: Jennifer Rohn
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-700">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Diese Website erhebt und speichert automatisch Informationen in Server-Logfiles, die Ihr
          Browser automatisch uebermittelt. Dies sind u. a. Browsertyp und Browserversion,
          verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners sowie
          Uhrzeit der Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar und
          werden nicht mit anderen Datenquellen zusammengefuehrt.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-700">3. Cookies</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Diese Website verwendet keine Cookies zu Tracking- oder Werbezwecken. Technisch notwendige
          Cookies koennen fuer den ordnungsgemaessen Betrieb der Seite eingesetzt werden.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-700">4. Edupage</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Fuer die Elternkommunikation nutzen wir das Portal <strong>Edupage</strong>
          (gswehringhausen.edupage.org). Bitte beachten Sie dort die gesonderten
          Datenschutzbestimmungen von Edupage. Fuer die Verarbeitung von Daten auf
          Edupage ist der jeweilige Anbieter verantwortlich.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-700">5. Ihre Rechte</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Sie haben das Recht auf Auskunft ueber Ihre bei uns gespeicherten personenbezogenen
          Daten, deren Berichtigung, Loeschung oder Einschraenkung der Verarbeitung sowie ein
          Widerspruchsrecht gegen die Verarbeitung und ein Recht auf Datenuebertragbarkeit.
          Zur Ausuebung Ihrer Rechte wenden Sie sich bitte an: 100189@schule.nrw.de
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-700">6. Datenschutzbeauftragter</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Den Datenschutzbeauftragten der Stadt Hagen erreichen Sie unter:<br />
          Stadt Hagen, Datenschutzbeauftragter<br />
          Rathausstrasse 11, 58095 Hagen<br />
          E-Mail: datenschutz@stadt-hagen.de
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-700">7. Beschwerderecht</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Sie haben das Recht, sich bei der zustaendigen Aufsichtsbehoerde zu beschweren.
          Zustaendig ist die Landesbeauftragte fuer Datenschutz und Informationsfreiheit
          Nordrhein-Westfalen (LDI NRW), Kavalleriestrasse 2-4, 40213 Duesseldorf.
        </p>
      </section>
    </div>
  )
}
