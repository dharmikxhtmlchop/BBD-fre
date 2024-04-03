import React, { useEffect, useState } from "react"
import { Navbar, Container, Nav,   } from "react-bootstrap" 
import * as styles from "./header.module.css"
 import closebtn from '../../images/btnclose.png' 
 import harmburg from '../../images/harmburg_menu.svg'
 import logofrench from '../../images/logo_french.png'
const Header = props => {
  const [showNotice, setShowNotice] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const handleClose = () => {
    setShowNotice(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) { // Adjust the offset value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    {showNotice && (
      <div className={styles.bg_notice} >
      <div className={`   text-center  mx-auto noticetop ${styles.noticetop}`}>
Les événements tragiques qui se déroulent sur la scène mondiale peuvent susciter des craintes et de l'anxiété. Si vous êtes touché de quelque manière que ce soit par les événements actuels, prenez rendez-vous avec un conseiller dès aujourd'hui. Pour accéder à 2 heures gratuites de consultation, connectez-vous à People vous connecte et envoyez un message à <a href="mailto:support@pcpeopleconnect.com" className={`fw-bold text-decoration-underline ${styles.header_link_eap}`}>support@pcpeopleconnect.com</a>  ou envoyez un message avec la fonction de clavardage.      <p></p>
      
      <button onClick={handleClose} className={`border-0 bg-transparent ${styles.closebtn}`} > 
      <img src={closebtn} alt="fermer" className="img-fluid" />
      </button>
    </div> 
      </div>
    )}
    <Navbar  expand="lg"  sticky="top" bg="white"  className={` py-0 py-lg-3 px-lg-3 ${styles.shadow_nav} ${styles.navbar} ${isSticky ? 'py-lg-3' : styles.pt}`}    >
      <Container className="align-items-center">
        <div className="d-flex align-items-center">
          <Navbar.Brand  href="https://www.bbd.ca/fr/" target="_blank" className="me-0 p-0">
            <div className="img-fluid">
              <img
                className={styles.logosize}
                src={logofrench}
                alt=" "
              />
            </div>
          </Navbar.Brand>
          <div className={styles.vertical}></div>
          <div>
            <img
              className={styles.logorightsideimg}
              src={require(`../../images/${props.img}`).default}
              alt={props.logoalt}
            />
          </div>
        </div>
        <div  className="d-flex">
        <div className={ styles.vertical_line} ></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={` ${styles.px_harmburg} ${styles.toogleicon}`} onClick={handleToggle}>
        { isMenuOpen ? <img src={closebtn} alt="close icon" className={` img-fluid ${styles.closebtn}`}  />: <img src={harmburg} alt="harmburg icon" className=" " />}
 
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <div className={`d-block d-lg-flex justify-content-between my-2 align-items-center   gap-3 gap-xl-5 ${styles.menu_right}`}>
              <div className="d-lg-flex d-block text-end justify-content-between align-items-center  gap-3 gap-xl-5"> 
                <Nav.Link   href={props.signin} target="blank" className="fw-bold">
                Connectez-vous
                </Nav.Link>
                <div className="mt-3 mt-lg-0 d-flex gap-3 justify-content-end align-items-center">
                <a href={props.link} className={` fs-6  fw-light ${ styles.cursorpointer} ${  styles.en_hover}`} >EN</a><span>|</span><p className={`fs-6 fw-bold ${styles.fr_hover} ${ styles.cursordefault}`}>FR</p>
                </div>
                {/* </Nav.Link> */}
              </div>
              <div className="mt-3  mt-lg-0    d-block">
                <Nav.Link 
                   href={props.signup}  target="blank"
                  className={` d-inline-block  nav_btn   py-2 rounded-2 px-xl-5 px-4   ${styles.nav_btn_getstart} ${props.eap ? styles.nav_btn_getstart_eap_fs : styles.nav_btn_getstart_bap_fs}`}
                >
                  Commençons
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
