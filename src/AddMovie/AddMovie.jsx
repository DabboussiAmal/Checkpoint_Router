import React from 'react'
import { Modal,Button, FormControl } from 'react-bootstrap'
import { useState } from 'react';
import './AddMovie.css'
const AddMovie = ({handleData}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie ,setNewMovie] = useState({});
    const handleChange=e=>{
        setNewMovie({...newMovie , [e.target.name]:e.target.value})
    }

    const handleSubmit=()=>{
        handleData(newMovie)
        handleClose()
    }

   
  return (
    <div>
        
    <Button variant="primary" onClick={handleShow} className="Add">
      <b>Add Movie</b>
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <FormControl type="text" placeholder="Enter title" name="title" onChange={handleChange}/>
      <FormControl type="text" placeholder="Enter  description" name="description" onChange={handleChange}/>
      <FormControl type="text" placeholder="Enter  posterURL" name="posterURL" onChange={handleChange}/>
      <FormControl type="number" placeholder="Enter rating" name="rating" onChange={handleChange}/>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default AddMovie