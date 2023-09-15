import React, {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './AskQuestion.css'
import {askQuestion} from '../../actions/question'

const AskQuestion = () => {
    
  const [questionTitle,setQuestionTitle]=useState('')
  const [questionBody_1,setQuestionBody_1]=useState('')
  const [questionBody_2,setQuestionBody_2]=useState('')
  const [questionTags,setQuestionTags]=useState('')
  const dispatch = useDispatch()
  const User = useSelector((state)=>(state.currentUserReducer))
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    //console.log({questionTitle,questionBody_1,questionBody_2,questionTags})
    dispatch(askQuestion({questionTitle,questionBody_1,questionBody_2,questionTags,userPosted:User.result.name, userId:User?.result._id},navigate))
  }
  const handleEnter_1 = (e)=>{
    if(e.key==='Enter'){
      setQuestionBody_1(questionBody_1 + "\n")
    }
  }
  const handleEnter_2 = (e)=>{
    if(e.key==='Enter'){
      setQuestionBody_2(questionBody_2 + "\n")
    }
  }

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a Public Question</h1>
        <form onSubmit={handleSubmit} >
        <div className="ask-form-container">
          <label htmlFor="ask-ques-title">
            <h4>Title</h4>
            <p>Be specific and imagine you’re asking a question to another person.</p>
            <input type='text' id='ask-ques-title' onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='e.g. Is there a R function for finding index of an element in a vector?'/>
          </label>
          <label htmlFor="ask-ques-body">
            <h4>What are the details of your problem?</h4>
            <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
            <textarea name="" id="ask-ques-body" onChange={(e)=>{setQuestionBody_1(e.target.value)}} cols="30" rows="10" onKeyDown={handleEnter_1}></textarea>
          </label>
          <label htmlFor="ask-ques-body-2">
            <h4>What did you try and what were you expecting?</h4>
            <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</p>
            <textarea name="" id="ask-ques-body-2" onChange={(e)=>{setQuestionBody_2(e.target.value)}} cols="30" rows="10" onKeyDown={handleEnter_2}></textarea>
          </label>
          <label htmlFor="ask-ques-tags">
            <h4>Tags</h4>
            <p>
                Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
            <input type='text' id='ask-ques-tags' onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} placeholder='e.g. (html spring excel)'/>
          </label>
        </div>
        <input type="submit" value='Review your Question' className='review-btn'/>
        </form>
      </div>
    </div>
  )
}

export default AskQuestion