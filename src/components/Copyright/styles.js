import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import LinkDefault from 'components/Link';

export const Container = styled(Row)``;

export const Line = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.small};

    & > * {
        margin-right : 5px;
    }
`;

export const Link = styled(LinkDefault)`
    color: ${({ theme }) => theme.colors.text_dark};
`;