'use strict';

import React        from  'react';
import styled       from  'styled-components';

/* Styled Components */
const BotonArea = styled.a`
    padding: 24px;
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.white };
    text-align: center;
    display: block;
    text-decoration: none;
    margin: 12px 0;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0px 2px 4px ${props => props.theme.shadowHigher}, 0px -2px 0px ${props => props.theme.shadowHigher} inset;
    transition: all ${props => props.theme.transitionTime} ease-out;
    font-weight: regular;
    font-size: 1.2em;

    &:hover {
        /* background-color: ${props => props.theme.accent};
        color: ${props => props.theme.dark}; */
        transition: all ${props => props.theme.transitionTime} ease-in;
        box-shadow: 0px 4px 8px ${props => props.theme.shadowHigher}, 0px -2px 0px ${props => props.theme.shadowHigher} inset;

        text-decoration: underline;
    }

    @media(min-width: 800px) {
        justify-self: end;
    }
`;

class Boton extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <BotonArea href="mailto:info@designonscreenscom">{this.props.children}</BotonArea>
        );
    }

    /* Functions */
    
}
export default Boton;