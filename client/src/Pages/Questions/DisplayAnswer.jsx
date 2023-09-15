import React from 'react'
import{Link,useParams,useLocation} from 'react-router-dom'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import Avatar from '../../components/Avatar/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAnswer } from '../../actions/question'

const DisplayAnswer = ({question}) => {
    const User = useSelector((state)=>(state.currentUserReducer));
    const dispatch = useDispatch();
    const {id} = useParams();
    const location = useLocation()
    const url = 'http://localhost:3000'

    const handelDelete=(answerId,noOfAnswers)=>{
        dispatch(deleteAnswer(id,answerId,noOfAnswers-1));
    }
    const handelShare= ()=>{
        copy(url+location.pathname)
        alert('Copied url :'+ url+location.pathname)
      }
  return (
    <div>
        {
        question.answer.map((ans)=>(
            <div className="display-ans" key={ans._id}>
                <p>
                    {ans.answerBody}
                </p>
                <div className="question-actions-user">
                    <div>
                    <button type="button" onClick={handelShare}>Share</button>
                    {
                         User?.result?._id===ans?.userId &&
                        (<button type='button' onClick={()=>handelDelete(ans._id,question.noOfAnswers)}>Delete</button>)
                    }
                    </div>
                    <div>
                        <p>answered {moment(ans.answerdOn).fromNow()}</p> 
                        <Link to= {`/Users/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                        <Avatar backgroundColor="green" px='8px' py='5px' style={{textDecoration:"none"}}>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                        <div>
                                        {ans.userAnswered}
                                        </div>  
                        </Link> 
                    </div> 
                </div>
            </div>
        ))
    }
    </div>
    
  )
}

export default DisplayAnswer