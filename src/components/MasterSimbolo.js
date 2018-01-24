'use strict';

import React        from  'react';
import styled       from  'styled-components';

/* Styled Components */

const Estilo = styled.section`
    margin-top: 2em;
    justify-self: center;
    #vector {
        width: ${props => props.width}px;
        path {
            fill: white;
        }
    }

    @media(min-width: 800px) {
        margin-top: 2em;
    }
`;

class DesignitLogo extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <Estilo width={this.props.width}><svg id="vector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.45 238.45"><defs><style></style></defs><title>master_simbolo</title><g id="Layer_2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" class="cls-1" d="M178.83,0H59.62A59.6,59.6,0,0,0,0,59.61V178.84a59.6,59.6,0,0,0,59.62,59.62H178.83a59.6,59.6,0,0,0,59.62-59.62V59.61A59.6,59.6,0,0,0,178.83,0ZM119.22,47.68A35.77,35.77,0,1,1,83.46,83.46,35.77,35.77,0,0,1,119.22,47.68ZM214.6,178.84a35.76,35.76,0,0,1-35.77,35.77H59.62a35.76,35.76,0,0,1-35.77-35.77V110.59a108.26,108.26,0,0,0,190.76,0Z"/></g></g></svg></Estilo>
        );
    }

    /* Functions */
    
}
export default DesignitLogo