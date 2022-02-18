/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
// import {KTSVG} from '../../../helpers'
import * as Yup from 'yup'
import {IHospital, IReportConsultant, ITenant, tenantDetail, consultantDetail  as initialValues, IConsultant} from '../../../../app/modules/accounts/components/settings/SettingsModel'
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
    const [data, setData] = useState<IConsultant>(initialValues)
    const updateData = (fieldsToUpdate: Partial<IConsultant>): void => {
        const updatedData = Object.assign(data, fieldsToUpdate)
        setData(updatedData)
    }

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const formik = useFormik<IConsultant>({
        initialValues,
        validationSchema: tenantListDetailsSchema,
        onSubmit: (values) => {
        setLoading(true)
        setTimeout(() => {
            values.rcid = data.rcid
            values.radNextCloudID = data.radNextCloudID
            values.eSignature = data.eSignature
            values.name = data.name
            values.dicomImagePath = data.dicomImagePath
            values.fsize1 = data.fsize1
            values.fsize2 = data.fsize2
            values.fsize3 = data.fsize3
            values.fsize4 = data.fsize4
            values.fsize5 = data.fsize5
            values.fsize6 = data.fsize6
            values.fsize7 = data.fsize7
            values.groupName = data.groupName
            values.status = data.status
            values.identityLine1 = data.identityLine1
            values.identityLine2 = data.identityLine2
            values.identityLine3 = data.identityLine3
            values.identityLine4 = data.identityLine4
            values.identityLine5 = data.identityLine5
            values.identityLine6 = data.identityLine6
            values.signatureBase64HtmlEmbeded = data.signatureBase64HtmlEmbeded
            values.isViewerWithDefaultTemplate = data.isViewerWithDefaultTemplate
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
                        {...formik.getFieldProps('fsize1')}
                        />
                        {formik.touched.fsize1 && formik.errors.fsize1 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.fsize1}</div>
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
                        {...formik.getFieldProps('identityLine1')}
                        />
                        {formik.touched.identityLine1 && formik.errors.identityLine1 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.identityLine1}</div>
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
                        {...formik.getFieldProps('fsize2')}
                        />
                        {formik.touched.fsize2 && formik.errors.fsize2 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.fsize2}</div>
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
                        {...formik.getFieldProps('identityLine2')}
                        />
                        {formik.touched.identityLine2 && formik.errors.identityLine2 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.identityLine2}</div>
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
                        {formik.touched.fsize3 && formik.errors.fsize3 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.fsize3}</div>
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
                        {...formik.getFieldProps('identityLine3')}
                        />
                        {formik.touched.identityLine3 && formik.errors.identityLine3 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.identityLine3}</div>
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
                        {...formik.getFieldProps('fsize4')}
                        />
                        {formik.touched.fsize4 && formik.errors.fsize4 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.fsize4}</div>
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
                        {...formik.getFieldProps('identityLine4')}
                        />
                        {formik.touched.identityLine4 && formik.errors.identityLine4 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.identityLine4}</div>
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
                        {...formik.getFieldProps('fsize5')}
                        />
                        {formik.touched.fsize5 && formik.errors.fsize5 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.fsize5}</div>
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
                        {...formik.getFieldProps('identityLine5')}
                        />
                        {formik.touched.identityLine5 && formik.errors.identityLine5 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.identityLine5}</div>
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
                        {...formik.getFieldProps('fsize6')}
                        />
                        {formik.touched.fsize6 && formik.errors.fsize6 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.fsize6}</div>
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
                        {...formik.getFieldProps('identityLine6')}
                        />
                        {formik.touched.identityLine6 && formik.errors.identityLine6 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.identityLine6}</div>
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
                        {...formik.getFieldProps('fsize6')}
                        />
                        {formik.touched.fsize6 && formik.errors.fsize6 && (
                        <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>{formik.errors.fsize6}</div>
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
                    defaultChecked={data.isViewerWithDefaultTemplate}
                    value={''}
                    onChange={() => {
                        updateData({isViewerWithDefaultTemplate: !data.isViewerWithDefaultTemplate})
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
                      {...formik.getFieldProps('dicomImagePath')}
                      />
                      {formik.touched.dicomImagePath && formik.errors.dicomImagePath && (
                      <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.dicomImagePath}</div>
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
                      {...formik.getFieldProps('radNextCloudID')}
                      />
                      {formik.touched.radNextCloudID && formik.errors.radNextCloudID && (
                      <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.radNextCloudID}</div>
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

