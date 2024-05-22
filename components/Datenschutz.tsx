import {ArrowIcon} from '@/icons/ArrowIcon';
import Link from 'next/link';
import React from 'react';

const Datenschutz = () => {
  return (
    <div className='text-18 flex flex-col gap-y-3'>
      <Link href={'/'} className='flex absolute top-12 border rounded-full p-3'>
        <ArrowIcon className='h-5 w-5 mr-2 my-auto' /> Zurück zur Startseite
      </Link>
      <div className='mx-auto'>
        <div className='text-center text-22 mb-5 max-w-[700px]'>
          Wir freuen uns über Ihr Interesse an unserer Verleihplattform. Der Schutz Ihrer personenbezogenen Daten ist
          uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer
          Daten im Rahmen der Nutzung unserer Plattform.
        </div>
      </div>

      <div>1. Verantwortliche Stelle</div>
      <div>Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:</div>
      <div>
        Verleihplattform GmbH
        <br />
        Musterstraße 1<br />
        12345 Musterstadt
        <br />
        E-Mail: info@verleihplattform.de
      </div>

      <div>2. Erhebung und Speicherung personenbezogener Daten</div>
      <div>
        2.1 Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen
        (Server-Logfiles) beinhalten z.B. die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres
        Internet Service Providers und Ähnliches. Diese Daten lassen keine Rückschlüsse auf Ihre Person zu.
      </div>
      <div>
        2.2 Personenbezogene Daten wie Name, Adresse, E-Mail-Adresse und Telefonnummer werden nur erhoben, wenn Sie
        diese freiwillig im Rahmen der Registrierung oder bei einer Anfrage angeben.
      </div>

      <div>3. Nutzung und Weitergabe personenbezogener Daten</div>
      <div>
        3.1 Wir verwenden die von Ihnen mitgeteilten Daten zur Erfüllung und Abwicklung Ihrer Anfragen und Aufträge.
      </div>
      <div>
        3.2 Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt ausschließlich, wenn dies zur
        Vertragsabwicklung notwendig ist oder Sie zuvor eingewilligt haben.
      </div>

      <div>4. Datensicherheit</div>
      <div>
        Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre durch uns verwalteten Daten gegen
        zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen
        zu schützen.
      </div>

      <div>5. Ihre Rechte</div>
      <div>
        Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten.
        Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder Löschung Ihrer personenbezogenen Daten, soweit dem
        keine gesetzliche Aufbewahrungspflicht entgegensteht.
      </div>
      <div>Bitte wenden Sie sich mit Ihrem Anliegen an: info@verleihplattform.de</div>

      <div>6. Änderungen dieser Datenschutzerklärung</div>
      <div>
        Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen
        rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung
        umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
      </div>

      <div>Stand: Mai 2024</div>
    </div>
  );
};

export default Datenschutz;
