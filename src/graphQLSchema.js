import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

// events
import {
	eventsMutations,eventsQueries,eventsTypeDef
} from './evn/events/EtypeDefs';
import {
	reservationsMutations,reservationsQueries,reservationsTypeDef
} from './evn/reservations/RtypeDefs';

import {
	destinationsMutations,
	destinationsQueries,
	destinationsTypeDef
} from './destinations/DtypeDefs';

// Login
import{ 
	usersMutations,usersQueries,usersTypeDef
} from './login/users/UtypeDefs';

import{ 
	crewsMutations,crewsQueries,crewsTypeDef
} from './login/crew/CtypeDefs';

import{ 
	passengersMutations,passengersQueries,passengersTypeDef
} from './login/passengers/PtypeDefs';

//Promociones
import{ 
	tiendasMutations,tiendasQueries,tiendasTypeDef
} from './promos/tienda/TtypeDefs';
import{ 
	promocionesMutations,promocionesQueries,promocionesTypeDef
} from './promos/promocion/PMtypeDefs';

//RESOLVERS

import eventsResolvers from './evn/events/Eresolvers';
import reservationResolvers from './evn/reservations/Rresolvers';
import destinationsResolvers from './destinations/Dresolvers';

// Login
import usersResolvers from './login/users/Uresolvers';
import crewsResolvers from './login/crew/Cresolvers';
import passengersResolvers from './login/passengers/Presolvers';

// Promociones
import promocionesResolvers from './promos/promocion/PMresolvers';
import tiendasResolvers from './promos/tienda/Tresolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		eventsTypeDef,
		destinationsTypeDef,
		usersTypeDef,
		crewsTypeDef,
		passengersTypeDef,
		promocionesTypeDef,
		tiendasTypeDef,
		reservationsTypeDef

	],
	[
		eventsQueries,
		destinationsQueries,
		usersQueries,
		crewsQueries,
		passengersQueries,
		promocionesQueries,
		tiendasQueries,
		reservationsQueries
	],
	[
		eventsMutations,
		destinationsMutations,
		usersMutations,
		crewsMutations,
		passengersMutations,
		promocionesMutations,
		tiendasMutations,
		reservationsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		eventsResolvers,
		destinationsResolvers,
		usersResolvers,
		crewsResolvers,
		passengersResolvers,
		promocionesResolvers,
		tiendasResolvers,
		reservationResolvers
	)
});
