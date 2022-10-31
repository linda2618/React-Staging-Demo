import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
	//全选checkBox 的回调
	handleCheckedAll = (e) => {
		this.props.checkAllTodo(e.target.checked)
	}

	//删除已完成任务
	handleClearAllDone = () => {
	this.props.clearAllDone()
	}
	render() {
		const { todo } = this.props
		//已完成的个数
		const doneCount = todo.reduce((pre, todo) => {
			return pre + (todo.done ? 1 : 0)
		}, 0)
		const total = todo.length

		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.handleCheckedAll} checked={doneCount === total && total !== 0 ? true : false} />
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>

		)
	}
}
