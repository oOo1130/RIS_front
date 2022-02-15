import { number, string } from "yup/lib/locale";

export interface IProfileDetails {
  avatar: string
  fName: string
  lName: string
  company: string
  contactPhone: string
  companySite: string
  country: string
  language: string
  timeZone: string
  currency: string
  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
}

export interface IUserListDetails {
  userId: number
  loginName: string
  fullName: string
  password: string
  confirmPassword: string
  mobileNo?: number
  consultant: string
  roleId: number
  roleName: string
  hospital: string
  rCID: number
  tenantId: string
  status: string
  comments: string
  cloudAccessLink?: string
  cloudUserName?: string
  cloudPassword?: string
  isAssignToRadAllow: boolean
  isMainViewerAlloted: boolean
  isReportWriteAllow: boolean
  isReportViewAllow: boolean
}

export interface IUpdateEmail {
  newEmail: string
  confirmPassword: string
}

export interface IUpdatePassword {
  currentPassword: string
  newPassword: string
  passwordConfirmation: string
}

export interface IConnectedAccounts {
  google: boolean
  github: boolean
  stack: boolean
}

export interface IEmailPreferences {
  successfulPayments: boolean
  payouts: boolean
  freeCollections: boolean
  customerPaymentDispute: boolean
  refundAlert: boolean
  invoicePayments: boolean
  webhookAPIEndpoints: boolean
}

export interface INotifications {
  notifications: {
    email: boolean
    phone: boolean
  }
  billingUpdates: {
    email: boolean
    phone: boolean
  }
  newTeamMembers: {
    email: boolean
    phone: boolean
  }
  completeProjects: {
    email: boolean
    phone: boolean
  }
  newsletters: {
    email: boolean
    phone: boolean
  }
}

export interface IDeactivateAccount {
  confirm: boolean
}

export interface IReportConsultant {
  rcid: number
  name: string
  radNextCloudID: string

  // IdentityLine1: string
  // Fsize2: number
  // IdentityLine2: string
  // Fsize3: number
  // IdentityLine3: string
  // Fsize4: number
  // IdentityLine4: string
  // Fsize5: number
  // IdentityLine5: string
  // Fsize6: number
  // IdentityLine6: string
  // Fsize7: number
  // ESignature: Uint8Array
  // IsESignatureAllow: boolean
  // Status: string
  // SignatureBase64HtmlEmbeded: string
  // IsViewerWithDefaultTemplate: boolean
  // DicomImagePath: string
  // GroupName: string
}

export interface IRole {
  isReportViewAllow: boolean;
  roleID: number
  name: string
  description: string
}
export interface IHospital {
  pid: number
  modality: string
  procName: string
}

export interface ITenant {
  tenantId: number
  name: string
  shortName: string
  address: string
  mobileNo: string
  phoneNo: string
  fax: string
  email: string
  contactPerson: string
  isActive?: boolean
  hasDefaultRadiologist?: boolean
}

export const profileDetailsInitValues: IProfileDetails = {
  avatar: '/media/avatars/150-2.jpg',
  fName: 'Max',
  lName: 'Smith',
  company: 'Keenthemes',
  contactPhone: '044 3276 454 935',
  companySite: 'keenthemes.com',
  country: '',
  language: '',
  timeZone: '',
  currency: '',
  communications: {
    email: false,
    phone: false,
  },
  allowMarketing: false,
}

export const userListDetailsInitValues: IUserListDetails = {
  fullName: '',
  loginName: '',
  password: '',
  confirmPassword: '',
  mobileNo: null,
  consultant: '',
  roleName: '',
  hospital: '',
  isAssignToRadAllow: false,
  isReportViewAllow: false,
  isReportWriteAllow: false,
  isMainViewerAlloted: false,
  cloudAccessLink: '',
  cloudUserName: '',
  cloudPassword: '',
  roleId: 0,
  userId: 0,
  rCID: 0,
  tenantId: "",
  status:"",
  comments: ""
}

export const updateEmail: IUpdateEmail = {
  newEmail: 'support@keenthemes.com',
  confirmPassword: '',
}

export const updatePassword: IUpdatePassword = {
  currentPassword: '',
  newPassword: '',
  passwordConfirmation: '',
}

export const connectedAccounts: IConnectedAccounts = {
  google: true,
  github: true,
  stack: false,
}

export const emailPreferences: IEmailPreferences = {
  successfulPayments: false,
  payouts: true,
  freeCollections: false,
  customerPaymentDispute: true,
  refundAlert: false,
  invoicePayments: true,
  webhookAPIEndpoints: false,
}

export const notifications: INotifications = {
  notifications: {
    email: true,
    phone: true,
  },
  billingUpdates: {
    email: true,
    phone: true,
  },
  newTeamMembers: {
    email: true,
    phone: false,
  },
  completeProjects: {
    email: false,
    phone: true,
  },
  newsletters: {
    email: false,
    phone: false,
  },
}

export const deactivateAccount: IDeactivateAccount = {
  confirm: false,
}

export const tenantDetail : ITenant = {
  tenantId: null,
  name: "",
  shortName: "",
  address: "",
  mobileNo: null,
  phoneNo: "",
  fax: "",
  email: "",
  contactPerson: "",
  isActive: false,
  hasDefaultRadiologist: true,
}