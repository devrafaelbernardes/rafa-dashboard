import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)``;

export const Header = styled(Row)`
    padding: 15px;
    padding-bottom:0;
`;

export const HeaderTitle = styled(Row)`
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    line-height: 1;
    margin-bottom: 8px;
`;

export const Body = styled(Row)``;

export const Title = styled(Row)`
    padding: 0 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;