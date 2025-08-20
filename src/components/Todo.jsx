import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import React, { useState } from 'react'

const Todo = ({ todo, delTodo ,toggleCompleted}) => {
    return (
        //使用三元運算子的方法，控制是否套用CSS規則
        <div className={`todo ${todo.isCompleted? 'completed':''}`}>
            <p onClick={()=>{toggleCompleted(todo.id)}}>{todo.content}</p>
            <div>
                <MdDeleteForever style={{ cursor: 'pointer', marginRight: '5px' }} />
                <FaEdit
                    style={{ cursor: 'pointer' }}
                    onClick={() => { delTodo(todo.id) }} />

            </div>
        </div>
    )
}

export default Todo