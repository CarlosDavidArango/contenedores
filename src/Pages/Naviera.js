import { Formik, Field, Form, FieldArray } from "formik"
import "../Styles/Puerto.css"
import Button from "../Components/Button"

const Naviera = (props) => {

    const handleSubmit = (values, onSubmitProps) => {
        props.setEnvios([...props.envios, values])
        onSubmitProps.resetForm()
    }
    return(
        <div>
            <div className="box">
                <Formik
                initialValues={{price: 0, capacity: 0, departureDate: 0, departureHarbor: "", arrivalHarbor: ""}}
                onSubmit= {handleSubmit}>
                    <Form>
                        <div className="nombrePuerto">
                            <h4>create shipment</h4>
                            <label>Cost</label>
                            <Field name= "price" className="field"></Field>
                            <br></br>
                            <label>Capacity</label>
                            <Field name= "capacity" className="field"></Field>
                            <br></br>
                            <label>Departure date</label>
                            <Field name= "date" className="field"></Field>
                            <br></br>

                            <label>Select an arrival port</label>
                            <Field name = "departureHarbor" as = "select" className="field">
                                {props.puertos.map((puerto)=> (
                                    <option key={puerto.name} value={puerto.name}>{puerto.name}</option>
                                ))}
                            </Field>
                            <br></br>

                            <label>Select a departure port</label>
                            <Field name = "arrivalHarbor" as = "select" className="field">
                                {props.puertos.map((puerto)=> (
                                    <option key={puerto.name} value={puerto.name}>{puerto.name}</option>
                                ))}
                            </Field>
                            <br></br>
                            <Button type="submit" text= "CONFIRM"></Button> 
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Naviera