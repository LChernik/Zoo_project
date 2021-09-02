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

const MenuLinks = [
  {name: "about", path:"/"},
  {name: "map", path:"/map"},
  {name: "zoos", path:"/zoos"},
  {name: "contact us", path:"/contact-us"},
];

export function Header() {
  
  const { t } = useTranslation();

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

          {/* <NavLink to='/'>{t('header.menu.about')}</NavLink>
          <NavLink to='/map'>{t('header.menu.map')}</NavLink>
          <NavLink to='/zoos'>{t('header.menu.zoos')}</NavLink>
          <NavLink to='/contact-us'>{t('header.menu.contact-us')}</NavLink> */}
        </Menu>
        <SocialMediaContainer>
          <SocialMedia/>
        </SocialMediaContainer>
        
      </ContentWrapper>
    </PageWrapper>
    
    </>
  );
}