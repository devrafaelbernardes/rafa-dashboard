import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Link from 'components/Link';
import Avatar from 'components/Avatar';
import { calcFontSizeAvatar } from 'utils/calcFontSize';

export const Container = styled(Row)``;

export const Line = styled(Row)`
    justify-content: center;
    align-items: center;
`;

export const Header = styled(Row)`
    padding: 15px 0 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width : ${({ theme }) => theme.sizes.md}){
        padding-bottom: 10px;
    }
`;

export const HeaderAvatar = styled(Avatar)`
    @media screen and (max-width : ${({ theme }) => theme.sizes.md}){
        max-width: 45px !important;
        max-height: 45px !important;
        font-size: ${calcFontSizeAvatar(45)}px !important;
    }
`;

export const HeaderTitle = styled(Link)`
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.text_dark};

    &:hover{
        color: ${({ theme }) => theme.colors.text_light};
    }

    @media screen and (max-width : ${({ theme }) => theme.sizes.md}){
        display: none;
    }
`;

export const Body = styled(Row)`
`;

const activeClassName = 'option-nav-link-active';
let activeClassNameString = `.${activeClassName}`;

export const OptionMenu = styled(Link).attrs({activeClassName})`
    width: 100%;
    padding: 7px 15px;
    margin-left: 20px;
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.sizes.border_radius};
    align-items: center;

    & + & {
        margin-top: 5px;
    }

    &${activeClassNameString}, &:hover{
        color: ${({ theme }) => theme.colors.text_reverse};
        background: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (max-width : ${({ theme }) => theme.sizes.md}){
        padding: 15px;
        margin-left: 5px;
        margin-right: 5px;
        & > span{
            display: none;
        }
    }
`;

export const Icon = styled.span`
    width: 40px !important;
    margin-right: 10px;

    @media screen and (max-width : ${({ theme }) => theme.sizes.md}){
        width: 100% !important;
        min-width: 20px !important;
        margin-right: 0;
        font-size: 16px;
    }
`;