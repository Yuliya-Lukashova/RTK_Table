import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { User } from '../types';
import { fetchUsers } from './users-thunks';

interface UsersState {
  users: User[];
  usersError: string;
  isLoading: boolean;
}

const usersInitialState: UsersState = {
  users: [],
  usersError: '',
  isLoading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.usersError = '';
    },
    setUsersError(state, action: PayloadAction<string>) {
      state.usersError = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        if(Array.isArray(action.payload)) {
        state.users = action.payload;
        }
        state.usersError = '';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.error.message === 'string')
        state.usersError = action.error.message; 
      });
  },
});

export const { setUsers, setUsersError } = usersSlice.actions;

export default usersSlice.reducer;
