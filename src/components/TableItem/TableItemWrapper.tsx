import { useMemo } from 'react';

import { Post, User } from '../../store/types';
import { getUniqueTags, getUserPosts, getUserTags } from '.';
import { TableItemTD } from './TableItemTd';


interface TableItemWrapperProps {
  user: User;
  allPosts: Post[];
}

export const TableItemWrapper= ({ user, allPosts }: TableItemWrapperProps): JSX.Element => {
  const userPosts = useMemo(() => getUserPosts(allPosts, user.id), [allPosts, user.id]);
  const userTags = useMemo(() => getUserTags(userPosts), [userPosts]);
  const uniqueTags = useMemo(() => getUniqueTags(allPosts), [allPosts]);

  const userTagsCounts = useMemo(() => {
    return userTags.reduce(
      (acc: Record<string, number>, tag: string) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      },
      {}
    );
  }, [userTags]);

  const countsOfTagsInUserPosts = useMemo(() => {
    return uniqueTags.map((tag) => {
      return Object.keys(userTagsCounts).includes(tag) ? userTagsCounts[tag] : 0;
    });
  }, [uniqueTags, userTagsCounts]);

  return <TableItemTD user={user} countsOfTags={countsOfTagsInUserPosts} />;
};
