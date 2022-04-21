import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(url);
        const posts = await res.json();
        console.log(posts);
        this.setState({ posts });
    }

    render() {
        const { posts } = this.state;

        return (
            <>
                <h1>List of Posts</h1>
                {posts.length && posts.map(post => <h3 key={post.id}>{post.title}</h3>)}
            </>
        )
    }
}

export default PostList
