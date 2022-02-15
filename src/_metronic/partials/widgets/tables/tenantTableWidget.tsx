/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
// import {KTSVG} from '../../../helpers'
import * as Yup from 'yup'
import {IHospital, IReportConsultant, IRole, ITenant, userListDetailsInitValues, IUserListDetails, tenantDetail  as initialValues} from '../../../../app/modules/accounts/components/settings/SettingsModel'
import {useFormik} from 'formik'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getHospitals, getReportConsultants, getRoles, getTenants } from '../../../../app/modules/auth/redux/AuthCRUD'
import * as auth from '../../../../app/modules/auth/redux/AuthRedux'
import { RootState } from '../../../../setup'


type Props = {
  className: string
}

const tenantListDetailsSchema = Yup.object().shape({
    name: Yup.string().required('Full name is required'),
    loginName: Yup.string().required('User name is required'),
  })
  
const ProfileDetails: React.FC = () => {
    const [data, setData] = useState<ITenant>(initialValues)
    const updateData = (fieldsToUpdate: Partial<ITenant>): void => {
        const updatedData = Object.assign(data, fieldsToUpdate)
        setData(updatedData)
    }

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const formik = useFormik<ITenant>({
        initialValues,
        validationSchema: tenantListDetailsSchema,
        onSubmit: (values) => {
        setLoading(true)
        setTimeout(() => {
            values.tenantId = data.tenantId
            values.name = data.name
            values.address = data.address
            const updatedData = Object.assign(data, values)
            setData(updatedData)
            setLoading(true)
        }, 1000)
        },
    })

  //   const formik1 = useFormik<ITenant>({
  //     initialValues,
  //     validationSchema: tenantListDetailsSchema,
  //     onSubmit: (values) => {
  //     setLoading(true)
  //     setTimeout(() => {
  //         values.tenantId = data.tenantId
  //         values.name = data.name
  //         values.address = data.address
  //         const updatedData = Object.assign(data, values)
  //         setData(updatedData)
  //         setLoading(true)
  //     }, 1000)
  //     },
  // })

    useEffect(() => {
        const getAPIConsultant = async () => {
            await getReportConsultants()
            .then(res => res.data)
            .then(tasks => {
                dispatch(auth.actions.reportConsultants(tasks))})  
        }
        getAPIConsultant()
    }, [])

        const consultants: IReportConsultant[] = useSelector<RootState>(state => state.auth.consultants, shallowEqual) as IReportConsultant[]

        // const cancelAssign = () => {
        //     setData(initialValues)
        //     }

    return (
      <div className='card mb-5 mb-xl-10'>

        <div id='kt_account_profile_details' className='collapse show'>
            <form onSubmit={formik.handleSubmit} noValidate className='form'>
            <div className='card-body border-top p-9'>

                <div className='row mb-3'>
                <label className='col-lg-4 text-center col-form-label required fw-bold fs-6'>Tenant: <br />(Full name)</label>

                <div className='col-lg-8'>
                    <div className='row'>
                    <div className='col-lg-12 fv-row'>
                        <input
                        type='text'
                        className='col-lg-8 fv-row form-control form-control-md form-control-solid mb-3 mb-lg-0'
                        placeholder=''
                        value={''}
                        {...formik.getFieldProps('shortName')}
                        />
                        {formik.touched.shortName && formik.errors.shortName && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.shortName}</div>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                </div>

                <div className='row mb-3'>
                <label className='col-lg-4 text-center col-form-label required fw-bold fs-6'>Tenant:<br />(Short Name)</label>

                <div className='col-lg-8'>
                    <div className='row'>
                    <div className='col-lg-12 fv-row'>
                        <input
                        type='text'
                        className='form-control form-control-md form-control-solid mb-1 mb-lg-0'
                        placeholder=''
                        value={''}
                        {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.name}</div>
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
                Address
                </label>
                <div className='col-lg-8'>
                    <div className='row'>
                    <div className='col-lg-12 fv-row'>
                        <input
                        type='text'
                        className='form-control form-control-md form-control-solid mb-3 mb-lg-0'
                        id='address'
                        value={''}
                        {...formik.getFieldProps('address')}
                        />
                        {formik.touched.address && formik.errors.address && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.address}</div>
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
                    type='text'
                    className='form-control form-control-md form-control-solid'
                    placeholder=' '
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
                    <span>Phone No</span>
                </label>

                <div className='col-lg-8 fv-row'>
                    <input
                    type='tel'
                    className='form-control form-control-md form-control-solid'
                    placeholder=''
                    value={''}
                    {...formik.getFieldProps('phoneNo')}
                    />
                    {formik.touched.phoneNo && formik.errors.phoneNo && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.phoneNo}</div>
                    </div>
                    )}
                </div>
                </div>

                <div className='row mb-3'>
                <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>
                    <span>Fax</span>
                </label>

                <div className='col-lg-8 fv-row'>
                    <input
                    type='fax'
                    className='form-control form-control-md form-control-solid'
                    placeholder=''
                    value={''}
                    {...formik.getFieldProps('fax')}
                    />
                    {formik.touched.fax && formik.errors.fax && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fax}</div>
                    </div>
                    )}
                </div>
                </div>

                <div className='row mb-3'>
                  <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>
                      <span>E-Mail</span>
                  </label>

                  <div className='col-lg-8 fv-row'>
                      <input
                      type='email'
                      className='form-control form-control-md form-control-solid'
                      placeholder=''
                      value={''}
                      {...formik.getFieldProps('email')}
                      />
                      {formik.touched.email && formik.errors.email && (
                      <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.email}</div>
                      </div>
                      )}
                  </div>
                </div>

                <div className='row mb-3'>
                  <label className='col-lg-4 text-center col-form-label fw-bold fs-6'>
                      <span>Contact Person</span>
                  </label>

                  <div className='col-lg-8 fv-row'>
                      <input
                      type='text'
                      className='form-control form-control-md form-control-solid'
                      placeholder=''
                      value={''}
                      {...formik.getFieldProps('contactPerson')}
                      />
                      {formik.touched.contactPerson && formik.errors.contactPerson && (
                      <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.contactPerson}</div>
                      </div>
                      )}
                  </div>
                </div>

                <div className='row mb-3'>
                  <label className='col-lg-9 text-center col-form-label fw-bold fs-6'>
                      <span>Has Default Radiologist?</span>
                  </label>

                  <div className='col-lg-3 d-flex align-items-center'>
                        <div className='form-check form-check-custom form-check-solid form-check-sm fv-row'>
                        <input
                        className='form-check-input'
                        type='checkbox'
                        id='isAssignToRadAllow'
                        defaultChecked={data.hasDefaultRadiologist}
                        value={''}
                        onChange={() => {
                            updateData({hasDefaultRadiologist: !data.hasDefaultRadiologist})
                        }}
                        />
                        </div>
                </div>
                </div>
            </div>

            <div className='card-footer d-flex justify-content-center'>
                <button type='submit' className='btn btn-primary btn-sm btn-group' disabled={loading}>
                {!loading && 'Save'}
                {loading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                )}
                </button>
            </div>
            </form>

            <div>
              <div  className='row mb-3 p-5'>
                <div className='col-md-6'>
                      <label className='text-center col-form-label fw-bold fs-6 text-center'>
                          <span >Select Consultant</span>
                      </label>

                      <div className='fv-row'>
                          <select
                          className='form-select form-select-solid form-select-md fw-bold'
                          // {...formik.getFieldProps('consultant')}
                          >
                              <option value=''>Select Radiologist</option>
                              {consultants == null? (
                                  <option key={0} value=''></option>
                              ):(
                              consultants.map((consultant, i)=>
                              <option key={i} value={consultant.rcid}>{consultant.name}</option>
                              ))}
                          </select>
                      </div>
                </div>
                <div className='col-md-6'>
                      <label className='text-center col-form-label fw-bold fs-6 text-center'>
                          <span >Select Modality</span>
                      </label>

                      <div className='fv-row'>
                          <select
                          className='form-select form-select-solid form-select-md fw-bold'
                          >
                            <option value=''>DX</option>
                            <option value=''>DR</option>
                            <option value=''>CR</option>
                            <option value=''>MR</option>
                            <option value=''>CT</option>
                            <option value=''>MG</option>
                            <option value=''>ECG</option>
                          </select>
                      </div>
                </div>
              </div>
              <div className='text-center'>
                <button className='btn btn-primary btn-sm btn-group'>Add to List</button>
              </div>

            </div>
        </div>
      </div>
    )
}

