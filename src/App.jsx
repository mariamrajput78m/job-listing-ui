import React from 'react'
import Card from './component/card'

const App = () => {

  const arr = [
    {
      id: 1,
      name: "Amazon",
      time: "5 days ago",
      skill: "Senior UI/UX Designer",
      salary: "$120/hr",
      location: "Lahore, Pakistan",
      img: "/amazon.png"
    },
    {
      id: 2,
      name: "Google",
      time: "30 days ago",
      skill: "Graphic Designer",
      salary: "$150-220k",
      location: "Kochi, India",
      img: "https://cdn.simpleicons.org/google"
    },
    {
      id: 3,
      name: "Dribbble",
      time: "18 days ago",
      skill: "Senior Motion Designer",
      salary: "$85/hr",
      location: "Chennai, India",
      img: "https://cdn.simpleicons.org/dribbble"
    },
    {
      id: 4,
      name: "Figma",
      time: "5 days ago",
      skill: "UX Designer",
      salary: "$200-250k",
      location: "Bangalore, India",
      img: "https://cdn.simpleicons.org/figma"
    },
    {
      id: 5,
      name: "Airbnb",
      time: "5 days ago",
      skill: "Junior UI/UX Designer",
      salary: "$100/hr",
      location: "Delhi, India",
      img: "https://cdn.simpleicons.org/airbnb"
    },
    {
      id: 6,
      name: "Apple",
      time: "5 days ago",
      skill: "Graphic Designer",
      salary: "$85-120k",
      location: "Kerala, India",
      img: "https://cdn.simpleicons.org/apple"
    },
    {
      id: 7,
      name: "Netflix",
      time: "2 days ago",
      skill: "Product Designer",
      salary: "$130/hr",
      location: "Karachi, Pakistan",
      img: "https://cdn.simpleicons.org/netflix"
    },
        {
      id: 8,
      name: "Spotify",
      time: "10 days ago",
      skill: "UI Designer",
      salary: "$95-140k",
      location: "Islamabad, Pakistan",
      img: "https://cdn.simpleicons.org/spotify"
    },
    {
      id: 9,
      name: "Microsoft",
      time: "7 days ago",
      skill: "Senior Product Designer",
      salary: "$180-240k",
      location: "Mumbai, India",
      img: "/microsoft.png"
    },
    {
      id: 10,
      name: "Meta",
      time: "1 day ago",
      skill: "Interaction Designer",
      salary: "$110/hr",
      location: "Faisalabad, Pakistan",
      img: "https://cdn.simpleicons.org/meta"
    }

  ]
  return (
  <div className='parent'>
    {arr.map(function (elem) {
      return (
        <Card
          key={elem.id}
          name={elem.name}
          time={elem.time}
          skill={elem.skill}
          salary={elem.salary}
          location={elem.location}
          img={elem.img}
        />
      )
    })}
  </div>
)
}

export default App
