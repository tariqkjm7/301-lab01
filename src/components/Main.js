import React from "react";
import HornedBeast from './HornedBeast';
import data from './data.json'

class Main extends React.Component{
render(){
    return(


            <div>

           <HornedBeast title = {'UniWhal'} img = {"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"} 
           description = {'Mother (or father) rhino with two babies'} />
           
           <HornedBeast title = {'Unicorn Head'} img = {"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"} 
           description = {'Someone wearing a creepy unicorn head mask'} />
           
     
            </div>

       

    )
}

}
export default Main;