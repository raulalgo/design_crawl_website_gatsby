'use strict';

import React        from  'react';
import styled       from  'styled-components';

import Avatar       from    './Avatar';


/* Styled Components */
const Enlace = styled.a`
    text-decoration: none;
`;

const Person = styled.section`
    display: grid;
    grid-template-columns: 108px 1fr;
    grid-template-areas: "a i";

    margin-bottom: 24px;

    @media(min-width: 800px) {
        grid-gap: 24px;
        grid-template-columns: ${props => props.avatarSize ? props.avatarSize : '96'}px 1fr;
        /* grid-gap: 24px; */
    }
`;

const Informacion = styled.section`
    
    grid-area: i;
    align-self: center;

    padding: 12px;

    @media(min-width: 800px) {
        padding: 0 36px;
    }
`;

const Nombre = styled.h3`
    margin: 0 0 8px 0;
    font-size: 1.6em;
    color: ${props => props.theme.accent};

    @media(min-width: 800px) {
        /* display: inline-block; */
        font-size: 3.2em;
    }
`;
const Trabajo = styled.span`
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: ${props => props.theme.dark};
`;

class Invitado extends React.Component {
    AvatarSize;

    constructor(props) {
        super(props);

        this.AvatarSize = 144;
    }

    render(){
        return (
            <Enlace href={this.props.link}>
                <Person avatarSize={this.AvatarSize} className="person" negative={this.props.negative}>
                    <Avatar src={this.props.avatar} size={this.AvatarSize} square negative={this.props.negative} />
                    <Informacion>
                        <Nombre>{this.props.nombre}</Nombre> 
                        <Trabajo> {this.props.cargo} en {this.props.empresa}</Trabajo>
                    </Informacion>
                </Person>
            </Enlace>
        );
    }

    /* Functions */
    
}
export default Invitado