import React from 'react'


const  NODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "Translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "50px",
    zindex: 1000
}

const  OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom:0,
    right: 0,
    backgroundColor: " rgba( 0, 0, 0, .7)",
    zindex: 1000
}

export default function Nodal({open, children, onClose}) {
    if (!open) return null


    return (
        <>
        <div style={OVERLAY_STYLES} />
        <div style={NODAL_STYLES}>
            <button onClick = {onClose} className="btn  btn-outline-dark">
                 <i className="fa fa-times me-1" height="50px" width="50px"></i></button >
            {children}
        </div>
        </>
    )
}
