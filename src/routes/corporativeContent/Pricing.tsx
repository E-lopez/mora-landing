import WhatsAppTemplates from "@/constants/WhatsAppTemplates";

const Pricing = () => {  
  const number = WhatsAppTemplates.get('MAIN_NUMBER');
  const message = WhatsAppTemplates.get('MAIN_MESSAGE');

  return(
     <div className="corporate-content corporate-content--orange">
      <div className="corporate-content__info">
        <h2 className="paragraph paragraph--md u-center-text u-mt-10 u-mb-20 gray">
          Ejecutamos la gestión legal extrajudicial para presionar formalmente a tu deudor, rápido y con respaldo de abogados.
        </h2>
      </div>
        
      <div className="corporate-content__info">
        <div className="corporate-content__faq" >

            <p className="paragraph paragraph--lg blue bold u-mt-20">
              Cobranza Prejurídica
            </p>

          <p className="paragraph paragraph--md corporate-content__faq-content orange bold">
            Para cobros en Masa <a href="">¡Hablemos!</a>
          </p>
          <p className="paragraph corporate-content__faq-content">
            <span className="blue bold">Casos aislados </span><br/>Buscamos que nuestra tarifa no desaparezca tu margen. 
          </p>
          <p className="paragraph corporate-content__faq-content">
            <span className="blue bold">Casos masivos</span><br/>¿Tienes una cartera grande? Tarifa sobre el monto total, no para cada deuda.
          </p>
          <p className="paragraph corporate-content__faq-content">
            <span className="blue bold">Sin Montos mínimos </span><br/>Cada caso es revisado globalmente, el monto no es definitivo.
          </p>
          <p className="paragraph corporate-content__faq-content">
            <span className="orange bold">Incluye: <br/></span>Carta formal de requerimiento y seguimientos digitales.
          </p>
          <p className="paragraph corporate-content__faq-content">
            <span className="orange bold">Plazo de entrega<br/></span>30 días hábiles.
          </p>
          <p className="paragraph corporate-content__faq-content">
            Escalamiento a proceso judicial automático si no se recupera la deuda, <br/><strong>sin costo adicional</strong>
          </p>
        </div>
      </div>

      <div className="base-button-wrap">
        <a 
          className="base-button base-button__button base-button__button--green u-mt-30 u-mb-30" 
          href={`https://wa.me/${number}?text=${message}`}
        >
          <p className="label">¡Evaluar mi caso gratis!</p>
        </a>
      </div>
    </div>
  )
}

export default Pricing;
