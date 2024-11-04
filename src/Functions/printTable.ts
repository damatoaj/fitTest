export function printTable(id:string) {
    const prtContent : HTMLElement = document.getElementById(id)!;
    
    const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0')!;
    const printDoc = WinPrint.document;
    
    printDoc.body.innerHTML = prtContent.innerHTML;
    console.log(prtContent, "<-- print content");
    WinPrint?.document.write(prtContent.innerHTML);
    
    const printStyles = document.querySelectorAll('link[rel="stylesheet"], style');
    printStyles.forEach(style => {
        printDoc?.head.appendChild(style.cloneNode(true));
    });
  
    WinPrint?.focus();
    WinPrint?.print();
    WinPrint?.close();
}

