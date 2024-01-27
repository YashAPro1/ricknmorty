import React, { useState } from 'react';
import {  Link } from 'react-router-dom';

const Card = ({title,imageSrc,link,content}) => {
  const [isHovered, setIsHovered] = useState(false);
//   const history = useHistory();

  const handleCardClick = () => {
    console.log("click  ")
  };

  return (
    <>
    <Link to={`/character/${link}`}>
    <div
      className="card1"
      style={{
        border: '1px solid #ccc',
        borderRadius: '1rem',
        margin: '1.25rem',
        position: 'relative',
        marginBottom:"2rem",
        fontSize:"1rem",
        cursor: 'pointer', 
        display:"flex",
        color:"#fff",
        flexDirection:"column",
        boxShadow: "0 10px 10px 0 rgba(0, 0, 0, 0.5)",
        // textDecoration:"None",
        width:"240px",
        transform: 'scale(1.1)'// Ensure the image doesn't overflow the card
      }}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ marginBottom: '0.5rem'}}>
        <img
          src={imageSrc}
          alt={title}
          style={{height: 'auto',width:"100%",borderRadius:"1rem 1rem 0 0"}}
        />
      </div>
      <div className="cont" style={{marginLeft:"0.5rem"}}>

      <h2 style={{textAlign:"center",textDecoration:"none"}} >{title}</h2>
      {/* <p >{content}</p>     */}
      </div>

      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '-0.5px',
            cursor: 'pointer',
            backgroundColor:"rgba(0,0,0,0.8)",
            width:"100%",
            transition: 'transform 1s ease-in-out',
            fontSize:"50px",
            borderRadius:"1rem 1rem 0 0"
          }}
        >
          <span role="img" aria-label="link-icon" style={{position:"relative",color:"black",marginLeft:"70%",borderRadius:"1rem"}} onClick={handleCardClick}>
            🔗
          </span>
        </div>
      )}
    </div>
    </Link>
    </>
  );
};

export default Card;
