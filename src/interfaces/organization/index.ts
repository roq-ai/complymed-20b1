import { ReportInterface } from 'interfaces/report';
import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  country?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  report?: ReportInterface[];
  task?: TaskInterface[];
  user?: UserInterface;
  _count?: {
    report?: number;
    task?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  country?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
