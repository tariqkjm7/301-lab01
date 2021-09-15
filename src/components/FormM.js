import React from "react"
import { Button, Form } from 'react-bootstrap/';



class FormM extends React.Component {


  render() {


    return (

      <>

        <Form onSubmit={this.props.submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Horns Beast</Form.Label>

          </Form.Group>

          <Form.Select aria-label="Default select example" name='opt'>
            <option>choose number of horns</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>

          </Form.Select>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </>
    )

  }
}

export default FormM