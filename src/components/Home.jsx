import React from 'react';
// import { Card, Carousel } from 'react-bootstrap';
import '../App.css'; // Import your CSS file
import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';


const HomePage = () => {
  const [apiData, setApiData] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [data1, setData1] = useState([]);

  // const fetchData1 = async () => {
  //   try {
  //     const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
  //     setApiData(response.data.results);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  const search_parameters = Object.keys(Object.assign({}, ...data1));

  function search(data) {

    return data.filter((data) =>

      search_parameters.some((name) =>

        data[name].toString().toLowerCase().includes(query)

      )

    );

  }

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        // setApiData(response.data.results);
        setData1(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData1();
  }, []);

  // const handleNextClick = (s) => {
  //   setPage(page+1)
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        setApiData(response.data.results);
        setData1(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    window.scrollTo(0,0)
  }, [page]);

  // console.log(apiData[0].name);
  return (
    <>
    {/* <Search/> */}
    <div className="home-page" >
       <div className="allcards" style={{display:"flex",flexWrap:"wrap",margin:"1rem"}}>
        {
          query == ""?
          <> 
           {apiData && apiData.map((card, index) => (
              <Card
                key={index}
                title={card.name}
                // content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                link={card.id}
                imageSrc={card.image}
              />
            ))}
          </>
          :
          <>
          {search(data1) && search(data1).map((dataObj,index)=>(
            <Card
            key={index}
            title={dataObj.name}
            // content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            link={dataObj.id}
            imageSrc={dataObj.image}
            episodes = {dataObj.episodes}
          />
            
          ))}
          </>
        }
      

    </div>
    
    </div>
    <div className="btnn">
      <button onClick={()=>setPage(page-1)} >Prev</button>
      <button>{page}</button>
      <button onClick={()=>{
        setPage(page+1)
      }}>Next</button>
    </div>

    <div className="nav-right">
        <input type="text" placeholder="Search by name..." onChange={(e) => setQuery(e.target.value)} />
        <button>Search</button>
      </div>
    </>
  );
};

export default HomePage;
