import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import VideoPlayer from 'components/VideoPlayer';
import Image from 'components/Image';

export const Container = styled(Row)`
    padding: 0;
    position: relative;
`;

export const Header = styled(Row)`
    padding: 0;
`;

export const Thumbnail = styled(Image)``;

export const Player = styled(VideoPlayer)`
    width: 100%;
    padding: 0;
`;

export const Title = styled.div`
    margin-top:10px;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    line-height: 1.2;
`;

export const Date = styled.div`
    margin-top:10px;
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text_light};
`;

export const Body = styled(Row)`
    padding: 0;
    align-items: flex-end;
    justify-content: space-between;
`;