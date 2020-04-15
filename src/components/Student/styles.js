import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    justify-content: center;
`;

export const Header = styled(Row)`
    justify-content: center;
    margin-bottom: 10px;
`;

export const Title = styled(Row)`
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;

export const Subtitle = styled(Row)`
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.small};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;


export const Body = styled(Row)``;