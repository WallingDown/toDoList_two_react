import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    /**
     * 样式状态
     */
    state = {
        bgColor: 'white',
        showDelBtn: 'none'
    }

    /**
     * 查看todo项是否被选中
     * @param {*} id 
     */
    handleChange = (id) => {
        return (event) => {
            const { target: { checked } } = event
            const { checkTodo } = this.props
            checkTodo(id, checked)
        }
    }
    /**
     * 鼠标移入移出公用回调
     * @param {*} isMouseEnter 
     */
    handleMousemove = (isMouseEnter) => {
        return () => {
            this.setState({
                bgColor: isMouseEnter ? '#ddd' : 'white',
                showDelBtn: isMouseEnter ? 'block' : 'none'
            })
        }
    }
    /**
     * 删除某一个todo选项
     * @param {*} id 
     * @param {*} title 
     */
    handleDelete = (id,title) =>{
        const {deleteTodo} = this.props
        if (confirm(`确定删除【${title}】吗？`)) {
            deleteTodo(id)
        }
    }
    
    render() {
        const { id, title, completed } = this.props
        const { bgColor, showDelBtn } = this.state
        return (
            <li onMouseEnter={this.handleMousemove(true)}
                onMouseLeave={this.handleMousemove(false)}
                style={{ backgroundColor: bgColor }}
            >
                <label>
                    <input type="checkbox" checked={completed} onChange={this.handleChange(id)} />
                    <span>{title}</span>
                </label>
                <button onClick={()=> this.handleDelete(id,title)} className="btn btn-danger" style={{ display: showDelBtn }}>删除</button>
            </li>
        )
    }
}
