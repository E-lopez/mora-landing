import { cardsContent } from "../models/constants/ThirdSectionContent";


const ThirdSection = () => {  
  return(
    <section className='section third-section'>
      <div className="third-section__box">
        <div className="third-section__header">
          <h2 
          className="paragraph paragraph--xl blue u-right-text u-mt-30">¿Cómo lo hacemos?</h2>
          <h1
            className="paragraph paragraph--lg gray u-right-text u-mt-20"
          >
            <span>m<span className="blue"><i className='bi bi-virus2'></i></span>ra</span> combina presión legal, foco y velocidad.
          </h1>
        </div>
        <div className="third-section__cards u-mt-20">
          {cardsContent.map((card) => {
            return(
              <div 
                className="third-section__card" 
                key={card.key}
              >
                <div className="third-section__card-text paragraph paragraph--md">
                  {card.content}
                </div>
                <div className="third-section__card-icon">
                  <img className="card-default__icon" src={card.icon} alt='' />
                </div>
              </div>
              )
            })
          }
        </div>
        <div className="container u-mb-30">
        <p className="paragraph paragraph--lg u-center-text u-mt-30 u-mb-30">
          Nos encargamos de todo. Tu solo te enfocas en tu negocio.
        </p>
      </div>
      </div>
    </section>
  )
}

export default ThirdSection;
