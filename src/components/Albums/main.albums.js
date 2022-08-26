import { Container } from 'react-bootstrap';
import react from 'react';
import Collection from './collection.albums';

const Albums = (props) => {

   return (
      <react.Fragment>
         <Container className="mt-2">
            <h3>{props.title}</h3>
            <i>{props.description}</i>
            <Collection/>
         </Container>
      </react.Fragment>
   )
   
}


export default Albums;