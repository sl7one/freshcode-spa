import { NavLink } from 'react-router-dom';
import { Container, Header, HeaderBox, NavItem, NavList } from 'styles/styled';
import icons from '../../assets/svg-sprite.svg';

export const Navigation = () => {
   return (
      <Header>
         <Container>
            <HeaderBox>
               <svg
                  width={65}
                  height={65}
               >
                  <use href={icons + '#icon-logo'}></use>
               </svg>
               <nav>
                  <NavList>
                     <NavItem>
                        <NavLink to="contacts">Контакти</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="main">Головна</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="programm">Програма</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="signup">Як потрапити</NavLink>
                     </NavItem>
                  </NavList>
               </nav>
            </HeaderBox>
         </Container>
      </Header>
   );
};
