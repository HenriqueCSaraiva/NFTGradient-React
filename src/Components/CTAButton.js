import React from 'react'
import styled from 'styled-components'

function CTAButton({ name }) {
    return (
        <CTAButtonStyled>
            {name}
        </CTAButtonStyled>
    )
}

const CTAButtonStyled = styled.div`
    border-radius: 8px;
    cursor: pointer;
    display: inline-block; 
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.9rem 1.5rem;
    transition: all .4s ease-in-out;
    text-transform: uppercase;
    &:lastchild{
        margin-ledt: 1.5rem
    }

    &:hover{
        background: linear-gradient(120deg,  #EB3FA9, #395FF6);
        transition: all .4s ease-in-out;
    }
`
export default CTAButton
