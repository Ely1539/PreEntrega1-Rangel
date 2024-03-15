import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Error = () => {
    useEffect(() => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: "ERROR 404 PÁGINA NO ENCONTRADA",
            width: 900,
            padding: "8vh",
            backdrop: `rgba(11, 0, 19, 0.8)`,
            confirmButtonText: 'Volver al Inicio',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/';
            }
        });
    }, []);
    return null;
}

export default Error;




