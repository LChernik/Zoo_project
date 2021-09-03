import { NavLink } from 'react-router-dom';
import styled from  'styled-components/macro';
import { media } from 'styles/media';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LogoIcon} from 'assets/images/Logo.svg';
import { SocialMedia } from '../SocialMedia';


export const PageWrapper = styled.div`
  background-color: #F58021;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 30px 0;
  ${media.large`
    max-width: 1120px;
  `}
  ${media.xlarge`
    max-width: 1400px;
  `}
  `;

export const StyledLogo = styled(LogoIcon)`
  ${media.large`
    margin-right: 224px;
  `}
  ${media.xlarge`
    margin-right: 503px;
  `}
  
`;


export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  min-width: 483px;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%;
  padding-top: 12px;
  padding-left: 0px;
  margin: 0px;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: black;
  }

  .current {
    li {
      color: #00A092;
    }
  }
`;


const SocialMediaContainer = styled.div`
  ${media.large`
    margin-left: 138px;
  `}
  ${media.xlarge`
    margin-left: 68px;
  `}
  margin-top: 5px;
  min-width: 180px;
`;



export function Header() {
  
  const { t } = useTranslation();

  const MenuLinks = [
    {name: t('header.menu.about'), path:"/"},
    {name: t('header.menu.map'), path:"/map"},
    {name: t('header.menu.zoos'), path:"/zoos"},
    {name: t('header.menu.contact-us'), path:"/contact-us"},
  ];

  return (
    <>
    <PageWrapper>
      <ContentWrapper>
        <StyledLogo />
        <Menu>
          {MenuLinks.map((link, index) => (
            <NavLink key={index} to={link.path} exact activeClassName="current">
              <li>{link.name}</li>
            </NavLink>
          ))}
        </Menu>
        <SocialMediaContainer>
          <SocialMedia/>
        </SocialMediaContainer>
        
      </ContentWrapper>
    </PageWrapper>
    
    </>
  );
}