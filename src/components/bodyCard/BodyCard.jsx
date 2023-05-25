import estilos from './BodyCard.module.css'
export const BodyCard = ({data}) => {
  return (
    <div className="container text-center ">
    <div className ='row m-0 '>
        <div className='col border-top border-bottom border-start border-primary border-2 rounded-1'>Categoría</div>
        <div className='col border-top border-bottom border-start border-primary border-2 rounded-1'>Fecha</div>
        <div className='col border border-primary border-2 rounded-1'>Dias Restantes</div>
    </div>
  <div className='row m-0 '>
  {data && data.map((item,i) => (
            <div key={i} className='row m-0 p-0 align-items-center' >
                <div className='col '>{item.name}</div>
                <div className='col '>{item.fecha}</div>
                <div className='col '>{item.diasRestantes}</div>

            </div>
            ))}
  </div>
  
</div>



            
  )
}

export default BodyCard;
