import styled from 'styled-components';

export const Container = styled.div`
   padding: 60px 100px 120px 100px;
`;

export const Header = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const NavList = styled.ul`
   display: flex;
   gap: 30px;
   align-items: center;
`;

export const NavItem = styled.li`
   &:last-child {
      a {
         text-transform: uppercase;
         background: #7ae5fd;
         border-radius: 87px;
         padding: 21px 28px;
      }
   }
`;

export const HeroBox = styled.div`
   p {
      width: 460px;
      line-height: 1.2;
      margin-top: 64px;
   }
`;

export const HeroText = styled.h1`
   margin-top: 60px;
   width: 700px;
   font-size: 93px;
   color: #9ad2de;
   font-weight: 800;
   letter-spacing: -0.02em;
   text-transform: uppercase;

   background: -webkit-linear-gradient(rgb(122, 229, 253), #9ad2de);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;
