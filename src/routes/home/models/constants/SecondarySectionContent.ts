import screening from '@assets/second-section/screening.png';
import iteration from '@assets/second-section/iteration.png';
import contract from '@assets/second-section/contract.png';
import investment from '@assets/second-section/investment.png';
import list from '@assets/second-section/list.png';

export const secondSectionContent = {
  title: '¿Cómo funciona?',
  description: 'El proceso tiene 3 pasos.',
  steps: [
    {
      title: '',
      caption: 'Análisis',
      legend: 'En pocos minutos te confirmamos si el caso es viable.',
      icon: screening,
      class:'card--mint',
    },
    {
      title: '',
      caption: 'Propuesta',
      legend: 'Te enviamos el contrato de servicio con condiciones claras y sin letra pequeña.',
      icon: contract,
      class:'card--orange',
    },
    {
      title: '',
      caption: 'Preparación',
      legend: 'Generamos los documentos y comunicaciones legales para el cobro.',
      icon: list,
      class:'card--pink',
    },
    {
      title: '',
      caption: 'Ejecución',
      legend: 'Ejecutamos la gestión extrajudicial y hacemos seguimiento.',
      icon: iteration,
      class:'card--mint',
    },
    {
      title: '',
      caption: 'Cierre',
      legend: 'Te informamos del resultado y los siguientes pasos, si aplica.',
      icon: investment,
      class:'card--green',
    },
  ]
}