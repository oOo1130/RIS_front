/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
// import {KTSVG} from '../../../helpers'
import * as Yup from 'yup'
import {IHospital, IReportConsultant, IRole, IUserListDetails, userListDetailsInitValues as initialValues} from '../../../../app/modules/accounts/components/settings/SettingsModel'
import {useFormik} from 'formik'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getHospitals, getReportConsultants, getRoles, createUser } from '../../../../app/modules/auth/redux/AuthCRUD'
import * as auth from '../../../../app/modules/auth/redux/AuthRedux'
import { RootState } from '../../../../setup'


type Props = {
  className: string
}

const userListDetailsSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    loginName: Yup.string().required('User name is required'),
  })
  
const ProfileDetails: React.FC = () => {
    const [data, setData] = useState<IUserListDetails>(initialValues)
    const updateData = (fieldsToUpdate: Partial<IUserListDetails>): void => {
        const updatedData = Object.assign(data, fieldsToUpdate)
        setData(updatedData)
    }

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const formik = useFormik<IUserListDetails>({
        initialValues,
        validationSchema: userListDetailsSchema,
        onSubmit: (values) => {
            setLoading(true)
            setTimeout(() => {
                values.cloudAccessLink = data.cloudAccessLink
                values.cloudPassword = data.cloudPassword
                values.cloudUserName = data.cloudUserName
                // values.hospital = data.hospital
                values.fullName = data.fullName
                values.loginName = data.loginName
                values.isAssignToRadAllow = data.isAssignToRadAllow
                values.isMainViewerAlloted = data.isMainViewerAlloted
                values.isReportViewAllow = data.isReportViewAllow
                values.isReportWriteAllow = data.isReportWriteAllow
                values.tenantId = data.tenantId
                // values.password = data.password
                // values.confirmPassword = data.confirmPassword
                values.mobileNo = data.mobileNo
                // values.consultant = data.consultant
                const updatedData = Object.assign(data, values)
                setData(updatedData)
                setLoading(true)
            }, 1000)
        },
    })

    useEffect(() => {
        const getAPIConsultant = async () => {
            await getReportConsultants()
            .then(res => res.data)
            .then(tasks => {
                dispatch(auth.actions.reportConsultants(tasks))})  
        }
        const getAPIRole = async () => {
            await getRoles()
            .then(res => res.data)
            .then(tasks => {
                dispatch(auth.actions.getRoles(tasks))})  
        }
        const getAPIHospital = async () => {
            await getHospitals()
            .then(res => res.data)
            .then(tasks => {
                dispatch(auth.actions.getHospitals(tasks))})  
        }

        const saveAPIUser = async (values) => {
            await createUser(values)
            .then(res => setLoading(true))
        }

        getAPIConsultant()
        getAPIRole()
        getAPIHospital()
        saveAPIUser(data)
    }, [])

        const consultants: IReportConsultant[] = useSelector<RootState>(state => state.auth.consultants, shallowEqual) as IReportConsultant[]
        const roles: IRole[] = useSelector<RootState>(state => state.auth.roles, shallowEqual) as IRole[]
        const hospitals: IHospital[] = useSelector<RootState>(state => state.auth.hospitals, shallowEqual) as IHospital[]

        const cancelAssign = () => {
            setData(initialValues)
            }
    return (
        <div className='card mb-5 mb-xl-10'>

        <div id='kt_account_profile_details' className='collapse show'>
            <form onSubmit={formik.handleSubmit} noValidate className='form'>
            <div className='card-body border-top p-9'>

                <div className='row mb-3'>
                <label className='col-lg-4 text-center col-form-label required fw-bold fs-6'>User Name</label>

                <div className='col-lg-8'>
                    <div className='row'>
                    <div className='col-lg-12 fv-row'>
                        <input
                        type='text'
                        className='col-lg-8 fv-row form-control form-control-md form-control-solid mb-3 mb-lg-0'
                        placeholder='User name'
                        value={''}
                        {...formik.getFieldProps('loginName')}
                        />
                        {formik.touched.loginName && formik.errors.loginName && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.loginName}</div>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                </div>

                <div className='row mb-3'>
                <label className='col-lg-4 text-center col-form-label required fw-bold fs-6'>Full Name</label>

                <div className='col-lg-8'>
                    <div className='row'>
                    <div className='col-lg-12 fv-row'>
                        <input
                        type='text'
                        className='form-control form-control-md form-control-solid mb-1 mb-lg-0'
                        placeholder='First name'
                        value={''}
                        {...formik.getFieldProps('fullName')}
                        />
                        {formik.touched.fullName && formik.errors.fullName && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.fullName}</div>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                </div>

                <div className='row mb-3'>
                <label
                htmlFor='password'
                className='col-lg-4 text-center col-form-label required fw-bold fs-6'
                >
                Password
                </label>
                <div className='col-lg-8'>
                    <div className='row'>
                    <div className='col-lg-12 fv-row'>
                        <input
                        type='password'
                        className='form-control form-control-md form-control-solid mb-3 mb-lg-0'
                        id='Password'
                        value={0}
                        // {...formik.getFieldProps('password')}
                        />
                        {/* {formik.touched.password && formik.errors.password && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.password}</div>
                        </div>
                        )} */}
                    </div>
                    </div>
                </div>
                </div>

                <div className='row mb-3'>
                <label
                htmlFor='confirmpassword'
                className='col-lg-4 text-center col-form-label required fw-bold fs-6'
                >
                Confirm Password
                </label>
                <div className='col-lg-8'>
                    <div className='row'>
                    <div className='col-lg-12 fv-row'>
                        <input
                        type='password'
                        className='form-control form-control-md form-control-solid mb-3 mb-lg-0'
                        id='confirmemailpassword'
                        value={''}
                        // {...formik.getFieldProps('confirmPassword')}
                        />
                        {/* {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.confirmPassword}</div>
                        </div>
                        )} */}
                    </div>
                    </div>
                </div>
                </div>

                <div className='row mb-3'>
                <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>
                    <span>Mobile No</span>
                </label>

                <div className='col-lg-8 fv-row'>
                    <input
                    type='tel'
                    className='form-control form-control-md form-control-solid'
                    placeholder='Phone number'
                    value={''}
                    {...formik.getFieldProps('mobileNo')}
                    />
                    {formik.touched.mobileNo && formik.errors.mobileNo && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.mobileNo}</div>
                    </div>
                    )}
                </div>
                </div>

                <div className='row mb-3'>
                    <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>
                        <span >Select Consultant</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                        <select
                        className='form-select form-select-solid form-select-md fw-bold'
                        {...formik.getFieldProps('consultant')}
                        >
                            <option value=''>Select a Consultant...</option>
                            {consultants == null? (
                                <option key={0} value=''></option>
                            ):(
                            consultants.map((consultant, i)=>
                            <option key={i} value={consultant.rcid}>{consultant.name}</option>
                            ))}
                        </select>
                        {/* {formik.touched.consultant && formik.errors.consultant && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.consultant}</div>
                        </div>
                        )} */}
                    </div>
                </div>
                
                <div className='row mb-3'>
                    <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>
                        <span >User Role</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                        <select
                        className='form-select form-select-solid form-select-md fw-bold'
                        {...formik.getFieldProps('roleName')}
                        >
                        <option value=''>Select a Role...</option>
                        {roles == null? (
                            <option key={0} value=''></option>
                        ):(
                        roles.map((role, i)=>
                        <option key={i} value={role.roleID}>{role.name}</option>
                        ))}
                        </select>
                        {formik.touched.roleName && formik.errors.roleName && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.roleName}</div>
                        </div>
                        )}
                    </div>
                </div>
                
                <div className='row mb-3'>
                <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>
                <span >Select Hospital</span>
                </label>

                <div className='col-lg-8 fv-row'>
                <select
                    className='form-select form-select-solid form-select-md fw-bold'
                    {...formik.getFieldProps('hospital')}
                >
                    <option value=''>Select a Hospital...</option>
                    {hospitals == null? (
                            <option key={0} value=''></option>
                        ):(
                        hospitals.map((hospital, i)=>
                        <option key={i} value={hospital.pid}>{hospital.procName}</option>
                        ))}
                </select>
                {/* {formik.touched.hospital && formik.errors.hospital && (
                    <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.hospital}</div>
                    </div>
                )} */}
                </div>
                </div>

                <hr />

                <h4 className='text-center text-danger'>Permissions:</h4>

                <div className='row'>  
                <div className='row mb-0 col-lg-6'>
                    <label className='col-lg-9 col-form-label fw-bold fs-6 text-center'>Assign to Radiologist</label>

                    <div className='col-lg-3 d-flex align-items-center'>
                        <div className='form-check form-check-custom form-check-solid form-check-sm fv-row'>
                        <input
                        className='form-check-input'
                        type='checkbox'
                        id='isAssignToRadAllow'
                        defaultChecked={data.isAssignToRadAllow}
                        value={''}
                        onChange={() => {
                            updateData({isAssignToRadAllow: !data.isAssignToRadAllow})
                        }}
                        />
                        </div>
                    </div>
                </div>  
                <div className='row mb-0 col-lg-6'>
                    <label className='col-lg-9 col-form-label fw-bold fs-6 text-center'>Report View/Download</label>

                    <div className='col-lg-3 d-flex align-items-center'>
                        <div className='form-check form-check-custom form-check-solid form-check-sm fv-row'>
                            <input
                            className='form-check-input'
                            type='checkbox'
                            id='isReportViewAllow'
                            defaultChecked={data.isReportViewAllow}
                            value={''}
                            onChange={() => {
                                updateData({isReportViewAllow: !data.isReportViewAllow})
                            }}
                            />
                        </div>
                    </div>
                </div>
                </div>

                <div className='row'>  
                <div className='row mb-0 col-lg-6'>
                    <label className='col-lg-9 col-form-label fw-bold fs-6 text-center'>Report Write/Edit</label>

                    <div className='col-lg-3 d-flex align-items-center'>
                    <div className='form-check form-check-custom form-check-solid form-check-sm fv-row'>
                        <input
                        className='form-check-input'
                        type='checkbox'
                        id='isReportWriteAllow'
                        value={''}
                        defaultChecked={data.isReportWriteAllow}
                        onChange={() => {
                            updateData({isReportWriteAllow: !data.isReportWriteAllow})
                        }}
                        />
                        <label className='form-check-label'></label>
                    </div>
                    </div>
                </div>  
                <div className='row mb-0 col-lg-6'>
                    <label className='col-lg-9 col-form-label fw-bold fs-6 text-center'>Access to Main Viewer</label>

                    <div className='col-lg-3 d-flex align-items-center'>
                        <div className='form-check form-check-custom form-check-solid form-check-sm fv-row'>
                            <input
                            className='form-check-input'
                            type='checkbox'
                            id='isMainViewerAlloted'
                            defaultChecked={data.isMainViewerAlloted}
                            value={''}
                            onChange={() => {
                                updateData({isMainViewerAlloted: !data.isMainViewerAlloted})
                            }}
                            />
                            <label className='form-check-label'></label>
                        </div>
                    </div>
                </div>
                </div>

                <hr />

                <div className='row mb-3'>
                <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>Cloud Access Link</label>

                <div className='col-lg-8'>
                    <div className='row'>
                    <div className='col-lg-12 fv-row'>
                        <input
                        type='text'
                        className='col-lg-8 fv-row form-control form-control-md form-control-solid mb-3 mb-lg-0'
                        placeholder=' '
                        {...formik.getFieldProps('cloudAccessLink')}
                        value={''}
                        />
                        {formik.touched.cloudAccessLink && formik.errors.cloudAccessLink && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.cloudAccessLink}</div>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                </div>

                <div className='row mb-3'>
                <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>Cloud User Name</label>

                <div className='col-lg-8'>
                    <div className='row'>
                    <div className='col-lg-12 fv-row'>
                        <input
                        type='text'
                        className='col-lg-8 fv-row form-control form-control-md form-control-solid mb-3 mb-lg-0'
                        placeholder=' '
                        {...formik.getFieldProps('cloudUserName')}
                        />
                        {formik.touched.cloudUserName && formik.errors.cloudUserName && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.cloudUserName}</div>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                </div>

                <div className='row mb-3'>
                <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>Cloud Password</label>

                <div className='col-lg-8'>
                    <div className='row'>
                    <div className='col-lg-12 fv-row'>
                        <input
                        type='text'
                        className='col-lg-8 fv-row form-control form-control-md form-control-solid mb-3 mb-lg-0'
                        placeholder=' '
                        value={''}
                        {...formik.getFieldProps('cloudPassword')}
                        />
                        {formik.touched.cloudPassword && formik.errors.cloudPassword && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.cloudPassword}</div>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                </div>

            </div>

            <div className='card-footer d-flex justify-content-end'>
                <button type='submit' className='btn btn-primary btn-sm btn-group' disabled={loading}>
                {!loading && 'Create'}
                {loading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                )}
                </button>
                <button className='btn btn-primary btn-group btn-sm mx-6'>Delete</button>
                <button className='btn btn-primary btn-group btn-sm' onClick={cancelAssign}>Cancel</button>
            </div>
            </form>
        </div>
        </div>
    )
}

