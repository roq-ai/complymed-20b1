interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Franchise Admin'],
  customerRoles: [],
  tenantRoles: ['Franchise Admin', 'Basic User'],
  tenantName: 'Organization',
  applicationName: 'ComplyMED',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
