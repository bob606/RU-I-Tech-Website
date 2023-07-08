import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/block-content';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';
import landing from './schemas/landing';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, landing],
};
