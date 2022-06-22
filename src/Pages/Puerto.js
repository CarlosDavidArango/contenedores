import { Formik, Field, Form, FieldArray } from "formik"
import "../Styles/Puerto.css"
import Button from "../Components/Button"

const Puerto = (props) => {

    const handleSubmit = (values, onSubmitProps) => {
        props.setPuertos([...props.puertos, values])
        onSubmitProps.resetForm()
    }

    return(
        <div>  
        <div className="box">
            
            <Formik
            initialValues={{name: "", Country: "", exportLicences: [{name: "", descriptions: ""}]}}
            onSubmit = {handleSubmit}>
                <Form>
                    <div className="">
                        <h4>Please enter your port information</h4>  
                        <div className="nombrePuerto">
                            <label> Name </label>
                            <Field name = "name" className="field"></Field>
                            <br/>
                        

                            <label> Country </label>
                            <Field name = "Country" className="field"></Field>
                        </div>

                        <h5>Permissions needed to use your services</h5>
                        
                        <FieldArray name="exportLicences">
                            {fieldProps => {
                                const {push, remove, form} = fieldProps
                                const { values } = form
                                const {exportLicences} = values

                                return (
                                    <div>
                                        {exportLicences.map((permiso, indice ) => (
                                            <div key={indice}>
                                                <label>Name</label>
                                                <Field className="field" name = {`exportLicences[${indice}].name`} />
                                                <br></br>
                                                <label>Description</label>
                                                <Field className="field" name = {`exportLicences[${indice}].descriptions`}/>
                                                <br/>                                                    
                                                <Button text = "REMOVE" type="button" onClick={() => remove(indice)}></Button>
                                                <br/>
                                            </div>
                                        ))}
                                        <br></br>
                                    <Button type="button" text ="ADD" onClick={() => push({name: "", descriptions: ""})}></Button>
                                    </div>
                                    
                                )
                            }}
                        </FieldArray>
                        <Button type="submit" text= "CONFIRM"></Button> 
                    </div>
                </Form>
            </Formik>
        </div>
        </div>
    )
}

export default Puerto



