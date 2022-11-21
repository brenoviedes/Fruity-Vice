import ReactDOM from 'react-dom/client';
import App from './App';
import PaletteStyles from './assets/fonts/palette';
import FontStyles from './assets/fonts/fonts';
import { UserContextProvider } from './context/UserContext';
import Header from './components/Header';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <UserContextProvider>
    <PaletteStyles />
    <FontStyles />
    <Header></Header>
    <App />
    </UserContextProvider>
  </>
);