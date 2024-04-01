import React from 'react'

const InformesInfAd = () => {
  const data = {
    labels: ["Luis","Samir","Pamela","Josi","Cuco", "Pacha"],
    datasets: [
      {
        label: 'Administradores',
        data: [5, 10, 15, 20, 25, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
        hoverBorderColor: 'black',
      },
    ],
  };
  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className='informe' style={{ width: '100%', height: '500px' }} >
      <h1>pantalla de informes de informe de administradores</h1>
      <Bar
        data={data}
        options={opciones}/>
    </div>
  )
}
export default InformesInfAd
