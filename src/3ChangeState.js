import React, { Component } from 'react'
import './backStyle.css'
export default class ChangeState extends Component {
    state={ name:""}

    change=(e)=>{this.setState({name:e.target.value})}
    render() {
        return (
            <div className='design'>
                <h1 style={{colour:"red"}}> {this.state.name}</h1>
                <input type="text" onChange={this.Change}/>
                <h1>{this.state.name}</h1>
                </div>
        )
        
    }
    
}