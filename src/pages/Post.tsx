import { FC, useMemo } from 'react'
import { Link, Navigate, useMatch } from 'react-location'
import { Helmet } from 'react-helmet'
import POSTS from '../data/posts.json'
import { truncate } from 'lodash'

const usePost = (postId: string) => {
  return useMemo(() => POSTS.find((p) => p.id === postId), [postId])
}

const Post: FC = () => {
  const {
    params: { postId }
  } = useMatch()
  const post = usePost(postId)
  if (!post) return <Navigate to=".." />
  return (
    <div className="content">
      <Helmet>
        <title>Post: {post.name}</title>
        <meta name="description" content={`Post page: ${post.name}`} />
        <meta
          property="og:description"
          content={truncate(post.text, { length: 128 })}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.name} />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <Link to="..">←</Link>
      <h2>{post.name}</h2>
      <p>{post.text}</p>
    </div>
  )
}

export default Post
