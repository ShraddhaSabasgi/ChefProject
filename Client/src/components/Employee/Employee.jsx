import { useFormik } from "formik"
import restImage from '../../Assets/img/emp.jpg'
import {object,string,number} from 'yup'
import axios from 'axios'
const Employee = ()=>{
    const FormValidation =object({
        name:string().required('required'),
        description:string().required('required'),
        address:string().required('required'),
        city :string().required('required'),
        state :string().required('required'),
        zip :number().required('required'),
        emailId:string().email('eneter valid email').required('required'),
        mobile:number().required('required').min(10,'enter valid phone number')
    })
    const formik =  useFormik({
        initialValues:{
           name :'',
           address:'',
           description:'',
           city:'',
           state:'',
           zip:'',
           emailId:'',
           mobile:''

        },
        validationSchema:FormValidation
    })
    
    const genderList = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" }
    ];
    const handleChange = e => {
    // setGender(e.target.value);
    }
    const onRegisterClicked=()=>{
        console.log('employee form ',formik.values)
        axios.post('',formik.values)
        .then((res)=>{
            console.log('response',res)
        }).catch((err)=>{
            console.log('error',err)
        })
    }
    return (
        <>
        <div className="container-fluid">
            <div className="row my-2 px-2">
                <div className="col-md-5">
                    <img 
                        src={restImage} alt="Logo" width="100%" height="100%" className=""
                    />
                </div>
                <div className="col-md-7">
                    <div>
                        <form className="formGroup" onSubmit={formik.handleSubmit}>
                            <div className='form-group'>
                                <label> Name</label>
                                <input  className="form-control" type="text" name="name" id="name" placeholder='Employee Name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value= {formik.values.name} 
                                required/>
                            </div>
                            <div className='form-group'>
                                <label> Personal Description</label>
                                <textarea className="form-control" name="Description" id="Description" rows="3"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value= {formik.values.description} 
                                required/>
                            </div>
                            <div className='form-group'>
                                <label className="my-2"> Select gender from the list </label>
                                {genderList.map((x, i) => <label key={i}>
                                    <input
                                    type="radio"
                                    name="gender"
                                    className='form-control mx-5'
                                    value={x.value}
                                    onChange={handleChange}
                                    /> {x.label}
                                </label>)}
                                </div>
                            <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Address</label>
                            <input type="text" className="form-control" name="Address" id="Address" placeholder="Local Area" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                                required/>
                            </div>
                            <div className="row">
                            <div className="col-md-5">
                                <label htmlFor="validationCustom03">City</label>
                                <input type="text" className="form-control" name="restCity" id="city" placeholder="City" required 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.city}/>
                            </div>
                            <div className="col-md-4 mb-2">
                                <label htmlFor="validationCustom04">State</label>
                                <input type="text" className="form-control"  name="State" id="sState" placeholder="State" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.state}
                                required />
                            </div>
                                <div className="col-md-3 mb-2">
                                <label htmlFor="validationCustom05">Zip</label>
                                <input type="text" className="form-control"  name="Zip" id="Zip" placeholder="Zip" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.zip}
                                required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email Id</label>
                            <input type="text" className="form-control" name="emailId" id="emailId" placeholder="example@gmail.com" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.emailId}
                                required/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Mobile</label>
                            <input type="text" className="form-control" name="mobile" id="mobile" placeholder="9988776655" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.mobile}
                                required/>
                            </div>
                            <button className="btn btn-primary my-5 justify-content-center" type="submit" 
                                onClick={onRegisterClicked}>Register</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Employee