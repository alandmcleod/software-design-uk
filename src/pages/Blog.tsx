import React from 'react'
import PostCard from '../components/PostCard'

const posts = [
  { title: 'System Design Principles', excerpt: 'A guide to building scalable, maintainable systems.' },
  { title: 'Cloud Migration Strategies', excerpt: 'Steps to move your workloads to the cloud smoothly.' },
  { title: 'Prompt Engineering for Analysts', excerpt: 'Practical prompts and patterns for analysis tasks.' }
]

export default function Blog() {
  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-primary mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map((p, i) => (
          <PostCard key={i} title={p.title} excerpt={p.excerpt} />
        ))}
      </div>
    </div>
  )
}
