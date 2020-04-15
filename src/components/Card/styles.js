import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    background: ${({ theme }) => theme.colors.white};
    padding: 15px;
    box-shadow: 0 1px 3px #9995;
`;