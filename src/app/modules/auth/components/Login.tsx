/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {useDispatch, connect } from 'react-redux'
import { takeLatest } from 'redux-saga/effects'
import * as Yup from 'yup'
import clsx from 'clsx'
import { bindActionCreators } from 'redux';
import {Link, Redirect} from 'react-router-dom'
import {useFormik} from 'formik'
import * as auth from '../redux/AuthRedux'
import {getMenuItems, login} from '../redux/AuthCRUD'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import './Login.css';
import { actions } from '..'


const loginSchema = Yup.object().shape({
  email: Yup.string()
    //.email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(1, 'Minimum 1 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: 'Admin',
  password: '1',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export const Login = (props: any) => {
  const [loading, setLoading] = useState(false)
  
  const dispatch = useDispatch()
  //   useEffect(() => {
  //   const toAwait = async () => {
  //     await getMenuItems()
  //     .then(res => res.data)
  //     .then(tasks => {
  //       dispatch(auth.actions.menuItems(tasks))})  
  //     }
  //   toAwait()
  //   }, [])

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        login(values.email, values.password,)
          .then(res => {
            setLoading(false)
            if(res.data)
              dispatch(auth.actions.login(res.data))
            else
              window.location.reload();
          })
          .catch(() => {
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })

        // getMenuItems()
        //   .then(res => {
        //     setLoading(false)
        //     if(res.data){
        //       console.log(res.data, typeof(res.data), "____tmp____")
        //       dispatch(auth.actions.menuItems(res.data))
        //     }
        //     else
        //       window.location.reload();
        //   })
        //   .catch(() => {
        //     setSubmitting(false)
        //     setLoading(false)
        //     setStatus('The menuItems is incorrect')
        //   })
        
      }, 1000)

      
    },
  })

  return (
    
    <div className='d-flex justify-content-center '>
      <div className='image'>
        <img className='img_login_left' src={toAbsoluteUrl('/media/svg/login.jpg')}/>
      </div>
      <div id='gap'></div>
      <div className='px-5'>
        <form
          className='form w-70 '
          onSubmit={formik.handleSubmit}
          noValidate
          id='kt_login_signin_form'
        >
          {/* begin::Heading */}
          <div className='text-center mb-10'>
            <h1 className='text-dark mb-3'>Sign In</h1>
            {/* <div className='text-gray-400 fw-bold fs-4'>
              New Here?{' '}
              <Link to='/auth/registration' className='link-primary fw-bolder'>
                Create an Account
              </Link>
            </div> */}
          </div>
          {/* begin::Heading */}

          {/* {formik.status ? (
            <div className='mb-lg-15 alert alert-danger'>
              <div className='alert-text font-weight-bold'>{formik.status}</div>
            </div>
          ) : (
            <div className='mb-10 bg-light-info p-8 rounded'>
              <div className='text-info'>
                Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
                continue.
              </div>
            </div>
          )} */}

          {/* begin::Form group */}
          <div className='fv-row mb-10'>
            <label className='form-label fs-6 fw-bolder text-dark'>User Name</label>
            <input
              placeholder='Email'
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {'is-invalid': formik.touched.email && formik.errors.email},
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
              type='email'
              name='email'
              autoComplete='off'
            />
            {formik.touched.email && formik.errors.email && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.email}</span>
              </div>
            )}
          </div>
          {/* end::Form group */}

          {/* begin::Form group */}
          <div className='fv-row mb-10'>
            <div className='d-flex justify-content-between mt-n5'>
              <div className='d-flex flex-stack mb-2'>
                {/* begin::Label */}
                <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
                {/* end::Label */}
                
              </div>
            </div>
            <input
              type='password'
              autoComplete='off'
              {...formik.getFieldProps('password')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {
                  'is-invalid': formik.touched.password && formik.errors.password,
                },
                {
                  'is-valid': formik.touched.password && !formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>
          <div className='text-center'>
            <button
              type='submit'
              id='kt_sign_in_submit'
              className='btn btn-lg btn-primary w-100 mb-5'
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {!loading && <span className='indicator-label'>Continue</span>}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
            <div className='text-center'>
              <Link
                    to='/auth/forgot-password'
                    className='link-primary fs-6 fw-bolder'
                    style={{marginLeft: '5px'}}
              >
                Forgot Password ?
              </Link>
              <p>Please contact support for password recovery</p>
            </div>
            <hr></hr>
            <div className='text-center'>
              <h3>NEED HELP?</h3>
              <p>
                Please Contact us regarding any issues related to the report
                01811383839, 01788320633, 01766943020.<br></br>
                Email: emedicalbd2014@gmail.com
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


const mapStateToProps = (props : any) => {
  return {
    role: props.permission,
    item: props.menuItem
      
  }
};

const mapDistachToProps = (props : any) => (dispatch : any) => {
  return bindActionCreators({item : actions.menuItems }, dispatch);
};

connect( mapStateToProps, mapDistachToProps )(Login)