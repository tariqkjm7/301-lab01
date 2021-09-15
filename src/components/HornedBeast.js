import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './card.css';
import Col from "react-bootstrap/Col";
import BeastModel from "./BeastModel";

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfClick: 0 ,
            showModel: false
        }
    }
    

    increaseNumberOfclicks = () => {

        this.setState({
            numOfClick: this.state.numOfClick + 1
        })

    }

   
 showMoldelfun=() => {
this.props.beastButton(this.props.title)
    
};
// arr = arr.filter(ele => typeof ele ==='number' )



    render() {
        return (
            <div>
                <Col>
                <Card className='card' style={{ width: '18rem' }} >
                    <Card.Img  className='cardi'variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            number of clicks {this.state.numOfClick}
                            </Card.Text>
                            <Card.Text>  
                                 horns number {this.props.horns}
                        </Card.Text>
                        <Button  className='cardB' onClick={this.increaseNumberOfclicks} variant="primary">Vote </Button>
                        <Button   onClick={this.showMoldelfun} variant="primary">show </Button>
                    </Card.Body>
                </Card>
                </Col>
               
            </div>
        )
    }

}
export default HornedBeast