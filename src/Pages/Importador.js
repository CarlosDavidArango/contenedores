import { Formik, Field, Form, FieldArray } from "formik"
import "../Styles/Puerto.css"
import Button from "../Components/Button"
import { useState } from 'react';
import mensaje from "../Styles/mensaje.png"



const Importador = (props) => {


    const [condiciones, setCondiciones] = useState({capacity: 0, departureHarbor: "", arrivalHarbor: ""})

    const handleSubmit1 = (values, onSubmitProps) => {
        setCondiciones(values)
        onSubmitProps.resetForm()
    }

    const filtro = (envio) => {
        if(envio.capacity == condiciones.capacity && envio.departureHarbor == condiciones.departureHarbor && envio.arrivalHarbor == condiciones.arrivalHarbor){
            return true
        }
    }

    return(
        <div>
            <div className="lista">
                <li>
                    <div className="box">
                        <h4>Please select the details of the shipment you need</h4>
                        <Formik
                            initialValues={{capacity: 0, departureHarbor: "", arrivalHarbor: ""}}
                            onSubmit= {handleSubmit1}>
                            
                            <Form>
                                <label>Capacity</label>
                                <Field className="field" name= "capacity"></Field>
                                <br></br>
                                <label>Departure port</label>
                                <Field className="field" name = "departureHarbor" as = "select">
                                    {props.puertos.map((puerto)=> (
                                        <option key={puerto.name} value={puerto.name}>{puerto.name}</option>
                                    ))}
                                </Field>
                                <br></br>

                                <label>Arrival port</label>
                                <Field className="field" name = "arrivalHarbor" as = "select">
                                    {props.puertos.map((puerto)=> (
                                        <option key={puerto.name} value={puerto.name}>{puerto.name}</option>
                                    ))}
                                </Field>
                                <br></br>
                                <Button type="submit" text= "CONFIRM"></Button> 
                            </Form>

                        </Formik>
                    </div>
                </li>
                <div className="opciones">
                <li className="elementoLista">
                    <div>
                        {props.envios.filter(filtro).map((envio, indice) => (
                            <div className="cuadritoLista" key={indice}>
                                <li className="elementoEnvio"><h5>Price </h5>{envio.price}</li>
                                <li className="elementoEnvio"><h5>Date </h5>{envio.date}</li>
                                <div className="permisos">
                                <h4>Required permissions</h4>
                                {props.puertos.map((puerto, indice) => (
                                    ((puerto.name == envio.departureHarbor) || (puerto.name == envio.arrivalHarbor))  
                                    ? puerto.exportLicences.map(permiso => (<li key={indice} className="elementoEnvio"><h5>{permiso.name}</h5> {permiso.descriptions}</li>))  
                                    : null
                                ))}
                                </div>
                                <img className="Dibujomensaje" src={mensaje}></img>
                            </div>
                        ))}
                    </div>
                </li>
                </div>
            </div>
        </div>
    )
}

export default Importador