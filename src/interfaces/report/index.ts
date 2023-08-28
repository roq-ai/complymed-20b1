import { DashboardInterface } from 'interfaces/dashboard';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ReportInterface {
  id?: string;
  dashboard_id: string;
  report_content: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  dashboard?: DashboardInterface;
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface ReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  dashboard_id?: string;
  report_content?: string;
  user_id?: string;
  organization_id?: string;
}
