import React from 'react';
class JsxDemo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // const h1 = (
        // <>
        //  <h1>
        //         Hellloword <span>这是span元素</span>
        //         <p>这是p元素</p>
        //  </h1>
        // </>
        // )
        const h1 = React.createElement('h1',{},'<p>这是p元素</p>',React.createElement('span',{},'我是span'),React.createElement('p',{},'我是p'),React.createElement('p',{},'我是p'))
        const img = (
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2962719555,3613138778&fm=27&gp=0.jpg" alt=""/>
        );
        let arr = [1,2,3,3,3,3,3]
        let arrEl = arr.map((item) =>{
        return <div>{item}</div>
        })
        return <div>
            {h1}
            {img}
            {arr}
            {arrEl}
        </div>
    }
}
export default JsxDemo