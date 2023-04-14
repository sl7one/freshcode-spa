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
   padding: 0 100px 0 100px;
   max-width: 1440px;
   margin: 0 auto;
`;

export const Header = styled.header`
   position: absolute;
   z-index: 1;
   width: 100%;
   margin-top: 64px;
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
      a {
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
   padding: 200px 0 150px 0;
   position: relative;
   p {
      width: 460px;
      line-height: 1.2;
      margin-top: 64px;
   }
`;

export const HeroImg = styled.img`
   position: absolute;
   top: 0;
   right: 0;
   width: 1030px;
   height: auto;
`;

export const BgImg = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   transform: rotate(180deg);
   z-index: -2;
   width: 800px;
   height: 600px;
`;

export const HeroText = styled.h1`
   width: 700px;
   font-size: 93px;
   color: #9ad2de;
   font-weight: 800;
   letter-spacing: -0.02em;
   text-transform: uppercase;

   background: -webkit-linear-gradient(#ebe134, rgb(122, 229, 253));
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;

export const MainSectionBox = styled.div`
   margin-bottom: 70px;
   padding: 70px 0;
   border-radius: 50px;
   background-color: ${colors.mainBlue};
   box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
   border: ${border.options};

   h2 {
      font-size: 60px;
      font-weight: 400;
      text-align: center;
      text-transform: uppercase;
   }
   p {
      margin-top: 10px;
      font-size: 27px;
      text-align: center;

      &:last-child {
         font-size: 20px;
         color: #73a6b1;
         width: 590px;
         margin: 20px auto 0 auto;
      }
   }
`;

export const SectionBox = styled.section`
   margin-bottom: 30px;
   background-image: url(${img});
   background-size: contain;
   background-repeat: no-repeat;
   background-size: 63%;
   background-position: right 0 bottom 50%;
   padding: 40px 40px 70px 40px;
`;

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 45px;

   img {
      border: ${border.options};
      border-radius: 50px;
      box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
      width: 580px;
      height: 425px;
   }
`;

export const H3 = styled.h3`
   font-weight: 400;
   font-size: 46px;
   letter-spacing: -0.02em;
   text-transform: uppercase;
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
   padding: 85px 40px;
   width: 100%;
   border: ${border.options};
   position: relative;
   box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 10px 0px;

   p {
      width: 400px;
      font-size: 28px;
   }

   img {
      position: absolute;
      top: -35%;
      right: 100px;
      width: 430px;

      &:nth-child(2) {
         top: -33%;
         right: 93px;
         filter: brightness(0) blur(8px);
         opacity: 0.5;
      }
   }
`;

export const BottomSectionBox = styled.div`
   width: 490px;
   margin: 0 auto;
   padding-bottom: 160px;
   h2 {
      font-size: 60px;
      font-weight: 400;
      text-align: center;
      text-transform: uppercase;
   }
   p {
      font-size: 20px;
      margin-top: 20px;
      color: #73a6b1;
      text-align: center;
      margin-bottom: 70px;

      &:nth-of-type(2) {
         margin-top: 77px;
         font-size: 27px;
         text-align: center;
         color: black;
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
   background-size: 40%;
   background-position: top -100px left 0;
   background-color: ${colors.mainYelow};
   padding: 60px 0 120px 0;
`;

export const FooterWrapperTop = styled.div`
   display: flex;
   padding: 40px;

   h2 {
      width: 50%;
      font-size: 60px;
      font-weight: 400;
      text-transform: uppercase;
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
   padding: 40px;
   display: flex;

   img {
      width: 50%;
   }

   form {
      width: 50%;
      font-size: 20px;

      p {
         font-size: 27px;
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
         margin-top: 30px;
         box-shadow: rgba(0, 0, 0, 0.3) 3px 3px 10px 0px;

         &:hover {
            background-position: bottom 0% left 50%;
         }
      }
   }
`;
