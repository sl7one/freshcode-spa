import icons from '../../assets/svg-sprite.svg';

export const BurgerMenu = () => {
   return (
      <button
         type="button"
         style={{ marginLeft: 'auto' }}
      >
         <svg
            width={65}
            height={65}
         >
            <use
               href={icons + '#icon-menu'}
               fill="rgb(122, 229, 253)"
            ></use>
         </svg>
      </button>
   );
};
