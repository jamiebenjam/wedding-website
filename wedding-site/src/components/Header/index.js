import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      {/* <img src="./images/tree.png" alt='header-img' className='tree-img' id='header-img'/> */}
      <h1>Adam & Christy</h1>
      <h2>August 10, 2024 | Cleveland, OH</h2>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="ourstory">Our Story</Nav.Link>
            <Nav.Link href="photos">Photos</Nav.Link>
            <Nav.Link href="weddingparty">Wedding Party</Nav.Link>
            <Nav.Link href="qa">Q&A</Nav.Link>
            <Nav.Link href="travel">Travel</Nav.Link>
            <Nav.Link href="todo">Things To Do</Nav.Link>
            <Nav.Link href="registry">Registry</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
