import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

export const Container = styled(Row)`
    padding: 15px;
    padding-bottom: 50px;    
`;

export const Header = styled(Row)`
    padding: 0;
    justify-content: center;
    align-items: center;
`;

export const HeaderImage = styled.img`
    max-width: 100%;
    max-height: 100px;
`;

export const Body = styled(Row)`
    padding: 15px 0;
    flex: 1;
    flex-direction: column;
`;

export const BitTitle = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.sizes.fonts.gigantic};
    color: ${({ theme }) => theme.colors.text};
    justify-content: center;
    text-align: center;
`;

export const Title = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    color: ${({ theme }) => theme.colors.text};
    justify-content: center;
    text-align: center;
`;

export const Footer = styled(Row)`
    padding: 15px 0;
    flex-direction: column;
`;

export const ContainerButton = styled(Row)`
    padding: 15px 0;
    justify-content: center;
    align-items: center;
`;

export const ButtonHome = styled(ButtonContained)``;