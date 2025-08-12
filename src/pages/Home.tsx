import React from 'react'
import PostCard from '../components/PostCard'

const posts = [
  { title: 'Designing Scalable Cloud Systems', excerpt: 'Principles for building scalable, fault-tolerant cloud architectures.' },
  { title: 'API Integration Best Practices', excerpt: 'Patterns and anti-patterns for reliable integrations.' },
  { title: 'AI in Requirements Analysis', excerpt: 'How LLMs can accelerate early-stage analysis safely.' }
]

export default function Home() {
  return (
    <div className="p-6">
      <section className="bg-white rounded-xl p-8 mb-8 shadow-sm text-center">
        <img src="/logo.png" alt="Software Design UK" className="mx-auto mb-6 h-32 md:h-48 w-auto" />
        <p className="text-gray-600 max-w-2xl mx-auto">Practical insights on system design, cloud computing, AI in analysis & design, and documentation standards.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-primary text-center">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((p, i) => (
            <PostCard key={i} title={p.title} excerpt={p.excerpt} />
          ))}
        </div>
      </section>
    </div>
  )
}
