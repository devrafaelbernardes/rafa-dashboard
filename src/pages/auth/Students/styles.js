import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
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

export const Body = styled(Row)``;

export const Footer = styled(Row)`
    justify-content: center;
`;

export const ContainerItem = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 4,
})`
    padding: 15px;
`;

export const CardItem = styled(Card)`
    padding: 15px;
`;

export const ButtonLoadMore = styled(ButtonOutlined)``;