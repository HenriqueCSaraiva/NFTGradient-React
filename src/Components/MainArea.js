import React from 'react'
import styled from 'styled-components'
import business from '../img/marketing.mp4'
import circles from '../img/circles.svg'
import { InnerLayout } from '../Layouts'
import MainContent from './MainContent'


function MainArea() {
    return (
        <MainAreaStyled>
            <video src={business} muted playsInLine autoPlay loop></video>
            <img src={circles} alt="" className="overlay" />
            <InnerLayout>
                <MainContent />
            </InnerLayout>
        </MainAreaStyled>
    )
}

const MainAreaStyled = styled.div`
    height: 85vh;
    position: relative;
    overflow: hidden;    
    width:100%;

    .overlay{
        height: 100%;
        position: absolute;
        right: -400px;
        top: -300px;
        width: 100%;
    }

    video{
        height: 100%;
        object-fit:cover;
        opacity: 0.7;
        width: 100%;
    }
`

export default MainArea
