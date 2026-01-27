import React from 'react'
import { posts } from './posts/data/posts'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <div className="p-6">
      <section className="bg-white rounded-xl p-8 mb-8 shadow-sm text-center">
        <img
          src="/logo.png"
          alt="Software Design UK"
          className="mx-auto mb-6 h-32 md:h-48 w-auto"
        />
        <p className="text-gray-600 max-w-2xl mx-auto">
          Practical insights on system design, cloud computing, AI in analysis & design, and documentation standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              to={`/posts/${post.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
