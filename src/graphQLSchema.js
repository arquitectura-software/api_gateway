import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	eventsMutations,
	eventsQueries,
	eventsTypeDef
} from './events/EtypeDefs';


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

import eventsResolvers from './events/Eresolvers';
import destinationsResolvers from './destinations/Dresolvers';
import usersResolvers from './login/users/Uresolvers';
import crewsResolvers from './login/crew/Cresolvers';
import passengersResolvers from './login/passengers/Presolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		eventsTypeDef,
		destinationsTypeDef,
		usersTypeDef,
		crewsTypeDef,
		passengersTypeDef,
	],
	[
		eventsQueries,
		destinationsQueries,
		usersQueries,
		crewsQueries,
		passengersQueries
	],
	[
		eventsMutations,
		destinationsMutations,
		usersMutations,
		crewsMutations,
		passengersMutations
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
		passengersResolvers
	)
});
