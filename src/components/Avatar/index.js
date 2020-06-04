import React from 'react';
import NoImage from 'assets/images/no-image.png';
import { DefaultImage, UserAvatar, UserImage } from './styles';
import { calcFontSizeAvatar } from 'utils/calcFontSize';

export function Avatar({ title, image, size, noExpansive, className }) {
    size = size || 60;
    let fontSize = calcFontSizeAvatar(size);
    title = title && title[0] ? title[0] : null;

    className = className ? className : "";
    noExpansive = noExpansive === true;

    return (
        image ? (
            <UserImage
                className={className}
                size={size}
                fontSize={fontSize}
                src={image}
            />
        ) : (
                title ? (
                    <UserAvatar
                        className={className}
                        size={size}
                        fontSize={fontSize}
                    >
                        {title}
                    </UserAvatar>
                ) : (
                        <DefaultImage
                            className={className}
                            size={size}
                            fontSize={fontSize}
                            src={NoImage}
                            roundedCircle
                        />
                    )
            )
    );
}

export default Avatar;