import React from 'react'
import {Link} from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react'

const HomeCard = (props) => {
     
    const {path, title, count, total, image} = props;
    return (
    <Link to={path}>
        <Card>
        <Image src={image}/>
        <Card.Content style={{backgroundColor: '#ffffff'}}>
        <Card.Header><p style={{fontSize: '15px', textAlign: 'left'}}>{title}</p></Card.Header>
        </Card.Content>
        <Card.Content extra style={{backgroundColor: 'black', textAlign: 'left'}}>
        <p style={{color:'white', fontSize: '10px'}}> {count} / {total}</p>
        </Card.Content>
    </Card>
    </Link>
  
)}

export default HomeCard;


// const HomeCard = () => (
//     <Card>
//       <Image src='/images/starwars1.jpg' wrapped ui={false} />
//       <Card.Content>
//         <Card.Header as="h1">Matthew</Card.Header>
//         <Card.Meta>
//           <span className='date'>Joined in 2015</span>
//         </Card.Meta>
//         <Card.Description>
//           Matthew is a musician living in Nashville.
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <a>
//           <Icon name='user' />
//           22 Friends
//         </a>
//       </Card.Content>
//     </Card>
//   )
  
//   export default HomeCard;