import React from "react";
import HornedBeast from './HornedBeast';
import dataArray from './data.json'
import Row from "react-bootstrap/Row";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                    {dataArray.map((element, index) => {
                        return (
                            <HornedBeast key={index} title={element.title} img={element.image_url}
                                description={element.description}
                                keyWord={element.keyWord} horns={element.horns} />
                        )

                    })}
                </Row>
            </div>

        )
    }

}
export default Main;