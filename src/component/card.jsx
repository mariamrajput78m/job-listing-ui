import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>

        {/*top*/}
        <div className="top">
          <img src={props.img} alt={props.name}/>
          <button>Save <Bookmark /> </button>

        </div>

        {/*center*/}
        <div className="center">
          <h3>{props.name} <span>{props.time}</span></h3>
          <h2>{props.skill}</h2>
          <div>
            <h4>Part-Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        {/*bottom*/}
        <div className="bottom">
          <div>
            <h4>{props.salary}</h4>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
      
    </div>
  )
}

export default Card
