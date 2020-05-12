import React, { memo } from 'react';

import {
    Container,
    OptionsEmails,
    OptionContainer,
    OptionCard,
    Title,
} from './styles';
import Texts from 'config/Texts';
import Item from './components/Item';
import { CourseIcon, UserIcon, UsersIcon } from 'components/Icons';
import EmailsURL from 'routes/URLs/EmailsURL';

const Option = memo(({ ...props }) => {
    return (
        <OptionContainer>
            <OptionCard>
                <Item {...props} />
            </OptionCard>
        </OptionContainer>
    );
});

export function Home() {
    const REDIRECT = EmailsURL().REDIRECT.SEND_TO;
    const TEXTS = Texts.PAGE_AUTH_EMAILS.TO;

    return (
        <Container>
            <Title>
                {TEXTS.BODY.SEND_TO}
            </Title>
            <OptionsEmails
                items={[
                    {
                        title: TEXTS.BODY.SEND_TO_ALL,
                        to: REDIRECT.SEND_TO_ALL,
                        icon: <UsersIcon />,
                    },
                    {
                        title: TEXTS.BODY.SEND_TO_SINGLE,
                        to: REDIRECT.SEND_TO_SINGLE,
                        icon: <UserIcon />,
                    },
                    {
                        title: TEXTS.BODY.SEND_TO_COURSE,
                        to: REDIRECT.SEND_TO_COURSE,
                        icon: <CourseIcon />,
                    },
                    {
                        title: TEXTS.BODY.SEND_TO_NO_COURSE,
                        to: REDIRECT.SEND_TO_NO_COURSE,
                        icon: <UsersIcon />,
                    },
                ]}
                renderItem={(item, key) => (
                    <Option
                        key={key}
                        {...item}
                        titleButton={TEXTS.BODY.SEND}
                    />
                )}
            />
        </Container>
    );
}
export default Home;