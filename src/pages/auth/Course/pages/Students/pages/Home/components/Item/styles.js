import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

export const Container = styled(Row)`
    padding: 0;
    position: relative;
`;

export const Header = styled(Row)`
    padding: 0;
    margin-bottom: 10px;
`;

export const HeaderAvatarBox = styled.div`
    padding: 0;
    padding-right: 10px;
    display: flex;
    flex: initial;
`;

export const HeaderInfoBox = styled.div`
    max-width: 80%;
    padding: 0;
    display: flex;
    flex: inherit;
    flex-direction: column;
`;

export const HeaderTitle = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    font-weight: bold;
`;

export const HeaderSubtitle = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    line-height: 1;
`;

export const BodyInfo = styled(Row)`
    padding: 0;
    align-items: center;
`;

export const BodyTitle = styled.div`
    margin-top: 5px;
    margin-right: 7px;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.2;
`;

export const BodyDate = styled.div`
    margin-top: 5px;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
`;

export const Body = styled(Row)`
    padding: 0;
    margin-bottom: 15px;
`;

export const Footer = styled(Row)`
    padding: 0;
    align-items: center;
`;

export const ButtonRemove = styled(ButtonContained)`
    & > *{
        margin-right: 10px;
    }
`;