import logo from '../assets/house-drill-improved1.png'
import {Container, Nav, Navbar} from "react-bootstrap";

export const NavBar = () => {

    const navItems: [{name: String, link: String}] = [
        {name: 'About', link: '#about'},
        {name: 'Services', link: '#services'},
        {name: 'Our Work', link: '#gallery'},
        // {name: 'Testimonials', link: '/about'},
        {name: 'Contact', link: '#contact'},
    ]

  return(
      <>
          <Navbar variant="dark" fixed="top">
              <Container fluid style={{margin: '0 40px'}}>
              <Navbar.Brand href="#">
                      <img src={logo} alt={'logo'} style={{width: '80px'}}/>
                  </Navbar.Brand>

                  <Nav className="justify-content-end" style={{gap: '40px'}}>
                      {navItems.map((item,index) =>
                              <Nav.Link key={index} href={item.link}
                                  style={{color: "#fff", fontSize: '20px', fontFamily: 'Alegreya SC'}}>
                                  {item.name}
                              </Nav.Link>
                      )}
                  </Nav>
              </Container>
          </Navbar>
      </>
  );
}