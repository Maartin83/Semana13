const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

const PageNuevoMusico = () => {
    const [nombre,setNombre] = React.useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/musicos',
            entity: {nombre: nombre},
            headers: {'Content-Type': 'application/json'}
        }).done(response => {
            window.location.href = "/";
        });
    }
    return (
        <>
            <h1>Nuevo Músico</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" name="nombre" onChange={(e)=>setNombre(e.target.value)}/>
                <input type="submit" value="Nuevo Músico" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoMusico;