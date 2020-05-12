import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonOutlined } from 'components/Button';

export const Container = styled(Row)`
    padding:0;
`;

export const Header = styled(Row)`
    padding:0;
    justify-content: center;
`;

export const HeaderIcon = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0;
    font-size: 27px;
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
`;

export const Body = styled(Row)`
    padding:0;
`;

export const Title = styled(Row)`
    padding:10px 0;
    text-align: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.sizes.fonts.large};
`;

export const ButtonContainer = styled(Row)`
    padding:0;
    justify-content: center;
`;


export const Button = styled(ButtonOutlined)`
    
`;