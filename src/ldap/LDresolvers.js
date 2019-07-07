import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPointA, entryPointAa,entryPointAd,entryPointAda,entryPointV } from './LDserver';

const URLA = `http://${url}:${port}/${entryPointA}`;
const URLAa = `http://${url}:${port}/${entryPointAa}`;
const URLAd = `http://${url}:${port}/${entryPointAd}`;
const URLAda = `http://${url}:${port}/${entryPointAda}`;
const URLV = `http://${url}:${port}/${entryPointV}`;


//const URL = `http://${url}:${port}/${entryPoint}`;

const LDresolvers = {
	Query: {
	},
	Mutation: {
		loginUser: async (_, { credentials }) => {
			let res = await	generalRequest(`${URLA}`, 'POST', credentials)
			const a = JSON.stringify(res)
			//console.log(a);
			const response = a.split(",")[0].split(":")[1]
			var token = "";
			var ans = "";
			if (response == "true"){
				token = a.split(",")[2].split(":")[1]		
				//console.log(token)
				ans = { message: 'Usuario autenticado.',token: token}
			}
			
			if(res){
				if(response === "false")return 'Usuario no autenticado.'
				else return ans
			}else return 'Usuario no autenticado.'
		},
		loginAdmin: async (_, { credentials }) => {
			let res = await	generalRequest(`${URLAa}`, 'POST', credentials)
			const a = JSON.stringify(res)
			//console.log(a);
			const response = a.split(",")[0].split(":")[1]
			var token = "";
			var ans = "";
			if (response == "true"){
				token = a.split(",")[2].split(":")[1]		
				//console.log(token)
				ans = { message: 'Admin autenticado.',token: token}
			}
			
			if(res){
				if(response === "false")return 'Admin no autenticado.'
				else return ans
			}else return 'Admin no autenticado.'
		},
		createUserld: (_, { user }) =>
			generalRequest(`${URLAd}`, 'POST', user),
		createAdmin: (_, { user }) =>
			generalRequest(`${URLAda}`, 'POST', user),
		
		validate: async (_, { credentials }) => {
			let res = await	generalRequest(`${URLV}`, 'POST', credentials)
			return res
		}	
	}
};

export default LDresolvers;