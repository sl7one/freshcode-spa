import { Container, Header, HeaderBox, NavItem, NavList } from 'styles/styled';
import icons from '../../assets/svg-sprite.svg';
import Scroll from 'react-scroll';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { UseMedia } from 'utils/hooks/useMedia';
const scroller = Scroll.scroller;
const scrollerOptions = {
   duration: 1500,
   delay: 100,
   smooth: true,
};

export const Navigation = () => {
   const { isDesktop } = UseMedia();
   return (
      <Header>
         <Container>
            {isDesktop ? (
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
                           <button
                              type="button"
                              onClick={() =>
                                 scroller.scrollTo('contacts', scrollerOptions)
                              }
                           >
                              Контакти
                           </button>
                        </NavItem>
                        <NavItem>
                           <button type="button">Головна</button>
                        </NavItem>
                        <NavItem>
                           <button
                              type="button"
                              onClick={() =>
                                 scroller.scrollTo('programm', scrollerOptions)
                              }
                           >
                              Програма
                           </button>
                        </NavItem>
                        <NavItem>
                           <button
                              type="button"
                              onClick={() =>
                                 scroller.scrollTo('howtoget', scrollerOptions)
                              }
                           >
                              Як потрапити
                           </button>
                        </NavItem>
                     </NavList>
                  </nav>
               </HeaderBox>
            ) : (
               <BurgerMenu />
            )}
         </Container>
      </Header>
   );
};
