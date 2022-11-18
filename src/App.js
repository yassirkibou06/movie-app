import './App.scss';
import { Route, HashRouter } from 'react-router-dom'
import Header from './components/header/Header';
import Routes from './Config/Routes';
import Footer from './components/footer/Footer';


function App() {
  return (
    <HashRouter>
    <Route render={props => (
      <>
      <Header  {...props}/>
      <Routes  />
      <Footer  />
      </>
    )} />
    </HashRouter>
  );
}

export default App;
