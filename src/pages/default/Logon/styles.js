import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

export const Container = styled(Row)`
    
`;

export const LeftContainer = styled(Col).attrs({ xs: 12, sm: 12, md: 5, lg: 4 })`
    display: flex;
    padding:0;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.backgrounds.primary_light};
`;

export const RightContainer = styled(Col).attrs({ xs: 12, sm: 12, md: 7, lg: 8 })`
    display: flex;
    padding:0;
    flex-direction: column;
    /* justify-content:center;
    align-items: center; */
    padding-top: 25vh;
    background: ${({ theme }) => theme.colors.backgrounds.primary};

    @media screen and (max-width: ${({ theme }) => theme.sizes.sm}){
        display: none;
    }
`;

export const Header = styled(Row)`
    padding: 20px 0;
    justify-content: center;
    align-items: center;
`;

export const HeaderImage = styled.img`
    max-width: 100%;
    max-height: 100px;
`;

export const Body = styled(Row)`
    flex:1;
    flex-direction:column;
    padding:30px;
`;

export const Footer = styled(Row)`
    padding: 15px 0;
`;

export const BoxImageRight = styled(Row)`
    justify-content:center;
    align-items: center;
`;

export const ImageRight = styled.img`
    max-width: 100%;
    max-height: 250px;
`;

export const Title = styled(Row)`
    text-align: center;
    justify-content:center;
    align-items: center;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.gigantic};
`;