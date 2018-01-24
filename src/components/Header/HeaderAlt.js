'use strict';

import React        from  'react';
import styled       from  'styled-components';

import Presentacion from    '../Presentacion';
/* Styled Components */
const Grid = styled.section`
    min-height: 100vh;

    @media(min-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "title info";
    }

`;

const TitleWrap = styled.section`
    /* padding: 8em 4em; */

    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
    height: 50vh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

   @media(min-width: 800px){ grid-area: title;

    display: grid;
    grid-template-columns: 1fr 450px 1fr;
    grid-template-rows: 12em 1fr 12em;
    grid-template-areas: "mt mt mt"
                         "ml ct mr"
                         "mb mb mb";

    min-height: 100vh;}

`;

const PresentWrap = styled.section`
    min-height: 50vh;
    display: grid;

    section.presentacion {
        padding: 24px;
        align-self: center;
        justify-self: center;
    }

    @media(min-width: 800px) {
        display: grid;

        section.presentacion{
            max-width: 450px;

            font-size: 1.2em;
            line-height: 1.4em;

            align-self: center;
            justify-self: center;

            ul{
                padding-top: 0.4em;

                li {
                    margin-bottom: 0.6em;
                }
            }
        }
    }
`;

const MarginArea = styled.section`
    align-self: center;
    justify-self: center;
    max-width: 240px;
    @media (min-width: 800px) {
        grid-area: ct;
        align-self: center;
    }
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
    background-color: ${props => props.theme.white};
    height: 8px;
    max-width: 120px;

    margin: 2em auto;

    @media (min-width: 800px) {
        margin: 2em 16em;
    }
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
                <PresentWrap>
                    <Presentacion />
                </PresentWrap>
            </Grid>
        );
    }

    /* Functions */
    
}
export default Header;           