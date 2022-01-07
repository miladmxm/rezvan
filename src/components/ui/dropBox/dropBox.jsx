import React, { useRef, useState } from "react";

const DropBox = ({ children, title,plus=0 }) => {

    const [show, setShow] = useState(false)
    
    const drop = useRef(null)

    const togge = () => {
        setShow(!show)
        if (!show) {
            drop.current.style.height = drop.current.scrollHeight+plus+'px'
        } else {
            
            drop.current.style.height = 0
        }
    }

    return (
        <>
            <h6 className={show?'dropBoxTitle showBox':'dropBoxTitle'} onClick={togge}>{title} <i className="fa fa-plus"></i></h6>
            <div ref={drop} className='dropBox' >
                {children}
            </div>
        </>
    )
}
export default DropBox