import { type FC } from 'react';

import { getUniqueTags } from '../../helpers/getUniqueTags';
import { getUserPosts } from '../../helpers/getUserPosts';
import { getUserTags } from '../../helpers/getUserTags';
import { Post, User } from '../../store/types';
import classes from './TableItem.module.scss';

interface TableItemTDProps {
  user: User;
  allPosts: Post[];
}

interface TableItemTHProps {
  tag: string;
}

export const TableItemTD: FC<TableItemTDProps> = ({ user, allPosts }) => {
  const userPosts = getUserPosts(allPosts, user.id);
  const userTags = getUserTags(userPosts);
  const uniqueTags = getUniqueTags(allPosts);

  const userTagsCounts = userTags.reduce(
    (acc: Record<string, number>, tag: string) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    },
    {}
  );

  const arrCountsForRender = uniqueTags.map((tag) => {
    if (Object.keys(userTagsCounts).includes(tag)) {
      return userTagsCounts[tag];
    } else {
      return 0;
    }
  });

  return (
    <tr className={classes.table}>
      <td>
        {user.firstName} {user.lastName}
      </td>

      {arrCountsForRender.map((count, index) => (
        <td key={index}>{count}</td>
      ))}
    </tr>
  );
};

export const TableItemTH: FC<TableItemTHProps> = ({ tag }) => {
  return <th className={classes.table}>{tag}</th>;
};
