import React,{useState,useEffect,useRef} from 'react';
import {requestPostComments} from '../../utilities/API';

const CommentForm = ({addComment}) => {
  const [nameValue,setNameValue] = useState('');
  const [emailValue,setEmailValue] = useState('');
  const [bodyValue,setBodyValue] = useState('');
  const [nameError,setNameError] = useState(null);
  const [bodyError,setBodyError] = useState(null);
  const [emailError,setEmailError] = useState(null);
  
  const handleInputName = ({target : {value}}) => setNameValue(value);
  const handleInputEmail = ({target : {value}}) => setEmailValue(value);
  const handleInputBody = ({target : {value}}) => setBodyValue(value);

  const [disabled,setDisabled] = useState(true)
  const firstRender = useRef(true);

  useEffect(()=>{
    
    if (firstRender.current){
      firstRender.current = false;
      return;
    }


    setDisabled(!(formValidationName() && formValidationBody() && formValidationEmail()));

  },[nameValue,emailValue,bodyValue]);

  const formValidationName = () => {
    if (nameValue === ''){
      setNameError('Name cant be blank!');
      return false;
    } else {
      setNameError(null);
      return true;
    }
  }

  const formValidationBody = () => {
    if ( bodyValue === ''){
      setBodyError('Comment cant be blank!');
      return false;
    } else {
      setBodyError(null);
      return true;
    }
  };

  const formValidationEmail = () => {
    const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    if (regexp.test(emailValue)){
      setEmailError(null);
      return true
    } else {
      setEmailError('Incorrect E-mail!');
      return false
    }
  }

    const handleAdd = async (e) => {
      e.preventDefault();
        try{
            await requestPostComments('POST',{name : nameValue ,email : emailValue,body : bodyValue },console.log);
            addComment({name : nameValue ,email :emailValue ,body : bodyValue });
            setNameValue('');
            setEmailValue('');
            setBodyValue('');
        } catch(error){
            console.log(error);
        }
    } 

    return (
        <form action="#" className="uk-comment-form uk-margin-medium-top">
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">Add Comment</legend>
          <div className="uk-margin">
            <input
              onChange={handleInputName}
              className="uk-input"
              value={nameValue}
              type="text"
              placeholder="Name"
              required
            />
            {nameError && <p>{nameError}</p>}
          </div>
          <div className="uk-margin">
            <input
              onChange={handleInputEmail}
              className="uk-input"
              type="email"
              placeholder="Email"
              value={emailValue}
              required
            />
            {emailError && <p>{emailError}</p>}
          </div>
          <div className="uk-margin">
            <textarea
              onChange={handleInputBody}
              className="uk-textarea"
              rows={5}
              placeholder="Comment"
              required
              value={bodyValue}
            />
          </div>
          {bodyError && <p>{bodyError}</p>}
          <div className="uk-margin">
            <button onClick={handleAdd} disabled={disabled} className="uk-button uk-button-primary" type="submit">
              Post Comment
            </button>
          </div>
        </fieldset>
      </form>
    );
}

export default CommentForm;
