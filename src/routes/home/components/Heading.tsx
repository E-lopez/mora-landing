import Brand from "@/components/brand/brand";
import { useEffect, useState } from "react";

const labels = [
  {label: 'más fácil', color: 'white', bg: '#6d98cc'},
  {label: 'más rápido', color: 'gray', bg: '#6dbcccff'},
  {label: 'más simple', color: 'white', bg: '#cc6d6dff'},
  {label: 'legal y eficiente', color: 'gray', bg: '#ffb347'},
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
          <h2 className="heading-primary heading-primary--caption u-center-text blue u-mb-10">
            Recupera cartera <br/><span className="orange">sin demandas ni procesos.</span> 
          </h2>

          <div className="heading-box__sub" style={{backgroundColor: header.bg}}>
            <h2 className={`paragraph paragraph--lg u-center-text ${header.color}`}>{header.label}</h2>
          </div>

          <Brand animated={true} />
          <h2 className="paragraph paragraph--md u-center-text u-mb-20 gray">
            Cobranza pre-jurídica express
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Heading;
