import React, { Component } from 'react'
//安装引入nanoid库   (随机生成唯一的id) //UUID也是一个库，比较大
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {


  //键盘事件的回调
  handleKeyUp = (e) => {
    const {key, target} = e
    //e.keyCode === 13 或者 e.key === 'Enter'(大写) 表示被按下键盘所代表的数字
    //判断是  是否回车按键
    if(key !== 'Enter') return
    //判断是否为空
    if(target.value.trim() === ''){
      alert('输入不能为空！')
      return 
    }
    //准备好一个todo对象
    const todoObj = {id:nanoid(), name:target.value, done: false}
    //将todoObj 传递给 App
    this.props.addTodo123(todoObj)
    target.value = ''
  }
  render() {
    return (
    <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
    )
  }
}
