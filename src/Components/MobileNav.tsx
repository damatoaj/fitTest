import { useState, memo } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    const [open, setOpen] = useState<boolean>(false);

    if(!open) return (
        <button style={styles.container} onClick={()=> setOpen(true)}>
            <div style={styles.bars}></div>
            <div style={styles.bars}></div>
            <div style={styles.bars}></div>
        </button>
    )

   return (
    <nav style={styles.overlay}>
        <button style={styles.back} onClick={()=> setOpen(false)}>
            <div style={styles.rectangle}></div>
            <div style={styles.triangle}></div>
        </button>
        <Link style={styles.link} to='/nutrition' onClick={()=> setOpen(false)}>Nutrition</Link>
        <Link style={styles.link} to='/strength' onClick={()=> setOpen(false)}>Strength</Link>
        <Link style={styles.link} to='/endurance' onClick={()=> setOpen(false)}>Endurance</Link>
        <Link style={styles.link} to='/health' onClick={()=> setOpen(false)}>Health</Link>
        <Link style={styles.link} to='/treadmill-protocols/bruce' onClick={()=> setOpen(false)}>VO2 Max</Link>
    </nav>
   )

};

const styles : any = {
    container : {
        width: '200px',
        border: '2px solid grey',
        backgroundColor: 'rgb(0, 0, 0, .4)',
        display:'flex',
        flexDirection:'column',
        paddingInline: '10px',
        paddingTop: '.5rem',
        position: 'fixed',
        zIndex:'100',
        top: '-1',
        borderRadius:'0px'
    },
    bars: {
        backgroundColor: 'whitesmoke',
        width: '100%',
        marginBottom: '.5rem',
        height: '10px',
    },
    overlay: {
        width: '50%',
        height: '100%',
        zIndex:'100',
        border: '2px solid grey',
        backgroundColor: 'rgb(0, 0, 0, .4)',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        top:'-1'
    },
    link: {
        color:'white',
        backgroundColor:'rgb(0, 0, 0, .7)',
        padding: '5%'
    },
    rectangle : {
        height: '15px',
        backgroundColor: 'white',
        width: '50px',
        marginTop: '5px'
    },
    triangle: {
        height: '25px',
        width: '25px',
        borderLeft: '20px solid white',
        borderBottom: '11px solid rgb(0, 0, 0, .2)',
        borderTop: '11px solid rgb(0, 0, 0, .2)'
    },
    back: {
        backgroundColor:'rgb(0, 0, 0, .7)',
        display:'flex',
        justifyContent:'flex-end',
        color:'white',
        padding: '.5rem',
        borderRadius:'0px'
    }
}

export default memo(MobileNav);