import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import ImageDefault from 'components/Image';
import { FileIcon as File } from 'components/Icons';
import Link from 'components/Link';

export const Container = styled(Row)`
    width: 100% !important;
`;

export const Image = styled(ImageDefault)`
    width: 100% !important;
`;

export const ContainerName = styled(Row)`
    width: 100% !important;
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    font-family: ${({ theme }) => theme.fonts.normal};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 5px;
`;

export const ContainerFile = styled(Row)`
    width: 100% !important;
    align-items: center;
`;

export const FileLink = styled(Link)``;

export const FileIcon = styled(File)`
    font-size: 22px;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.secondary};
`;