import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import AuthorsController from '#controllers/authors_controller'
import BookController from '#controllers/books_controller'
import LoansController from '#controllers/loans_controller'
import AuthController from '#controllers/auth_users_controller'

//Usuarios
router.post('/register', [AuthController, 'register'])
router.post('/login', [AuthController, 'login'])

// Autores
router.get('/authors', [AuthorsController, 'index'])
router.get('/authors/:id', [AuthorsController, 'show'])
router.post('/authors', [AuthorsController, 'store'])
router.put('/authors/:id', [AuthorsController, 'update'])
router.delete('/authors/:id', [AuthorsController, 'destroy'])

// Livros
router.get('/books', [BookController, 'index'])
router.get('/books/:id', [BookController, 'show'])
router.post('/books', [BookController, 'store'])
router.put('/books/:id', [BookController, 'update'])
router.delete('/books/:id', [BookController, 'destroy'])

router
  .group(() => {
    router.delete('/logout', [AuthController, 'logout'])

    router.get('/loans', [LoansController, 'index'])
    router.get('/loans/:id', [LoansController, 'show'])
    router.post('/loans', [LoansController, 'store'])
    router.put('/loans/:id', [LoansController, 'update'])
    router.delete('/loans/:id', [LoansController, 'destroy'])
  })
  .use(middleware.auth())
