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

import eventsResolvers from './events/Eresolvers';
import destinationsResolvers from './destinations/Dresolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		eventsTypeDef,
		destinationsTypeDef
	],
	[
		eventsQueries,
		destinationsQueries
	],
	[
		eventsMutations,
		destinationsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		eventsResolvers,
		destinationsResolvers
	)
});
