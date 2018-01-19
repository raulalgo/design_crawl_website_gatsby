'use strict';

import React        from  'react';
import styled       from  'styled-components';

/* Styled Components */
const Fondo = styled.section`
    background-color: ${props => props.negative ? props.theme.dark : props.primary ? props.theme.primary : props.theme.white};
    color: ${props => (props.negative || props.primary) ? props.theme.white : props.theme.dark };
`;

const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr 85px 85px 85px 85px 1fr;
    grid-template-areas: "ml c c c c mr";

    @media (min-width: 800px) {
        grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
        grid-template-areas: "ml c c c c mr" 
    }

`;

const Content = styled.section`
    grid-area: c;

    padding: 48px 0;
`;

class Panel extends React.Component {
    constructor(props) {
        super(props);

        
    }

    componentWillMount(){
        console.log(this.props.negative);
    }

    render(){
        return (
            <Fondo negative={this.props.negative}
                    primary={this.props.primary}>
                <Grid>
                    <Content>{this.props.children}</Content>
                </Grid>
            </Fondo>
        );
    }

    /* Functions */
    
}
Panel.defaultProps = {
    negative: false,
    primary: false
};

export default Panel;