const UserTableWidget: React.FC<Props> = ({className}) => {

    const dispatch = useDispatch()
    // const height = document.querySelector('#userDetai').clientHeight
    useEffect(() => {
        const toAwait = async () => {
        await getAllUsers()
        .then(res => res.data)
        .then(tasks => {
            dispatch(auth.actions.getUsers(tasks))})  
        }
        toAwait()
        }, [])
        // const users: CreateUserModel[] = []
        const users: IUserListDetails[] = useSelector<RootState>(state => state.auth.users, shallowEqual) as IUserListDetails[]

  return (
    <div className='row d-flex'>

        <div className='col-lg-7' id='userDetail'>
            <ProfileDetails />
        </div>
        <div className={`card ${className} col-lg-5 ml-5`} id='userCard'>
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>User List:</span>
                </h3>
            </div>
            <div className='card-body py-3 h-100%'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 table-striped'>
                    {/* begin::Table head */}
                    <thead>
                    <tr className='fw-bolder text-muted'>
                        <th className='w-5px'>
                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                <input
                                className='form-check-input'
                                type='checkbox'
                                value=' '
                                data-kt-check='true'
                                data-kt-check-target='.widget-13-check'
                                hidden
                                />
                            </div>
                        </th>
                        <th className='min-w-120px text-center'>Login Name</th>
                        <th className='min-w-140px text-center'>Full Name</th>
                        <th className='min-w-120px text-center'>Role</th>
                        <th className='min-w-120px text-center'>Status</th>
                    </tr>
                    </thead>
                    {/* end::Table head */}
                    {/* begin::Table body */}
                    <tbody>
                        
                    {users == null?(
                        <tr>
                            <td>
                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                <input className='form-check-input widget-13-check' type='checkbox' value=' ' />
                            </div>
                            </td>
                            <td className='text-center'>
                            <p  className='text-dark fw-bolder text-hover-primary fs-6'>
                                
                            </p>
                            </td>
                            <td className='text-center'>
                            <p  className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                
                            </p>
                            </td>
                            <td className='text-center'>
                            <p  className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                
                            </p>
                            </td>
                            <td className='text-center'>
                            <p  className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                
                            </p>
                            </td>
                        </tr>
                    ) : (
                    users.map(user =>
                        <tr key={user.userId}>
                            <td>
                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                <input className='form-check-input widget-13-check' type='checkbox' value='' />
                            </div>
                            </td>
                            <td className='text-center'>
                            <p  className='text-dark fw-bolder text-hover-primary fs-6'>
                                {user.userId}
                            </p>
                            </td>
                            <td className='text-center'>
                            <p  className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                {user.fullName}
                            </p>
                            </td>
                            <td className='text-center'>
                            <p  className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                {user.roleName}
                            </p>
                            </td>
                            <td className='text-center'>
                            <p  className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                {user.status}
                            </p>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>
                </div>
            </div>

        </div>
    </div>
  )
}

export {UserTableWidget}

