import React, { Component } from "react";
import axios from 'axios'

class Post extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        //console.log(this.props);
        let id = this.props.match.params.postId;

        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res =>{
            this.setState({
                data: res.data
            })
        })

        
    }

    render() {

        const post =this.state.data?(
            <div>
                <h4 className="center">{this.state.data.title}</h4>
                <p>{this.state.data.body}</p>
            </div>
        ):(
            <div className="center">Veriler Yükleniyor</div>
        )

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Post;