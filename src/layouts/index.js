import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';

import Header from '../components/Header/HeaderAlt';
import Panel from '../components/Panel';
import './index.css'

const white = '#FFFFFF';
const black = '#000000';
const blue = '#2A9DD6';
const yellow = '#FFD658';

const theme = {
    white: white,
    black: black,
    primary: blue,
    secondary: yellow
};


const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
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
