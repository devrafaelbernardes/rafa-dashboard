import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import MenuHorizontal from 'pages/auth/components/MenuHorizontal';

export const Container = styled(Row)``;

export const Header = styled(Row)`
    padding: 15px;
    padding-bottom: 0;
`;

export const HeaderTitle = styled(Row)`
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    line-height: 1;
`;

export const Menu = styled(MenuHorizontal)`
    padding: 15px;
`;

export const Body = styled(Row)`
    padding: 0 15px;
`;