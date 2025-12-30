
import React from 'react';
import { Scheme } from '../types';

interface SchemeCardProps {
  scheme: Scheme;
  onViewDetails: (scheme: Scheme) => void;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, onViewDetails }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
          {scheme.icon}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
          {scheme.category}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{scheme.name}</h3>
      <p className="text-sm text-gray-600 flex-1 mb-4">{scheme.shortDescription}</p>
      
      <div className="space-y-2 mb-5">
        {scheme.benefits.slice(0, 2).map((benefit, index) => (
          <div key={index} className="flex items-center text-xs">
            <span className="mr-2">{benefit.icon}</span>
            <span className="font-medium text-gray-700">{benefit.text}</span>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {scheme.eligibilityTags.map((tag, index) => (
          <span key={index} className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <button 
        onClick={() => onViewDetails(scheme)}
        className="w-full mt-auto bg-orange-500 text-white font-bold py-2.5 rounded-lg transition-all shadow-md shadow-orange-100 group-hover:bg-orange-600"
      >
        View Details
      </button>
    </div>
  );
};

export default SchemeCard;
