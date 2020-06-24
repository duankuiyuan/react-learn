import React, { Component } from 'react'
import Student from './Student'
export default class StudentList extends Component {
    constructor(options){
      super(options)
    }

    render() {
        const students = this.props.list.map( item =><Student {...item} key = {item.ctime}></Student>);
        return (
            <div>
                 {students}
            </div>
        )
    }
}
