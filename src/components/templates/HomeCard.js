import React from 'react'
import {Link} from 'react-router-dom';

import { Card, Image } from 'semantic-ui-react'

import './HomeCard.css';

const HomeCard = (props) => {
     
    const {path, title, count, total, image} = props;
    return (
    <Link to={path}>
        <Card className="HomeCard">
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