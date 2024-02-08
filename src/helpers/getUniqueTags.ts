import { Post } from '../../src/store/types/index';

export const getUniqueTags = (allPosts: Post[]): string[] => {
 return allPosts
    .map((post: Post) => post.tags)
    .flat()
    .filter((tag: string, index: number, tags: string[]) => tags.indexOf(tag) === index)
    .sort((a: string, b: string) => a.localeCompare(b));
};
