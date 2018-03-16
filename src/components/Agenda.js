'use strict';

import React        from  'react';
import styled       from  'styled-components';
import propTypes	 from	'prop-types';

/* Styled Components */
const Base = styled.section`
`;

const Row = styled.section`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 48px;

    padding: 24px;

    &:nth-child(odd) {
        background-color: ${props => props.theme.accentDim};
    }
`;

const Time = styled.section`
    justify-self: end;
    align-self: center;
    margin: 0;
    opacity: 0.2;
    font-size: 3em;
    @media(min-width: 800px){
        font-size: 4em;
    }
    `;

const Ponente = styled.section`
`;

const Ponencia = styled.h3`
    margin: 0;
    opacity: 0.8;
    margin-bottom: 12px;
    font-size: 1.8em;
    @media(min-width: 800px){
        font-size: 2.8em;
    }

`;
const Autor = styled.p`
    margin: 0;
    font-size: 1em;

    @media(min-width: 800px){
        font-size: 1.2em;
    }
`;

const Lunch = styled(Row)`
    border-top: 8px solid rgba(0,0,0,0.1);
    border-bottom: 8px solid rgba(0,0,0,0.1);

    p {
        align-self: center;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        opacity: 0.4;
        font-size: 1.2em;
    }
`;

class Agenda extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
        <Base className={this.props.className}>
            <Row>
                <Time>10:00</Time>
                <Ponente>
                    <Ponencia>¿Por qué 'The Design Crawl'?</Ponencia>
                    <Autor>JuanRa Martín</Autor>
                </Ponente>
            </Row>
            <Row>
                <Time>10:15</Time>
                <Ponente>
                    <Ponencia>Desgin Systems</Ponencia>
                    <Autor>Inayaili de León</Autor>
                </Ponente>
            </Row>
            <Row>
                <Time>10:45</Time>
                <Ponente>
                    <Ponencia>Diseñar para la trastienda</Ponencia>
                    <Autor>Yolanda Martín</Autor>
                </Ponente>
            </Row>
            <Row>
                <Time>11:15</Time>
                <Ponente>
                    <Ponencia>Diseño de producto</Ponencia>
                    <Autor>Sara Rivera</Autor>
                </Ponente>
            </Row>
            <Row>
                <Time>11:45</Time>
                <Ponente>
                    <Ponencia>Monzo showcase</Ponencia>
                    <Autor>Hugo Cornejo</Autor>
                </Ponente>
            </Row>
            <Lunch>
                <Time>12:15</Time>
                <p>Parada para comer</p>
            </Lunch>
            <Row>
                <Time>13:30</Time>
                <Ponente>
                    <Ponencia>Entre el negocio y el usuario</Ponencia>
                    <Autor>Mesa Redonda: Raúl Álvarez, Pablo Maroñas y Jorge Álvarez</Autor>
                </Ponente>
            </Row>
        </Base>
        );
    }

    /* Functions */
    
}

Agenda.defaultProps={};

Agenda.propTypes={
    children: propTypes.string,
    className: propTypes.string,
};

export default Agenda;
