import React, { MutableRefObject, useRef } from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import brandLogo from '../../assets/images/brand.svg';

const Header = () => {

  const offCanvasRef = useRef();
  const closeOffCanvas = () => {
    if(window.innerWidth < 768){
      offCanvasRef.current.backdrop.click()
    }
  };

  return (
    <header>
      <Navbar expand="md" style={{borderBottom:"1px solid rgba(0,0,0,.1)",height:"64px"}} className='pt-0 pb-md-0'>
        <Container fluid>
          <Navbar.Brand as={NavLink} to="" className="ms-3">
            <img src={brandLogo} alt="brand logo" />
          </Navbar.Brand>
          <Navbar.Toggle className={styles.toggleIcon} aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            ref={offCanvasRef}
            className={styles.offCanvas}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              className="align-items-start justify-content-end "
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav  className="justify-content-md-center me-md-5 align-items-end ml-auto text-end gap-4 flex-grow-1 pe-3">
                <Nav.Link as={NavLink} onClick={closeOffCanvas} to="">
                  صفحه اصلی
                </Nav.Link>
                <Nav.Link as={NavLink} onClick={closeOffCanvas} to="category">
                  محصولات
                </Nav.Link>
                <Nav.Link as={NavLink} onClick={closeOffCanvas} to="about-us">
                  درباره ما
                </Nav.Link>
                <div className="d-block d-md-flex align-items-center">
                <Nav.Link className="px-1 mb-4 mb-md-0" as={NavLink} onClick={closeOffCanvas} to="login">
                  ورود
                </Nav.Link>
                <span className="d-none d-md-inline-block" style={{color:"rgba(0,0,0,.5)"}}>/</span>
                <Nav.Link className="px-1" as={NavLink} onClick={closeOffCanvas} to="sign-up">
                  ثبت نام
                </Nav.Link>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
