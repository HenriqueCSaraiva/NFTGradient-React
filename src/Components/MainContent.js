import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import SmallHeading from './SmallHeading'
import blockchain from '../img/bchain.png'
import CTAButton from './CTAButton'

function MainContent() {
    return (
        <MainContentStyled >
            <Navigation />
            <div className="content">
                <div className="leftContent">
                    <SmallHeading title={'All Digital Currencies in One Place'} identifier={'Before'} />
                    <h1>
                        All NFTs You need in One Marketplace
                        The Best Place to Collect , Buy and Sell <span className='GradientText'>Awesome NFTs</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem.
                        Cumque obcaecati sint officiis quis laboriosam vitae, error molestiae temporibus
                        voluptatum consectetur,
                        quibusdam magni, delectus a autem soluta optio laborum!
                    </p>
                    <div className="btns-con">
                        <CTAButton name={'discover more'} />
                        <CTAButton name={'get help'} />
                    </div>
                </div>
                <div className="rightContent">
                    <img src={blockchain} alt="" />
                </div>
            </div>
        </MainContentStyled >
    )
}


const MainContentStyled = styled.div`
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 80%;

    .content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            h1{
                padding: 1.8rem 0;
            }
            .btns-con{
                margin-top: 3rem;
            }
        }

        .rightContent{
            img{
                bottom: -1%;
                position: absolute;
                right: -11%;
                width: 60%;
            }
        }
    }
`

export default MainContent
