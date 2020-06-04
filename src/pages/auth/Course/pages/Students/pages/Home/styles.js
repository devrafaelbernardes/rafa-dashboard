import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { ButtonOutlined } from 'components/Button';
import Item from './components/Item';
import Card from 'components/Card';

export const Container = styled(Row)``;

export const Header = styled(Row)`
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderInfo = styled.div`
    color: ${({ theme }) => theme.colors.text};
    & > span{
        margin-left: 7px;
        font-weight: bold;
    }
`;

export const HeaderButtonContainer = styled.div``;

export const Body = styled(Row)``;

export const ButtonAdd = styled(ButtonOutlined)`
    & > *{
        margin-right: 7px;
    }
`;

export const StudentContainer = styled(Col).attrs({
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4,
})`
    padding: 15px;
`;

export const StudentGeneral = styled(Card)`
    padding: 15px;
`;

export const Student = styled(Item)``;

export const Footer = styled(Row)`
    padding:15px 0;
    justify-content:center;
    align-items: center;
`;

export const ButtonLoadMore = styled(ButtonOutlined)``;