const TenantTableWidget: React.FC<Props> = ({className}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        const toAwait = async () => {
        await getTenants()
        .then(res => res.data)
        .then(tasks => {
            dispatch(auth.actions.getTenants(tasks))})  
        }
        toAwait()
        }, [])
        // const users: CreateUserModel[] = []
        const tenants: ITenant[] = useSelector<RootState>(state => state.auth.tenants, shallowEqual) as ITenant[]
        console.log(tenants, "tenants")

  return (
    <div className='row d-flex'>

        <div className='col-lg-6' id='userDetail'>
            <ProfileDetails />
        </div>
        <div className={`card ${className} col-lg-6 ml-5 h-auto`} id='userCard'>
          <div className='card-header border-0 pt-5'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bolder fs-3 mb-1'>Tenant list:</span>
            </h3>
          </div>
          <div className='card-body py-3'>
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
                    <th className='min-w-120px text-center'>Id</th>
                    <th className='min-w-140px text-center'>Name</th>
                    <th className='min-w-120px text-center'>Address</th>
                </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                    
                {tenants == null?(
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
                    </tr>
                ) : (
                tenants.map((tenant, i) =>
                    <tr key={i}>
                        <td>
                          <div className='form-check form-check-sm form-check-custom form-check-solid'>
                              <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                          </div>
                        </td>
                        <td className='text-center'>
                          <p  className='text-dark fw-bolder text-hover-primary fs-6'>
                              {tenant.tenantId}
                          </p>
                        </td>
                        <td className='text-center'>
                        <p  className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                            {tenant.name}
                        </p>
                        </td>
                        <td className='text-center'>
                        <p  className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                            {tenant.address}
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

export {TenantTableWidget}
function CreateUserModel() {
    throw new Error('Function not implemented.')
}

