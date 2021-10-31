import { FC, useMemo } from 'react'
import { Link, Navigate, useMatch } from 'react-location'
import POSTS from '../data/posts.json'

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
      <Link to="..">←</Link>
      <h2>{post.name}</h2>
      <p>{post.text}</p>
    </div>
  )
}

export default Post
