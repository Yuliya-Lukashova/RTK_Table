import { Post } from '../../src/store/types/index';

export const getUserTags = (userPosts: Post[]): string[] => {
    return userPosts
      .map((post: Post) => post.tags)
      .flat()
   };
   