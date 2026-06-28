/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    register: typeof routes['auth.register']
    login: typeof routes['auth.login']
    logout: typeof routes['auth.logout']
  }
  authors: {
    index: typeof routes['authors.index']
    show: typeof routes['authors.show']
    store: typeof routes['authors.store']
    update: typeof routes['authors.update']
    destroy: typeof routes['authors.destroy']
  }
  book: {
    index: typeof routes['book.index']
    show: typeof routes['book.show']
    store: typeof routes['book.store']
    update: typeof routes['book.update']
    destroy: typeof routes['book.destroy']
  }
  loans: {
    index: typeof routes['loans.index']
    show: typeof routes['loans.show']
    store: typeof routes['loans.store']
    update: typeof routes['loans.update']
    destroy: typeof routes['loans.destroy']
  }
}
