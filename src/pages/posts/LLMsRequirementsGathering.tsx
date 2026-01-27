import React from "react";

const LLMsRequirementsGathering: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        How LLMs Can Supercharge Requirements Gathering
      </h1>
      <p className="mb-4">
        Generative AI tools like ChatGPT and Claude aren’t replacing Business
        Analysts — they’re enhancing them.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Use Cases</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Drafting User Stories from high-level business goals for refinement.
        </li>
        <li>
          AI-assisted gap analysis between AS-IS and TO-BE process descriptions.
        </li>
        <li>
          Translating technical descriptions into plain language for
          stakeholders.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Caution</h2>
      <p className="mb-4">
        Always validate AI outputs. Treat them as accelerators, not final
        sources of truth.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Future Trend</h2>
      <p>
        Expect integration of LLMs into requirements management tools like Azure
        DevOps and Jira, making AI-assisted analysis a standard BA practice.
      </p>
    </div>
  );
};

export default LLMsRequirementsGathering;
