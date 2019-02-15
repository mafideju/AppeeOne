import React from 'react';
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="!#" className="author">
            {faker.name.firstName()} {faker.name.lastName()}
          </a>
          <div className="metadata">
            <span className="date">
              {props.hora}
            </span>
          </div>
          <div className="text">
            {props.content}
          </div>
        </div>
      </div>
      {/* <SearchBar /> */}
    </div>
  );
}
export default CommentDetail;