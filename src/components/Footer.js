'use strict';

import React from 'react';
import styled from 'styled-components';

import logoMasterPng from './logo_master.png';
import DesignitLogo from  './DesignitLogo';

const Pie = styled.footer`
  padding: 48px 0
`;

const Grid = styled.section`
  display: grid;

  @media (min-width: 800px){
    grid-template-columns: 1fr 1fr;
  }

  h4 {
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 400;
    letter-spacing: 0.1em;
  }

  section {
    div {
      text-align: center;
    }
  }
  section.right {
    @media(min-width:800px){
    text-align: right;
    }
  }

  section.left {
    margin-bottom: 48px;
  }

`;

const Centerer = styled.div`
  margin: 0 auto;
`;
const Master = styled.section`
`;

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Pie className="">
        <Grid>
            <section className="organiza left">
                <h4>Organiza</h4>
                <Centerer><a href="http://designonscreens.com/"><img src={logoMasterPng} width="250px"/></a></Centerer>
            </section> 
            <section className="patrocina right">
                <h4>Colabora</h4>
                <Centerer><a href="https://www.designit.com/"><DesignitLogo width={250}/></a></Centerer>
            </section>
        </Grid>
    </Pie>
    );
  }

}

export default Footer;
