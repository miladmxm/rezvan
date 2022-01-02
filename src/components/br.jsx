import React, { useEffect, useRef } from 'react';
const Br = () => {
    const brRef=useRef(null)
    useEffect(()=>{
        console.log(brRef.current.scrollHeight)
    },[])
    return (
        <>
            <div ref={brRef} className='br'></div>
        </>
     );
}
 
export default React.memo(Br);