import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import ImageDefault from 'components/Image';

export const Container = styled(Row)`
    width: 100% !important;
    flex-direction: column;
`;

export const Header = styled(Row)`
    width: 100% !important;
`;

export const Body = styled(Row)`
    width: 100% !important;
`;

export const Image = styled(ImageDefault)`
    width: 100% !important;
    margin-bottom: 10px;
`;

export const Title = styled(Row)`
    font-size:${({ theme }) => theme.sizes.fonts.large};
    font-family:${({ theme }) => theme.fonts.normal};
    color:${({ theme }) => theme.colors.text};
    margin-bottom: 5px;
`;