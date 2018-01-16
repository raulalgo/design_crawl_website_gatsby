'use strict';

import React        from  'react';
import styled       from  'styled-components';
import {ThemeProvider} from 'styled-components';
import Panel    from    './Panel';
import Header   from    './Header';
import Presentacion from    './Presentacion';
import Reparto from './Reparto';
import Footer from './Footer';

/* Styled Components */
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


class Main extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Panel primary>
                        <Header primary/>
                    </Panel>
                    <Panel>
                        <Presentacion /> 
                    </Panel>
                    <Panel primary>
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
            </ThemeProvider>
        );
    }

    /* Functions */
    
}
export default Main


/*
<Panel>
                        <section className="presentacion">
                            <p>El próximo 24 de marzo, en Londres, queremos pegarnos un gran atracón de diseño en el primer gran Design Crawl que organizaremos entre los alumnos del Máster en Diseño Gráfico y de Interfaz, antiguos alumnos y todos los profesionales del sector que nos quieran acompañar.</p>
                            <p>El programa es sencillo y se realiza en tres actos.</p>
                            <ul>
                                <li><b>Mañana:</b> 6 charlas 6, en las oficinas de Designit en Londres, a partir de las 11 de la mañana</li>
                                <li><b>Tarde:</b> Visita al museo del diseño</li>
                                <li><b>Noche:</b>Acabaremos en el pub para lo que el cuerpo aguante.</li>
                            </ul>
                        </section>
                    </Panel>
                    <Panel negative>
                        <h2>El reparto</h2>
                        <p>Vendrán a <strike>compartir su sabiduría con nostoros</strike> darnos tema de conversación para el resto del día: </p>
                        <div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Hugo Cornejo,</h3> <span className="titulo">HEAD OF DESIGN EN MONZO</span></section></div>
                        <div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Jorge Álvarez,</h3> <span className="titulo">UX DESIGNER EN DESIGNIT</span></section></div>
                        <div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Inaiyali De León Persson,</h3> <span className="titulo">LEAD DESIGNER EN CANONICAL</span></section></div>
                        <div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Yuan Chen,</h3> <span className="titulo">UX DESIGNER EN FARFETCH</span></section></div>
                        <div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Sara Rivera,</h3> <span className="titulo">HEAD OF DESIGN EN EL PARKING</span></section></div>
                        <div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Raúl Álvarez,</h3> <span className="titulo">LEAD UX EN CLUSTER SEVEN</span></section></div>
                    </Panel>
                    <Panel>
                        <h2>Ya está, tampoco hay mucho más que explicar</h2>
                        <p>Si te apetece acompañarnos, te esperamos con los brazos abiertos. Y si tienes algo que decirnos, nos puedes escribir por twitter, facebook o directamente email.</p>
                    </Panel>
                    <Panel negative>
                        <footer className="">
                            <section className="padded">
                                <section className="organiza">
                                    <h4>Organiza</h4>
                                    <div>Master de diseño grafico y de interfaz</div>
                                </section>
                                <section className="patrocina">
                                    <h4>Patrocina</h4>
                                    <div>DesignIt</div>
                                    
                                </section>
                            </section>
                        </footer>
                    </Panel>
                    */