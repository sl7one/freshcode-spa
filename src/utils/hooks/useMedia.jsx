import { useMediaQuery } from 'react-responsive';

export const UseMedia = () => {
   const isDesktop = useMediaQuery({
      query: '(min-width: 390px)',
   });
   return { isDesktop };
};
