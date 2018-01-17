'use strict';

import React from 'react';
import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  grid-template-columns: 80px 80px 80px 80px;
  grid-template-rows: 80px 80px 80px;
  grid-template-areas: "a a a a"
                       "t t t t"
                       "d x x x";

  @media (min-width: 800px){
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 200px 200px 200px;
  }
`;

const Ante = styled.section`
  grid-area: a;

  display: grid;
  grid-template-columns: 1fr 1fr;
  font-weight: bold;
  font-size: 0.8em;

  align-self: end;

  div.right {
    text-align: right;
  }

  @media (min-width: 800px) {
    font-size: 1.2em;
  }
`;

const Title = styled.h1`
  grid-area: t;
  font-weight: ${props => props.primary ? '900' : '900'};
  font-size: 2.7em;
  margin: 0;
  letter-spacing: -0.02em;
  
  align-self: center;

  @media (min-width: 800px) {
    font-size: 6.8em; 
  }
`;

const Divider = styled.div`
  background-color: ${props => props.primary ? props.theme.secondary : props.theme.black};
  height: 12px;
  grid-area: d;
`;



class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Grid>
          <Ante className="anteTitulo">
              <div className="fecha">24 de marzo de 2018</div>
              <div className="ubicacion right">Londres, Reino Unido</div>
          </Ante>
          <Title primary={this.props.primary}>the design crawl</Title>
          <Divider primary={this.props.primary}></Divider>
        </Grid>
      </header>
    );
  }

}

Header.defaultProps = {
  primary: false
}

export default Header;
