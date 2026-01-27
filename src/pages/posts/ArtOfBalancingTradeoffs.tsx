import React from "react";

const ArtOfBalancingTradeoffs: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        The Art of Balancing Trade-offs in System Design
      </h1>
      <p className="mb-4">
        Designing systems isn’t just about “the right technology” — it’s about{" "}
        <em>the right trade-offs</em>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Performance vs. Scalability
      </h2>
      <p className="mb-4">
        A highly performant single-server setup may work today, but scaling it
        tomorrow might require a costly redesign. Sometimes, “good enough”
        performance with built-in scalability wins.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Simplicity vs. Flexibility
      </h2>
      <p className="mb-4">
        Over-engineering can slow delivery and confuse maintainers. Aim for
        modularity without unnecessary complexity.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>
      <p className="mb-4">
        When building a real-time analytics platform, we chose a slightly
        slower data store (AWS DynamoDB) over an in-memory cache because the
        operational overhead of cache invalidation outweighed the performance
        gains.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Takeaway</h2>
      <p>
        Document <strong>why</strong> decisions were made, not just{" "}
        <strong>what</strong> was chosen — future you (and future teams) will
        thank you.
      </p>
    </div>
  );
};

export default ArtOfBalancingTradeoffs;
