import styled from  'styled-components/macro';
import { media } from 'styles/media';
import { ReactComponent as LogoIcon} from 'assets/images/Logo.svg';
import { SocialMedia } from '../SocialMedia';


export const PageWrapper = styled.div`
  height: 110px;
  ${media.large`
    background-color: #F58021;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 1400px;
  margin-left: 16.25rem;
  `;

export const StyledLogo = styled(LogoIcon)`
  margin-right: 31.438rem;
  margin-top: 30px;
`;


export const Menu = styled.ul`
  display: flex;
  list-style: none;
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 42px;
  text-transform: uppercase;
`;

const SocialMediaContainer = styled.div`
  margin-top: 35px;
`;

export function Header() {
  return (
    <>
    <PageWrapper>
      <ContentWrapper>
        <StyledLogo />
        <Menu>
          <li>about</li>
          <li>map</li>
          <li>zoos</li>
          <li>contact us</li>
        </Menu>
        <SocialMediaContainer>
          <SocialMedia/>
        </SocialMediaContainer>
        
      </ContentWrapper>
    </PageWrapper>
    
    </>
  );
}