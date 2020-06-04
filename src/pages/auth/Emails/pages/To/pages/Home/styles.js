import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import List from 'components/List';
import Card from 'components/Card';

export const Container = styled(Row)``;

export const Title = styled(Row)`
    padding: 0 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;

export const OptionsEmails = styled(List)``;

export const OptionContainer = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 4,
})`
    padding: 15px;
`;

export const OptionCard = styled(Card)`
    padding: 20px;
`;