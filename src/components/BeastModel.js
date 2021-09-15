import React from "react";
import { Button, Modal, Form } from 'react-bootstrap/';
import dataArray from './data.json'


class BeastModel extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      showModel:false,
      horns :0
    }


  }


       
        render() {
          
          let imgUrl = <img src={this.props.animal.image_url} alt="" width={300} height={300} />

    return (
      <>
  


        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>name:{this.props.animal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{imgUrl}</Modal.Body>
          <Modal.Body> {this.props.animal.description}</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    )

  }
}
export default BeastModel;