import '../CSS/Error.css'

interface ErrorMessage {
    message:string
}
const Error = ({message}:ErrorMessage) => {
    
    return (
        <div className='error-message'>{message}</div>
    )
}

export default Error