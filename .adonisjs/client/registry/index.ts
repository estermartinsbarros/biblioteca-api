/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.register': {
    methods: ["POST"],
    pattern: '/register',
    tokens: [{"old":"/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['auth.register']['types'],
  },
  'auth.login': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'authors.index': {
    methods: ["GET","HEAD"],
    pattern: '/authors',
    tokens: [{"old":"/authors","type":0,"val":"authors","end":""}],
    types: placeholder as Registry['authors.index']['types'],
  },
  'authors.show': {
    methods: ["GET","HEAD"],
    pattern: '/authors/:id',
    tokens: [{"old":"/authors/:id","type":0,"val":"authors","end":""},{"old":"/authors/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['authors.show']['types'],
  },
  'authors.store': {
    methods: ["POST"],
    pattern: '/authors',
    tokens: [{"old":"/authors","type":0,"val":"authors","end":""}],
    types: placeholder as Registry['authors.store']['types'],
  },
  'authors.update': {
    methods: ["PUT"],
    pattern: '/authors/:id',
    tokens: [{"old":"/authors/:id","type":0,"val":"authors","end":""},{"old":"/authors/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['authors.update']['types'],
  },
  'authors.destroy': {
    methods: ["DELETE"],
    pattern: '/authors/:id',
    tokens: [{"old":"/authors/:id","type":0,"val":"authors","end":""},{"old":"/authors/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['authors.destroy']['types'],
  },
  'book.index': {
    methods: ["GET","HEAD"],
    pattern: '/books',
    tokens: [{"old":"/books","type":0,"val":"books","end":""}],
    types: placeholder as Registry['book.index']['types'],
  },
  'book.show': {
    methods: ["GET","HEAD"],
    pattern: '/books/:id',
    tokens: [{"old":"/books/:id","type":0,"val":"books","end":""},{"old":"/books/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['book.show']['types'],
  },
  'book.store': {
    methods: ["POST"],
    pattern: '/books',
    tokens: [{"old":"/books","type":0,"val":"books","end":""}],
    types: placeholder as Registry['book.store']['types'],
  },
  'book.update': {
    methods: ["PUT"],
    pattern: '/books/:id',
    tokens: [{"old":"/books/:id","type":0,"val":"books","end":""},{"old":"/books/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['book.update']['types'],
  },
  'book.destroy': {
    methods: ["DELETE"],
    pattern: '/books/:id',
    tokens: [{"old":"/books/:id","type":0,"val":"books","end":""},{"old":"/books/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['book.destroy']['types'],
  },
  'auth.logout': {
    methods: ["DELETE"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.logout']['types'],
  },
  'loans.index': {
    methods: ["GET","HEAD"],
    pattern: '/loans',
    tokens: [{"old":"/loans","type":0,"val":"loans","end":""}],
    types: placeholder as Registry['loans.index']['types'],
  },
  'loans.show': {
    methods: ["GET","HEAD"],
    pattern: '/loans/:id',
    tokens: [{"old":"/loans/:id","type":0,"val":"loans","end":""},{"old":"/loans/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['loans.show']['types'],
  },
  'loans.store': {
    methods: ["POST"],
    pattern: '/loans',
    tokens: [{"old":"/loans","type":0,"val":"loans","end":""}],
    types: placeholder as Registry['loans.store']['types'],
  },
  'loans.update': {
    methods: ["PUT"],
    pattern: '/loans/:id',
    tokens: [{"old":"/loans/:id","type":0,"val":"loans","end":""},{"old":"/loans/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['loans.update']['types'],
  },
  'loans.destroy': {
    methods: ["DELETE"],
    pattern: '/loans/:id',
    tokens: [{"old":"/loans/:id","type":0,"val":"loans","end":""},{"old":"/loans/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['loans.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
