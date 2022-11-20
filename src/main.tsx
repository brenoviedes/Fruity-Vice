import ReactDOM from 'react-dom/client';
import App from './App';
import PaletteStyles from './assets/fonts/palette';
import FontStyles from './assets/fonts/fonts';
import { UserContextProvider } from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <UserContextProvider>
    <PaletteStyles />
    <FontStyles />
    <App />
    </UserContextProvider>
  </>
);