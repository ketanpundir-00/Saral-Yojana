
import React, { useState, useMemo } from 'react';
import { schemes as allSchemes } from '../data/schemes';
import { Scheme } from '../types';
import SchemeCard from './SchemeCard';
import FilterPanel from './FilterPanel';

const categories = [
  { id: 'all', name: 'All Schemes', icon: '🌟' },
  { id: 'Agriculture', name: 'Agriculture', icon: '🚜' },
  { id: 'Health', name: 'Health', icon: '🏥' },
  { id: 'Pension', name: 'Pension', icon: '👵' },
  { id: 'Education', name: 'Education', icon: '🎓' },
];

interface SchemeExplorerProps {
  onSchemeSelect: (scheme: Scheme) => void;
}

const SchemeExplorer: React.FC<SchemeExplorerProps> = ({ onSchemeSelect }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSchemes = useMemo(() => {
    return allSchemes.filter(scheme => {
      const matchesCategory = activeCategory === 'all' || scheme.category === activeCategory;
      const matchesSearch = searchTerm.toLowerCase() === '' || 
                            scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            scheme.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            scheme.eligibilityTags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="p-4 sm:p-6 bg-slate-50 flex-1">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Find Government Schemes</h2>
        <p className="text-gray-600 mt-1">Discover schemes tailored for you.</p>
      </div>
      
      <div className="sticky top-0 bg-slate-50/80 backdrop-blur-sm py-4 z-10">
         <div className="relative mb-6">
            <input 
              type="text"
              placeholder="Search schemes by name, benefit, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full px-6 py-4 text-md focus:ring-2 focus:ring-orange-500 outline-none shadow-sm"
            />
            <svg className="w-6 h-6 absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
         </div>
      
        <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id 
                  ? 'bg-orange-600 text-white shadow' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <FilterPanel onFilterChange={() => {}} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchemes.map(scheme => (
          <SchemeCard key={scheme.id} scheme={scheme} onViewDetails={onSchemeSelect} />
        ))}
      </div>
       {filteredSchemes.length === 0 && (
          <div className="text-center col-span-full py-12">
            <p className="text-gray-500">No schemes match your criteria. Try adjusting your search or filters.</p>
          </div>
        )}
    </div>
  );
};

export default SchemeExplorer;
