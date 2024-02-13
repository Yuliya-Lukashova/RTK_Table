import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { User } from '../../store/types';
import api from '../api';
import { DEFAULT_ERROR_MESSAGE } from '../constants'

export const fetchAllPosts = createAsyncThunk(
  'posts/fetchUserPosts',
  async (users: User[], { rejectWithValue }) => {
    try {
      const promises = users.map(
        async ({ id }) => await api.get(`posts/user/${id}`)
      );
      const result = await Promise.all(promises).then((values) => values);
      const usersPosts = result.map((item) => item.data.posts).flat();
      return usersPosts;
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.message);
      }
      return DEFAULT_ERROR_MESSAGE;
    }
  }
);
