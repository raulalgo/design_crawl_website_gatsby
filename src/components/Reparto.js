'use strict';

import React        from  'react';
import styled       from  'styled-components';
import Invitado     from    './Invitado';

/* Styled Components */
const Invitados = styled.section`
    margin: 48px 0;
`;

class Reparto extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){  
        return (
            <section>
                <h2>El reparto</h2>
                <p>Vendrán a darnos tema de conversación para el resto del día: </p>
                <Invitados>
                    <Invitado  ado avatar=""
                              nombre="Hugo Cornejo"
                              cargo="Head of Design"
                              empresa="Monzo" 
                              link="" />
                    <Invitado avatar=""
                              nombre="Jorge Álvarez"
                              cargo="UX Designer"
                              empresa="Designit" 
                              link="" />
                    <Invitado avatar=""
                              nombre="Inaiyali de León"
                              cargo="Lead Designer"
                              link="" />
                    <Invitado avatar=""
                              nombre="Yuan Chen"
                              cargo="UX Designer"
                              empresa="Farfetch" 
                              link="" />
                    <Invitado avatar=""
                              nombre="Sara Rivera"
                              cargo="Head of Design"
                              empresa="El Parking" 
                              link="" />
                    <Invitado avatar=""
                              nombre="Raúl Álvarez"
                              cargo="Lead UX"
                              empresa="Cluster Seven" 
                              link="" />
                </Invitados>
                
            </section>
        );
    }

    /* Functions */
    
}
export default Reparto

/*

<div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Inaiyali De León Persson,</h3> <span className="titulo">LEAD DESIGNER EN CANONICAL</span></section></div>
<div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Yuan Chen,</h3> <span className="titulo">UX DESIGNER EN FARFETCH</span></section></div>
<div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Sara Rivera,</h3> <span className="titulo">HEAD OF DESIGN EN EL PARKING</span></section></div>
<div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Raúl Álvarez,</h3> <span className="titulo">LEAD UX EN CLUSTER SEVEN</span></section></div>

                */