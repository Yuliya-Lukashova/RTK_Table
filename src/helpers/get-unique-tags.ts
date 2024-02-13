import { Post } from '../store/types';

export const getUniqueTags = (allPosts: Post[]) => {
    const uniqueTagsSet: Set<string> = new Set();
  
    allPosts.forEach((post: Post) => {
        post.tags.forEach((tag: string) => {
          uniqueTagsSet.add(tag);
        });
      });
      return Array.from(uniqueTagsSet).sort((a, b) => a.localeCompare(b));
    };
    