import { useState, useEffect, memo } from 'react';

const InstallBtn = () => {
    let  [installPrompt, setState] : any = useState(null);
    
    async function revealBtn(event: Event) : Promise<boolean> {
        try {
            event.preventDefault();
            console.log(event);
            setState(event);
            const d : HTMLElement | null = await  document.getElementById('install-dialog');
            if (d !== null) {
                const _d = d as HTMLDialogElement;
                _d.showModal();
                return true
            };
            return false;
        } catch(err: any) {
            console.error(err);
            return false;
        };
    };
        

    function hideBtn() : boolean {
        try {
            document.getElementById('install-dialog')?.removeAttribute('open');
            return true;
        } catch (err:any) {
            console.error(err);
            return false;
        };
    };

    async function handleInstall() : Promise<boolean> {
        try {
            if (installPrompt && installPrompt.prompt) {
                await installPrompt.prompt();
                await hideBtn();
                return true;
            };
            return false;
        } catch (err : any) {
            console.error(err);
            return false;
        };
    };

    useEffect(()=> {
        window.addEventListener('beforeinstallprompt', revealBtn);
        return ()=> {
            window.removeEventListener('beforeinstallprompt', revealBtn)};
    }, []);

    return  <dialog id='install-dialog'>
            <h2>Fit Tests is a Progressive Web App</h2>
            <p>If you would like to install the app to your device please click the install button below</p>
            <span>
                <button type='button' id='installbtn' onClick={handleInstall}>Install</button>
                <button type='button' onClick={hideBtn}>X</button>
            </span>
        </dialog>
};

export default memo(InstallBtn);