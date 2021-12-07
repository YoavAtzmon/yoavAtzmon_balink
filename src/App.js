import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import {  useState } from 'react';
import { DarkContext } from './context/DarkContext';


function App() {

  const lang = useSelector((state) => state.language.value)

  const [dark,setDark] = useState('')
    
  const darkTheme = {
    backgroundColor: dark ? '#000000bf' : '',
    color: dark ? 'white' : ''
}
  
  return (
    <div dir={lang.lang === 'hebrew' ? "rtl" : null}>
       <DarkContext.Provider value={{dark,setDark,darkTheme}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </DarkContext.Provider>
    </div>
  );
}

export default App;
