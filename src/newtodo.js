import React, { Component } from "react";

class NewTodo extends React.Component{
    state = {
        content : ""
    } 
    handleChange = (e)=>{
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e)=>{
       e.preventDefault()
       this.props.addTodo(this.state)
       this.setState({
           content : ""
       })
    }
    
    render() {
        
        // console.log(newTodo)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        );
    }
}

export default NewTodo