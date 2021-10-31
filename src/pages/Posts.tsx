import React from 'react'
import { Link, Outlet } from 'react-location'
import POSTS from '../data/posts.json'

export default function Posts() {
  return (
    <div className="content">
      <h2>Posts</h2>
      <ul>
        {POSTS.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.name}</Link>
          </li>
        ))}
        <li key={'fake'}>
          <Link to={`/posts/fake`}>fake</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}
