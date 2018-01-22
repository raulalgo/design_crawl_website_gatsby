'use strict';

import React        from  'react';
import styled       from  'styled-components';

import Presentacion from    '../Presentacion';
import Background   from    '../Background';
import MasterSimbolo from '../MasterSimbolo';
/* Styled Components */
const Grid = styled.section`
    min-height: 100vh;

    display: grid;

    @media(min-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "title info";
    }

`;

const NewGrid = styled.section`
    color: ${props => props.theme.dark};
    display: grid;
    min-height: 150vh;
    grid-template-rows: 25vh 50vh 25vh 1fr;
    grid-template-columns: 1fr 300px 1fr; 
    grid-template-areas: "mt mt mt"
                         "ml title mr"
                         "mb mb mb"
                         "info info info";

    @media(min-width: 800px) {
        min-height: 100vh;
        grid-template-rows: 1fr 60vh 1fr;
        grid-template-columns: 1fr 600px 600px 1fr;
        grid-template-areas: "mt mt mt mt"
                             "ml title info mr"
                             "mb mb mb mb"
    }

`;

const Base = styled.section`
    min-height: 100vh;
    min-width: 100vw;
    display: grid;
`



const TitleWrap = styled.section`
    grid-area: title;
    z-index: 2;

    justify-self: center;
    align-self: center;


    color: ${props => props.theme.white};
    display: grid;

   @media(min-width: 800px){
       background-color: none;
        justify-self: stretch;
        align-self: stretch;
    }

`;

const TitleBg = styled.section`
    background-color: ${props => props.theme.dark};
    grid-row: 2/3;
    grid-column: 2/3;
    z-index: 1;
    opacity: 0.6;

    @media(min-width: 800px) {
    }
`;

const PresentBg = styled.section`
    @media(min-width: 800px) {
        background-color: yellow;
        grid-row: 2/3;
        grid-column: 3/4;
        z-index: 1;
        background-color: ${props => props.theme.white};
        opacity: 0.8;
    }
`;

const PresentWrap = styled.section`
    min-height: 50vh;
    display: grid;
    grid-area: info;
    z-index: 2;
    justify-self: center;
    align-self: center;
    opacity: 0.8;

    section.presentacion {
        padding: 24px;
        align-self: center;
        justify-self: center;
    }

    @media(min-width: 800px) {
        display: grid;

        justify-self: stretch;
        align-self: stretch;

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
    /* padding: 120px 24px; */
    display: grid;
    @media (min-width: 800px) {
        align-self: center;
        max-width: 480px;
    }
`;

const Title = styled.h1`
    font-weight: 900;
    font-size: 2.4em;
    line-height: 1.2em;
    margin: 0;
    letter-spacing: -0.02em;
    
    text-align: center;

    color: ${props => props.theme.accent};

    @media (min-width: 800px) {
        font-size: 6em;
        line-height: 1em;
    }
    
`;

const Subt = styled.h2`
    font-size: 1em;
    margin: 1em 0 0 0;
    text-align: center;
    @media (min-width: 800px){
        font-size: 1.4em;
    }
`;

const Divider = styled.div`
    background-color: ${props => props.theme.accent};
    height: 8px;
    width: 60%;
    max-width: 120px;
    /* align-self: center; */
    margin: 2em auto;

    @media (min-width: 800px) {
        /* margin: 2em 16em; */
    }
`;
    

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <NewGrid className="newGrid">
                <TitleWrap>
                    <MarginArea>
                        <Title>the design crawl</Title>
                        <Divider />
                        <Subt>Londres, 24 de marzo de 2018</Subt>
                        <MasterSimbolo width={50} />
                    </MarginArea>
                </TitleWrap>
                <TitleBg />
                <PresentWrap>
                    <Presentacion />
                </PresentWrap>
                <PresentBg />
                <Background></Background> 
            </NewGrid>       
        );
    }

    /* Functions */
    
}
export default Header;           

{/* <div>
                <Grid>
                    <Background>hola rojo</Background>
                    <TitleWrap>
                        <MarginArea>
                            <Title>the design crawl</Title>
                            <Divider />
                            <Subt>Londres, 24 de marzo de 2018</Subt>
                        </MarginArea>
                    </TitleWrap>
                    
                </Grid>
                <PresentWrap>
                    <Presentacion />
                </PresentWrap>
            </div> */}