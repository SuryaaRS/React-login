import React, { Component } from 'react'

export default class DefaultProps extends Component{
    render(){
        return(
            <div>
                <h2> Hi {this.props.name}</h2>
                <h6>To copy this tune * </h6>
                
                
        </div>
    )
}
}
DefaultProps.defaultProps={name:"molesh"}