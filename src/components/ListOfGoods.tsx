import { FC } from 'react';

type Props = {
  visibleGoods: string[];
};

export const ListOfGoods: FC<Props> = ({ visibleGoods }) => {
  return (
    <ul>
      {visibleGoods.map((item) => (
        <li data-cy="Good" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};