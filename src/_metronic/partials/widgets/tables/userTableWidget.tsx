/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {KTSVG} from '../../../helpers'
import * as Yup from 'yup'
import {IUserListDetails, userListDetailsInitValues as initialValues} from '../../../../app/modules/accounts/components/settings/SettingsModel'
import {useFormik} from 'formik'


type Props = {
  className: string
}

const userListDetailsSchema = Yup.object().shape({
    fName: Yup.string().required('Full name is required'),
    uName: Yup.string().required('User name is required'),
  })
  
const ProfileDetails: React.FC = () => {
const [data, setData] = useState<IUserListDetails>(initialValues)
const updateData = (fieldsToUpdate: Partial<IUserListDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
}

const [loading, setLoading] = useState(false)
const formik = useFormik<IUserListDetails>({
    initialValues,
    validationSchema: userListDetailsSchema,
    onSubmit: (values) => {
    setLoading(true)
    setTimeout(() => {
    //   values.communications.email = data.communications.email
    //   values.communications.phone = data.communications.phone
        values.cloudLink = data.cloudLink
        values.assignRad = data.assignRad
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(true)
    }, 1000)
    },
})

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
                    {...formik.getFieldProps('uName')}
                    />
                    {formik.touched.uName && formik.errors.uName && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.uName}</div>
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
                    {...formik.getFieldProps('fName')}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fName}</div>
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
                    {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.password}</div>
                    </div>
                    )}
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
                    {...formik.getFieldProps('confirmPassword')}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.confirmPassword}</div>
                    </div>
                    )}
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
                {...formik.getFieldProps('contactPhone')}
                />
                {formik.touched.contactPhone && formik.errors.contactPhone && (
                <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.contactPhone}</div>
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
                <option value='AF'>Afghanistan</option>
                <option value='AX'>Aland Islands</option>
                <option value='AL'>Albania</option>
                <option value='DZ'>Algeria</option>
                </select>
                {formik.touched.consultant && formik.errors.consultant && (
                <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.consultant}</div>
                </div>
                )}
            </div>
            </div>
            
            <div className='row mb-3'>
            <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>
                <span >User Role</span>
            </label>

            <div className='col-lg-8 fv-row'>
                <select
                className='form-select form-select-solid form-select-md fw-bold'
                {...formik.getFieldProps('userRole')}
                >
                <option value=''>Select a Role...</option>
                <option value='AF'>Afghanistan</option>
                <option value='AX'>Aland Islands</option>
                <option value='AL'>Albania</option>
                <option value='DZ'>Algeria</option>
                </select>
                {formik.touched.userRole && formik.errors.userRole && (
                <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.userRole}</div>
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
                <option value='AF'>Afghanistan</option>
                <option value='AX'>Aland Islands</option>
                <option value='AL'>Albania</option>
                <option value='DZ'>Algeria</option>
            </select>
            {formik.touched.hospital && formik.errors.hospital && (
                <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>{formik.errors.hospital}</div>
                </div>
            )}
            </div>
            </div>

            <hr />

            <h4 className='text-center text-danger'>Permissions:</h4>

            <div className='row'>  
            <div className='row mb-0 col-lg-6'>
                <label className='col-lg-9 col-form-label fw-bold fs-6 text-center'>Assign to Radiologist</label>

                <div className='col-lg-3 d-flex align-items-center'>
                    <div className='form-check form-check-solid form-switch fv-row'>
                    <input
                    className='form-check-input w-35px h-20px'
                    type='checkbox'
                    id='assignRad'
                    defaultChecked={data.assignRad}
                    onChange={() => {
                        updateData({assignRad: !data.assignRad})
                    }}
                    />
                    </div>
                </div>
            </div>  
            <div className='row mb-0 col-lg-6'>
                <label className='col-lg-9 col-form-label fw-bold fs-6 text-center'>Report View/Download</label>

                <div className='col-lg-3 d-flex align-items-center'>
                    <div className='form-check form-check-solid form-switch fv-row'>
                        <input
                        className='form-check-input w-35px h-20px'
                        type='checkbox'
                        id='reportDownload'
                        defaultChecked={data.reportDownload}
                        onChange={() => {
                            updateData({reportDownload: !data.reportDownload})
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
                <div className='form-check form-check-solid form-switch fv-row'>
                    <input
                    className='form-check-input w-35px h-20px'
                    type='checkbox'
                    id='reportEdit'
                    defaultChecked={data.reportEdit}
                    onChange={() => {
                        updateData({reportEdit: !data.reportEdit})
                    }}
                    />
                    <label className='form-check-label'></label>
                </div>
                </div>
            </div>  
            <div className='row mb-0 col-lg-6'>
                <label className='col-lg-9 col-form-label fw-bold fs-6 text-center'>Access to Main Viewer</label>

                <div className='col-lg-3 d-flex align-items-center'>
                    <div className='form-check form-check-solid form-switch fv-row'>
                        <input
                        className='form-check-input w-35px h-20px'
                        type='checkbox'
                        id='mainViewer'
                        defaultChecked={data.mainViewer}
                        onChange={() => {
                            updateData({mainViewer: !data.mainViewer})
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
                    placeholder=''
                    {...formik.getFieldProps('cloudLink')}
                    />
                    {formik.touched.cloudLink && formik.errors.cloudLink && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.cloudLink}</div>
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
                    placeholder=''
                    {...formik.getFieldProps('cloudName')}
                    />
                    {formik.touched.cloudName && formik.errors.cloudName && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.cloudName}</div>
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
                    placeholder=''
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
            <button className='btn btn-primary btn-group btn-sm'>Cancel</button>
        </div>
        </form>
    </div>
    </div>
)
}

const UserTableWidget: React.FC<Props> = ({className}) => {
  return (
    <div className='row'>
        {/* ----------------------- Setting User ----------------------- */}
        <div className='col-lg-7'>
            <ProfileDetails />
        </div>
        {/* ----------------------- User List ----------------------- */}
        <div className={`card ${className} col-lg-5 ml-5`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
            <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>User List:</span>
            </h3>
            <div className='card-toolbar'>
            {/* begin::Menu */}
            {/* end::Menu */}
            </div>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body py-3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                {/* begin::Table head */}
                <thead>
                <tr className='fw-bolder text-muted'>
                    <th className='w-5px'>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                            <input
                            className='form-check-input'
                            type='checkbox'
                            value='1'
                            data-kt-check='true'
                            data-kt-check-target='.widget-13-check'
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
                <tr>
                    <td>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                    </div>
                    </td>
                    <td className='text-center'>
                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        1
                    </a>
                    </td>
                    <td className='text-center'>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        Admin
                    </a>
                    </td>
                    <td className='text-center'>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        Administrator
                    </a>
                    </td>
                    <td className='text-center'>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        shared
                    </a>
                    </td>
                </tr>
                </tbody>
                {/* end::Table body */}
            </table>
            {/* end::Table */}
            </div>
            {/* end::Table container */}
        </div>
        {/* begin::Body */}
        </div>
    </div>
  )
}

export {UserTableWidget}
