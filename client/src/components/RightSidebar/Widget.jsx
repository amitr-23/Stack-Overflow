import React from 'react'
import'./RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'
const Widget = () => {
  return (
    <div className='widget'>
      <p style={{fontSize:'15px'}}>Hello World!</p>
      <div className='right-sidebar-div-1'>
        
          <p style={{border:'none',backgroundColor:'#fdf7e2'}}>This is a collaboratively edited question and answer site for <span style={{fontWeight:'bold'}}>professional and enthusiast programmers</span>. It's 100% free.</p>
        
      </div>
      <h4>The Overflow blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt='pen' width='18'/>
          <p>What it’s like being a professional workplace bestie (Ep. 603)</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt='pen' width='18'/>
          <p>Journey to the cloud part I: Migrating Stack Overflow Teams to Azure</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt='comment' width='18'/>
          <p>
              Moderation strike: Results of negotiations
          </p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt='pen' width='18'/>
          <p>Our Design Vision for Stack Overflow and the Stack Exchange network</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blacklogo} alt='blacklogo' width='18'/>
          <p>
              Temporary policy: Generative AI (e.g., ChatGPT) is banned
          </p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blacklogo} alt='blacklogo' width='18'/>
          <p>
            Discussions experiment launching on NLP Collective
          </p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blacklogo} alt='blacklogo' width='18'/>
          <p>
            Call for volunteer reviewers for an updated search experience: OverflowAI Search
            </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <p style={{border:'none',padding:0}}>35</p>
          <p>Apache AGE (of Despair)</p>
        </div>
      </div>
    </div>
  )
}

export default Widget