import { useState, useEffect } from 'react';

const InstallBtn = () => {
    let  [installPrompt, setState] : any = useState(null);
    
    const revealBtn =(event: Event) => {
        event.preventDefault();
        console.log(event);
        setState(event);
        document.getElementById('installbtn')?.removeAttribute('hidden');
    };

    useEffect(()=> {
        window.addEventListener('beforeinstallprompt', revealBtn);
        return ()=> window.removeEventListener('beforeinstallprompt', revealBtn);
    }, []);
    

    const handleInstall = () => {
        try {
            if (installPrompt && installPrompt.prompt) {
                installPrompt.prompt();
            };
        } catch (err : any) {
            console.error(err);
        };
    };

    return  <button type='button' hidden id='installbtn' onClick={handleInstall}>Install</button>
};

export default InstallBtn;