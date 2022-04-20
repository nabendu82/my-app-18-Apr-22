import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            comment: '',
            language: 'vue'
        }
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value })
    }

    handleCommentChange = event => {
        this.setState({ comment: event.target.value })
    }

    handleLangChange = event => {
        this.setState({ language: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.setState({
            email: '',
            comment: '',
            language: 'vue'
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments </label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm
