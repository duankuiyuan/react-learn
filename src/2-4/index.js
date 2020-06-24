import React, { Component } from 'react'
import StudentList from './components/StudentList'
export default class index extends Component {
    constructor(options){
        super(options)
        this.state = {
            list:[]
        }
     this.getStudents();
    }
    async getStudents(){
        const stus = await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + "demo13_1545210570249")
        .then(resp => resp.json()).then(resp => resp.data);
        this.setState({
            list:stus
        })
    }
    render() {
        let data = {
            address: "北京",
            appkey: "demo13_1545210570249",
            birth: 2001,
            ctime: 1589097390,
            email: "2341@kk.com",
            id: 53511,
            name: "焦文松",
            phone: "11111111111",
            sNo: "10000",
            sex: 0,
            utime: 1592294007
        }
        return (
            <div>
              <StudentList list = {this.state.list}></StudentList>
            </div>
        )
    }
}
