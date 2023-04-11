import './Rest.scss'
import {useFormik} from 'formik'
import restImage from '../../Assets/img/restaurent.jpg'
import {ref, object, string ,number} from 'yup';
import axios from 'axios'
const RestaurentOwner = ()=>{
    
    // const emptyvalidate = (values)=>{
    //     const errors={};
    //     if (!values.restName){
    //         errors.restName="required";
    //     }
    //     if (!values.restDescription){
    //         errors.restDescription="required";
    //     }
    //     if (!values.restAddress){
    //         errors.restAddress="required";
    //     }
    //     if (!values.restCity){
    //         errors.restCityc="required";
    //     }
    //     if (!values.restState){
    //         errors.restState="required";
    //     }
    //     if (!values.restType){
    //         errors.restType="required";
    //     }
    //     if (!values.restZip){
    //         errors.restZip="required";
    //     }
    //     if (!values.ownerName){
    //         errors.ownerName="required";
    //     }
    //     if (!values.ownerEmail){
    //         errors.ownerEmail="required";
    //     }
    //     if (!values.ownerMobile){
    //         errors.ownerMobile="required";
    //     }
    //     return errors;
    // }
    const FormValidation = object({
        restName:string().required('required'),
        restDescription:string().required('required'),
        restAddress:string().required('required'),
        restCity:string().required('required'),
        restZip:number('must be in numbers').required('required').min(6,'6 length zipcode').positive('must be positive').integer('must be integer'),
        restState:string().required('required'),
        ownerName:string().required('required'),
        ownerEmail:string().email('Enter Valid email').required('required'),
        password :string().required('password is required !')
        .min(6,'minimum length is 6'),
        confirmPassword:string().required('confirm password required')
        .oneOf([ref('password')],'confirm password mismatched with password')

    })
    
    const formik = useFormik({
        initialValues:{
            restName:"",
            restDescription:"",
            restAddress:"",
            restCity:"",
            restState:"",
            restZip:0,
            restType:"",
            ownerName:"",
            ownerEmail:"",
            ownerMobile:"",
            password:"",
            confirmPassword:""
        },
       validationSchema:FormValidation,
    });
    const onSubmitForm=()=>{
        console.log(formik.values)
        axios.post('/c/restaurentowner/register',formik.values)
        .then((res)=>{
            console.log(res.data)

        }).catch((error)=>{
            console.log(error)
        })

    }
    return(
        <>
        <div className="container-fluid">
            <div className="row my-2 px-2">
                <div className="col-md-5">
                    <img 
                        src={restImage} alt="Logo" width="100%" height="100%" className="headerlogo d-inline-block align-text-top"
                    />
                </div>
                <div className="col-md-7">
                    <div>
                        <form className="formGroup" >
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Restaurent Name</label>
                            <input type="text" className="form-control" name="restName" id="restName" placeholder="example Restaurent"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.restName}  
                                />
                                <span style={{color:'red'}}>{ formik.errors.restName}</span>
                        </div>
                    {/* <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">GST No</label>
                        <input type="text" className="form-control" id="address" placeholder="example Restaurent" />
                    </div> */}
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Restaurent Description</label>
                            <textarea className="form-control" name="restDescription" id="restDescription" rows="3"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.restDescription} 
                                required></textarea>
                                <span style={{color:'red'}}>{ formik.errors.restDescription}</span>

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Address</label>
                            <input type="text" className="form-control" name="restAddress" id="restAddress" placeholder="Local Area" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.restAddress}
                                required/>
                                <span style={{color:'red'}}>{ formik.errors.restAddress}</span>

                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <label htmlFor="validationCustom03">City</label>
                                <input type="text" className="form-control" name="restCity" id="restCity" placeholder="City" required 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.restCity}/>
                                <span style={{color:'red'}}>{ formik.errors.restCity}</span>

                            </div>
                            <div className="col-md-4 mb-2">
                                <label htmlFor="validationCustom04">State</label>
                                <input type="text" className="form-control"  name="restState" id="restState" placeholder="State" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.restState}
                                required />
                                <span style={{color:'red'}}>{ formik.errors.restState}</span>

                            </div>
                                <div className="col-md-3 mb-2">
                                <label htmlFor="validationCustom05">Zip</label>
                                <input type="text" className="form-control"  name="restZip" id="restZip" placeholder="Zip" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.restZip}
                                required />
                                <span style={{color:'red'}}>{ formik.errors.restZip}</span>

                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="restType">Select Restaurent Type</label>
                            <select className="form-control" id="restType" name="restType">
                                <option>10 Star</option>
                                <option>5 Star</option>
                                <option>3 Star</option>
                            </select>
                        </div>
                        <div className="">
                        <div className="card my-4">
                        <div className="card-body">
                        <h5 className="card-title text-center"> Restaurent Owner Registration</h5>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Restaurent Owner Name</label>
                            <input type="text" className="form-control"  name="ownerName" id="ownerName" placeholder="Restaurent Owner Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.ownerName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ownerAddress">Email address</label>
                            <input type="text" className="form-control" name="ownerEmail" id="ownerEmail" placeholder="name@example.com"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.ownerEmail}
                                required  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ownerMob">Mobile Number</label>
                            <input type="text" className="form-control" name="ownerMobile" id="ownerMobile" placeholder="9876543210" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.ownerMobile}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="password"  
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="confirm Password" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                required />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked value="true" id="defaultCheck2" disabled />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                terms and Conditions
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={ onSubmitForm}>Submit form</button>
                    </form>
                
                </div>
            </div>
            
            </div>

        </div>
        </>
    )
}
export default RestaurentOwner