import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { User } from '../../store/types';
import { TableItemWrapper } from '../TableItem/TableItemWrapper';
import { 
  fetchAllPosts,
  fetchUsers,
  getUniqueTags,
  TableItemTH
} from '.';


const Table = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const allPosts = useAppSelector((state) => state.posts.allPosts);
  const uniqueTags = useMemo(() => getUniqueTags(allPosts), [allPosts]);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (users.length > 0) dispatch(fetchAllPosts(users));
  }, [users]);

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
          <TableItemWrapper 
            key={user.id}
            allPosts={allPosts}
            user={user}/>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
