import {ArrowIcon} from '@/icons/ArrowIcon';
import Link from 'next/link';
import React from 'react';

const Impressum = () => {
  return (
    <div>
      <Link href={'/'} className='flex absolute top-12 border rounded-full p-3'>
        <ArrowIcon className='h-5 w-5 mr-2 my-auto' /> Zurück zur Startseite
      </Link>
      <p>Angaben gemäß § 5 TMG:</p>

      <p>
        Verleihplattform GmbH
        <br />
        Musterstraße 1<br />
        12345 Musterstadt
      </p>

      <h2>Vertreten durch:</h2>
      <p>Geschäftsführer: Max Mustermann</p>

      <h2>Kontakt:</h2>
      <p>
        Telefon: +49 (0) 123 456 789
        <br />
        E-Mail: info@verleihplattform.de
      </p>

      <h2>Registereintrag:</h2>
      <p>
        Eintragung im Handelsregister.
        <br />
        Registergericht: Musterstadt
        <br />
        Registernummer: HRB 123456
      </p>

      <h2>Umsatzsteuer-ID:</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
        <br />
        DE 123456789
      </p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
      <p>
        Max Mustermann
        <br />
        Verleihplattform GmbH
        <br />
        Musterstraße 1<br />
        12345 Musterstadt
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
        <a href='https://ec.europa.eu/consumers/odr' target='_blank' rel='noopener noreferrer'>
          https://ec.europa.eu/consumers/odr
        </a>
      </p>
      <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
        rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
        hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
        Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
        umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
        können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
        entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
        des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
        Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
        beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>

      <p>Stand: Mai 2024</p>
    </div>
  );
};

export default Impressum;
