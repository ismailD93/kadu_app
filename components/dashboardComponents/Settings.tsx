import {FC} from 'react';

interface SettingsProps {}
const Settings: FC<SettingsProps> = ({}) => {
  return (
    <div>
      <div>Profilbild ändern</div>
      <div>Passwort ändern</div>
    </div>
  );
};

export default Settings;
