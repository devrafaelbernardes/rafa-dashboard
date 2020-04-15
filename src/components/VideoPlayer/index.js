import React from 'react';

import { Container, Player } from './styles';

export function VideoPlayer({ url, controls = false, ...props }) {
    return (
        <Container>
            <Player
                {...props}
                url={url}
                controls={controls}
                config={{ file: { attributes: { controlsList: "nodownload", } } }}
                onContextMenu={e => e.preventDefault()}
            />
        </Container>
    );
}
export default VideoPlayer;