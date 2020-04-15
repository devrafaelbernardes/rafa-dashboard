import styled from 'styled-components';
import { Row, Image } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

export const Container = styled(Row)`
    padding: 0;
    position: relative;
`;

export const Header = styled(Row)`
    padding: 0;
`;

export const HeaderImage = styled(Image)`
    width: 100%;
    padding: 0;
`;

export const HeaderInfo = styled(Row)`
    padding: 0;
    align-items: flex-end;
    justify-content: space-between;
`;

export const HeaderTitle = styled.div`
    margin-top:10px;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    line-height: 1.2;
`;

export const HeaderDate = styled.div`
    margin-top:10px;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text_light};
`;

export const Body = styled(Row)`
    padding: 0;
`;

export const ButtonRemove = styled(ButtonContained)`
    margin-top: 15px;
    & > *{
        margin-right: 10px;
    }
`;