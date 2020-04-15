import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export const Container = styled(Row)`
    
`;

export const LeftContainer = styled(Col).attrs({ xs: 2, sm: 2, md: 4, lg: 3 })`
    display: flex;
    padding:0;
    flex-direction: column;
    background: ${({ theme, color }) => color || theme.colors.backgrounds.primary_light};
`;

export const RightContainer = styled(Col).attrs({ xs: 10, sm: 10, md: 8, lg: 9 })`
    display: flex;
    padding: 0;
    flex-direction: column;
    background: ${({ theme, color }) => color || theme.colors.backgrounds.primary};
`;