import { BgImg, Container, HeroBox, HeroImg, HeroText } from 'styles/styled';
import heroImg from '../../assets/img/hero.png';
import bg from '../../assets/img/bg.png';

export const Hero = () => {
   return (
      <HeroBox>
         <Container>
            <HeroText>Фестиваль Перемоги України</HeroText>
            <p>Свято для усіх українців, які працювали, боролися й вірили у перемогу</p>
            <HeroImg
               src={heroImg}
               alt="Людина з прапором"
            />
            <BgImg
               src={bg}
               alt="Фонове зображення"
            />
         </Container>
      </HeroBox>
   );
};
