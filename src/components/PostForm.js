import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const res = await fetch(url, settings);
        const posts = await res.json();
        console.log(posts);
    }

    render() {
        const { userId, title, body } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Id </label>
                    <input type="text" name="userId" value={userId} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Title </label>
                    <input type="text" name="title" value={title} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Body </label>
                    <input type="text" name="body" value={body} onChange={this.handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm
