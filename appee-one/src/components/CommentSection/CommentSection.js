import React from 'react'
import CommentDetailItem from '../CommentDetailItem/CommentDetailItem';

const CommentSection = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <CommentDetailItem />
      <CommentDetailItem />
      <CommentDetailItem />
      <CommentDetailItem />
      <CommentDetailItem />
    </div>
  )
}

export default CommentSection;