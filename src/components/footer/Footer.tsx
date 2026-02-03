import logo_1 from '@assets/logo_1.png';

const Heading = () => {  

  return(
    <div className="footer">
      <div className="footer__logo">
        <img src={logo_1} alt={'kredit logo'} />
      </div>
      <div className="footer__text u-mt-10">
        <p className="label u-center-text blue">
            m<span className="label orange"><i className='bi bi-virus2'></i></span>ra
          </p>
        <p className="label u-center-text blue">Un producto de L&L Abogados</p>
        <p className="label u-center-text">©2025 All rights reserved</p>
      </div>
      <div className="footer__socials">
        
        <a href="https://www.linkedin.com/company/kredit-app/" target="_blank" rel="noreferrer">
          <i className="bi-linkedin"></i>
        </a>
      </div>
    </div>
  )
}

export default Heading;
