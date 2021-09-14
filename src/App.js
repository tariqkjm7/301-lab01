import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import dataArray from './components/data.json';
import BeastModel from './components/BeastModel';







class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArray: this.props.dataArray,
      animal:{},
      showModel: false,


    }

  }


  handleClose =() =>{
    this.setState({showModel:false})
}

beastButton=(title) =>{
  let selcted = dataArray.find(animal =>{

    if(animal.title === title){
      return animal;
    }


  } )
  this.setState({
      showModel:true,
      animal:selcted,

  })
}
  render() {

    return (
      <>
        <Header />
        <Main beastButton={this.beastButton} dataArray={dataArray} />
        <BeastModel
                show = {this.state.showModel}
                handleClose ={this.handleClose}
                animal = {this.state.animal}
                beastButton={this.beastButton}
                />

        <Footer />
      </>
    )
  }

}
export default App