import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link'

import Panel from '../components/Panel';
import Presentacion from '../components/Presentacion';
import Reparto from '../components/Reparto';
import Footer from '../components/Footer';
import Boton from '../components/Boton';

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
      <h2>¿Nos quieres acompañar?</h2>
      <p>Andamos un poco justos de espacio, pero alguien más seguro que cabe. Escríbenos y te contamos.</p>
      <Boton>Quiero participar</Boton>
    </Centrado>
    <Panel negative>
      <Footer />
    </Panel>
  </Principal>
)

export default IndexPage
