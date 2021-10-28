import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/deleteAction";

class Post extends Component {

    handleClick=()=>{
        this.props.PostSil(this.props.data.id)
        this.props.history.push('/'); //Sil ve anasayfaya geri dön.
    }

    render() {

        const post =this.props.data?(
            <div>
                <h4 className="center">{this.props.data.title}</h4>
                <p>{this.props.data.body}</p>
                <button className="btn grey" onClick={this.handleClick}>sil</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        PostSil: (id) => { dispatch(deletePost(id)) }
    }
}


const mapStateToProps =(state,kendiProps)=>{
    let id=kendiProps.match.params.postId;

    return{
        data:state.posts.find(post => post.id == id)
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Post);