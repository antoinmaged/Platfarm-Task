import React from 'react'
import Router from 'next/router'

export type PostProps = {
  id: Int16Array;
  Time: string;
  Field: string;
  Field_Unit: string;
  Activity: string;
  Category: string;
  Sub_Category: string;
  Created_by: string;
  
}

const Post: React.FC<{post: PostProps}> = ({ post }) => {
  return (
    <div onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}>
        <h2>{post.Time}</h2>
        <small>By {post.Field}</small>
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
    </div>
  )
}

export default Post