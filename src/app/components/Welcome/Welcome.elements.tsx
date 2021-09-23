import styled from 'styled-components';
import Background from '../../../assets/images/Background.png';
import { media } from 'styles/media';
import { Container, Button } from '../../../styles/global-styles';

export const ContentWrapper = styled.div`
    ${media.small`
        background: url(${Background}) no-repeat;
        background-position-y: 63%;
        background-position-x: 90%;
        background-attachment: fixed;
        background-size: 150%;
}
    `}
    ${media.medium`
        background: linear-gradient(
        to right,
        rgba(252, 249, 249, 0.63) 49%,
        rgba(7, 7, 7, 0) 67%),
        url(${Background}) no-repeat;
        background-size: 106%;
        background-position-y: 100%;
        background-position-x: 3%;
    `}
    ${media.large`
        background-position-y: 26%;
        background-position-x: 48%;
        background-size: 124%;
    `}
    ${media.xlarge`
        background: url(${Background}) no-repeat;
        background-size: auto;
        background-position-y: 5%;
        background-position-x: 50%;
    `}
    
`;

export const Content = styled(Container)`
    display: flex;
    flex-direction: column;

    ${media.small`
        padding-top: 20px;
        padding-bottom: 279px;
        margin-right: 10px;
        margin-left: 10px;
    `}
    ${media.medium`
        padding-top: 50px;
        padding-bottom: 50px;
        margin-right: 20px;
        margin-left: 20px;
    `}
    ${media.large`
        padding: 122px 0 100px 0;
        padding-top: 122px;
        margin: auto;
    `}
    ${media.xlarge`
        padding: 149px 0 130px 0;
        margin: auto;
    `}
    ${Container}
`;

export const Heading = styled.h1`
    color: #00A092;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.01em;
    ${media.small`
        font-size: 2.5rem;
        line-height: 3.063rem;
        margin-bottom: 20px;
        opacity: 100%;
        max-width: 300px;
    `}
    ${media.medium`
        font-size: 4.5rem;
        line-height: 5.5rem;
        margin-bottom: 30px;
        max-width: 600px;
    `}
    ${media.large`
        font-size: 5.125rem;
        line-height: 6.25rem;
        margin-bottom: 30px;
        max-width: 890px;
    `}
    ${media.xlarge`
        font-size: 5.125rem;
        margin-bottom: 50px;
        opacity: 60%;
    `}

`;

export const Subtitle = styled.p`
    color: #000000;
    ${media.small`
        font-size: 1.125rem;
        line-height: 1.688rem;
        margin-bottom: 30px;
        max-width: 300px;
    `}
    ${media.medium`
        font-size: 1.125rem;
        line-height: 1.688rem;
        margin-bottom: 30px;
        max-width: 340px;
    `}
    ${media.large`
        font-size: 1.125rem;
        line-height: 1.688rem;
        margin-bottom: 30px;
        max-width: 340px;
    `}
    ${media.xlarge`
        font-size: 1.125rem;
        line-height: 1.688rem;
        max-width: 430px;
        margin-bottom: 50px;
    `}
`;

export const WelcomeButton = styled(Button)`
    ${media.small`
        padding-top: 11.5px;
        padding-bottom: 11.5px;
        height: 45px;
        width: 300px;
    `}
    ${media.medium`
        height: 74px;
        width: 285px;
    `}
    ${media.large`
        width: 240px; 
    `}
`;
