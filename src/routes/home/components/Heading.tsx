import Brand from "@/components/brand/brand";
import { useEffect, useState } from "react";

const labels = [
  {label: 'Contratos incumplidos', color: 'white', bg: '#6d98cc'},
  {label: 'Deudas en mora', color: 'gray', bg: '#6dbcccff'},
  {label: 'Cuentas de cobro', color: 'white', bg: '#cc6d6dff'},
  {label: 'Facturas vencidas', color: 'gray', bg: '#ffb347'},
  {label: 'Y más...', color: 'gray', bg: '#6dbcccff'},
];

const Heading = () => {  
  const [header, setHeader] = useState(labels[0]);

  useEffect(() => {
    setTimeout(() => {
      const currentIndex = labels.indexOf(header);
      const nextIndex = (currentIndex + 1) % labels.length;
      setHeader(labels[nextIndex]);
    }, 2000);
  }, [header]);

  return(
    <div className="heading-container">
      <div className="heading-box">
        <div className="heading-box__child">
          <h2 className="heading-primary heading-primary--caption u-center-text blue">
            Convierte tu cartera vencida <span className="orange">en una gestión formal de cobro</span> 
          </h2>
          <h2 className="paragraph paragraph--lg u-center-text u-mt-10 gray">
            Con respaldo jurídico y presión estratégica documentada
          </h2>
          <div className="heading-box__sub u-mt-10" style={{backgroundColor: header.bg}}>
            <h2 className={`paragraph paragraph--lg u-center-text ${header.color}`}>{header.label}</h2>
          </div>
          <Brand animated={true} />
        </div>
      </div>
    </div>
  )
}

export default Heading;
