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

function pushToHorR(h : string[], r:string[], data : any, p : string | null) {
    for (const property in data) {
                if ((typeof data[property] === 'string' ||
                    typeof data[property] === 'number') &&
                    data[property] != null
                ) {
                    p ? 
                    h.push(p + '_' + property) :
                    h.push(property);

                    typeof data[property] === 'number' ?
                        r.push(data[property].toString()) :
                        r.push(data[property]);
                    } else if (typeof data[property] === 'object') {
                        console.log('going a level deeper:', property, data[property])
                        pushToHorR(h, r, data[property], property);
                    };
            };
            
            return [h, r];
        };

async function downloadCSVFromAllSessionData(keys:string[]) {
    try {
        let headers : string[]= [];
        let rows :string[] = [];
        
        
        keys.forEach((key)=> {
            let data: string | null = sessionStorage.getItem(key);
            if (data) {
                let _data  = JSON.parse(data);
                if (typeof _data === 'object') {
                    let v = pushToHorR(headers, rows, _data, null);
                } else if (typeof _data === 'string') {
                    headers.push(key);
                    rows.push(_data);
                } else if (typeof _data === 'number') {
                    headers.push(key);
                    rows.push(_data.toString());
                };
            };
        });
        
        let c = createCSV([headers], [rows]);

        const d = new Date();
        await downloadCSV(c, 'session_data _' + d);
        return true;

    } catch (err: any) {
        console.error(err);
        return false;
    }   
};

export {
    downloadCSVFromTable,
    downloadCSVFromAllSessionData
}