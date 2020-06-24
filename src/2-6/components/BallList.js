import Ball from "./Ball"
import React, { Component } from 'react'

export default class BallList extends Component {
    constructor(props){
      super(props);
      this.state = {
          balls:[]
      }
      function getRandom(min,max){
        return Math.floor(Math.random() * (max + 1 - min) + min);
       }
      const timer = setInterval(() =>{
        var info = {
            left: getRandom(0, document.documentElement.clientWidth - 100),
            top: getRandom(0, document.documentElement.clientHeight - 100),
            xSpeed: getRandom(50, 500),
            ySpeed: getRandom(50, 500),
            bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
        };
        this.setState({
            balls:[...this.state.balls,info]
        })
        if(this.state.balls.length == 5){
            clearInterval(timer)
        }
      },1000);

    }
    render() {
        let balls = this.state.balls.map(item => <Ball {...item}></Ball>)
        return (
            <>
            {balls}  
            </>
        )
    }
}
