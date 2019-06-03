import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './Tserver';

const URL = `http://${url}:${port}/${entryPoint}`;

const Tresolvers = {
	Query: {
		getTiendas: (_) =>
			getRequest(URL, ''),
		tiendaById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),

	},
	Mutation: {
		createTienda: (_, { tienda }) =>
			generalRequest(`${URL}`, 'POST', tienda),
		updateTienda: (_, { id, tienda }) =>
			generalRequest(`${URL}/${id}`, 'PUT', tienda),
		deleteTienda: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default Tresolvers;