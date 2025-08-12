import React from 'react'

type Props = {
  title: string
  excerpt: string
}

export default function PostCard({ title, excerpt }: Props) {
  return (
    <article className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="text-gray-600 mt-2">{excerpt}</p>
    </article>
  )
}
