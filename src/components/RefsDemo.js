import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.emailRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.inputRef.current.value);
        console.log(this.emailRef.current.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name </label>
                    <input type="text" id="name" ref={this.inputRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text" id="email" ref={this.emailRef} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RefsDemo