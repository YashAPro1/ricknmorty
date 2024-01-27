import React from 'react';
// import { Card, Carousel } from 'react-bootstrap';
import '../App.css'; // Import your CSS file
import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterInfo from './CharacterInfo';
import { useParams } from 'react-router-dom';




function CharacterPage() {
    const [data, setData] = useState(null);
    const { cardID } = useParams();
    // console.log(cardID);
    // console.log(data);
    // console.log("yoo");
   
    const fetchData = async () => {
      try {
        const  response = await axios.get(`https://rickandmortyapi.com/api/character/${cardID}`);
        // console.log(`https://rickandmortyapi.com/api/character/${cardID}`);
        setData([response.data]);   
        // console.log(data);   
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    useEffect(() => {
    fetchData();    
        }, []);
        // console.log(data);   
  return (
    <div>
       <div>
       {data && data.map((card, index) => (
        <CharacterInfo
            key={card.id}
            image={card.image}
            name={card.name} 
            status={card.status}
            species={card.species}
            gender={card.gender}
            origin={card.origin.name}
            location={card.location.name}   
            episodes={card.episode}
        />
        ))} 

    </div>
    </div>
  )
}

export default CharacterPage
