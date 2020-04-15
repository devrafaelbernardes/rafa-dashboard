import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Card from 'components/Card';

export const Container = styled(Card)``;

export const Header = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.sizes.fonts.large};
`;

export const Body = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    color: ${({ theme }) => theme.colors.secondary};
`;