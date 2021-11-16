import React from 'react'
import styled from 'styled-components'
import data from '../data';

function SellerCard() {
    return (
        <SellerCardStyled>
            {
                data.map((item) => {
                    return <div className="SellerCard" key={item.id}>
                        <div className="number">
                            <p>0 {item.id}</p>
                        </div>
                        <div className="profile">
                            <img src={item.image} alt="" />
                            <div className="text">
                                <h4>{item.name}</h4>
                                <p>{item.currency}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </SellerCardStyled>
    )
}

const SellerCardStyled = styled.div`
    background: rgba(255, 255, 255, 0.03);
    border-radius: 20px;
    transition: all .4s ease-in-out;
    &:hover{
        transform: translateY(-10px);
    }
    .SellerCard{
        align-items: center;
        display: flex;
        padding: 1.5rem 1rem;
        
        .number{
            font-size: 1.6rem;
            opacity: 0.5;
            padding-right: 1rem;
            p{
                font-weight: 700;
            }
        }
        .profile{
            display: flex;
            img{
                border: 2px solid #395FF6;
                border-radius: 50%;
                height: 70px;
                margin-right: 1rem;
                object-fit: cover;
                width: 70px;
            }
        }
    }
`

export default SellerCard
