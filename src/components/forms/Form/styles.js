import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    
`;

export const Header = styled(Row)`
    
`;

export const Title = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.large};
`;

export const Subtitle = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;

export const Body = styled.form`
    width: 100%;
    padding: 0;
`;