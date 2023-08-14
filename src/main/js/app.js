
const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageVerInstrumento = require('./pages/verInstrumento');
const PageNuevoMusico = require('./pages/nuevoMusico');
const PageNuevoInstrumento = require('./pages/nuevoInstrumento');

const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/nuevo-musico', element: <PageNuevoMusico />},
	{path: '/nuevo-instrumento', element: <PageNuevoInstrumento/>},
	{path: '/verInstrumento/:id', element: <PageVerInstrumento/>}
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)