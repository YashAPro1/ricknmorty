import React, {useEffect, useState} from 'react';
// import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import Card from './Card';
import axios from 'axios';

const CharacterInfo = (props) => {
  return (
    <>
    <div className="home-page" style={{borderRadius:"1rem",display:"flex",textAlign:"left",boxShadow:"0 4px 4px 0 rgba(0,0,0,0.1)", padding:"0.5rem",overflow:"hidden"}}>
      
           <div className="all" style={{width:"100%",objectFit:"centain",display:"flex",flexWrap:"wrap"}} >
           <div className="img" style={{width:"45%",display:"flex"}}>
               <img style={{borderRadius:"2rem",width:"100%"}} src={props.image} alt="" />
           </div>  
           <div className="detailed-info" style={{padding:"1rem"}}>
            <div className="all-info" style={{width:"100%"}}>

               <div className="n1">
                   <div className='n11'>
                       <span><b>Name: </b></span>{props.name}
                   </div>
                   <div className='n11'>
                       <span><b>Status: </b></span> {props.status}
                   </div>
               </div>
               <div className="n1" >
                   <div className='n11'>
                       <span><b>Species: </b></span>{props.species}
                   </div>
                   <div className='n11' >
                       <span><b>Gender: </b></span> {props.gender}
                   </div>
               </div>
               <div className="n1">
                   <div className='n11'>
                       <span><b>Origin: </b></span>{props.origin}
                   </div>
               </div>
               <span><b>Location: </b></span> {props.location}
            </div>
            <div className="Episode-heading" style={{margin:"0px",}}>
              <h4>All Episodes</h4>
            </div>
            <div className="allepisodes" style={{border:"2px solid black",height:"52vh",overflow:"scroll",padding:"1rem",width:"100%"}}>
              {props.episodes.map((episode,i)=>(
                <div className="episode" style={{padding:"0.25rem",border:"2px black"}}>
                  {episode}
                </div>
              ))}
              
            </div>
           </div>
           
       </div> 
    </div>
    
    </>
  );
};

export default CharacterInfo;
