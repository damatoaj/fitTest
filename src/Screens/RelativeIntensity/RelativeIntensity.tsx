import {memo, MouseEventHandler} from 'react';
import Percentages from '../../Components/Tables/Percentages';
import ReserveTable from '../../Components/Tables/ReserveTable';
import { useUserContext } from '../../Hooks/useUserContext';


function createHeaders(tid:string) : string[] {
    let h : string[] = [];
    if (document === null) return [];
    const childrens : Element[] = Array.from(document.getElementById(tid)!.children);
    console.log(childrens, "<--childrens")
    childrens.forEach((child)=> {
        console.log(child, child.tagName);
        if (child.tagName.toLocaleUpperCase() === 'THEAD') {
            let row = Array.from(child.children[0].children) as unknown[] as HTMLTableCellElement[];
            console.log(row, '<-- row', )
            row.forEach((r  )=> {
                console.log(r, 'r', r.colSpan)
                if (r && r.colSpan > 1) {
                    for (let i = 0; i < r.colSpan; i++) {
                        console.log(i, '<-- i')
                        if (i===0 && r.textContent) {
                            h.push(r.textContent);
                        } else {
                            h.push('');
                        };
                    };
                } else if (r.textContent) {
                    h.push(r.textContent)
                }
            });
        }
    });

    return h;
};

function createRows(tid:string) : string[][] {
    let csvRows  : string[][] = [];
    if (document == null) return [];
    const childrens = Array.from(document.getElementById(tid)!.children);
    console.log(childrens, "<--childrens")
    childrens.forEach((child)=> {
        console.log(child, child.tagName);
        if (child.tagName.toLocaleUpperCase() === 'TBODY') {
            let rows = Array.from(child.children) as unknown[] as HTMLTableCellElement[];
            console.log(rows, '<-- row', )
            rows.forEach((row)=> {
                let a : string[]= [];
                console.log(row, 'row', row)
                Array.from(row.children).forEach((r)=> {
                    console.log(r, r.textContent, "<--- r")
                    if (r.textContent) a.push(r.textContent);
                });
                csvRows.push(a);
            });
        }
    });

    return csvRows;
};

// const createRows = (tid) => {
//     let r  = [];
//     const childrens = Array.from(document.getElementById(tid).children);
// }

function createCSV(headers : string[], rows:string[][]) : string {
    try {
        let csvRows : string[] = [];    
        
        const h : string = headers.join(',');

        csvRows.push(h);

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
        // return true;
    } catch (err:any) {
        console.error(err);
        // return false;
    }
};

