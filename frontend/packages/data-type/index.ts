export type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  tags?: string[];
  instructorId: string;
  instructor?: Instructor;
};

export interface User {
  name: string;
}

export interface Instructor extends User {
  lessonsCount?: number;
}
