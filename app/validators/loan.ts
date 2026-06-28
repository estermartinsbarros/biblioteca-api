import vine from '@vinejs/vine'

export const createLoanValidator = vine.compile(
  vine.object({
    book_id: vine.number().positive(),
    user_id: vine.number().positive(),
  })
)
