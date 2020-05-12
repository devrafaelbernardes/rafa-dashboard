import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonOutlined } from 'components/Button';
import Card from 'components/Card';

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

export const HeaderSubtitle = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    & > span{
        font-weight: bold;
        margin-left: 8px;
    }
`;

export const Body = styled(Row)`
    padding: 15px;
`;

export const BodyCard = styled(Card)`
    padding: 15px;
`;


export const ContainerItem = styled(Row)`
    padding: 0;
`;

export const CardItem = styled(Row)`
    padding: 15px;

    &:hover{
        background: #ebebeb;
    }
`;


export const ButtonLoadMoreContainer = styled(Row)`
    justify-content: center;
    margin-top: 10px;
`;

export const ButtonLoadMore = styled(ButtonOutlined)``;