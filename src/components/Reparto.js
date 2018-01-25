'use strict';

import React        from  'react';
import styled       from  'styled-components';
import Invitado     from    './Invitado';
import InvitadoV    from    './InvitadoVert';

import HugoAvatar   from    './img/hugoc.png';
import JorgeAvatar from './img/jalv.jpg';
import PabloAvatar  from './img/pablom.png';
import RaulAvatar   from    './img/raula.png';
import SaraAvatar   from    './img/sarar.png';
import YolandaAvatar from   './img/yolandam.png';
import YailiAvatar  from    './img/yaili.png';
import JraAvatar    from    './img/jra.png';

/* Styled Components */
const CenterWrap = styled.section`
    margin: 0 auto;
    padding: 24px;
    @media(min-width: 1000px) {
        max-width: 900px;
    }

    section.person {
        transition: all ${props => props.theme.transitionTime} ease-out;
        &:hover {
            background-color: ${props => props.theme.accent};
            transition: all ${props => props.theme.transitionTime} ease-in;
            box-shadow: 0px 4px 10px ${props => props.theme.shadow};
            cursor: pointer;

            h3 {
                color: ${props => props.theme.white};
                transition: all ${props => props.theme.transitionTime} ease-in;
            }
        }
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
                <InvitadosHoriz >
                    <Invitado negative={this.props.negative}
                              avatar={HugoAvatar}
                              nombre="Hugo Cornejo"
                              cargo="Head of Design"
                              empresa="Monzo" 
                              link="https://www.linkedin.com/in/hugocornejo/"
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <Invitado negative={this.props.negative}
                              avatar={JorgeAvatar}
                              nombre="Jorge Álvarez"
                              cargo="Associate Director"
                              empresa="Designit" 
                              link="https://www.linkedin.com/in/jalvapic/"
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a.Vivamus rutrum placerat elit, et tincidunt enim posuere a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <Invitado negative={this.props.negative}
                              avatar={PabloAvatar}
                              nombre="Pablo Maroñas"
                              cargo="Lead Designer"
                              empresa="Designit" 
                              link="https://www.linkedin.com/in/pablomaronas/"
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a.Vivamus rutrum placerat elit, et tincidunt enim posuere a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <Invitado negative={this.props.negative}
                              avatar={YailiAvatar}
                              nombre="Inaiyali de León"
                              cargo="Product Principal"
                              empresa="Make Us Proud"
                              link="https://www.linkedin.com/in/yaili/"
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <Invitado negative={this.props.negative}
                              avatar={YolandaAvatar}
                              nombre="Yolanda Martín"
                              cargo="Head of Product Design"
                              empresa="Farfetch" 
                              link="https://www.linkedin.com/in/yolandamartin/"
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                   <Invitado negative={this.props.negative}
                              avatar={SaraAvatar}
                              nombre="Sara Rivera"
                              cargo="Head of Design"
                              empresa="El Parking" 
                              link="https://www.linkedin.com/in/sara-rivera-jurado-26633466/"
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <Invitado negative={this.props.negative}
                              avatar={RaulAvatar}
                              nombre="Raúl Álvarez"
                              cargo="Lead UX"
                              empresa="Cluster Seven" 
                              link="https://www.linkedin.com/in/raulalvarezgonzalez/"
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <Invitado negative={this.props.negative}
                              avatar={JraAvatar}
                              nombre="Juan Ramón Martín"
                              cargo="Director de 'Design On Screens'"
                              empresa="@fcomsalamanca" 
                              link="https://www.linkedin.com/in/juanramartin/"
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                </InvitadosHoriz>
                {/* <InvitadosVert >
                    <InvitadoV negative={this.props.negative}
                              avatar=""
                              nombre="Hugo Cornejo"
                              cargo="Head of Design"
                              empresa="Monzo" 
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <InvitadoV negative={this.props.negative}
                              avatar={JorgeAvatar}
                              nombre="Jorge Álvarez"
                              cargo="UX Designer"
                              empresa="Designit" 
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a.Vivamus rutrum placerat elit, et tincidunt enim posuere a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <InvitadoV negative={this.props.negative}
                              avatar=""
                              nombre="Inaiyali de León"
                              cargo="Lead Designer"
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <InvitadoV negative={this.props.negative}
                              avatar=""
                              nombre="Yuan Chen"
                              cargo="UX Designer"
                              empresa="Farfetch" 
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                   <InvitadoV negative={this.props.negative}
                              avatar=""
                              nombre="Sara Rivera"
                              cargo="Head of Design"
                              empresa="El Parking" 
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                    <InvitadoV negative={this.props.negative}
                              avatar=""
                              nombre="Raúl Álvarez"
                              cargo="Lead UX"
                              empresa="Cluster Seven" 
                              link=""
                              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec laoreet massa, eget mattis turpis. Donec at lobortis nisi. Vivamus rutrum placerat elit, et tincidunt enim posuere a." />
                </InvitadosVert> */}
                
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