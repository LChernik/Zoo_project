import React from 'react';
import {
    ContentWrapper,
    Content,
    Heading,
    Subtitle,
    WelcomeButton
} from './Welcome.elements'

export function Welcome({
    headline,
    description,
    buttonLabel
}) {
    return (
        <div>
            <ContentWrapper>
                    <Content>
                        <Heading>{headline}</Heading>
                        <Subtitle>{description}</Subtitle>
                        <WelcomeButton>{buttonLabel}</WelcomeButton>
                    </Content>
            </ContentWrapper>
        </div>
    );
}
