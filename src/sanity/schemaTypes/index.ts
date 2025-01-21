import { type SchemaTypeDefinition } from 'sanity'
import carSchema from './car'
import { comment } from './comments'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carSchema,comment],
}
