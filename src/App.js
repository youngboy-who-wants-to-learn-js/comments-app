import React,{useState,useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import Post from './components/Post/Post';
import Comments from './components/Comments/Comments';
import CommentForm from './components/CommentForm/CommentForm';

import {requestPostComments} from './utilities/API';
import {generateID} from './utilities/function';



function App() {
  const [comments,setComments] = useState([]);

  const addComment = ({name,email,body}) => {
    const comment = {
      postId : 1,
      id : generateID(),
      name,
      email,
      body
    };

    setComments(comments => [...comments,comment]);
  }

  useEffect(()=>{
    requestPostComments('GET',{},setComments);
  },[]);

  console.log('comments',comments)

  return (
    <main className="uk-main">
    <NavBar />
  <div className="uk-section">
    <div className="uk-container">
      <Post />
      <Comments comments={comments} />
      <CommentForm addComment={addComment} />
    </div>
  </div>
</main>

  );
}

export default App;
