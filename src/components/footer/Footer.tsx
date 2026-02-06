import logo_1 from '@assets/logo_1.png';
import grupoLegal from '@assets/grupo-legal.png';

const Heading = () => {  

  return(
    <div className="footer">
      <button 
        className="footer__logo" 
        onClick={() => globalThis.window.scrollTo(0,0)}
      >
        <img src={logo_1} alt={'kredit logo'} />
      </button>
      <div className="footer__text u-mt-10">
        <p className="label u-center-text blue">
            m<span className="label orange"><i className='bi bi-virus2'></i></span>ra
          </p>
        <p className="label u-center-text blue">Un producto de L&L Grupo Legal</p>
        <p className="label u-center-text">©2025 All rights reserved</p>
      </div>
      <div className="footer__socials">
        <a href="https://www.llgrupolegal.com" target="_blank" rel="noreferrer">
          <img className="card-default__icon" src={grupoLegal} alt='' />
        </a>
      </div>
    </div>
  )
}

export default Heading;
