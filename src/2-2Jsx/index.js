import React from 'react';
import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'
const imgs =  [img1,img2,img3];
class JsxDemo extends React.Component {
   constructor(options){
      super(options)
      this.state ={
          index : 0
      }
      this.timer = null;
      this.start();
   }
   start(){
    this.timer =  setInterval(() =>{
           let newInex = 0;
           if(this.state.index >= 2){
             newInex = 0;
           }else{
            newInex = this.state.index + 1;
           }
           this.setState({
               index:newInex
           })

       },1000)
   }
   end(){
       clearInterval(this.timer)
   }
   render(){
       return <div>
           <img src={imgs[this.state.index]} onMouseEnter={() =>{this.end()}} onMouseOut={() =>{this.start()}} alt=""/>
       </div>
   }
}
export default JsxDemo