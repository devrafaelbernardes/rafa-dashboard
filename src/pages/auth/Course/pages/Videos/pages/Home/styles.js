import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Card from 'components/Card';
import { ButtonOutlined } from 'components/Button';

export const Container = styled(Row)`
    padding:0;
`;

export const Body = styled(Row)`
    padding:0;
`;

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

export const ButtonAdd = styled(ButtonOutlined)`
    & > *{
        margin-right: 7px;
    }
`;

export const ContainerItem = styled(Col).attrs({
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4,
})`
    padding:15px;
`;

export const CardItem = styled(Card)`
    padding:15px;
`;