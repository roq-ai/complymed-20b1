import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProgressInterface {
  id?: string;
  task_id: string;
  user_id: string;
  status: string;
  percentage_completed: number;
  notes?: string;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ProgressGetQueryInterface extends GetQueryInterface {
  id?: string;
  task_id?: string;
  user_id?: string;
  status?: string;
  notes?: string;
}
