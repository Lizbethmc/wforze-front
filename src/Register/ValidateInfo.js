export default function ValidateInfo(values){
    let errors = {}

    if(!values.email){
        errors.email = "Se requiere correo electronico"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Correo electronico invalido. Ej. example@email.com';
    }

    if (!values.password) {
        errors.password = 'Se requiere contraseña';
    }else if (!values.password.length < 6 && !values.password.length > 20
        &&  !/^[A-Z0-9._%+-]$/i.test(values.password)){
        errors.password = 'Contraseña invalida. Minimo 6 y maximo 20 caracteres alfanumericos,' +
            'con minimo una mayuscula, un caracter y un numero';
    }

    if (!values.password2) {
        errors.password2 = 'Se requiere confirmacion de contraseña';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Su contraseña no coincide con la anterior';
    }

    return errors;
}