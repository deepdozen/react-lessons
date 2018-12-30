import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todosList = todos.map(todo =>{
        return(
            <div className="collection-item" key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)}}>TODO #: {todo.id} {todo.action}</span>
            </div>
        )
    })
    return(
        <div className="todos collection">
            {todosList}
        </div>
    )
}

export default Todos;