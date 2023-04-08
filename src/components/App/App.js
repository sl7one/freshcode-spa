import { Hero } from 'components/Hero/Hero';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'styles/styled';

export const App = () => {
   return (
      <Container>
         <Navigation />
         <main>
            <Hero />
         </main>
         <footer></footer>
      </Container>
   );
};
