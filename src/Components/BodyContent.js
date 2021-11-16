import React from 'react'
import { InnerLayout } from '../Layouts'
import MainTitle from './MainTitle'
import styled from 'styled-components'
import SellerCard from './SellerCard'
import BlogsSection from './BlogsSection'
import GradientCardsSection from './GradientCardsSection'
import Contact from './Contact'

function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Sellers This Mounth'} subtitle={'All Entrepreneurs'} />

                <div className="sellerCards">
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                </div>
                <BlogsSection />
                <GradientCardsSection />
            </InnerLayout>
            <Contact />
            <footer>
                <p>Copyright ©YourName. All Rights Reserved</p>
            </footer>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.main`
    .sellerCards{
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
        margin: 2rem 0;
    }
    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #020A27;
        padding: 3rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
            text-align: center;
            opacity: 0.7;
        }
    }
`

export default BodyContent
yarn