import React from 'react';

const CommentDetail = props => {
  console.log(props)
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={props.image} alt="avatar" />
        </a>
        <div className="content">
          <a href="!#" className="author">{props.nome} {props.sobrenome}</a>
          <div className="metadata"><span className="date">{props.data} ás {props.hora}</span></div>
          <div className="text">{props.content}</div>
        </div>
      </div>
      {/* <SearchBar /> */}
    </div>
  );
}
export default CommentDetail;