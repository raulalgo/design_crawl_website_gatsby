import React from 'react'
import Link from 'gatsby-link'

import Panel from '../components/Panel';
import Presentacion from '../components/Presentacion';
import Reparto from '../components/Reparto';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <Panel>
      <Presentacion />
    </Panel>
    <Panel negative>
      <Reparto />
    </Panel>
    <Panel>
      <h2>Ya está, tampoco hay mucho más que explicar</h2>
      <p>Si te apetece acompañarnos, te esperamos con los brazos abiertos. Y si tienes algo que decirnos, nos puedes escribir por twitter, facebook o directamente email.</p>
    </Panel>
    <Panel negative>
      <Footer />
    </Panel>
  </div>
)

export default IndexPage
