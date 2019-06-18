import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';;

const modals = document.getElementById('modals');

export default function Modal(props) {
    const [ el, setEl ] = useState(document.createElement('div'));

    useEffect(() => {
        modals.appendChild(el);
        return () => {
            modals.removeChild(el);
        }
    })

    return ReactDOM.createPortal(
        props.children,
        el,
    );
}
