import { Post } from '../../src/store/types/index';

export const getUserPosts = (allPosts: Post[], userId: number): Post[] => {
    return allPosts
      .filter((post: Post) => post.userId === userId)
   };
   