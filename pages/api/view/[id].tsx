// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  id : string | string[] | undefined
}

export default function handler(
  req: NextApiRequest, //받는거
  res: NextApiResponse<Data> //주는거
) {
  res.status(200).json({ name: 'John Doe', id : req.query.id })
}
