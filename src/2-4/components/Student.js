import React from 'react'

export default function Student(props) {
    return (
        <div>
           <span>地址：{props.address}，</span> 
           <span>姓名：{props.name}，</span> 
           <span>电话：{props.phone}</span> 
        </div>
    )
}
