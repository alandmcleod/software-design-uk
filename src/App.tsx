import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { Card } from "./components/ui/card";


export type PostType = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
};

export const posts: PostType[] = [
  {
    id: "poor-system-boundaries",
    title: "The Cost of Poor System Boundaries",
    excerpt:
      "Explores the long-term consequences of loosely defined service boundaries, from tight coupling to brittle systems.",
    content: "<p>Coming soon...</p>"
  },
  {
    id: "evolutionary-architecture",
    title: "Designing for Change: Evolutionary Architecture in Practice",
    excerpt:
      "An introduction to evolutionary architecture and how to apply it in real-world environments with continuous change.",
    content: "<p>Coming soon...</p>"
  },
  {
    id: "what-makes-good-architecture",
    title: "What Makes an Architecture ‘Good’?",
    excerpt:
      "Breaks down the key qualities of successful architecture — modifiability, scalability, performance, and more.",
    content: "<p>Coming soon...</p>"
  },
  {
    id: "cloud-native-vs-hosted",
    title: "Cloud-Native != Just Moving to the Cloud",
    excerpt:
      "Clarifies the difference between hosting in the cloud and building cloud-native systems using autoscaling, resilience, and statelessness.",
    content: "<p>Coming soon...</p>"
  },
  {
    id: "when-to-use-serverless",
    title: "When to Use Serverless — and When Not To",
    excerpt:
      "Examines use cases where serverless architecture shines and situations where it might cause more trouble than it's worth.",
    content: "<p>Coming soon...</p>"
  },
  {
    id: "ai-requirements-gathering",
    title: "AI-Assisted Requirements Gathering: Blessing or Curse?",
    excerpt:
      "Share pros and cons of using AI tools to help draft stories, models, and requirements in the early analysis stages.",
    content: "<p>Coming soon...</p>"
  },
  {
    id: "prompt-engineering-analysts",
    title: "Prompt Engineering for Analysts: A Practical Primer",
    excerpt:
      "Tips for writing prompts that generate clear, actionable, and usable output for design and documentation tasks.",
    content: "<p>Coming soon...</p>"
  },
  {
    id: "ai-validate-business-rules",
    title: "Using AI to Validate Business Rules",
    excerpt:
      "An exploration of how LLMs can assist in checking consistency, coverage, and logic in sets of business rules.",
    content: "<p>Coming soon...</p>"
  },
  {
    id: "modern-tech-docs",
    title: "Modern Technical Documentation: Beyond Word and PDF",
    excerpt:
      "Explores modern documentation formats and tools such as Markdown, GitBook, and docs-as-code workflows.",
    content: "<p>Coming soon...</p>"
  },
  {
    id: "docs-for-devs-vs-stakeholders",
    title: "Writing for Developers vs. Writing for Stakeholders",
    excerpt:
      "How to tailor content, language, and structure to different audiences without duplicating effort.",
    content: "<p>Coming soon...</p>"
  },
  {
    id: "fix-your-system-diagrams",
    title: "Why Your System Diagrams Don’t Work — and How to Fix Them",
    excerpt:
      "Common pitfalls in system diagramming and how to apply visual hierarchy and consistent notation.",
    content: "<p>Coming soon...</p>"
  }
];

const Home: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    {posts.map((post: PostType) => (
      <Card key={post.id} className="p-4">
        <h2 className="text-xl font-bold mb-2">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-700">{post.excerpt}</p>
      </Card>
    ))}
  </div>
);

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p: PostType) => p.id === id);
  if (!post) return <div className="p-4">Post not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <div className="max-w-4xl mx-auto">
      <header className="p-4 bg-gray-900 text-white text-center text-2xl font-semibold">
        <Link to="/">Software Design UK</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  </Router>
);

export default App;
