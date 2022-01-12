import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Resim from '../aos.jpg'

class Home extends Component {

    render() {
        const { posts } = this.props;
        const postListesi = posts.length ? (
            posts.map(post => {
                return (
                    <div className="card blue-grey darken-1" key={post.id}>
                        <div className="card-image">
                            <img src={Resim} />
                            <span className="card-title">AOS</span>
                        </div>
                        <div className="card-content white-text">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div>Veri Yok</div>
        )

        return (
            <div className="container">
                {postListesi}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);