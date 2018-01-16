'use strict';

import React        from  'react';
import styled       from  'styled-components';

import Avatar       from    './Avatar';


/* Styled Components */
const Person = styled.section`
    display: grid;
    grid-template-columns: 72px 1fr;
    grid-template-rows: 72px;
    grid-gap: 12px;
    grid-template-areas: "a i";

    margin-bottom: 24px;

    @media(min-width: 800px) {
        grid-gap: 24px;
    }
`;

const Informacion = styled.section`
    padding-top: 4px;
    grid-area: i;
    align-self: center;
`;

const Nombre = styled.h3`
    margin: 0 0 8px 0;
    font-size: 1.6em;

    @media(min-width: 800px) {
        display: inline-block;
        font-size: 2.4em;
    }
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
            <Person>
                <Avatar />
                <Informacion>
                    <Nombre>{this.props.nombre},</Nombre> 
                    <Trabajo> {this.props.cargo} en {this.props.empresa}</Trabajo>
                </Informacion>
            </Person>
        );
    }

    /* Functions */
    
}
export default Invitado