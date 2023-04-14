import { Hero } from 'components/Hero/Hero';
import { Navigation } from 'components/Navigation/Navigation';
import { SceneList } from 'components/SceneList/SceneList';
import { Section } from 'components/Section/Section';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import {
   BottomSectionBox,
   Container,
   FooterBox,
   FooterWrapperBottom,
   FooterWrapperTop,
   GiftSection,
   GiftSectionBox,
   MainBtn,
   MainSectionBox,
   Wrapper,
} from 'styles/styled';
import { sceneMasterClass, sceneMusic, sceneVictory } from 'utils/scene';
import scene1 from '../../assets/img/scene1.jpg';
import scene2 from '../../assets/img/scene2.jpg';
import scene3 from '../../assets/img/scene3.jpg';
import gift from '../../assets/img/gift.png';
import email from '../../assets/img/email.png';
import icons from '../../assets/svg-sprite.svg';

export const App = () => {
   return (
      <>
         <Navigation />
         <main>
            <Hero />
            <Container>
               <section>
                  <MainSectionBox name="programm">
                     <h2>Програма фестивалю</h2>
                     <p>3 сцени, щоб добре й із задоволенням провести час</p>
                     <p>
                        Усі сцени розташовані так, щоб вам було зручно ходити між ними, і
                        вони одна одну не глушили
                     </p>
                  </MainSectionBox>
               </section>
               <Section>
                  <SectionTitle title="Сцена Перемоги" />
                  <p style={{ marginTop: '10px' }}>Розбудова України після війни</p>
                  <Wrapper>
                     <SceneList list={sceneVictory} />
                     <img
                        src={scene1}
                        alt=""
                     />
                  </Wrapper>
               </Section>
               <Section>
                  <SectionTitle title='Сцена "Музикa"' />
                  <Wrapper>
                     <SceneList list={sceneMusic} />
                     <img
                        src={scene2}
                        alt=""
                     />
                  </Wrapper>
               </Section>
               <Section>
                  <SectionTitle title='Сцена "Майстер-класи для дітей"' />
                  <Wrapper>
                     <SceneList list={sceneMasterClass} />
                     <img
                        src={scene3}
                        alt=""
                     />
                  </Wrapper>
               </Section>
               <MainBtn type="button">Дізнатися більше</MainBtn>
               <GiftSection>
                  <GiftSectionBox>
                     <p>
                        Кожен учасник фестивалю отримає прапор України та футболку з
                        гербом
                     </p>
                     <img
                        src={gift}
                        alt="Подарунок-футболка"
                     />
                     <img
                        src={gift}
                        alt="Подарунок-футболка"
                     />
                  </GiftSectionBox>
               </GiftSection>
               <section name="howtoget">
                  <BottomSectionBox>
                     <h2>Як потрапити</h2>
                     <p>
                        Фестиваль безкоштовний. Будемо збирати пожертви для відбудови
                        зруйнованих українських міст та сіл.
                     </p>
                     <p>Наша мета 10 000 000 гривень! </p>
                     <p>
                        <span>00</span>
                        <span>230</span>
                        <span>025</span>
                     </p>
                     <MainBtn type="button">Зробити пожертву</MainBtn>
                  </BottomSectionBox>
               </section>
            </Container>
         </main>
         <footer name="contacts">
            <FooterBox>
               <Container>
                  <FooterWrapperTop>
                     <h2>Контакти</h2>
                     <div style={{ width: '50%' }}>
                        <div>
                           <p>
                              Якщо у вас виникають питання – <br /> телефонуйте за номером
                           </p>
                           <a href="tel:+380987654321">
                              <svg
                                 width={32}
                                 height={32}
                              >
                                 <use href={icons + '#icon-phone'}></use>
                              </svg>
                              <span>0-987-654-321</span>
                           </a>
                        </div>
                        <div style={{ marginTop: '55px' }}>
                           <p>Або пишіть нам у чат-бот</p>
                           <div
                              style={{
                                 display: 'flex',
                                 gap: '15px',
                              }}
                           >
                              <a
                                 href="https://web.telegram.org/"
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <svg
                                    width={32}
                                    height={32}
                                 >
                                    <use href={icons + '#icon-telegram'}></use>
                                 </svg>
                              </a>
                              <a
                                 href="https://www.viber.com/"
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <svg
                                    width={32}
                                    height={32}
                                 >
                                    <use href={icons + '#icon-viber'}></use>
                                 </svg>
                              </a>
                           </div>
                        </div>
                     </div>
                  </FooterWrapperTop>
                  <FooterWrapperBottom>
                     <img
                        src={email}
                        alt="Картинка емейлу"
                     />

                     <form>
                        <p>
                           Щоб дізнаватися усі новини фестивалю, підпишися на нашу
                           розсилку
                        </p>
                        <input
                           type="text"
                           name="text"
                           placeholder="Ім'я"
                        />
                        <input
                           type="email"
                           name="email"
                           placeholder="Емейл"
                        />
                        <button type="submit">Підписатися</button>
                     </form>
                  </FooterWrapperBottom>
               </Container>
            </FooterBox>
         </footer>
      </>
   );
};
