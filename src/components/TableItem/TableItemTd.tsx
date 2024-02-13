import { memo } from 'react';

import { User } from '../../store/types';
import classes from './TableItem.module.scss';

interface TableItemTDProps {
  user: User;
  countsOfTags: number[];
}

export const TableItemTD = memo(({ user, countsOfTags }: TableItemTDProps): JSX.Element => {

  return (
    <tr className={classes.table}>
      <td>
        {user.firstName} {user.lastName}
      </td>

      {countsOfTags.map((count, index) => (
        <td key={index}>{count}</td>
      ))}
    </tr>
  );
});
