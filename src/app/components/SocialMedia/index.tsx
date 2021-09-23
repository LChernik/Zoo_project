import styled from "styled-components/macro";
import { media } from 'styles/media';
import { ReactComponent as InstaIcon} from '../../../assets/images/Instagram.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/images/Facebook.svg';
import { ReactComponent as YoutubeIcon} from '../../../assets/images/YouTube.svg';

export const MediaContainer = styled.div`
    ${media.small`
        display: none;
    `}
    ${media.medium`
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        min-width: 180px;
    `}
    ${media.large`
        margin-left: 68px;
    `}
    ${media.xlarge`
        margin-left: 138px;
    `}
`;

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
