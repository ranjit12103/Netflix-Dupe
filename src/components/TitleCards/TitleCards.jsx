import React from 'react'
import '../TitleCards/TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
export default function TitleCards() {
  return (
    <div className='title-cards'>
      <h2>Popular On Netflix</h2>
      <div className="cards-list">
        {cards_data.map((card,index)=>{
        return <div className="card" key={index}>
          <img src={card.image} alt="" />
          <p>{card.name}</p>
        </div>
      })}</div>
    </div>
  )
}
