import debug from 'debug';

export const log = {
  info: debug('app:info'),
  error: debug('app:error'),
  debug: debug('app:debug'),
  query: debug('app:query'),
  parse: debug('app:parse'),
  retrieve: debug('app:retrieve'),
  write: debug('app:write'),
} as const;
