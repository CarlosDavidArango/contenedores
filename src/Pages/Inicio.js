import "../Styles/Puerto.css"

const Inicio = (props) => {
    return(
        <div className="lista">
            <div className="opciones">
                <li className="elementoLista">
                    <div>
                        {props.envios.map((envio, indice) => (
                            <div className="cuadritoLista" key={indice}>
                                <li className="elementoEnvio"><h5>Price </h5>{envio.price}</li>
                                <li className="elementoEnvio"><h5>Date </h5>{envio.date}</li>
                                <li className="elementoEnvio"><h5>Departure Port </h5>{envio.departureHarbor}</li>
                                <li className="elementoEnvio"><h5>Arrival port </h5>{envio.arrivalHarbor}</li>
                                <div className="permisos">
                                <h4>Required permissions  </h4>
                                {props.puertos.map(puerto => (
                                    ((puerto.name == envio.departureHarbor) || (puerto.name == envio.arrivalHarbor)) 
                                    ? puerto.exportLicences.map(permiso => (<li className="elementoEnvio"><h5>{permiso.name}</h5> {permiso.descriptions}</li>))  
                                    : null
                                ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </li>
            </div>
        </div>
    )
}

export default Inicio