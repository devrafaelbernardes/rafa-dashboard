import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Avatar from 'components/Avatar';

export const Container = styled(Row)`
    justify-content: center;
`;

export const Header = styled(Row)`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    & > *{
        display: flex;
        align-items: center;
    }

    @media screen and (max-width:${({ theme }) => theme.sizes.sm}){
        flex-direction: column;
        justify-content: flex-start;

        & > *{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const Body = styled(Row)`
    padding: 15px 0 0;
`;

export const Line = styled(Row)`
    margin-bottom: 10px;
`;

export const Title = styled(Row)`
    line-height: 1;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.small};
`;

export const Subtitle = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.small};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;

export const AvatarUser = styled(Avatar)`
    margin-right: 10px;
`;

export const AvatarUserContainer = styled.div`
    display: flex;
    justify-content:center; 
    @media screen and (max-width:${({ theme }) => theme.sizes.sm}){
        width: 100%;
    }
`;

export const Name = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.small};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    text-transform: capitalize;
    font-weight: bold;

    & > div {
        width: 140px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media screen and (max-width:${({ theme }) => theme.sizes.sm}){
        & > div {
            width: 100%;
        }
        text-align: center;
        padding-right: 0;
    }
`;

export const To = styled(Row)`
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.small};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;

export const HeaderSubject = styled.div`
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width:${({ theme }) => theme.sizes.sm}){
        display: none;
    }
`;

export const HeaderDate = styled.div`
    color: ${({ theme }) => theme.colors.text_light};
    margin-right: 10px;
    font-size: ${({ theme }) => theme.sizes.fonts.small};

    @media screen and (max-width:${({ theme }) => theme.sizes.sm}){
        margin-right: 0;
    }
`;

export const Subject = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.small};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;

export const Message = styled(Row)`
    display: block;
    font-family: ${({ theme }) => theme.fonts.small};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;