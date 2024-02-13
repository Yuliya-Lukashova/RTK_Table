export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}
