import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import NextCors from 'nextjs-cors';


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
//  res.json("post")


  const postId = req.query.id

  if (req.method === 'GET') {
    handleGET(postId, res)
  } else if (req.method === 'DELETE') {
    handleDELETE(postId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(postId, res) {
  const post = await prisma.post.findUnique({
    where: { id: Number(postId) }
  })
  res.json(post)
}

// DELETE /api/post/:id
async function handleDELETE(postId, res) {
  const post = await prisma.post.delete({
    where: { id: Number(postId) },
  })
  res.json(post)
}
