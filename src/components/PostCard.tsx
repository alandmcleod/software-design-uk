import { Link } from 'react-router-dom'

type Props = {
  title: string
  excerpt: string
  to: string
}

export default function PostCard({ title, excerpt, to }: Props) {
  return (
    <Link to={to} className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{excerpt}</p>
    </Link>
  )
}
