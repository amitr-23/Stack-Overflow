import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuestionList from './QuestionList'
import './HomeMainbar.css'
const HomeMainbar = () => {

  const questionsList = useSelector(state=>state.questionsReducer)
  console.log(questionsList)
  /*var questionsList=[
    {
      _id: 1,
      upVotes:2,
      downVotes:1,
      noOfAnswers:3,
      questionTitle:'Web Development Requirements?',
      questionBody:'It meant to be',
      questionTags:['nodejs','javascript','css','reactjs'],
      userPosted:'aar',
      userId:1,
      askedOn:'1 jan 2023',
      answer:[{
        answerBody:'answer',
        userAnswered:'mmr',
        answerdOn:'2-jun-2023',
        userId:2,
      }],
    },
    {
      _id: 2,
      upVotes:2,
      downVotes:1,
      noOfAnswers:0,
      questionTitle:'Web Development Requirements?',
      questionBody:'It meant to be',
      questionTags:['nodejs','javascript','css','reactjs'],
      userPosted:'aar',
      userId:1,
      askedOn:'1 jan 2023',
      answer:[{
        answerBody:'answer',
        userAnswered:'mmr',
        answerdOn:'2-jun-2023',
        userId:2,
      }],
    },
    {
      _id: 3,
      upVotes:2,
      downVotes:1,
      noOfAnswers:1,
      questionTitle:'Web Development Requirements?',
      questionBody:'It meant to be',
      questionTags:['nodejs','javascript','css','reactjs'],
      userPosted:'aar',
      userId:1,
      askedOn:'1 jan 2023',
      answer:[{
        answerBody:'answer',
        userAnswered:'mmr',
        answerdOn:'2-jun-2023',
        userId:2,
      }],
    },
]*/
const location=useLocation();
const user= 1 ;
const navigate=useNavigate();
const checkAuth=()=>{
  if(user===null){
    alert("Please login or signup for asking question");
    navigate('/Auth');
  }else{
    navigate('/AskQuestion')
  }
  
}
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/' ? <h1> Top Questions</h1> : <h1>All Questions</h1>
        }
        <button  onClick={checkAuth} className='ask-btn'> Ask Question </button>
      </div>
      <div>
        {
          questionsList.data===null? 
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar