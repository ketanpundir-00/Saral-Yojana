
import React from 'react';
import { Scheme } from '../types';
import Accordion from './Accordion';

interface SchemeDetailsProps {
  scheme: Scheme;
  onBack: () => void;
  onCheckEligibility: (prompt: string) => void;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-orange-200">{title}</h2>
    {children}
  </div>
);

const SchemeDetails: React.FC<SchemeDetailsProps> = ({ scheme, onBack, onCheckEligibility }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-white animate-in fade-in duration-300">
      <div className="p-4 sm:p-6">
         <button 
            onClick={onBack}
            className="text-gray-500 hover:text-gray-800 flex items-center gap-1 text-sm mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Schemes
          </button>

        <header className="flex items-start gap-4 mb-8">
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
            {scheme.icon}
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">{scheme.name}</h1>
            <p className="text-gray-500 mt-1">{scheme.shortDescription}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a href={scheme.officialLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white text-center font-bold py-3 rounded-lg hover:bg-blue-600 transition-all">Apply Now</a>
            <button onClick={() => onCheckEligibility(`I am interested in the ${scheme.name} scheme. Can you help me check my eligibility?`)} className="bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-all">Check My Eligibility</button>
            <button className="bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300 transition-all">Download Guidelines</button>
        </div>

        <DetailSection title="Scheme Overview">
            <p className="text-gray-600 leading-relaxed">{scheme.overview}</p>
        </DetailSection>

        <DetailSection title="Key Benefits">
            <ul className="space-y-3">
                {scheme.benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-lg mr-3">{item.icon}</span>
                        <span className="text-gray-700">{item.text}</span>
                    </li>
                ))}
            </ul>
        </DetailSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
            <DetailSection title="Eligibility Criteria">
                 <ul className="space-y-3">
                    {scheme.eligibility.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-lg mr-3">{item.icon}</span>
                            <span className="text-gray-700">{item.text}</span>
                        </li>
                    ))}
                </ul>
            </DetailSection>
            
            <DetailSection title="Required Documents">
                 <ul className="space-y-2 list-disc list-inside">
                    {scheme.documents.map((doc, index) => (
                        <li key={index} className="text-gray-700">{doc}</li>
                    ))}
                </ul>
            </DetailSection>
        </div>
        
         <DetailSection title="Application Process">
            <ol className="space-y-4 border-l-2 border-orange-200 ml-2">
                {scheme.applicationProcess.map((item) => (
                     <li key={item.step} className="relative pl-8">
                        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">{item.step}</div>
                        <p className="text-gray-700">{item.description}</p>
                    </li>
                ))}
            </ol>
        </DetailSection>

        <DetailSection title="Frequently Asked Questions">
            <div className="space-y-2">
                {scheme.faqs.map((faq, index) => (
                    <Accordion key={index} title={faq.question}>
                        <p>{faq.answer}</p>
                    </Accordion>
                ))}
            </div>
        </DetailSection>
      </div>
    </div>
  );
};

export default SchemeDetails;
