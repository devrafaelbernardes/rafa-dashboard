import React, { useState, useEffect } from 'react';

import NoImageSRC from 'assets/images/no-image.png';

import { Container } from './styles';

export function Image({ src = null, ...props }) {
    const [image, setImage] = useState(null);
    
    useEffect(() => {
        setImage(src);
    }, [src]);

    return (
        <Container
            {...props}
            src={image || NoImageSRC}
            onError={() => setImage(null)}
        />
    );
}
export default Image;