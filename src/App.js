import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './components/routes/Router';
import { GlobalStyles } from './components/styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
