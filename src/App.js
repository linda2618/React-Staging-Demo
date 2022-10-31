import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

export default class App extends Component {
  //初始化状态
  state = {
    todo: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: false },
      { id: "003", name: "打代码", done: true },
      { id: "004", name: "打游戏", done: false },
    ],
  };

  //定义一个函数 实现子向父传值
  addTodo = (todoObj) => {
    //获取原todo
    const { todo } = this.state;
    //追加一个todo
    const newTodo = [todoObj, ...todo];
    //更新状态
    this.setState({ todo: newTodo });
  };

  //用户更新一个todo对象
  changeTodo = (id, done) => {
    //获取状态中的todo
    const { todo } = this.state;
    //匹配处理数据
    const newTodo = todo.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todo: newTodo });
  };

  //删除一个todo对象
  deleteTodo = (id) => {
    //获取原来的todo
    const { todo } = this.state;
    //删除指定 id 的对象
    const newTodo = todo.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todo: newTodo });
  };

  //用户全选
  checkAllTodo = (done) => {
    //获取原来的todo
    const { todo } = this.state;
    //加工数据
    const newTodo = todo.map((todoObj) => {
      return { ...todoObj, done };
    });
    //更新状态
    this.setState({ todo: newTodo });
  };

  //clearAllDone用于清除所有已完成的
  clearAllDone = () => {
    //获取原来的todo
    const { todo } = this.state;
    //过滤数据
    const newTodo = todo.filter((todoObj) => {
      return !todoObj.done;
    });
    //更新状态
    this.setState({ todo: newTodo });
  };
  render() {
    const { todo } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo123={this.addTodo} />
          <List
            todo={todo}
            changeTodo={this.changeTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todo={todo}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
