import React, { useState } from 'react'
import './style.css'
import img1 from './image/1.jpg'
import img2 from './image/2.jpg'
import img3 from './image/3.jpg'
import img4 from './image/4.jpg'

const Card = () => {
  console.log(img1)
  const Data = [
    {
      name: 'Mountain View',
      img: img1,
      description: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
    },
    {
      name: 'To The Beach',
      img: img2,
      description: 'Plan your next beach trip with these fabulous destinations',
    },
    {
      name: 'Desert Destinations',
      img: img3,
      description: 'Its the desert you have always dreamed of',
    },
    {
      name: 'Explore The Galaxy',
      img: img4,
      description: 'Seriously, straight up, just blast off into outer space today',
    },
  ]

  const [card, setCard] = useState(Data)
  return (
    <>
      <main className="page-content">
        {
          card.map((element) => {
            return (

              <div className="card">
                <img src={element.img} width="100%" height="100%" />
                <div className="content">
                  <h2 className="title">{element.name}</h2>
                  <p className="copy">{element.description}</p>
                  <button className="btn"><span>View Trips</span></button>
                </div>
              </div>
            )
          })
        }

      </main>
    </>
  )
}

export default Card