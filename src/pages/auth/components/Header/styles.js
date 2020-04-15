import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
`;

export const Line = styled(Row)`
    align-items: center;
`;

export const Title = styled(Row)`
    line-height:1.25;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    color: ${({ theme }) => theme.colors.text};
    text-transform: initial;
`;

export const Subtitle = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    color: ${({ theme }) => theme.colors.text};
    text-transform: initial;
`;