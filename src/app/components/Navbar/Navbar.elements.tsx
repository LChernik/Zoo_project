import styled from  'styled-components/macro';
import { media } from 'styles/media';
import { ReactComponent as LogoIcon} from 'assets/images/Logo.svg';
import { Container } from '../../../styles/global-styles';

export const Nav = styled.div`
  background-color: #F58021;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.small`
    margin-right: 36px;
    margin-left: 20px;
  `}
  ${media.medium`
    margin-right: 47px;
    margin-left: 40px;
  `}
  ${media.large`
    margin-right: 100px;
    margin-left: 100px;
  `}
  ${media.xlarge`
    margin: auto;
  `}
  ${Container}
  `;

export const Logo = styled(LogoIcon)`
  ${media.large`
    margin-right: 224px;
  `}
  ${media.xlarge`
    margin-right: 503px;
  `}
  `;

export const NavMenu = styled.ul<{ click: boolean }>`
  display: flex;
  justify-content: space-between;
  list-style: none;
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
 
  ${media.small`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 50%;
    right: 0;
    top: ${({ click }) => (click ? '109px' : '-100%')};
    height: 30vh;
    padding: 30px;
    opacity: 1;
    transition: all 0.5s ease;
    background: #F58021;
  `}

  ${media.large`
    min-width: 432px;
  `}
  ${media.xlarge`
    min-width: 483px;
  `}
  
`;

export const MobileIcon = styled.div`
  display: none;

  ${media.small`
    display: block;
    position: absolute;
    margin: 40px 36px 40px 0;
    top: 0;
    right: 0;
  `}
  ${media.medium`
    display: none;
  `}
  ${media.large`
    display: none;
  `}
  ${media.xlarge`
    display: none; 
  `}
`;
