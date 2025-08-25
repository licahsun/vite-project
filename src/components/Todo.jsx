import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditForm from './EditForm';

const Todo = ({ todo, delTodo, toggleCompleted, toggleIsEdit , editTodo}) => {
    return (
        todo.isEdit ? <EditForm todo={todo} editTodo={editTodo}/>
            //使用字串值+三元運算子的方法，控制是否套用CSS規則
            : < div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                <div>
                    <FaEdit
                        style={{ cursor: 'pointer', marginRight: '5px' }}
                        onClick={() => { toggleIsEdit(todo.id) }}
                    />
                    <MdDeleteForever
                        style={{ cursor: 'pointer' }}
                        onClick={() => { delTodo(todo.id) }}
                    />
                </div>
            </div>
    )
}

export default Todo