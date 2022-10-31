import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false }; //表示鼠标移入、移出

  //鼠标移入移出 回调函数
  handleMouse = (flag) => {
    return () => {
      // console.log(flag);
      this.setState({ mouse: flag });
    };
  };

  //勾选、取消勾选某一个 todo 的回调
  handleChecked = (id) => {
    return (e) => {
      // console.log(id, e.target.value); 
      //此处input的type=checkbox，所以没有e.target.value了，只有e.target.checked

      // console.log(id, e.target.checked); 
      this.props.changeTodo(id, e.target.checked)

    }

  }

  //删除某一个 todo 的回调
  handleDelete = (id) => {
    // console.log('通知App删除', id);

    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id)
    }
  }


  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleChecked(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    );
  }
}
