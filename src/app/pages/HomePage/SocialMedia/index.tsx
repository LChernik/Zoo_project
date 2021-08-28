import styled from "styled-components/macro";
import { ReactComponent as InstaIcon} from '../../../../assets/images/Instagram.svg';
import { ReactComponent as FacebookIcon } from '../../../../assets/images/Facebook.svg';
import { ReactComponent as YoutubeIcon} from '../../../../assets/images/YouTube.svg';
// import {FunctionComponent} from 'react';

export const MediaContainer = styled.div`
    display: flex;
`;

export const Icon = styled(YoutubeIcon)`
    width: 40px;
    height: 40px;
`;

// interface BoxProps {
//     borders?: boolean;
//     className?: string;
// }
// export const SocialMedia: FunctionComponent<BoxProps> = (props) => {


export const SocialMedia = ()=> {
    return (
        <>
            <MediaContainer>
                <YoutubeIcon />
                <FacebookIcon />
                <InstaIcon />
            </MediaContainer>
        </>
    );
}