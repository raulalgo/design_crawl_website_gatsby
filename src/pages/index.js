import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link'

import Panel from '../components/Panel';
import Presentacion from '../components/Presentacion';
import Reparto from '../components/Reparto';
import Footer from '../components/Footer';
import Boton from '../components/Boton';
import Agenda from '../components/Agenda';

const GridPresent = styled.section`

    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-areas: "c m";
        
        section.presentacion {
            grid-area: c;
        }
    }

`;
const Principal = styled.section`
  color: ${props => props.theme.dark};
`;
const Centrado = styled.section`
    margin: 0 auto;
    padding: 24px;
    @media(min-width: 1000px) {
        max-width: 900px;
    }

    display: grid;

    >p{
      font-weight: 300;
      font-size: 1.2em;
      line-height: 1.4em;
      a {
        color: ${props => props.theme.dark};
        background-color: ${props => props.theme.accent};
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }}
`;

const IndexPage = () => (
  <Principal className="sectionPrincipal">
    {/* <Panel>
      <GridPresent>
        <Presentacion />
      </GridPresent>
    </Panel> */}
    <Reparto  />
    <Centrado>
      <h2>Agenda</h2>
      <Agenda />
    </Centrado>
    <Centrado>
      <h2>¿Nos quieres acompañar?</h2> 
      <p>Andamos un poco justos de espacio, pero alguien más seguro que cabe. Escríbenos un email a <a href="mailto:designonscreens@upsa.es">designonscreens@upsa.es</a> y te contamos.</p>
      <Boton link="mailto:designonscreens@upsa.es">Escríbenos</Boton>
    </Centrado>
    <Panel negative>
      <Footer />
    </Panel>
  </Principal>
)

export default IndexPage
