import { ReactElement } from "react";
import { Link } from "react-router-dom";

const MenuComponent: React.FC<{showModal: boolean, toggleMenu: () => void}> = ({ showModal, toggleMenu }): ReactElement => {
  if(!showModal) return <></>;

  return(
    <div className="menu" >
      <div className="menu__button-box">
        <button className="menu__close-button" onClick={toggleMenu}>
          <i className='bi-x-lg blue'></i>
        </button>
      </div>
      <div className="menu__link-list">
        <Link to="que-es-kredi" onClick={toggleMenu} className="heading-primary heading-primary--general blue">Qué Es mora</Link>
        <Link to="pricing" onClick={toggleMenu} className="heading-primary heading-primary--general u-mb-20 blue">Precios</Link>
        <Link to="faqs" onClick={toggleMenu} className="heading-primary heading-primary--general blue">QA's</Link>
      </div>
    </div>
  )
}

export default MenuComponent;


// Freelancers owed money

// Small business suppliers

// Informal lenders

// P2P / family loans with written proof

// Presión legal formal, extrajudicial, con abogado.