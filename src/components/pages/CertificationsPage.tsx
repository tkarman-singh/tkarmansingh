"use client";

import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "AWS Certified Solutions Architect", issue: "Amazon Web Services", url: "#" },
  { name: "Machine Learning Specialization", issue: "Coursera", url: "#" }
];

export function CertificationsPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <Award size={48} className="text-black/60" />
        Certifications
      </h2>
      
      <div className="space-y-8 mt-4">
        {certs.map((cert, idx) => (
          <div key={idx} className="relative group cursor-pointer border-b border-dashed border-black/30 pb-6">
            <h3 className="text-3xl font-bold flex items-center gap-2">
              {cert.name}
              <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
            </h3>
            <p className="text-2xl mt-1 opacity-70">Issued by {cert.issue}</p>
            
            {/* Highlighter scribble on hover */}
            <div className="absolute inset-0 bg-yellow-300 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity rounded-sm z-[-1] -skew-y-1 transform scale-x-105"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
