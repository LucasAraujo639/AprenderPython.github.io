const Algebra = [
    {name: 'Parcial' , fecha: '10-junio', fechaReal:'2023-06-10'},
    {name: 'Parcial' , fecha: '5-julio', fechaReal:'2023-07-05'},
    {name: 'Final' , fecha: '5-julio', fechaReal:'2023-07-05'},
    {name: 'Final' , fecha: '12-julio', fechaReal:'2023-07-12'},
    {name: 'Final' , fecha: '2-agosto', fechaReal:'2023-08-02'},
    {name: 'Final' , fecha: '9-agosto', fechaReal:'2023-08-09'},
    {name: 'Final' , fecha: '16-agosto', fechaReal:'2023-08-16'},
  ];
  
  Algebra.sort(function(a, b) {
    return new Date(a.fechaReal) - new Date(b.fechaReal);
  });
  
  // Obtener la fecha actual
  const fechaActual = new Date();
  
  // Calcular los días restantes para cada fecha en el arreglo
  Algebra.forEach((materia) => {
    const fechaReal = new Date(materia.fechaReal);
    const diferencia = fechaReal - fechaActual;
    const diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  
    // Agregar la propiedad "diasRestantes" a cada objeto del arreglo
    materia.diasRestantes = diasRestantes;
  });
  

  
export default Algebra;