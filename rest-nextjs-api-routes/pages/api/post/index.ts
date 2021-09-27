import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

  const { id, Time, Field, Field_Unit, Activity,Category, Sub_Category, Created_by } = req.body
  const result = await prisma.post.create({
    data: {
      id : id,
      Time: Time,
      Field:Field,
      Field_Unit:Field_Unit,
      Activity:Activity,
      Category: Category,
      Sub_Category: Sub_Category,
      Created_by: Created_by,
    },
  })
  res.json(result)
}
}
