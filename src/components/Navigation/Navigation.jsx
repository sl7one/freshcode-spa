import { Container, Header, HeaderBox, NavItem, NavList } from 'styles/styled';
import icons from '../../assets/svg-sprite.svg';
import Scroll from 'react-scroll';
const scroller = Scroll.scroller;
const scrollerOptions = {
   duration: 1500,
   delay: 100,
   smooth: true,
};

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
                        <a
                           href={
                              // eslint-disable-next-line
                              '#'
                           }
                           onClick={() => scroller.scrollTo('contacts', scrollerOptions)}
                        >
                           Контакти
                        </a>
                     </NavItem>
                     <NavItem>
                        <a
                           href={
                              // eslint-disable-next-line
                              '#'
                           }
                        >
                           Головна
                        </a>
                     </NavItem>
                     <NavItem>
                        <a
                           href={
                              // eslint-disable-next-line
                              '#'
                           }
                           onClick={() => scroller.scrollTo('programm', scrollerOptions)}
                        >
                           Програма
                        </a>
                     </NavItem>
                     <NavItem>
                        <a
                           href={
                              // eslint-disable-next-line
                              '#'
                           }
                           onClick={() => scroller.scrollTo('howtoget', scrollerOptions)}
                        >
                           Як потрапити
                        </a>
                     </NavItem>
                  </NavList>
               </nav>
            </HeaderBox>
         </Container>
      </Header>
   );
};
