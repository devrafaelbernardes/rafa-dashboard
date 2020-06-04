import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Link from 'components/Link';

export const Container = styled(Row)`
    padding:0;
    overflow: hidden;
`;

export const Header = styled(Row)`
    padding: 15px;
    position: relative;
`;

export const HeaderNewItem = styled.div`
    display: flex;
    width: 100px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: -30px;
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    background: ${({ theme }) => theme.colors.green_dark};
    color: ${({ theme }) => theme.colors.white};
    transform: rotate(45deg);
    font-weight: bold;
`;

export const HeaderTitle = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const HeaderUserContainer = styled(Row)`
    margin-top: 5px;
    align-items: center;
`;

export const HeaderUserTitle = styled(Row)`
    font-weight: bold;
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text};
`;

export const HeaderUserName = styled.div`
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    color: ${({ theme }) => theme.colors.text};
    flex: inherit;
`;

export const HeaderUserAvatarContainer = styled.div`
    flex: initial;
    margin-right: 10px;
`;

export const HeaderUserInfo = styled(Row)`
    margin-top: 5px;
    align-items: center;
    flex-direction: row;
`;

export const Body = styled(Row)`
    padding: 5px 15px;
`;

export const BodyBox = styled(Row)`
    padding: 0;
    & + &{
        margin-top: 10px;
    }
`;

export const BodyTitle = styled(Row)`
    padding: 0;
    font-weight: bold;
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const BodyLink = styled(Row)`
    word-break:break-all;
    padding: 0;
`;

export const ShowLinkButton = styled(Link)`
    padding: 0;
`;

export const Footer = styled(Row)`
    padding: 15px;
    padding-top: 0;
    justify-content: space-between;
    align-items: center;
`;

export const FooterStateContainer = styled.div`
    margin-top: 15px;
`;

export const FooterState = styled.div`
    padding: 3px 10px;
    border-radius: ${({ theme }) => theme.sizes.border_radius};
    background: ${({ color }) => color || 'transparent'};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
`;

export const FooterDate = styled.div`
    margin-top: 15px;
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    color: ${({ theme }) => theme.colors.text_light};
`;