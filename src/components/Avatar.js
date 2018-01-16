'use strict';

import React        from  'react';
import styled       from  'styled-components';

/* Styled Components */
const Circle = styled.section`
    background-color: ${props => props.theme.white};
    border-radius: 100%;
    width: 100%;
    height: 100%
`;

class Avatar extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <Circle></Circle>
        );
    }

    /* Functions */

}
export default Avatar;
