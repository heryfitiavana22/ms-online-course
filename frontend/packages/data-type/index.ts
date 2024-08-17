export type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  tags?: string[];
  user: User;
};

export type User = {
  name: string;
  lessonsCount?: number;
};
