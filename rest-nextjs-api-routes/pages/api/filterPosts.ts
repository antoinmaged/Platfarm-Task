import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import NextCors from 'nextjs-cors';


// GET /api/filterPosts?searchString=:searchString
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
  const { searchString } = req.query
  const resultPosts = await prisma.post.findMany({
    where: {
      OR: [
        {
          Field: { contains: searchString },
        },
        {
          Field_Unit: { contains: searchString },
        },
      ],
    },
  })
  res.json(resultPosts)
}
