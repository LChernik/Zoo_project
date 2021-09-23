import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SocialMedia } from '../SocialMedia';
import { ReactComponent as HamburgerIcon} from 'assets/images/hamburger.svg';
import { ReactComponent as CloseIcon} from 'assets/images/close_icon.svg';
import { 
  Nav,
  NavbarContainer,
  Logo,
  NavMenu,
  MobileIcon
  } from './Navbar.elements'


export function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  const { t } = useTranslation();

  const MenuLinks = [
    {name: t('header.menu.about'), path:"/"},
    {name: t('header.menu.map'), path:"/map"},
    {name: t('header.menu.zoos'), path:"/zoos"},
    {name: t('header.menu.contact-us'), path:"/contact-us"},
  ];

  return (
    <>
    <Nav>
      <NavbarContainer>
        <Logo />
        <NavMenu onClick={handleClick} click={click}>
          {MenuLinks.map((link, index) => (
            <NavLink key={index} to={link.path} exact activeClassName="current">
              <li>{link.name}</li>
            </NavLink>
          ))}
        </NavMenu>
        <MobileIcon onClick={handleClick}>{click ? <CloseIcon /> : <HamburgerIcon />}</MobileIcon>
        <SocialMedia />
      </NavbarContainer>
    </Nav>
    
    </>
  );
}
