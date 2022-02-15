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

        // const cancelAssign = () => {
        //     setData(initialValues)
        //     }

    return (
      <div className='card mb-5 mb-xl-10'>

        <div id='kt_account_profile_details' className='collapse show'>
          <form onSubmit={formik.handleSubmit} noValidate className='form'>

            <div className='card-body border-top p-9'>

              <div className='row mb-3'>

                <div className='row col-lg-8'>
                  <label className='col-lg-5 text-center col-form-label  fw-bold fs-6'>Consultant Name</label>
                  <div className='col-lg-7'>
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
                <div className='row col-lg-4'>
                  <label className='col-lg-6 text-center col-form-label  fw-bold fs-6'>Font Size</label>
                  <div className='col-lg-6'>
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

              </div>              
              <div className='row mb-3'>

                <div className='row col-lg-8'>
                  <label className='col-lg-5 text-center col-form-label  fw-bold fs-6'>Identify-1</label>
                  <div className='col-lg-7'>
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
                <div className='row col-lg-4'>
                  <label className='col-lg-6 text-center col-form-label  fw-bold fs-6'>Font Size</label>
                  <div className='col-lg-6'>
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

              </div>              
              <div className='row mb-3'>

                <div className='row col-lg-8'>
                  <label className='col-lg-5 text-center col-form-label  fw-bold fs-6'>Identify-2</label>
                  <div className='col-lg-7'>
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
                <div className='row col-lg-4'>
                  <label className='col-lg-6 text-center col-form-label  fw-bold fs-6'>Font Size</label>
                  <div className='col-lg-6'>
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

              </div>              
              <div className='row mb-3'>

                <div className='row col-lg-8'>
                  <label className='col-lg-5 text-center col-form-label  fw-bold fs-6'>Identify-3</label>
                  <div className='col-lg-7'>
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
                <div className='row col-lg-4'>
                  <label className='col-lg-6 text-center col-form-label  fw-bold fs-6'>Font Size</label>
                  <div className='col-lg-6'>
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

              </div>              
              <div className='row mb-3'>

                <div className='row col-lg-8'>
                  <label className='col-lg-5 text-center col-form-label  fw-bold fs-6'>Identify-4</label>
                  <div className='col-lg-7'>
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
                <div className='row col-lg-4'>
                  <label className='col-lg-6 text-center col-form-label  fw-bold fs-6'>Font Size</label>
                  <div className='col-lg-6'>
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

              </div>              
              <div className='row mb-3'>

                <div className='row col-lg-8'>
                  <label className='col-lg-5 text-center col-form-label  fw-bold fs-6'>Identify-5</label>
                  <div className='col-lg-7'>
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
                <div className='row col-lg-4'>
                  <label className='col-lg-6 text-center col-form-label  fw-bold fs-6'>Font Size</label>
                  <div className='col-lg-6'>
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

              </div>              
              <div className='row mb-3'>

                <div className='row col-lg-8'>
                  <label className='col-lg-5 text-center col-form-label  fw-bold fs-6'>Identify-6</label>
                  <div className='col-lg-7'>
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
                <div className='row col-lg-4'>
                  <label className='col-lg-6 text-center col-form-label  fw-bold fs-6'>Font Size</label>
                  <div className='col-lg-6'>
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

              </div>
              <div>
              <div  className='row mb-3 p-5'>

                <div className='col-md-5'>
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

                <div className='col-md-7 row justify-content-center'>
                      <button className='btn btn-sm btn-group col-md-6'>Upload Signature</button>
                      <button className='btn btn-sm btn-group col-md-6 '>Clear Signature</button>
                </div>
              </div>

              <div className='row mb-3'>
                  <label className='col-lg-9 text-center col-form-label fw-bold fs-6'>
                      <span>Will Viewer Open With Default Template?</span>
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

              <div className='row mb-3'>

                <label className='col-lg-4 text-center col-form-label  fw-bold fs-6'>Dicom Path</label>
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

                <label className='col-lg-4 text-center col-form-label  fw-bold fs-6'>Cloud Id</label>
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

                <button className='btn btn-primary btn-sm btn-group mx-5'>Close</button>
            </div>
            </form>


        </div>
      </div>
    )
}

const ConsultantTableWidget: React.FC<Props> = ({className}) => {

    const dispatch = useDispatch()
      
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

  return (
    <div className='row d-flex'>

        <div className='col-lg-8' id='userDetail'>
            <ProfileDetails />
        </div>
        <div className={`card ${className} col-lg-4 ml-5 h-auto`} id='userCard'>
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>Tenant list:</span>
                </h3>
            </div>
            <div className='card-body py-3'>
              <div className='table-responsive'>
                <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 table-striped'>
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
                      <th className='min-w-120px text-center'>SrlNo</th>
                      <th className='min-w-140px text-center'>Name</th>
                  </tr>
                  </thead>
                  <tbody>
                      
                  {consultants == null?(
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
                      </tr>
                  ) : (
                  consultants.map((consultant, i) =>
                      <tr key={i}>
                          <td>
                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                            </div>
                          </td>
                          <td className='text-center'>
                            <p  className='text-dark fw-bolder text-hover-primary fs-6'>
                                {consultant.rcid}
                            </p>
                          </td>
                          <td className='text-center'>
                          <p  className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                              {consultant.name}
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

export {ConsultantTableWidget}
function CreateUserModel() {
    throw new Error('Function not implemented.')
}

