
import CustomButton from "../components/button/button.component";

const ErrorHandling = (props) => {
    const {error} = props;

    const handleClick = () => {
        window.location.reload();
    };

    const message = error ?.message || error;


    return (
        <div>
            <h2>Damn!!Error..</h2>
            <p>{message}</p>
            <p>Try again, Click Refresh</p>
            <CustomButton type='button' onClick={handleClick}>Refresh</CustomButton>
        </div>
    )
}

export default ErrorHandling;