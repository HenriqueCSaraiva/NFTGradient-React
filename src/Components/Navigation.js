import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo2.png'

function Navigation() {
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-items">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">FAQs</a>
                </li>
                <li>
                    <a href="#">Activity</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <div className="primary-btn">
                    GET CONNECTED
                </div>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    align-items: center;
    display:flex;    
    justify-content: space-between;
    min-height: 10vh;

    .nav-items{
        align-items: center;
        display:flex;
        li{
            margin: 0 1rem;
        }
        .primary-btn{
            background-color: rgba(57,95,246,0.6);
            border-radius: 70px;
            cursor: pointer;
            margin-left: 3rem;
            padding: .6rem .8rem;
            trasnition: all .4s ease-in-out;
            &:hover{
                background-color: rgba(57,95,246,1);
            }
        }
    }

    .logo{
        img{
            width:60px;
        }
    }
`

export default Navigation
