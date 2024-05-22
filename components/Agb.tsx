import {ArrowIcon} from '@/icons/ArrowIcon';
import Link from 'next/link';
import React from 'react';

const Agb = () => {
  return (
    <div className='text-18 flex flex-col gap-y-3'>
      <Link href={'/'} className='flex absolute top-12 border rounded-full p-3'>
        <ArrowIcon className='h-5 w-5 mr-2 my-auto' /> Zurück zur Startseite
      </Link>
      <div className='mx-auto'>
        <div className='text-center text-22 mb-5 max-w-[700px]'>
          Willkommen auf unserer Verleihplattform. Die Nutzung unserer Dienste unterliegt den folgenden Allgemeinen
          Geschäftsbedingungen (AGB). Bitte lesen Sie diese sorgfältig durch, bevor Sie unsere Plattform nutzen.
        </div>
      </div>

      <div>1. Allgemeine Bestimmungen</div>
      <div>
        1.1 Diese AGB gelten für alle Nutzer, die die Plattform zum Verleihen oder Ausleihen von Gegenständen nutzen.
      </div>
      <div>1.2 Mit der Registrierung auf unserer Plattform akzeptieren Sie diese AGB.</div>

      <div>2. Registrierung und Benutzerkonto</div>
      <div>2.1 Um unsere Plattform nutzen zu können, müssen Sie sich registrieren und ein Benutzerkonto erstellen.</div>
      <div>2.2 Sie sind verpflichtet, wahrheitsgemäße Angaben zu machen und Ihre Daten aktuell zu halten.</div>
      <div>2.3 Ihr Benutzerkonto ist persönlich und darf nicht an Dritte übertragen werden.</div>

      <div>3. Verleihen von Gegenständen</div>
      <div>3.1 Als Verleiher können Sie Gegenstände auf der Plattform anbieten.</div>
      <div>
        3.2 Sie sind dafür verantwortlich, dass die angebotenen Gegenstände in einem funktionsfähigen und sicheren
        Zustand sind.
      </div>
      <div>3.3 Sie legen die Bedingungen für die Ausleihe, wie Mietdauer und Preis, fest.</div>

      <div>4. Ausleihen von Gegenständen</div>
      <div>4.1 Als Ausleiher können Sie angebotene Gegenstände von anderen Nutzern ausleihen.</div>
      <div>4.2 Sie sind verpflichtet, die Gegenstände sorgsam zu behandeln und rechtzeitig zurückzugeben.</div>
      <div>
        4.3 Bei Verlust oder Beschädigung des ausgeliehenen Gegenstandes haften Sie für den entstandenen Schaden.
      </div>

      <div>5. Zahlungsbedingungen</div>
      <div>5.1 Die Zahlungsabwicklung erfolgt über die auf der Plattform angebotenen Zahlungsmethoden.</div>
      <div>
        5.2 Gebühren und Provisionen für die Nutzung der Plattform werden gemäß den aktuellen Preislisten erhoben.
      </div>

      <div>6. Haftung</div>
      <div>
        6.1 Die Plattform haftet nicht für Schäden, die durch die Nutzung der vermittelten Gegenstände entstehen.
      </div>
      <div>
        6.2 Nutzer sind selbst verantwortlich für die Einhaltung der gesetzlichen Vorschriften bei der Verleih- und
        Ausleihtätigkeit.
      </div>

      <div>7. Kündigung und Sperrung</div>
      <div>
        7.1 Die Plattform behält sich das Recht vor, Benutzerkonten bei Verstößen gegen die AGB zu sperren oder zu
        löschen.
      </div>
      <div>7.2 Nutzer können ihr Benutzerkonto jederzeit ohne Angabe von Gründen kündigen.</div>

      <div>8. Datenschutz</div>
      <p>
        8.1 Die Plattform erhebt und verarbeitet personenbezogene Daten gemäß den geltenden Datenschutzbestimmungen.
      </p>
      <p>8.2 Weitere Informationen finden Sie in unserer Datenschutzerklärung.</p>

      <div>9. Schlussbestimmungen</div>
      <div>9.1 Änderungen dieser AGB werden den Nutzern rechtzeitig mitgeteilt.</div>
      <div>
        9.2 Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
        unberührt.
      </div>

      <span className=''>Stand: Mai 2024</span>
    </div>
  );
};

export default Agb;
