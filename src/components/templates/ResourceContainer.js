import React from 'react';

import {Container, Header, Divider, List} from 'semantic-ui-react';
import ResourceCard from './ResourceCard';

const ResourceContainer = ({list, type}) => {

    return (
        <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <Header as='h5'>
                {`${list.length} ${type}`}    
            </Header>
            <Divider />
            <List>
                {
                    list.map(url => {
                        return <ResourceCard key={url} type={type} url={url}/>
                    })
                }
            </List>
        </Container>   
    )
}

export default ResourceContainer;