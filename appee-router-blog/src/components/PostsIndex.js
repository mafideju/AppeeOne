import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    // console.log("PROPS", this.props.posts);
    return (
      <div>
        <div>
          <Link to="/posts/new">
            Adicionar Postagem
          </Link>
        </div>
        <h3>Posts</h3>
        <ul style={{ listStyleType: 'none' }}>
          {_.map(this.props.posts, post => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}><h5>{post.title}</h5></Link>
                <p><small><strong>Tags: </strong>{post.categories}</small></p>
                <hr />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);