/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import '../TitleCards/TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


export default function TitleCards({title, category}) {

  const [apiData, setApiData] = useState([]);
const cardsRef= useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDhiNDg1YWZmNDg0ZmFjMzcwNTMzOTZiZTQxYmQyMCIsIm5iZiI6MTc1ODM3MzUwOC4zODYsInN1YiI6IjY4Y2VhNjg0NWQ1NDQyZjFlMWNjMmUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G2SPPbUiKQg2gJjwFu4EuSu5st2nKYLIIH8X54wcyWY'
  }
};




const handleWheel=(e)=>{
  e.preventDefault();
  cardsRef.current.scrollLeft += e.deltaY;
}


useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel)
},[]);

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
        return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.poster_path} alt="" />
          <p>{card.original_title}</p>
        </Link>
      })}</div>
    </div>
  )
}