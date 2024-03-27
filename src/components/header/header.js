import React, { useEffect, useState } from "react"
import { Navbar, Container, Nav,   } from "react-bootstrap"
import { Link } from "gatsby" 
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
      <p>The tragic events unfolding in our global community can raise fears and anxiety. If you are impacted in any way by the current events, make an appointment with a virtual counsellor today. To access 2 free hours of counselling, log into your People Connect account and send a message to &nbsp;<a href="mailto:support@pcpeopleconnect.com" className="fw-bold text-decoration-underline">support@pcpeopleconnect.com</a>  or send a message through the live chat function.</p>
      
      <button onClick={handleClose} className={`border-0 bg-transparent ${styles.closebtn}`} > 
      <img src={closebtn} alt="fermer" className="img-fluid" />
      </button>
    </div> 
      </div>
    )}
    <Navbar  expand="lg"  sticky="top" bg="white"  className={` py-0 py-lg-3 ${styles.shadow_nav} ${styles.navbar} ${isSticky ? 'py-lg-3' : styles.pt}`}    >
      <Container className="align-items-center">
        <div className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className="me-0 p-0">
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
          <div className="d-block d-lg-flex justify-content-between my-2 align-items-center   gap-5">
              <div className="d-lg-flex d-block justify-content-between align-items-center  gap-5"> 
                <Nav.Link   href="https://bbdcarepath-pap.peoplevousconnecte.com/signin" target="blank" className="fw-bold">
                Connectez-vous
                </Nav.Link>
                <div className="mt-3 mt-lg-0 d-flex gap-3 align-items-center">
                <a href={props.link} className={` fs-6  fw-light ${ styles.cursorpointer}`} >EN</a><span>|</span><a href="/#" className={`fs-6 fw-bold ${ styles.cursorpointer}`}>FR</a>
                </div>
                {/* </Nav.Link> */}
              </div>
              <div className="mt-3  mt-lg-0    d-block">
                <Nav.Link 
                   href="https://bbdcarepath-pap.peoplevousconnecte.com/signup"  target="blank"
                  className={` d-inline-block  nav_btn   py-2 rounded-2 px-xl-5 px-4 fw-bold ${styles.nav_btn_getstart} ${props.eap ? styles.nav_btn_getstart_eap_fs : styles.nav_btn_getstart_bap_fs}`}
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
