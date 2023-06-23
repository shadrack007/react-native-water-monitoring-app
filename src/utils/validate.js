export const validate = (values) => {
    const errors = {}
    if(!values.meterNumber){
        errors.meterNumber = 'Meter number is requeired'
    } else if(String(values.meterNumber).length > 10 || String(values.meterNumber).length < 10){
        errors.meterNumber = 'Meter number is a 10 digit number'
    }
    return errors
}