'use strict';

import React        from  'react';
import styled       from  'styled-components';

/* Styled Components */
const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "title info";
`;

const TitleWrap = styled.section`
    grid-area: title;

    display: grid;
    grid-template-columns: 4em ; 4em;
    grid-template-rows: 8em 1fr 8em;
    grid-template-areas: "mt mt mt"
                         "ml ct mr"
                         "mb mb mb";
    /* padding: 8em 4em; */

    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
`;

const MarginArea = styled.section`
    grid-area: ct;
`;

const Title = styled.h1`
    font-weight: 900;
    font-size: 2.8em;
    margin: 0;
    letter-spacing: -0.02em;
    
    text-align: center;

    @media (min-width: 800px) {
        font-size: 6em;
        line-height: 1em;
    }
    
`;

const Subt = styled.h2`
    margin: 1em 0 0 0;
    font-size: 1.4em;
    text-align: center;
`;

const Divider = styled.div`
    height: 12px;
    margin: 2em 16em;
    background-color: ${props => props.theme.white};
`;
    

class Header extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <Grid>
                <TitleWrap>
                    <MarginArea>
                        <Title>the design crawl</Title>
                        <Divider />
                        <Subt>Londres, 24 de marzo de 2018</Subt>
                    </MarginArea>
                </TitleWrap>
            </Grid>
        );
    }

    /* Functions */
    
}
export default Header;           