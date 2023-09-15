import React,{useState} from 'react'
import {useParams,Link,useNavigate,useLocation} from 'react-router-dom'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import {useSelector,useDispatch } from 'react-redux'
import questionsReducer from '../../reducers/questions'
import { postAnswer, deleteQuestion,voteQuestion } from '../../actions/question'

const QuestionsDetails = () => {
    const {id} = useParams();
    const questionsList = useSelector(state=>state.questionsReducer)
    const [Answer,setAnswer]=useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const  User = useSelector(state=>state.currentUserReducer)
    const location = useLocation()
    const url = 'http://localhost:3000'

    const handelPostAns =(e,answerLength)=>{
        e.preventDefault()
        if(User===null){
          alert('Please Login or Signup for posting answer')
          navigate('/Auth')
        }else{
          if(Answer===''){
            alert('Enter an answer before Submiting')
          }else{
            dispatch(postAnswer({id,noOfAnswers:answerLength+1,answerBody:Answer,userAnswered:User.result.name,userId:User?.result?._id}))
          }
        }
    }
    const handelShare= ()=>{
      copy(url+location.pathname)
      alert('Copied url :'+ url+location.pathname)
    }

    const handelDelete=()=>{
      dispatch(deleteQuestion(id,navigate));
    }
    const handleUpvote=()=>{
      dispatch(voteQuestion(id,'upVote',User.result._id))
    }
    const handleDownvote=()=>{
      dispatch(voteQuestion(id,'downVote',User.result._id))
    }


    /*var questionsList=[
        {
          _id: '1',
          upVotes:2,
          downVotes:1,
          noOfAnswers:'3',
          questionTitle:'Web Development Requirements?',
          questionBody_1:'It meant to be',
          questionBody_2:'This is what I tried',
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
          _id: '2',
          upVotes:2,
          downVotes:1,
          noOfAnswers:'0',
          questionTitle:'Web Development Requirements?',
          questionBody_1:'It meant to be',
          questionBody_2:'This is what I tried',
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
          _id: '3',
          upVotes:2,
          downVotes:1,
          noOfAnswers:'1',
          questionTitle:'Web Development Requirements?',
          questionBody_1:'It meant to be',
          questionBody_2:'This is what I tried',
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
  return (
    <div className='question-details-page'>
        {
            questionsList.data===null ? <h1>Loading...</h1>:
            <>
            {
                questionsList.data.filter(question=>question._id===id).map((question)=>(
                <div key={question._id}>
                    <section className="question-details-container">
                        <h1>{question.questionTitle}</h1>
                        <div className="question-details-container-2">
                            <div className="question-votes">
                                <img src={upvote} alt=""  className='votes-icon' width='18' onClick={handleUpvote}/>
                                <p>{question.upVote.length - question.downVote.length}</p>
                                <img src={downvote} alt="" className='votes-icon' width='18' onClick={handleDownvote}/>
                            </div>
                            <div style={{width:"100%"}}>
                               
                                    <p className='question-body'>{question.questionBody_1}</p>
                                    <p className='question-body'>{question.questionBody_2}</p>
                                <div className="question-details-tags">
                                    {question.questionTags.map((tag)=>(
                                        <p key={tag}>{tag}</p>
                                    ))}
                                </div>
                                <div className="question-actions-user">
                                  <div>
                                    <button type="button" onClick={handelShare}>Share</button>
                                    {
                                      User?.result?._id===question?.userId &&
                                      (<button type='button' onClick={handelDelete}>Delete</button>)
                                    }
                                    
                                </div>
                                <div>
                                    <p>asked {moment(question.askedOn).fromNow()}</p>
                                    <Link to= {`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                        <Avatar backgroundColor="orange" px='8px' py='5px' style={{textDecoration:"none"}}>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                        <div>
                                        {question.userPosted}
                                    </div>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                      {
                        question.noOfAnswers!==0 && (
                        <section>
                        <h3>{question.noOfAnswers} Answers</h3>
                        <DisplayAnswer key={question._id} question={question} />
                        </section>)
                      }
                    </section>
                    <section className='post-ans-container'>
                        <h3>Your Answer</h3>
                        <form onSubmit={(e)=>{handelPostAns(e,question.answer.length)}}>
                          <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{setAnswer(e.target.value)}}></textarea>
                          <div><input type="Submit" className='post-ans-btn' value="Post Your Answer"/></div>
                          
                        </form>
                        <p>
                          Browse other questions tagged {question.questionTags.map((tag)=>(
                            <Link to="./Tags" className='ans-tags' key={tag} > {tag} </Link>
                          ))} or
                          <Link to="/AskQuestion" style={{textDecoration:"none",color:'#009dff'}}> ask your own question.</Link>
                        </p>
                    </section>
                </div>))
            }
            </>
        }
       
    </div>
  )
}

export default QuestionsDetails