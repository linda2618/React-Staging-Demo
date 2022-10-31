import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import './index.css'
import Item from '../Item'

export default class List extends Component {
    //对接收的props进行：类型，必要性的限制
    static propTypes = {
      todo:PropTypes.array.isRequired,
      changeTodo: PropTypes.func.isRequired
    }
    
  render() {
    const {todo, changeTodo, deleteTodo} = this.props
    return (
        <ul className="todo-main">   
         {
          todo.map(todo=>{
            return <Item key={todo.id} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo}/>   
          })
         }
        </ul>
    )
  }
}
