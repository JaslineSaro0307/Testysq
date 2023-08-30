import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Registration } from './components/registration/registration';
import { View } from './components/view/view';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={[<Registration/>]}/>
    <Route path='/view' element={[<View/>]}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
