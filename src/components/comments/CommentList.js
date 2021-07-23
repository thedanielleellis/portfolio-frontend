import React from 'react';
import CommentCard from './CommentCard';


const CommentList = ({ projectComments }) => {
  const renderComments = projectComments.map(comment => 
    <CommentCard key={comment.id} comment={comment} />
  )

  return (
    <div className='comments'>
      <h4>Comments</h4>
      {renderComments}
    </div>
  );
};

export default CommentList;