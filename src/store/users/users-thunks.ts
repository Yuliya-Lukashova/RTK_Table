import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../api';
import { DEFAULT_ERROR_MESSAGE } from '../constants'
import { User } from '../types';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get<User[]>('users');
    return 'users' in data ? data.users : [];
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      return rejectWithValue(err.message);
    }
    return DEFAULT_ERROR_MESSAGE;
  }
});