async function downloadCSVFromTable(tableID: string) {
    try {
        const h : string[] = await createHeaders(tableID);
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

const handleDownload  : any = (event : any, id:string) => {
    console.log(event);
    downloadCSVFromTable(id);
};

const RelativeIntensity = () => {
    const { state } = useUserContext();

    return (
        <main>
            <article>
            <h1>Relative Intensity</h1>
            <p>As you fill out forms and complete tests, your relative intensities will be added here.</p>
            <p>Programming your exercise with relative intensity in mind gives you control over your progress</p>
            <p>For instance, if you wanted to go for a light jog then maybe you would want to keep your heart rate in the 57-63% range, or if you are bodybuilding you may want to lift in the moderate range for 8-12 repetitions.</p>
            <section id='hr-max'>
                <div>
                    <h2>Percent of Heart Rate Max Intensities</h2>
                    <ul>
                        <li>Very light: less than 57%</li>
                        <li>Light: 57% to 63%</li>
                        <li>Moderate: 64% to 76%</li>
                        <li>Vigorous: 77% to 95%</li>
                        <li>Near maximal to maximal: greater than 95%</li>
                    </ul>
                </div>
                    {state.user.hrMax ? (
                        <Percentages 
                            max={state.user.hrMax}
                            title='Percentage Of Heart Rate Max'
                            onDownload={handleDownload}
                            categories={{
                                vl : 57,
                                l : 63,
                                mo : 76,
                                h : 95,
                                max : 100
                            }}
                        />
                    ) : <Percentages 
                        max={0} 
                        title='Percentage Of Heart Rate Max'
                        onDownload={handleDownload}
                        categories={{
                            vl : 57,
                            l : 63,
                            mo : 76,
                            h : 95,
                            max : 100
                        }}
                    />}
                    
                    
            </section>
            <section id='heart-rate-reserve'>
                <div>
                    <h2>Percent of Heart Rate Reserve</h2>
                    <ul>
                        <li>Very light: less than 30%</li>
                        <li>Light: 30% to 39%</li>
                        <li>Moderate: 40% to 59%</li>
                        <li>Vigorous: 60% to 89%</li>
                        <li>Near maximal to maximal: greater than 89%</li>
                    </ul>
                </div>

                {(state.user.hrMax && state.user.hrMax >  0) && (state.user.restingHR > 0)? (
                    <ReserveTable 
                        onDownload={handleDownload}
                        max={state.user.hrMax}
                        rest={state.user.restingHR}
                        title='Percentage Of Heart Rate Reserve'
                        categories={{
                            vl : 30,
                            l : 39,
                            mo : 59,
                            h : 89,
                            max : 100
                        }}
                    />
                ) : <ReserveTable 
                        onDownload={handleDownload}
                        max={0} rest={0} 
                        title='Percentage Of Heart Rate Reserve' 
                        categories={{
                            vl : 30,
                            l : 39,
                            mo : 59,
                            h : 89,
                            max : 100
                        }}/>}
                   
            </section>
            <section id='vo2-max'>
                <div>
                    <h2>Percent of VO2 Max Intensities</h2>
                    <ul>
                        <li>Very light: less than 37%</li>
                        <li>Light: 37% to 45%</li>
                        <li>Moderate: 46% to 63%</li>
                        <li>Vigorous: 64% to 90%</li>
                        <li>Near maximal to maximal: greater than 90%</li>
                    </ul>
                </div>
                    {state.user.vo2Max?.vo2Max ? (
                        <Percentages 
                            onDownload={handleDownload}
                            max={state.user.vo2Max?.vo2Max}
                            title='Percentage Of VO2 Max'
                            categories={{
                            vl : 37,
                            l : 45,
                            mo : 63,
                            h : 90,
                            max : 100
                            }}
                        />
                        ) : <Percentages 
                            onDownload={handleDownload}
                            max={0} 
                            title='Percentage Of VO2 Max' 
                            categories={{
                            vl : 37,
                            l : 45,
                            mo : 63,
                            h : 90,
                            max : 100
                        }}
                        />}
            </section>
            <section id='vo2-max-reserve'>
                <div>
                    <h2>Percent of V02 Max Reserve</h2>
                    <ul>
                        <li>Very light: less than 37%</li>
                        <li>Light: 37% to 45%</li>
                        <li>Moderate: 45% to 63%</li>
                        <li>Vigorous: 63% to 90%</li>
                        <li>Near maximal to maximal: greater than 90%</li>
                    </ul>
                </div>
                {(state.user.vo2Max && state.user.vo2Max.vo2Max >  0) ? (
                    <ReserveTable 
                        onDownload={handleDownload}
                        max={state.user.vo2Max.vo2Max}
                        rest={state.user.restingV02}
                        title='Percentage V02 Rate Reserve'
                        categories={{
                            vl : 37,
                            l : 45,
                            mo : 63,
                            h : 90,
                            max : 100
                        }}
                    />
                ) : <ReserveTable 
                        onDownload={handleDownload}
                        max={0} rest={0} 
                        title='Percentage Of V02 Rate Reserve' 
                        categories={{
                            vl : 37,
                            l : 45,
                            mo : 63,
                            h : 90,
                            max : 100
                        }}/>}
            </section>
            <section id='percentage-mets'>
                <div>
                    <h2>Percent of Maximal MET score</h2>
                    <p>The percentage categories are dictated by your V02 Max and therefore your maximal MET</p>
                    <p>One MET is 3.5 milliliters per kilogram per minute, the METs are multiple of that base value </p>
                    <h4>If your maximal MET score tops out at 5 or fewer METs</h4>
                    <ul>
                        <li>Very light: less than 44%</li>
                        <li>Light: 44% to 51%</li>
                        <li>Moderate: 52% to 67%</li>
                        <li>Vigorous: 68% to 91%</li>
                        <li>Near maximal to maximal: greater than 92%</li>
                    </ul>
                    <h4>If your maximal MET score is between 5 and 10 METs</h4>
                    <ul>
                        <li>Very light: less than 37%</li>
                        <li>Light: 37% to 45%</li>
                        <li>Moderate: 45% to 63%</li>
                        <li>Vigorous: 64% to 90%</li>
                        <li>Near maximal to maximal: greater than 91%</li>
                    </ul>
                    <h4>If your maximal MET score is between 10 and 20 METs</h4>
                    <ul>
                        <li>Very light: less than 34%</li>
                        <li>Light: 34% to 42%</li>
                        <li>Moderate: 43% to 61%</li>
                        <li>Vigorous: 62% to 90%</li>
                        <li>Near maximal to maximal: greater than 91%</li>
                    </ul>
                </div>
                {(state.user.vo2Max && state.user.vo2Max.vo2Max >  0) ? (
                    <Percentages
                        onDownload={handleDownload}
                        max={state.user.vo2Max.vo2Max / 3.5}
                        title='Percentage Of METs'
                        categories={ state.user.vo2Max.vo2Max / 3.5 >= 5 ? {
                            vl : 44,
                            l : 51,
                            mo : 67,
                            h : 91,
                            max : 100
                        } : state.user.vo2Max.vo2Max / 3.5 >= 10 ? {
                            vl : 37,
                            l : 45,
                            mo : 63,
                            h : 90,
                            max : 100
                        } :
                    {
                            vl : 34,
                            l : 42,
                            mo : 61,
                            h : 91,
                            max : 100
                        }
                    }
                    />
                ) : <Percentages 
                        onDownload={handleDownload}
                        max={0} 
                        title='Percentage Of METs' 
                        categories={{
                             vl : 44,
                            l : 51,
                            mo : 67,
                            h : 91,
                            max : 100
                        }}/>}
            </section>
            <section id='one-rep-max'>
                <div>
                    <h2>Percent of 1 Rep Max Intensities</h2>
                    <ul>
                        <li>Very light: less than 30%</li>
                        <li>Light: 30% to 49%</li>
                        <li>Moderate: 50% to 69%</li>
                        <li>Vigorous: 70% to 84%</li>
                        <li>Near maximal to maximal: greater than 84%</li>
                    </ul>
                </div>

                    {state.user.benchPress?.benchPress ? (
                    <Percentages 
                        onDownload={handleDownload}
                        max={state.user.prefers_metric ? state.user.benchPress?.benchPress : Math.round(state.user.benchPress?.benchPress * 2.2 * 100) / 100}
                        title='Percentage Of 1RM Bench Press'
                        categories={{
                        vl : 30,
                        l : 49,
                        mo : 69,
                        h : 84,
                        max : 100
                        }}
                    />
                    ) : <Percentages 
                        onDownload={handleDownload}
                        max={0} 
                        title='Percentage Of 1RM Bench Press' 
                        categories={{
                        vl : 30,
                        l : 49,
                        mo : 69,
                        h : 84,
                        max : 100
                        }}
                    />}
                    {state.user.legPress?.legPress ? (
                    <Percentages 
                        onDownload={handleDownload}
                        max={state.user.prefers_metric ? state.user.legPress?.legPress : Math.round(state.user.legPress.legPress * 2.2 * 100) / 100}
                        title='Percentage Of 1RM Leg Press'
                        categories={{
                        vl : 30,
                        l : 49,
                        mo : 69,
                        h : 84,
                        max : 100
                        }}
                    />
                    ) : <Percentages 
                    onDownload={handleDownload}
                    max={0} 
                    title='Percentage Of 1RM Leg Press' 
                    categories={{
                        vl : 30,
                        l : 49,
                        mo : 69,
                        h : 84,
                        max : 100
                    }}
                    />} 
            </section>
        </article>


        </main>
    )
}

export default memo(RelativeIntensity);