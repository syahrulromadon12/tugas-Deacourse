import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';
import Loaders from '../Utilities/loaders';

const Collection = () => {
   const [datas, setDatas] = useState([]);
   const [limit, setLimit] = useState(3)
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      let isCanselled = false;
      if (isCanselled === false){
         setLoading(true);
         Axios({
            method: 'GET',
            url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
         }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false));
      } 
      
         //clean up render
         return () => { isCanselled = true }
      }, [limit]);

   const handleLimit = (option) =>{
      option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
   }  
   //loading state
   if (loading) return <Loaders />
   
   return (
      <React.Fragment>
         <h3>fetching images API</h3>
         <p>{limit} Collection</p>
         <Carousel>
            {datas.map((data, i) => {
               return(
                  <Carousel.Item  key={i}>
                  <img
                     className="d-block w-100"
                     src={data.url}
                     alt="First slide"
                     height={450}
                     width={450}
                  />
                  <Carousel.Caption>
                     <h3>{data.title}</h3>
                  </Carousel.Caption>
                  </Carousel.Item>

                  )
               }
            )}
         </Carousel>
         <br />
         <ButtonGroup className='d-flex justify-content-center gap={3}'>
            <Button variant="primary" onClick={() => handleLimit("+")}>add</Button>
            {limit > 1 &&
            <Button variant="warning" onClick={() => handleLimit("-")}>delet</Button>
            }
         </ButtonGroup>
      </React.Fragment>
   );
};

export default Collection;