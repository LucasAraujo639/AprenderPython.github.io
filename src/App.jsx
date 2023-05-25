import { BodyCard } from './components/bodyCard/BodyCard';
import { Card } from './components/card/Card';
import Footer from './components/footer/Footer'
import AM2 from './components/service/AM2.js';
//import Fechas from './components/service/FechasMaterias.js'
import 'bootstrap/dist/css/bootstrap.css';
import style from './App.module.css'
import FisicaI from './components/service/FisicaI';
import Algebra from './components/service/Algebra';

function App() {
  

  return (
    
    <div className={`ml-0 mr-0 ${style.container}`}>
      <h3 className='fw-bold text-decoration-underline text-center text-primary'>Fechas de parciales y finales de la FIUBA</h3>
      <Card title="AM2" 
      body={<BodyCard data={AM2}/>}
      /> 

      <Card title="Fisica I" 
      body={<BodyCard data={FisicaI}/>}
      /> 

      <Card title="Algebra II" 
      body={<BodyCard data={Algebra}/>}
      /> 
      <Footer />
    </div>
    

  )
}

export default App;
