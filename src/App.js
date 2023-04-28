import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español'},
  de: { nativeName: 'Deutsche'}
};

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button type="submit" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
          ))}
        </div>
        <p>
          <Trans i18nKey="description">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          {t('key2')}
        </a>
{/* Concatenating externalized strings 
\Three common errors:
\incorrect word order, hard-coded punctuation marks, and improper word choice.
*/}
        <p>
          {t('reset-your-password')}
        </p>
        <p>
          {t('mindfully-reset-your-password')}
        </p>
        <p>
          {t('hey-jake-hello-there')}
        </p>

      </header>
    </div>
  );
}

export default App;
