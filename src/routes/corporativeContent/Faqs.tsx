import { useState } from "react";
import faqs from "./models/faqs";
import WhatsAppTemplates from "@/constants/WhatsAppTemplates";

const Faqs = () => {  
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const number = WhatsAppTemplates.get('MAIN_NUMBER');
  const message = WhatsAppTemplates.get('MAIN_MESSAGE');

  return(
     <div className="corporate-content corporate-content--orange">
      <div className="corporate-content__info">
        <h1 className='u-center-text heading-primary'>Nuestros precios</h1>
        <h2 className="paragraph paragraph--sm u-center-text u-mt-10 u-mb-20 gray">
          Pagas una sola vez y dejamos todo listo para presionar legalmente al deudor. Todo con respaldo de abogados.
        </h2>
      </div>
        
      <div className="corporate-content__info">
        {faqs.map((item, index) => (
          <div className="corporate-content__faq" key={item.title+index}>
            <button 
              className="corporate-content__faq-title heading-secondary u-left-text blue"
              onClick={() => setActiveCard(activeCard === item.title+index ? '' : item.title+index)}
            >
              {item.title}
              <i className='bi-plus-circle-fill' style={{fontSize: '2rem'}}></i>
            </button>
            {item.title+index === activeCard && 
              <p className="paragraph corporate-content__faq-content">
                {item.content}
              </p>
            }
          </div>
        ))}
      </div>

      <div className="base-button-wrap">
        <a 
          className="base-button base-button__button base-button__button--green u-mt-30 u-mb-30" 
          href={`https://wa.me/${number}?text=${message}`}
        >
          <p className="label">¡Empieza aquí!</p>
        </a>
      </div>
    </div>
  )
}

export default Faqs;
