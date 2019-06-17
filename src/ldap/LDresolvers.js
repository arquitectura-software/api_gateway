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
			var token = "";
			var ans = "";
			if (response == "true"){
				token = a.split(",")[2].split(":")[1]	
				console.log(token)
				ans = JSON.stringify({
					message: 'Usuario autenticado.',
					token: token
				})
			}
			
			if(res){
				if(response === "false"){
					return 'Usuario no autenticado.'
				}else{
					return ans
					//'Usuario autenticado.'
				}				
			}else{
				return 'Usuario no autenticado.'
			}
			
		}
	}
};

export default LDresolvers;