import styled from 'styled-components';
import img from '../assets/img/bg5.png';
import footerImg from '../assets/img/bg6.png';

const colors = {
   mainYelow: 'rgba(255, 245, 48,  1)',
   mainBlue: 'rgb(122, 229, 253)',
};
const border = {
   options: `15px double ${colors.mainYelow}`,
};

export const Container = styled.div`
   max-width: 390px;
   padding: 0 20px 0 20px;
   margin: 0 auto;

   @media (min-width: 390px) {
      max-width: 1440px;
      padding: 0 100px 0 100px;
   }
`;

export const Header = styled.header`
   position: absolute;
   z-index: 1;
   width: 100%;
   margin-top: 20px;

   @media (min-width: 390px) {
      margin-top: 64px;
   }
`;

export const HeaderBox = styled.div`
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
      button {
         text-transform: uppercase;
         background: linear-gradient(
            -45deg,
            rgba(122, 229, 253, 1) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(122, 229, 253, 1) 100%
         );

         border-radius: 87px;
         padding: 21px 28px;
         background-size: 200%;
         background-position: bottom 100% left 200%;
         transition: background-position 350ms ease-in-out;

         &:hover {
            background-position: bottom 0% left 50%;
         }
      }
   }
`;

export const HeroBox = styled.div`
   padding: 100px 0 280px 0;
   position: relative;
   overflow: hidden;

   @media (min-width: 390px) {
      padding: 200px 0 150px 0;
   }

   p {
      line-height: 1.2;
      margin-top: 64px;
      @media (min-width: 390px) {
         width: 480px;
      }
   }
`;

export const HeroImg = styled.img`
   position: absolute;
   bottom: 0;
   right: 0;
   max-width: 1030px;
   height: auto;

   @media (min-width: 390px) {
      top: 0;
   }
`;

export const BgImg = styled.img`
   position: absolute;
   bottom: 0;
   left: 0;
   transform: rotate(0);
   z-index: -2;
   min-width: 580px;

   @media (min-width: 390px) {
      top: 0;
      transform: rotate(180deg);
      max-width: 800px;
   }
`;

export const HeroText = styled.h1`
   width: 350px;
   font-size: 50px;
   color: #9ad2de;
   font-weight: 800;
   letter-spacing: -0.02em;
   text-transform: uppercase;

   background: -webkit-linear-gradient(#ebe134, rgb(122, 229, 253));
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;

   @media (min-width: 390px) {
      width: 700px;
      font-size: 93px;
   }
`;

export const MainSectionBox = styled.section`
   margin-bottom: 70px;
   padding: 40px 20px;
   border-radius: 50px;
   background-color: ${colors.mainBlue};
   box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
   border: ${border.options};

   @media (min-width: 390px) {
      padding: 70px 20px;
   }

   h2 {
      font-size: 40px;
      font-weight: 400;
      text-align: left;
      text-transform: uppercase;

      @media (min-width: 390px) {
         font-size: 60px;
         text-align: center;
      }
   }
   p {
      margin-top: 17px;
      font-size: 27px;
      text-align: left;

      @media (min-width: 390px) {
         font-size: 20px;
         text-align: center;
      }

      &:last-child {
         font-size: 16px;
         color: #73a6b1;
         margin: 27px auto 0 auto;
         text-align: left;

         @media (min-width: 390px) {
            font-size: 20px;
            text-align: center;
            width: 580px;
         }
      }
   }
`;

export const SectionBox = styled.section`
   margin-bottom: 30px;
   background-image: url(${img});
   background-size: cover;
   background-repeat: no-repeat;
   padding: 40px 0px 70px 0px;

   @media (min-width: 390px) {
      padding: 40px 40px 70px 40px;
      background-size: 63%;
      background-position: right 0 bottom 50%;
      background-size: contain;
   }

   img {
      border: ${border.options};
      border-radius: 50px;
      box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
      width: 350px;
      margin-bottom: 45px;

      @media (min-width: 390px) {
         width: 580px;
         margin-bottom: unset;
      }
   }
`;

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-top: 45px;

   @media (min-width: 390px) {
      flex-direction: row;
   }
`;

export const H3 = styled.h3`
   font-weight: 400;
   font-size: 30px;
   letter-spacing: -0.02em;
   text-transform: uppercase;

   @media (min-width: 390px) {
      font-size: 46px;
   }
`;

export const List = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 50px;
   margin-left: 30px;

   li {
      font-weight: 400;
      font-size: 16px;

      span {
         margin-top: 10px;
         color: #3d8c9d;
      }
   }
`;

export const MainBtn = styled.button`
   text-transform: uppercase;
   background: linear-gradient(
      -45deg,
      rgba(122, 229, 253, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(122, 229, 253, 1) 100%
   );

   border-radius: 87px;
   padding: 21px 28px;
   background-size: 200%;
   background-position: bottom 100% left 200%;
   transition: background-position 350ms ease-in-out;

   margin: 0 auto;
   box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 10px 0px;

   &:hover {
      background-position: bottom 0% left 50%;
   }
`;

