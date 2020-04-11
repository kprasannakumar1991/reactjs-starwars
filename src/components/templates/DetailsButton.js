import React from 'react';

import {Button} from 'semantic-ui-react';

const DetailsButton = (props) => {

    const title = props.title ? props.title : 'Details \u2192';
    return (
        <Button basic color='grey' size='mini'>{title}</Button>

    )
}

export default DetailsButton;