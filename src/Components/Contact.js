import React from 'react'
import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import map from '../img/map.png';

function Contact() {
    return (
        <ContactSectionStyled>
            <SectionStyled>
                <div className="contact-info">
                    <h3 className="contact-title">
                        Contact Us
                    </h3>
                    <p>30 Avenue Street, United Kingdom</p>
                    <p>+44 786 997 7162</p>
                    <p>maclinzuniversal@gmail.com</p>
                </div>
                <div className="bg-image">
                    <img src={map} alt="" />
                </div>
            </SectionStyled>
        </ContactSectionStyled>
    )
}

const ContactSectionStyled = styled.div`
    align-items: center;
    background-color: #020C31;
    display: flex;
    justify-content: center;
    padding: 4rem 0;
    position: relative;
    text-align: center;
    z-index: 1;
    p{
        opacity: 0.5;
    }
    .bg-image{
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        img{
            opacity: 0.07;
            width: 80%;
        }
    }

    .contact-title{
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        position: relative;
        &::before{
            background-color: #eb3fa9;
            bottom: 0;
            content: "";
            height: 2px;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
            width: 4rem;
        }
    }
`

export default Contact
