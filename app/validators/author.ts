import vine from '@vinejs/vine'

export const createAuthorValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(1),
    nacionalidade: vine.string().trim().minLength(1),
  })
)

export const updateAuthorValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(1),
    nacionalidade: vine.string().trim().minLength(1),
  })
)
