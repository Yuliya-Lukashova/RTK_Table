import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../api';
import { User } from '../types';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const { data } = await api.get<User[]>('users');
    return 'users' in data ? data.users : [];
  } catch (err: unknown) {
    if (err instanceof AxiosError) console.log(err.message);
  }
});