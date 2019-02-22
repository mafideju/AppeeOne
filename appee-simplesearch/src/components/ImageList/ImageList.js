import React from 'react';
import './ImageList.css'

const ImageList = (props) => {
  // console.log(props.images)
  return (
    <React.Fragment>
      {props.images.map(image => {
        return (
          <div
            key={image.id}
            className="image--list">
            <img
              src={image.urls.regular}
              alt={image.description} />
          </div>)
      })}
    </React.Fragment>
  )
}
export default ImageList;

