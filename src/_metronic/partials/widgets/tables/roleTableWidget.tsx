/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { IRole } from '../../../../app/modules/accounts/components/settings/SettingsModel'
import { getRoles } from '../../../../app/modules/auth/redux/AuthCRUD'
import { RootState } from '../../../../setup'
import * as auth from '../../../../app/modules/auth/redux/AuthRedux'
import { useFormik } from 'formik'

type Props = {
  className: string
}

const RoleTableWidget: React.FC<Props> = ({className}) => {

  const [data, setData] = useState(false)
  const updateData = (fieldsToUpdate: Partial<IRole>): void => {
      const updatedData = Object.assign(data, fieldsToUpdate)
      setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  // const formik = useFormik<IRole>({
      // initialValues,
      // validationSchema: userListDetailsSchema,
  //     onSubmit: (values) => {
  //     setLoading(true)
  //     setTimeout(() => {
  //         values.roleID = data.roleId;
  //         const updatedData = Object.assign(data, values)
  //         setData(updatedData)
  //         setLoading(true)
  //     }, 1000)
  //     },
  // })

  const saveRole = () => { 

  }
  const dispatch = useDispatch()
  useEffect( () => {
    const getAPIRole = async () => {
      await getRoles()
      .then(res => res.data)
      .then(tasks => {
          dispatch(auth.actions.getRoles(tasks))})  
    }
    getAPIRole()
  }, [])
  
  const roles: IRole[] = useSelector<RootState>(state => state.auth.roles, shallowEqual) as IRole[]

  return (
    <div className={`card ${className}`}>
      <div className='row'>
        <div className='col-md-5 p-5 m-10'>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Add/Edit Consultant
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Add/Edit Tenant
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Add/Edit Remote Node
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    WorkList Version 2.0
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Create User
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Create Role
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    HIS-Modality Procedures Mapping
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Add/Edit Template
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Add/Edit HIS Procedures
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Add/Edit Master Template
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex flex-column'>
                  <p className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Change Password
                  </p>
                </div>
                <div className='d-flex '>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-30px h-20px'
                      type='checkbox'
                      id='googleswitch'
                      // checked={data.google}
                      // onChange={() =>
                      //   updateData({
                      //     google: !data.google,
                      //   })
                      // }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>
          </div>
          
        </div>
        <div className='col-md-6'>
          <div className='card-header border-0 pt-5 row mb-3'>
            <label className='col-md-3 text-center col-form-label required fw-bold fs-6'>Role Name</label>
            <div className='col-md-9 fv-row row'>
              <div className='col-md-7'>
                <input
                  type='text'
                  className='form-control form-control-md form-control-solid mb-1 mb-lg-0'
                  placeholder=' '
                />
              </div>
              <div className='col-md-2'></div>
              <div className='fv-plugins-message-container col-md-3'>
                <button className='btn btn-sm btn-primary' onClick={saveRole}>Save</button>
              </div>
            </div>
          </div>
          <div className='card-body py-3'>
            <div className='table-responsive'>
              <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                <thead>
                  <tr className='fw-bolder text-muted'>
                    <th className='w-25px'>
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
                    <th className='min-w-150px text-center'>Role Id</th>
                    <th className='min-w-140px'>Role Name</th>
                  </tr>
                </thead>
                <tbody>
                  {roles == null? (
                    <tr>
                      <td>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                        </div>
                      </td>
                      <td>
                        <p className='text-dark fw-bolder text-hover-primary fs-6'>
                          
                        </p>
                      </td>
                      <td>
                        <p className='text-dark fw-bolder text-hover-primary fs-6'>
                           
                        </p>
                      </td>
                    </tr>
                  ) : (
                    roles.map((role, i) => 
                    <tr key={i}>
                      <td>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                        </div>
                      </td>
                      <td>
                        <p className='text-dark fw-bolder text-hover-primary fs-6 text-center'>
                          {i}
                        </p>
                      </td>
                      <td>
                        <p className='text-dark fw-bolder text-hover-primary fs-6'>
                          {role.name}
                        </p>
                      </td>
                    </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export {RoleTableWidget}

