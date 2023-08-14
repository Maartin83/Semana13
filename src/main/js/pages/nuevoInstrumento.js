const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

const PageNuevoInstrumento = () => {
    const [nombre,setNombre] = React.useState('');
    const [categoria,setCategoria] = React.useState('');
    const [descripcion,setDescripcion] = React.useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/instrumentos',
            entity: {nombre: nombre , categoria: categoria , descripcion: descripcion},
            headers: {'Content-Type': 'application/json'}
        }).done(response => {
            window.location.href = "/";
        });
    }
    return (
        <>
            <h1>Nuevo Instrumento</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" name="nombre" onChange={(e)=>setNombre(e.target.value)}/>
                <label>Categoria</label>
                <input type="text" name="categoria" onChange={(e)=>setCategoria(e.target.value)}/>
                <label>Descripcion</label>
                <input type="text" name="descripcion" onChange={(e)=>setDescripcion(e.target.value)}/>
                <input type="submit" value="Nuevo Instrumento" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoInstrumento;