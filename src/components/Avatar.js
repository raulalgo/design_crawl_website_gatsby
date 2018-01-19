'use strict';

import React        from  'react';
import styled       from  'styled-components';

/* Styled Components */
const Circle = styled.section`
    background-color: ${props => props.negative ? props.theme.white : props.theme.dark};
    border-radius: 100%;
    width: ${props => props.size }px;
    height: ${props => props.size }px;

    justify-self: center;
    margin: 0 auto;
`;

class Avatar extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        console.log('Avatar negative: ' + this.props.negative)
        return (
            <Circle size={this.props.size} negative={this.props.negative}></Circle>
        );
    }

    /* Functions */

}

Avatar.defaultProps = {
    size: 96,
}
export default Avatar;
