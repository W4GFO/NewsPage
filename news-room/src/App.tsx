import {HomePage} from './Components/Pages/HomePage'
import {AboutPage} from './Components/Pages/AboutPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ParentPage} from './Components/Primary/ParentPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ParentPage />}>
          <Route path='' element={<HomePage />}/>
          <Route path='about-page' element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
