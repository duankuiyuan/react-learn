import React from 'react'
class classComponent extends React.Component{
    constructor(props){
     super(props)
     this.props = props;
    }
    render(){
        return <div>类组件 +{this.props.data} </div>
    }
}
export default classComponent;