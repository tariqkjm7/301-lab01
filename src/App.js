import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import dataArray from './components/data.json';
import BeastModel from './components/BeastModel';
import FormM from './components/FormM';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArray: this.props.dataArray,
      animal:{},
      showModel: false,
      selcted:dataArray

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


submitHandler = async (event) =>{
  event.preventDefault();
  await this.setState ( {
    // showModel:true,
    horns : event.target.opt.value

  });
console.log('this.state.horns'); 
 let arr = dataArray.filter(ele => {
  console.log(ele.horns); 

  if(ele.horns === Number(event.target.opt.value)){
    console.log('asdfghjkl');
  return ele

  }
 } )
 this.setState({

  selcted :arr

 })

console.log(arr);
} 


  render() {

    
    return (
      <>
        <Header /> 
        <FormM submitHandler = {this.submitHandler}  />
          <BeastModel 
                show = {this.state.showModel}
                handleClose ={this.handleClose}
                animal = {this.state.animal}
                beastButton={this.beastButton}
                />
        <Main beastButton={this.beastButton} arr={this.state.selcted}  />
      

        <Footer />
      </>
    )
  }

}
export default App