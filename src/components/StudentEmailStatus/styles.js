import styled from 'styled-components';

export const Container = styled.div`
    font-family: ${({ theme }) => theme.fonts.small};
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    font-weight: bold;
    padding: 5px 14px 6px;
    line-height: 1;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    background:${({ color }) => color || 'transparent'};
    border-radius: ${({ theme }) => theme.sizes.border_radius};
`;