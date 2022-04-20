import React, { Component } from 'react'
import Child from './Child'
import UserContext from './userContext'

class Parent extends Component {
    static contextType = UserContext

    render() {
        return (
            <>
                <h1>Parent Component</h1>
                <h2>Welcome {this.context}</h2>
                <Child />
            </>
        )
    }
}

export default Parent
