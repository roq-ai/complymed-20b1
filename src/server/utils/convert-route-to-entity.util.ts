const mapping: Record<string, string> = {
  dashboards: 'dashboard',
  organizations: 'organization',
  progresses: 'progress',
  reports: 'report',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
