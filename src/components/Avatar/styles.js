import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import Image from 'components/Image';

const ContentImage = styled(Image)`
    width: ${ ({ size }) => `${size}px`};
    max-height: ${ ({ size }) => `${size}px`};
    font-size: ${ ({ fontSize }) => `${fontSize}px`};
    border: 1px solid #b5b3b3;
    padding: 1px;
    border-radius: ${ ({ theme }) => theme.sizes.border_radius} !important;
`;

export const UserImage = styled(ContentImage)`
    border-radius: ${ ({ theme }) => theme.sizes.border_radius} !important;
    background: ${ ({ theme }) => theme.colors.white} !important;
`;

export const UserAvatar = styled(Avatar)`
    width: ${ ({ size }) => `${size}px`} !important;
    height: ${ ({ size }) => `${size}px`} !important;
    font-size: ${ ({ fontSize }) => `${fontSize}px`} !important;
    background: ${ ({ theme }) => theme.colors.primary} !important;
    border-radius: ${ ({ theme }) => theme.sizes.border_radius} !important;
    text-transform: uppercase !important;
`;

export const DefaultImage = styled(ContentImage)`
    background-color: ${ ({ theme }) => theme.colors.white} !important;
    border-radius: ${ ({ theme }) => theme.sizes.border_radius} !important;
`;