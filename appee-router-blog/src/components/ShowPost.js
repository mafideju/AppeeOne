import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

class ShowPost extends Component {
  componentDidMount() {
    if (!this.props.posts) {
      this.props.fetchPost(this.props.match.params.id);
    }
  }
  deleteHandler = async () => {
    this.props.deletePost(this.props.match.params.id, () => {
      this.props.history.push('/')
    });
    // await this.props.deletePost()
    // await this.props.history.push('/');
  }
  render() {
    if (!this.props.post) {
      return (
        <div>Carregaaaaaaando....</div>
      )
    }
    return (
      <React.Fragment>
        <div>
          <h3>{this.props.post.title}</h3>
          <h6>Tags: {this.props.post.categories}</h6>
          <p>{this.props.post.content}</p>
        </div>
        <div>
          <Link to="/">Voltar</Link>
          <button onClick={this.deleteHandler}>Delete</button>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    post: posts[ownProps.match.params.id]
  }
};

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);