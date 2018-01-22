'use strict';

import React        from  'react';
import styled       from  'styled-components';

import Avatar       from    './Avatar';


/* Styled Components */
const Person = styled.section`
    padding: 36px;

    transition: all ${props => props.theme.transitionTime} ease-out;

    &:hover {
        background-color: ${props => props.theme.accent};
        transition: all ${props => props.theme.transitionTime} ease-in;
        box-shadow: 0px 4px 10px ${props => props.theme.shadow};
        cursor: pointer;

        h3 {
            color: ${props => props.theme.white};
            transition: all ${props => props.theme.transitionTime} ease-in;
        }
    }
`;

const Informacion = styled.section`
    padding-top: 4px;
    grid-area: i;
    text-align: center;

    margin: 36px 0;
`;

const Nombre = styled.h3`
    margin: 0 0 8px 0;
    font-size: 1.8em;
    color: ${props => props.theme.accent};
`;
const Trabajo = styled.span`
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

class Invitado extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <Person negative={this.props.negative}>
                <Avatar size={96} negative={this.props.negative} />
                <Informacion>
                    <Nombre>{this.props.nombre}</Nombre> 
                    <Trabajo> {this.props.cargo} en {this.props.empresa}</Trabajo>
                </Informacion>
                <p>{this.props.text}</p>
            </Person>
        );
    }

    /* Functions */
    
}
export default Invitado