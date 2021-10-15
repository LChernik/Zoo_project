import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    ContentWrapper,
    Content,
    Heading,
    Subtitle,
    WelcomeButton
} from './Welcome.elements'

export function Welcome() {

    const { t } = useTranslation();

    return (
        <div>
            <ContentWrapper>
                    <Content>
                        <Heading>{t(`welcome.heading`)}</Heading>
                        <Subtitle>{t(`welcome.subtitle`)}</Subtitle>
                        <WelcomeButton>{t(`welcome.button`)}</WelcomeButton>
                    </Content>
            </ContentWrapper>
        </div>
    );
}
