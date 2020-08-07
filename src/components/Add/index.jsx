import React, { Component } from 'react'
import './index.css'

export default class Add extends Component {
    /**
     * 添加todo选项的回调
     * @param {*} event 
     */
    handleKeyUp = (event) =>{
        const {addTodo} = this.props
        const {target:{value:userInput}} = event
        if (event.keyCode === 13) {
            if (!userInput.trim()) {
                alert('不能为空！')
                return
            }
            addTodo(userInput.trim())
            event.target.value = ''
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input 
                onKeyUp={this.handleKeyUp}
                type="text" 
                placeholder="请输入你的任务名称，按回车键确认" 
                />
            </div>
        )
    }
}
