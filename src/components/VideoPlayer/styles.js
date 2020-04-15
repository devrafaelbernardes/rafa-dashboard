import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    position: relative;
    padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
`;

export const Player = styled(ReactPlayer)`
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    top: 0;
    left: 0;
`;