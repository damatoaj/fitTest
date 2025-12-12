function createHeaders(tid:string) : string[][] {
    let h : string[][] = [];
    if (document === null) return [];
    const childrens : Element[] = Array.from(document.getElementById(tid)!.children);
    childrens.forEach((child)=> {
        if (child.tagName.toLocaleUpperCase() === 'THEAD') {
            let rows = Array.from(child.children) as unknown[] as HTMLTableCellElement[];
            rows.forEach((row) => {
                if (!row.classList.contains('no-print')) {
                    let a : string[]= [];
                    Array.from(row.children).forEach((r : any)=> {
                    if (r && r.colSpan > 1) {
                        for (let i = 0; i < r.colSpan; i++) {
                            a.push(r.textContent);
                        };
                    } else if (r.textContent) {
                        a.push(r.textContent)
                    }
                     });
                     h.push(a);
                    };
            });
            
        }
    });

    return h;
};

function createRows(tid:string) : string[][] {
    let csvRows  : string[][] = [];
    if (document == null) return [];
    const childrens = Array.from(document.getElementById(tid)!.children);
    childrens.forEach((child)=> {
        if (child.tagName.toLocaleUpperCase() === 'TBODY') {
            let rows = Array.from(child.children) as unknown[] as HTMLTableCellElement[];
            rows.forEach((row)=> {
                let a : string[]= [];
                Array.from(row.children).forEach((r)=> {
                    if (r.textContent) a.push(r.textContent);
                });
                csvRows.push(a);
            });
        }
    });

    return csvRows;
};

function createCSV(headers : string[][], rows:string[][]) : string {
    try {
        let csvRows : string[] = [];    
        
        headers.forEach((header)=> {
            csvRows.push(header.join(','))
        });

        rows.forEach((row) => {
            csvRows.push(row.join(','));
        });
        
        return csvRows.join('\n');;
    } catch (err: any) {
        console.error(err);
        return '';
    }
};

function downloadCSV(csv:string, filename:string) : void  {
    try {
        const blob = new Blob([csv],{ type: 'text/csv'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename + '.csv';
        a.click();
    } catch (err:any) {
        console.error(err);
    }
};

async function downloadCSVFromTable(tableID: string) {
    try {
        const h : string[][] = await createHeaders(tableID);
        const r : string[][] = await createRows(tableID);
        const c : string = await createCSV(h, r);

        const d = new Date();
        await downloadCSV(c, tableID + "_" + d);
        return true;
    } catch (err:any) {
        console.error(err);
        return false
    };
};

export {
    downloadCSVFromTable
}