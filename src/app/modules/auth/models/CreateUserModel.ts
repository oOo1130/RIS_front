export interface CreateUserModel {
  userId: number
  loginName: string
  fullName: string
  mobileNo: number
  roleId: number
  roleName: string
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
