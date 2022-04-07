import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import './MyNav.css';
import ReactStars from "react-rating-stars-component";


const MyNav = ({handleTitle ,handleRate}) => {
  const ratingChanged = (newRating) => {
    handleRate(newRating);
  };
  const handleChange=(e)=>{
    handleTitle(e.target.value)
  }
  
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Movie</Navbar.Brand>
        <Nav className="me-auto">
         <Nav.Link href="#home">Home</Nav.Link>
         <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <input type="text" placeholder='Enter your search' className='my-input' onChange={handleChange} />
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={28}
          activeColor="#ffd700"
        />
        
        </Container>
        </Navbar>
       
    </div>
  )
}

export default MyNav