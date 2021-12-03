import { Routes ,Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function App() {
  const lang = useSelector((state)=>state.language.value)
  return (
      <div style={{marginBottom:'4rem'}} dir={lang.lang === 'hebrew' ? "rtl" : null}>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/details' element={<Details/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </div>
  );
}

export default App;
