'use strict';

import React        from  'react';
import styled       from  'styled-components';
import Invitado     from    './InvitadoVert';

/* Styled Components */
const CenterWrap = styled.section`
    margin: 0 auto;
    @media(min-width: 1000px) {
        max-width: 900px;
    }
`

const InvitadosHoriz = styled.section`
    margin: 48px 0;
`;

const InvitadosVert = styled.section`
    display: grid; 

    @media(min-width: 600px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 12px;
    }
    @media(min-width: 900px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
    }
`;


class Reparto extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){  
        return (
            <CenterWrap>
                <h2>El reparto</h2>
                <p>Vendrán a darnos tema de conversación para el resto del día: </p>
                <InvitadosVert className>
                    <Invitado negative={this.props.negative}
                              avatar=""
                              nombre="Hugo Cornejo"
                              cargo="Head of Design"
                              empresa="Monzo" 
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <Invitado negative={this.props.negative}
                              avatar=""
                              nombre="Jorge Álvarez"
                              cargo="UX Designer"
                              empresa="Designit" 
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <Invitado negative={this.props.negative}
                              avatar=""
                              nombre="Inaiyali de León"
                              cargo="Lead Designer"
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <Invitado negative={this.props.negative}
                              avatar=""
                              nombre="Yuan Chen"
                              cargo="UX Designer"
                              empresa="Farfetch" 
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                   <Invitado negative={this.props.negative}
                              avatar=""
                              nombre="Sara Rivera"
                              cargo="Head of Design"
                              empresa="El Parking" 
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <Invitado negative={this.props.negative}
                              avatar=""
                              nombre="Raúl Álvarez"
                              cargo="Lead UX"
                              empresa="Cluster Seven" 
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                </InvitadosVert>
                
            </CenterWrap>
        );
    }

    /* Functions */
    
}
Reparto.defaultProps = {
    negative: false
}

export default Reparto

/*

<div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Inaiyali De León Persson,</h3> <span className="titulo">LEAD DESIGNER EN CANONICAL</span></section></div>
<div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Yuan Chen,</h3> <span className="titulo">UX DESIGNER EN FARFETCH</span></section></div>
<div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Sara Rivera,</h3> <span className="titulo">HEAD OF DESIGN EN EL PARKING</span></section></div>
<div className="ponenteBlock"><div className="avatar"></div><section className="ponenteInfo"><h3 className="ponente">Raúl Álvarez,</h3> <span className="titulo">LEAD UX EN CLUSTER SEVEN</span></section></div>

                */