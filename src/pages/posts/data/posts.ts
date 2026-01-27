export type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'designing-scalable-cloud-systems',
    title: 'Designing Scalable Cloud Systems',
    excerpt: 'Principles for building scalable, fault-tolerant cloud architectures.',
    content: `
Scalability is about more than adding servers.

Key principles:
- Stateless services
- Horizontal scaling
- Fault isolation
- Observability first
`
  },
  {
    slug: 'api-integration-best-practices',
    title: 'API Integration Best Practices',
    excerpt: 'Patterns and anti-patterns for reliable integrations.',
    content: `
Reliable integrations depend on:
- Clear contracts
- Idempotency
- Timeouts and retries
- Proper error handling
`
  },
  {
    slug: 'ai-in-requirements-analysis',
    title: 'AI in Requirements Analysis',
    excerpt: 'How LLMs can accelerate early-stage analysis safely.',
    content: `
LLMs can assist with:
- Requirement decomposition
- Stakeholder question prompts
- Assumption discovery

They should support analysts, not replace them.
`
  }
]
