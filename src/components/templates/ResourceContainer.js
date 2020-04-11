import React from 'react';

import {Container, Header, Divider, List} from 'semantic-ui-react';
import ResourceCard from './ResourceCard';

const ResourceContainer = ({parent, child}) => {

    return (
        <Container style={{backgroundColor: '#f7f7f7', padding: '20px', margin:'20px'}}>
            <Header as='h5'>
                {`${parent[child].length} ${child}`}    
            </Header>
            <Divider />
            <List>
                {
                    parent[child].map(childUrl => {
                        return <ResourceCard key={childUrl} type={child} url={childUrl}/>
                    })
                }
            </List>
        </Container>   
    )
}

export default ResourceContainer;