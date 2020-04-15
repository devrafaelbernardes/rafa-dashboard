import React, { useState } from 'react';

import { Container, Icon } from './styles';
import { SeePasswordIcon, DontSeePasswordIcon } from 'components/Icons';

export function InputPassword({ children, ...props }) {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => setVisible(prev => !prev);

    return (
        <Container
            {...props}
            type={visible ? "text" : "password"}
            iconRight={
                visible ? (
                    <Icon
                        as={DontSeePasswordIcon}
                        onClick={() => toggleVisible()}
                    />
                ) : (
                        <Icon
                            as={SeePasswordIcon}
                            onClick={() => toggleVisible()}
                        />
                    )
            }
        />
    );
}
export default InputPassword;