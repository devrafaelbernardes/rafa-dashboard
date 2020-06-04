import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled.div`
    justify-content: center;
    padding: 10px 0;
    font-size: 20px;
    color: black;
`;

const Box = styled(Row)`
    justify-content: center;
    padding: 0;
    color: ${({ color, theme }) => color || theme.colors.text};
`;

export const Title = styled(Box)``;

export const SpinnerContainer = styled(Box)``;