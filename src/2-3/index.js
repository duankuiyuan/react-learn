import React from 'react';
import MyFunction from './functionComponent';
import ClassComponent from './classComponent'
class JsxDemo extends React.Component {
   constructor(options){
      super(options)
   }
   render(){
       return <div>
         <MyFunction data={'函数组件属性'}></MyFunction>
         <ClassComponent data={'类组件属性'}></ClassComponent>
       </div>
   }
}
export default JsxDemo