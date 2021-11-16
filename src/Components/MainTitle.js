import React from 'react'
import styled from 'styled-components';
import SmallHeading from './SmallHeading';

function MainTitle({ title, subtitle, para }) {
    return (
        <MainTitleStyled>
            <SmallHeading title={subtitle} />
            <h2>{title}</h2>
            <p>{para}</p>
        </MainTitleStyled>
    )
}

const MainTitleStyled = styled.div`
    h2{
        font-weight: 500;
        padding-top: 1rem;
    }
    p{
        opacity:0.5;
        padding: 1.2rem;
    }
`

export default MainTitle
