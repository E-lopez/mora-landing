import { secondSectionContent as content } from "../models/constants/SecondarySectionContent";

const SecondSectionB = () => {

  return(
    <section id="test" className='second-section'>
      <h1 className='paragraph paragraph--xxl u-center-text orange'>¡Actuamos en 30 días!</h1>
      <h2 className="paragraph paragraph--lg u-mt-10 gray">
        El proceso tiene {content.steps.length} pasos.
      </h2>

      {content.steps.map((step, index) => (
        <div 
          className="card-default"
          key={step.title+index}
        >
          <div className={`card-default__box ${(index + 1) % 3 === 0 ? step.class : ''}`}>
            <p className="paragraph paragraph--md bold">{step.caption}</p>
          </div>
          <div className={`card-default__box u-resp u-from-md ${(index + 1)% 2 === 0 ? step.class : ''}`}>
            <img className="card-default__icon" src={step.icon} alt='' />
            <p className='paragraph bold'>{step.title}</p>
          </div>
          <div className={`card-default__box ${(index + 1 )% 5 === 0 ? step.class : 'card--shadow'}`}>
            <p className="paragraph paragraph--md">{step.legend}</p>
          </div>
        </div>
      ))}

      <div className="container u-mb-30">

        <p className="paragraph paragraph--xl u-center-text u-mt-30">Cuidamos lo que es tuyo.</p>
      </div>        
    </section>
  )
}

export default SecondSectionB;
