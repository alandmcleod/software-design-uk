// src/components/ui/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <p className="text-sm">&copy; {new Date().getFullYear()} Software Design UK. All rights reserved.</p>
        
        {/* Netlify Status Badge */}
        <a
          href="https://app.netlify.com/projects/amazing-kleicha-54f8c4/deploys"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://api.netlify.com/api/v1/badges/ee9bb9ad-42bb-48da-9edf-368dc9d88487/deploy-status"
            alt="Netlify Status"
            className="h-6"
          />
        </a>
      </div>
    </footer>
  );
}
