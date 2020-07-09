import React from 'react';
import Comment from './Comment';

const Comments = ({comments}) => {
    return (
    <>
      <h3 className="uk-margin-remove-top">Comments:</h3>
      {
        comments.map(comment =>{ 
           return  <Comment {...comment} />
        })
      }
      <hr />
    </>
    );
}

export default Comments;