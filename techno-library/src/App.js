import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={Home} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
