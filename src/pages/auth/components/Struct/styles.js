import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const ContainerAuth = styled(Row)`
    flex-direction: row;
`;

export const ContainerDefault = styled(Row)`
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    width: 100%;
    max-width: 280px;
    height: 100%;
    display: flex;
    padding:0;
    z-index: 10;
    overflow: auto;
    position: fixed;
    flex-direction: column;
    background: ${({ theme, color }) => color || theme.colors.backgrounds.primary_light};

    @media screen and (max-width : ${({ theme }) => theme.sizes.md}){
        max-width: 70px;
    }
`;

export const RightContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 0;
    padding-left: 280px;
    overflow: auto;
    flex-direction: column;
    background: ${({ theme, color }) => color || theme.colors.backgrounds.primary};

    @media screen and (max-width : ${({ theme }) => theme.sizes.md}){
        max-width: 100% !important;
        padding-left: 70px;
    }
`;