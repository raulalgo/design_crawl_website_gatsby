import React from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link'

import Panel from '../components/Panel';
import Presentacion from '../components/Presentacion';
import Reparto from '../components/Reparto';
import Footer from '../components/Footer';

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

const IndexPage = () => (
  <Principal className="sectionPrincipal">
    {/* <Panel>
      <GridPresent>
        <Presentacion />
      </GridPresent>
    </Panel> */}
    <Reparto  />
    <Panel>
      <h2>Ya está, tampoco hay mucho más que explicar</h2>
      <p>Si te apetece acompañarnos, te esperamos con los brazos abiertos. Y si tienes algo que decirnos, nos puedes escribir por twitter, facebook o directamente email.</p>
    </Panel>
    <Panel negative>
      <Footer />
    </Panel>
  </Principal>
)

export default IndexPage
