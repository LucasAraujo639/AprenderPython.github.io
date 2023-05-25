import { BodyCard } from './components/bodyCard/BodyCard';
import { Card } from './components/card/Card';
import Footer from './components/footer/Footer'
import AM2 from './components/service/AM2.js';
//import Fechas from './components/service/FechasMaterias.js'
import 'bootstrap/dist/css/bootstrap.css';
import style from './App.module.css'
import FisicaI from './components/service/FisicaI';

function App() {
  

  return (
    
    <div className={`ml-0 mr-0 ${style.container}`}>
      <h3 className='fw-bold text-decoration-underline text-center text-primary shadow-lg'>Fechas de parciales y finales de la FIUBA</h3>
      <Card title="AM2" 
      body={<BodyCard data={AM2}/>}
      /> 

      <Card title="Fisica I" 
      body={<BodyCard data={FisicaI}/>}
      /> 

      <Footer />
    </div>
    

  )
}

export default App;
