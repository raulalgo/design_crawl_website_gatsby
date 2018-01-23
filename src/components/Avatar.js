'use strict';

import React        from  'react';
import styled       from  'styled-components';

/* Styled Components */
const Circle = styled.section`
    background-image: url('${props => props.src}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${props => props.negative ? props.theme.white : props.theme.dark};
    width: 108px;
    height: 108px;
    border-radius: ${props => props.square ? '0' : '100'}%;

    @media(min-width: 800px) {
        width: ${props => props.size }px;
        height: ${props => props.size }px;
    }
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
            <Circle src={this.props.src}
                    square={this.props.square} 
                    size={this.props.size} 
                    negative={this.props.negative}>
                    </Circle>
        );
    }

    /* Functions */

}

Avatar.defaultProps = {
    src: './nada.jpg',
    square: false,
    size: 96,
}
export default Avatar;
