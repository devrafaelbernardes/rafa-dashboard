import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)``;

export const Label = styled(Row)`
    font-weight: bold;
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    margin-bottom: 3px;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    & > span{
        color: ${({ theme }) => theme.colors.text_light};
        font-weight: normal;
        margin-left: 5px;
        font-size: ${({ theme }) => theme.sizes.fonts.normal};
    }
`;

export const Message = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    margin-top: 3px;
`;