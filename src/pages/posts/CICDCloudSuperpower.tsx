import React from "react";

const CICDCloudSuperpower: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Why CI/CD Is Your Cloud Superpower
      </h1>
      <p className="mb-4">
        Cloud platforms give you resources on demand, but CI/CD pipelines make
        those resources truly powerful.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Benefits</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Faster releases with automated testing and deployment.</li>
        <li>
          Consistency across environments, reducing “it works on my machine”
          issues.
        </li>
        <li>Confidence with quick rollbacks and frequent feature delivery.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example Stack</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Source Control: GitHub</li>
        <li>CI/CD: GitHub Actions + AWS CodePipeline</li>
        <li>Deployment Target: AWS Amplify (frontend), AWS Lambda (backend)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Pro Tip</h2>
      <p>
        Integrate <em>infrastructure as code</em> (IaC) into your pipeline.
        Tools like AWS CDK or Terraform ensure your environment setup is
        reproducible and version-controlled.
      </p>
    </div>
  );
};

export default CICDCloudSuperpower;
