import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './LDserver';


const URL = `http://${url}:${port}/${entryPoint}`;

const LDresolvers = {
	Query: {
	},
	Mutation: {
		login: async (_, { credentials }) => {
			let res = await	generalRequest(`${URL}`, 'POST', credentials)
			const a = JSON.stringify(res)
			const response = a.split(",")[0].split(":")[1]
			
			if(res){
				if(response === "false"){
					return 'Usuario no autenticado.'
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