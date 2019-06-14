import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './LDserver';

const URL = `http://${url}:${port}/${entryPoint}`;

const LDresolvers = {
	Query: {
	},
	Mutation: {
		login: async (_, { credentials }) => {
			let res = await	generalRequest(`${URL}`, 'POST', credentials)
			console.log(res)
			if(res){
				if(res === 'LDAPException found'){
					return res
				}else{
					return 'Usuario autenticado.'
				}				
			}else{
				return 'Usuario no autenticado.'
			}
		}
	}
};

export default LDresolvers;