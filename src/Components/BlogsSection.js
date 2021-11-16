import React from 'react'
import { SectionStyled } from '../Layouts'
import MainTitle from './MainTitle'
import styled from 'styled-components'
import blogs from '../blogs';

function BlogsSection() {
    return (
        <BlogSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'Popular Blogs'} subtitle={'Our Top Blogs'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
                </div>
                <div className="blogs">
                    {
                        blogs.map((blog) => {
                            return <div className="blog" key={blog.id}>
                                <div className="image">
                                    <img src={blog.image} alt="" />
                                </div>
                                <h6>{blog.title}</h6>
                                <div className="user">
                                    <p>Creator: </p>
                                    <p>{blog.name}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </SectionStyled>
        </BlogSectionStyled>
    )
}

const BlogSectionStyled = styled.div`
    .blogs{
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(4, 1fr);
        padding-top: 2rem;
        .blog{
            background-color: rgba(255, 255, 255, 0.03);
            border-radius: 20px;
            .image{
                border-top-left-radius:20px;
                border-top-right-radius:20px;
                height: 300px;
                overflow: hidden;
                transition: all .4s ease-in-out;
                width: 100%;
                img{
                    border-top-left-radius:20px;
                    border-top-right-radius:20px;
                    height: 100%;
                    filter: grayscale(50%);
                    object-fit: cover;
                    transition: all .4s ease-in-out;
                    width: 100%;
                    &:hover{
                        filter: grayscale(0);
                        transform: scale(1.2);
                    }
                }
            }
            h6{
                font-size: 1.3rem;
                font-weight: 500;
                padding-left:1rem;
                padding-right: 1rem;
                padding-top: 1rem;
            }
            .user{
                display: flex;
                padding-bottom: 1.5rem;
                padding-left: 1rem;
                padding-right: 1rem;
                padding-top: .2rem;
                p:first-child{
                    opacity: 0.5;
                    padding-right: 0.4rem; 
                }
            }
        }
    }
`

export default BlogsSection
