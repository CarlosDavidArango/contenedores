import "../Styles/Button.css"

const Button = (props) => {
    return(
        <button className="Boton" type={props.type} onClick = {props.onClick} > {props.text} </button> 
    )
}

export default Button