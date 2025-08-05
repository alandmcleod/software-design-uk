import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { posts } from "./data/posts";
import { motion } from "framer-motion";


// Define the structure of a blog post
type PostType = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
};

// Home page displaying intro and posts
const Home: React.FC = () => (
  <main className="p-4">
  <motion.section
  className="bg-gray-50 rounded-xl p-8 mb-8 text-center shadow-sm"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <img src="/logo.png" alt="Software Design UK Logo" className="mx-auto h-60 mb-6" />
  <h1 className="text-4xl font-bold text-gray-800 mb-2">Software Design UK</h1>
  <p className="text-lg text-gray-600 max-w-xl mx-auto">
    Practical insights and commentary on system design, cloud computing, AI in analysis & design,
    and documentation standards — from a Business Systems Analyst's point of view.
  </p>
</motion.section>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post: PostType) => (
        <div key={post.id} className="p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-bold mb-2">
            <Link to={`/post/${post.id}`} className="text-blue-600 hover:underline">{post.title}</Link>
          </h2>
          <p className="text-gray-700">{post.excerpt}</p>
        </div>
      ))}
    </div>
  </main>
);

// Individual post page
const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p: PostType) => p.id === id);

  if (!post) {
    return <div className="p-4">Post not found</div>;
  }

  return (
    <article className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

// About page
const About: React.FC = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">About</h1>
    <p className="text-gray-700">
      Software Design UK is a personal platform by Alan McLeod, sharing insights on modern system architecture, cloud
      technologies, and analytical practices in IT. The site aims to provide clean, practical knowledge from real-world
      experience.
    </p>
  </div>
);

// Contact page
const Contact: React.FC = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
    <p className="text-gray-700">You can reach out via email at <a href="mailto:contact@software-design-uk.com" className="text-blue-600 underline">contact@software-design-uk.com</a>.</p>
  </div>
);

// Root app component with routing
const App: React.FC = () => (
  <Router>
    <div className="max-w-4xl mx-auto">
      <header className="p-4 bg-white border-b mb-4">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-20" />
          </Link>
          <ul className="flex space-x-4 text-lg font-medium">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
