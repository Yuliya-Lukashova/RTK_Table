import { type FC,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUniqueTags } from '../../helpers/getUniqueTags';
import { fetchAllPosts } from '../../store/posts/posts-thunks';
import type { AppDispatch,RootState, User } from '../../store/types';
import { fetchUsers } from '../../store/users/users-thunks';
import { TableItemTD, TableItemTH } from '../TableItem/TableItem';

const Table: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.users);
  const { allPosts } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (users.length > 0) dispatch(fetchAllPosts(users));
  }, [users]);

  const uniqueTags = getUniqueTags(allPosts);

  return (
    <table>
      <thead>
        <tr>
          <th>Users</th>
          {uniqueTags.map((tag) => (
            <TableItemTH key={tag} tag={tag} />
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user: User) => (
          <TableItemTD key={user.id} user={user} allPosts={allPosts} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
