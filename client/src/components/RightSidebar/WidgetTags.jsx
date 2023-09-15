import React from 'react'

const WidgetTags = () => {
  const tags=['c','css','firebase','html','java','mern','mongodb','express','mysql','next.js','nose.js','javascript','python','php','reactjs']
  return (
    <div className='widget-tags'>
      <h4>Watched Tags</h4>
      <div className='widget-tags-div'>
        {tags.map((tag)=>(
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  )
}

export default WidgetTags