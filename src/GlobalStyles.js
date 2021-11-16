import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    list-style: none;
    margin:0;
    padding:0;
}

body{
    background-color: #03091F;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
}

a{
    color: inherit;
    font-family: inherit;
    text-decoration: none;
}
p{
    line-height: 2rem;
}


.Before{
    padding-left: 3rem;
    position: relative;
    &::before{
        background-color: #395FF6 ;
        content: '';
        height: 2px;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 35px;
    }
}

.GradientText{
    background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    display: inline-block;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

.title-con{
    margin 0 auto;
    text-align: center;
    width: 50%;
}

.gradient-cards-con{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
}
`

export default GlobalStyle