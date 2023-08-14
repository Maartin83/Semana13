const React = require('react');
const client = require('../client');
const { Link, useParams} = require('react-router-dom');
const {useState} = require("react");
const PageVerInstrumento = () => {
    let {id}=useParams();
    const [instrumento,setInstrumento] = useState({});
    client({
        method: 'GET',
        path: '/api/instrumentos/'+id
    }).done(response => {
        setInstrumento(response.entity);
    });
    return (
        <>
            <h1>Ver Instrumento</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{instrumento.nombre}</td>
                </tr>
                <tr>
                    <th>Categoria</th>
                    <td>{instrumento.categoria}</td>
                </tr>
                <tr>
                    <th>Descripcion</th>
                    <td>{instrumento.descripcion}</td>
                </tr>
            </table>
            <Link to="/">Volver</Link>


        </>
    )
}
//all ok?


module.exports = PageVerInstrumento;