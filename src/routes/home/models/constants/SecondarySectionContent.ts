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
      caption: 'Robusto',
      legend: 'Abogados especializados en Derecho Civil y Tributario.',
      icon: screening,
      class:'card--mint',
    },
    {
      title: '',
      caption: 'Especializado',
      legend: 'Experiencia en contratos y recuperación.',
      icon: contract,
      class:'card--orange',
    },
    {
      title: '',
      caption: 'Experto',
      legend: 'Más de 10 años de experiencia en derecho civil.',
      icon: list,
      class:'card--pink',
    },
    {
      title: '',
      caption: 'Efectivo',
      legend: '90% de nuestros casos son exitosos.',
      icon: iteration,
      class:'card--mint',
    },
    {
      title: '',
      caption: 'Transparente',
      legend: 'Sin costos ocultos, pagas por lo que usas.',
      icon: investment,
      class:'card--green',
    },
  ]
}