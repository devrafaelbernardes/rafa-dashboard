import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

export const Container = styled(Row)`
    padding: 0;
    position: relative;
`;

export const Header = styled(Row)`
    padding: 15px;
    background: ${({ theme }) => theme.colors.backgrounds.primary};
`;

export const BodyInfo = styled(Row)`
    padding: 0;
    align-items: center;
`;

export const BodyTitle = styled.div`
    margin-top:10px;
    margin-right: 7px;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.2;
`;

export const BodyDate = styled.div`
    margin-top:10px;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
`;

export const Body = styled(Row)`
    padding: 0;
`;

export const ButtonRemove = styled(ButtonContained)`
    margin-top: 15px;
    & > *{
        margin-right: 10px;
    }
`;