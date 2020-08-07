import React, { Component } from 'react'
import './App.css'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import {nanoid} from 'nanoid'

export default class App extends Component {
    state = {
        todos:[
            {id:'001',title:'小明',completed:true},
            {id:'002',title:'小白',completed:true},
            {id:'003',title:'小红',completed:false},
        ]
    }
    /**
     * 勾选某一个todo选项
     * @param {*} id 
     * @param {*} completed 
     */
    checkTodo = (id,completed) =>{
        const todos = this.state.todos.map((todo)=>{
            if (todo.id === id) return {...todo,completed}
            return todo
        })
        this.setState({todos})
    }

    /**
     * 添加一个todo选项
     * @param {*} title 
     */
    addTodo = (title) =>{
        const todo = {id:nanoid(),title:title,completed:false}
        this.setState({todos:[todo,...this.state.todos]})
    }

    /**
     * 删除一个todo选项
     * @param {*} id 
     */
    deleteTodo = (id) =>{
        const index = this.state.todos.findIndex((todo)=>{
            return todo.id = id
        })
        const todos = [...this.state.todos]
        todos.splice(index,1)
        this.setState({todos})
    }
    /**
     * 选中所有的todos(全选)
     * @param {*} checked 
     */
    checkAll = (checked) =>{
        const todos = this.state.todos.map((todo)=>{
            return {...todo,completed:checked}
        })
        this.setState({todos})
    }

    /**
     * 清除所有已经选中的
     */
    clearAllCompleted = () =>{
        const todos = this.state.todos.filter((todo)=>{
            if (!todo.completed) return todo
        })
        this.setState({todos})
        
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Add addTodo={this.addTodo}/>
                    <List todos={todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAll={this.checkAll} clearAllCompleted={this.clearAllCompleted}/>
                </div>
            </div>
        )
    }
}