export const GiftSection = styled.section`
   background-image: url(${img});
   background-size: contain;
   background-repeat: no-repeat;
   height: 740px;
   display: flex;
   align-items: center;
`;

export const GiftSectionBox = styled.div`
   border-radius: 50px;
   background-color: ${colors.mainBlue};
   padding: 180px 20px 40px 20px;
   width: 100%;
   border: ${border.options};
   position: relative;
   box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 10px 0px;

   @media (min-width: 390px) {
      padding: 85px 40px;
   }

   p {
      font-size: 20px;
      text-align: center;
      @media (min-width: 390px) {
         font-size: 28px;
         width: 460px;
         text-align: left;
         margin-left: 100px;
      }
   }

   img {
      position: absolute;
      top: -65%;
      right: 0;
      width: 340px;

      @media (min-width: 390px) {
         top: -35%;
         right: 100px;
         width: 430px;
      }

      &:nth-child(2) {
         top: -65%;
         right: 0;
         filter: brightness(0) blur(8px);
         opacity: 0.5;

         @media (min-width: 390px) {
            top: -33%;
            right: 93px;
         }
      }
   }
`;

export const BottomSectionBox = styled.div`
   margin: 0 auto;
   padding-bottom: 160px;

   @media (min-width: 390px) {
      width: 490px;
   }

   h2 {
      font-size: 50px;
      font-weight: 400;
      text-align: left;
      text-transform: uppercase;

      @media (min-width: 390px) {
         font-size: 60px;
         text-align: center;
         white-space: nowrap;
      }
   }
   p {
      font-size: 16px;
      margin-top: 20px;
      color: #73a6b1;
      text-align: left;
      margin-bottom: 70px;

      @media (min-width: 390px) {
         font-size: 20px;
         text-align: center;
      }

      &:nth-of-type(2) {
         margin-top: 77px;
         font-size: 20px;
         text-align: center;
         color: black;

         @media (min-width: 390px) {
            font-size: 27px;
         }
      }

      &:last-of-type {
         display: flex;
         justify-content: center;
         margin-top: 25px;

         span {
            font-size: 60px;
            color: black;
            display: flex;

            &:not(:last-of-type)::after {
               content: '';
               display: block;
               height: 100%;
               width: 2px;
               background-color: ${colors.mainBlue};
               margin: 0 13px;
            }
         }
      }
   }
`;

export const FooterBox = styled.div`
   background-image: url(${footerImg});
   background-repeat: no-repeat;
   background-size: 60%;
   background-position: top 15px left 0;
   background-color: ${colors.mainYelow};
   padding: 60px 0 120px 0;

   @media (min-width: 390px) {
      background-position: top -100px left 0;
      background-size: 60%;
   }

   svg {
      fill: rgb(122, 229, 253);
   }
`;

export const FooterWrapperTop = styled.div`
   padding: 40px 0;

   @media (min-width: 390px) {
      display: flex;
      padding: 40px;
   }

   svg {
      transition: transform 350ms ease-in-out;
      &:hover {
         transform: scale(1.2);
      }
   }

   h2 {
      width: 50%;
      font-size: 50px;
      font-weight: 400;
      text-transform: uppercase;

      @media (min-width: 390px) {
         font-size: 60px;
      }
   }

   div {
      width: 100%;
      @media (min-width: 390px) {
         width: 50%;
      }

      div {
         width: 100%;
      }

      div[name='links'] {
         margin-top: 55px;

         div {
            display: flex;
            gap: 15px;
         }
      }
   }

   p {
      font-size: 16px;
      margin-top: 40px;

      @media (min-width: 390px) {
         font-size: 20px;
         margin-top: unset;
      }
   }

   a {
      align-self: flex-start;
      margin-top: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 900;

      span {
         white-space: nowrap;
      }
   }
`;

export const FooterWrapperBottom = styled.div`
   background-color: white;
   border-radius: 50px;
   padding: 20px;

   @media (min-width: 390px) {
      padding: 40px;
   }

   @media (min-width: 390px) {
      display: flex;
   }

   img {
      @media (min-width: 390px) {
         width: 50%;
      }
   }

   form {
      width: 100%;
      margin-top: 70px;

      @media (min-width: 390px) {
         width: 50%;
         margin-top: unset;
      }

      p {
         font-size: 20px;

         @media (min-width: 390px) {
            font-size: 27px;
            width: 455px;
         }
      }

      input {
         width: 100%;
         padding: 20px 40px;
         border-radius: 61px;
         background-color: ${colors.mainYelow};
         margin-top: 30px;

         &:first-of-type {
            margin-top: 40px;
         }
      }

      button {
         text-transform: uppercase;
         background: linear-gradient(
            -45deg,
            rgba(122, 229, 253, 1) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(122, 229, 253, 1) 100%
         );

         border-radius: 87px;
         padding: 21px 28px;
         background-size: 200%;
         background-position: bottom 100% left 200%;
         transition: background-position 350ms ease-in-out;
         margin: 30px auto;
         box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 10px 0px;

         &:hover {
            background-position: bottom 0% left 50%;
         }
      }
   }
`;
