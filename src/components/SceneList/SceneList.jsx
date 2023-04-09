import { List } from 'styles/styled';

export const SceneList = ({ list }) => {
   const items = list.map(({ title, time }) => (
      <li key={title}>
         <p>{title}</p>
         <span>{time}</span>
      </li>
   ));

   return <List>{items}</List>;
};
