import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	eventsMutations,
	eventsQueries,
	eventsTypeDef
} from './events/EtypeDefs';

import eventsResolvers from './events/Eresolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		eventsTypeDef
	],
	[
		eventsQueries
	],
	[
		eventsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		eventsResolvers
	)
});
