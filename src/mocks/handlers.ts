import { rest } from 'msw'

export const handlers = [
  // User component ni render qilganda componentDidMount da ushbu api ga zapros ketadi va rest.get uni API boyicha handle qilib ushbu body ni yuboradi va User render boladi
  // va test da uni tekshirib ovuramiz
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: 'Bruce Wayne' },
        { name: 'Clark Kent' },
        { name: 'Princess Diana' },
      ])
    )
  }),
]
