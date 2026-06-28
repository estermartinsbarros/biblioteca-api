import vine from '@vinejs/vine'

export const createBookValidator = vine.compile(
  vine.object({
    titulo: vine.string().trim().minLength(1),
    dataPublicacao: vine.date(),
    genero: vine.string().trim().minLength(1),
    editora: vine.string().trim().optional(),
    quantidade: vine.number().min(1),
    authorId: vine.number().positive(),
  })
)

export const updateBookValidator = vine.compile(
  vine.object({
    titulo: vine.string().trim().minLength(1),
    dataPublicacao: vine.date(),
    genero: vine.string().trim().minLength(1),
    editora: vine.string().trim().optional(),
    quantidade: vine.number().min(1),
    authorId: vine.number().positive(),
  })
)
