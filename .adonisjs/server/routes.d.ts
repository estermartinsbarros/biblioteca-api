import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.register': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'authors.index': { paramsTuple?: []; params?: {} }
    'authors.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'authors.store': { paramsTuple?: []; params?: {} }
    'authors.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'authors.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.index': { paramsTuple?: []; params?: {} }
    'book.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.store': { paramsTuple?: []; params?: {} }
    'book.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'loans.index': { paramsTuple?: []; params?: {} }
    'loans.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'loans.store': { paramsTuple?: []; params?: {} }
    'loans.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'loans.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.register': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'authors.store': { paramsTuple?: []; params?: {} }
    'book.store': { paramsTuple?: []; params?: {} }
    'loans.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'authors.index': { paramsTuple?: []; params?: {} }
    'authors.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.index': { paramsTuple?: []; params?: {} }
    'book.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'loans.index': { paramsTuple?: []; params?: {} }
    'loans.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'authors.index': { paramsTuple?: []; params?: {} }
    'authors.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.index': { paramsTuple?: []; params?: {} }
    'book.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'loans.index': { paramsTuple?: []; params?: {} }
    'loans.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'authors.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'loans.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'authors.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'book.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'loans.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}