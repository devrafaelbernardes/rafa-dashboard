import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Avatar from 'components/Avatar';
import MenuDefault from './components/Menu';

export const Container = styled(Row)``;

export const Menu = styled(MenuDefault)``;

export const Header = styled(Row)`
    flex-direction: row;
    align-items: center;
    padding: 15px;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
`;

export const HeaderAvatar = styled(Avatar)`
    margin-right: 15px;
`;

export const HeaderAvatarContainer = styled.div`
    display: flex;
    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        width: 100%;
        justify-content: center;
        align-items:center;
        margin-bottom: 10px;
    }
`;

export const HeaderTitle = styled.div`
    display: flex;
    font-size: ${({ theme }) => theme.sizes.fonts.large};

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        width: 100%;
        justify-content: center;
        align-items:center;
        text-align: center;
    }
`;

export const Body = styled(Row)``;

export const NotFoundContainer = styled(Row)`
    min-height: 100vh;
    justify-content:center;
    align-items: center;
`;

export const NotFoundTitle = styled(Row)`
    justify-content:center;
    align-items: center;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    color: ${({ theme }) => theme.colors.text_light};
`;