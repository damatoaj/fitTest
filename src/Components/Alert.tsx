import { memo } from 'react';
import { useUserContext } from '../Hooks/useUserContext';

type AlertProps = {
    message: string,
    type: string
};

const Alert = ({message, type}:AlertProps) => {
      const { dispatch } = useUserContext();
    
    setTimeout(()=> {
        let a = document.querySelector(`dialog.alert[data-type='${type}']`);
        if (a) {
            return dispatch({type: 'REMOVEALERT'});
        } else {
            return false;
        }
    }, 3000);

    return (
        <dialog className='alert' data-type={type} open>
            <strong>{type}: {message}</strong>
         </dialog>
    )
};

export default memo(Alert);