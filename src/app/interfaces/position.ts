import { Skill } from './skill';

export interface Position {
  Id: string;
  title: string;
  companyName: string;
  workType: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  skills: Array<Skill>;
}

