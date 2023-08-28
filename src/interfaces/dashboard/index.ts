import { ReportInterface } from 'interfaces/report';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DashboardInterface {
  id?: string;
  user_id: string;
  task_column: string;
  progress_bar: number;
  tilsynsrapport_field?: string;
  created_at?: any;
  updated_at?: any;
  report?: ReportInterface[];
  user?: UserInterface;
  _count?: {
    report?: number;
  };
}

export interface DashboardGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  task_column?: string;
  tilsynsrapport_field?: string;
}
