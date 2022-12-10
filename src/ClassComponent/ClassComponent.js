import React from 'react';
class Hello extends React.Component
{
    render(){
        return(
            <h1>hi Hello Class Component</h1>
        )
    }
}
class ClassComponent extends React.Component
{
    render()
    {
        return(
            <>
            <ul>
                <li>Mango</li>
                <li>Apple</li>
                <li>orange</li>
                <li>pine apple</li>
            </ul>
        <Hello/>
            </>
        )
    }
}
export default ClassComponent