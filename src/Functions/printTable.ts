export async function printTable(id:string) {
    try {
        window.addEventListener('afterprint', ()=> {

        })
        const prtContent : HTMLElement = document.getElementById(id)!;
    
        const WinPrint = await window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0')!;
        const printDoc = await WinPrint.document;
        
        printDoc.body.innerHTML = prtContent.innerHTML;
        console.log(prtContent, "<-- print content");
        WinPrint?.document.write(prtContent.innerHTML);
        window.addEventListener('beforeprint', (e)=> {
            console.log('before print event', e)
            // WinPrint?.close();
            // document.getElementById
        });
        window.addEventListener('afterprint', (e)=> {
            console.log('after print event', e)
            WinPrint?.close();
            // document.getElementById
        });
        const printStyles = document.querySelectorAll('link[rel="stylesheet"], style');
        printStyles.forEach((style, i) => {
            printDoc?.head.appendChild(style.cloneNode(true));
            console.log(style, i)
        });
        await WinPrint?.focus();
        await WinPrint?.print();
        await WinPrint?.close();
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }

}

