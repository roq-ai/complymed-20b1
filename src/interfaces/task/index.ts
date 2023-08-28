import { ProgressInterface } from 'interfaces/progress';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  due_date: any;
  status: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  progress?: ProgressInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    progress?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  user_id?: string;
  organization_id?: string;
}
