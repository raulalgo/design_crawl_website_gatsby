import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';

import Header from '../components/Header/HeaderAltB';
import Panel from '../components/Panel';
import './index.css'

const white = '#FFFFFF';
const black = '#000000';
const blue = '#2A9DD6';
const yellow = '#FFD658';
const darkBlue = '#090831';
const reddish = '#ff4263';
const reddish2 = '#f44848';
const reddishDark = '#9f1f15';
const golden = '#b18f19';
const golden2 = 'rgba(215,177,70,1)';
const golden2RGBdim = 'rgba(215,177,70,0.2)';
const verdeAeight = '#031e0d';
const verdeAeightRGB100 = 'rgba(3,30,10,1)';
const verdeAeightRGB60 = 'rgba(3,30,10,0.6)';
const verdeAeightRGB40 = 'rgba(3,30,10,0.4)';
const verdeAeightRGB20 = 'rgba(3,30,10,0.2)';

const theme = {
    white: white,
    black: black,
    dark: verdeAeightRGB100,
    shadow: verdeAeightRGB20,
    shadowHigher: verdeAeightRGB20,
    accent: golden2,
    accentDim: golden2RGBdim,
    primary: blue,
    secondary: yellow,
    transitionTime: '0.1s'
};


const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="the design crawl"
        meta={[
          { name: 'description', content: 'El primer design crawl, organizado en Londres para alumnos, exalumnos y amigos del master de diseño gráfico y de interfaz de la Universidad Pontificia de Salamanca' },
          { name: 'keywords', content: 'diseño, Londres, pantallas, ux, interfaz, evento' },
        ]}
      />
      <Header />
      <div>
        {children()}
      </div>
    </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
