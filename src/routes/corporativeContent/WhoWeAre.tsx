import WhatsAppTemplates from "@/constants/WhatsAppTemplates";

const WhoWeAre = () => {  
  const number = WhatsAppTemplates.get('MAIN_NUMBER');
  const message = WhatsAppTemplates.get('MAIN_MESSAGE');
   
  return(
    <div className="corporate-content corporate-content--gray">
      <div className="corporate-content__info">
        <h1 className='u-center-text heading-primary'>¿Quiénes somos?</h1>
        <h2 className="paragraph paragraph--sm u-justify-text u-mt-10 u-mb-20">
          Somos una combinación de derecho y tecnología que busca simplificar el proceso de recuperación de cartera.
        </h2>
      </div>
        
      <div className="card-default card-default--corporate card--mint u-center-h u-p-10">
        <p className="paragraph">Sabemos por experiencia que ante un pago incumplido lo primordial es <strong>que no pase el tiempo.</strong></p>
      </div>

      <div className="corporate-content__info">
        <p className="paragraph paragraph--sm u-justify-text u-mt-30 u-mb-30">Y la expectativa de una demanda o un proceso judicial puede ser desalentadora y paralizante.</p>
        
        <p className="paragraph paragraph--sm u-justify-text u-mt-30 u-mb-30">¿Por dónde comenzar? ¿Contratar abogados? ¿Cuánto me va a costar? ¿Cuánto podrá tardar? Y luego los trámites, papeles etc...</p>

        <div className="card-default card--mint u-mt-30">
          <p className="paragraph paragraph--sm u-center-text u-pr-20 u-pl-20">Parece más costoso iniciar un proceso de cobranza que recuperar la deuda.</p>
        </div>
        
        <p className="paragraph paragraph--sm u-center-text u-mt-20">De ahí nació <span>m<span className="blue"><i className='bi bi-virus2'></i></span>ra</span>, <strong>3 años evitando procesos judiciales.</strong></p>
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

export default WhoWeAre;
