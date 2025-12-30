
import { Scheme } from '../types';

export const schemes: Scheme[] = [
  {
    id: 'pm-kisan',
    name: 'PM-Kisan Samman Nidhi',
    category: 'Agriculture',
    icon: '🚜',
    shortDescription: 'Provides income support to all landholding farmer families in the country.',
    overview: 'An income support scheme from the Government of India for all landholding farmer families. The scheme provides up to ₹6,000 per year as minimum income support.',
    objectives: [
      'To supplement the financial needs of the Small and Marginal Farmers (SMFs).',
      'To protect them from falling into the clutches of moneylenders for meeting such expenses.',
      'To ensure their continuance in the farming activities.',
    ],
    benefits: [
      { icon: '💰', text: '₹6,000 per year in three equal installments.' },
      { icon: '👨‍🌾', text: 'Directly transferred to the bank accounts of beneficiaries.' },
    ],
    eligibility: [
        { icon: '🏞️', text: 'Must be an Indian citizen with cultivable land.' },
        { icon: '👥', text: 'Applies to small and marginal farmer families.' },
        { icon: '📄', text: 'Excludes institutional landholders and high-income individuals.'}
    ],
    documents: ['Aadhaar Card', 'Citizenship certificate', 'Landholding papers', 'Bank account details'],
    applicationProcess: [
        { step: 1, description: 'Visit the official PM-KISAN portal.'},
        { step: 2, description: 'Click on the "New Farmer Registration" link.'},
        { step: 3, description: 'Enter Aadhaar number, mobile number, and fill the application form.'},
        { step: 4, description: 'Upload the required documents and submit the form.'}
    ],
    officialLink: 'https://pmkisan.gov.in/',
    faqs: [
        { question: 'Who is eligible for the PM-KISAN scheme?', answer: 'All landholding farmer families in the country are eligible, subject to certain exclusion criteria.' },
        { question: 'How much financial support is provided?', answer: 'A financial benefit of ₹6,000 per year is provided to each eligible farmer family, payable in three equal 4-monthly installments of ₹2,000 each.' }
    ],
    eligibilityTags: ['Farmers', 'Land Owners'],
  },
  {
    id: 'ayushman-bharat',
    name: 'Ayushman Bharat PM-JAY',
    category: 'Health',
    icon: '🏥',
    shortDescription: 'Provides health coverage of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.',
    overview: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is a national public health insurance scheme of the Government of India that aims to provide free access to health insurance coverage for low-income earners in the country.',
     objectives: [
      'To provide financial protection against catastrophic health expenditure.',
      'To improve access to quality healthcare for the poor and vulnerable.',
      'To cover secondary and tertiary care hospitalization.',
    ],
    benefits: [
      { icon: '❤️', text: 'Health cover of ₹5 Lakh per family per year.' },
      { icon: '🏥', text: 'Cashless access to healthcare services at empanelled hospitals.' },
      { icon: '💊', text: 'Covers up to 3 days of pre-hospitalization and 15 days post-hospitalization expenses.' },
    ],
     eligibility: [
        { icon: '👨‍👩‍👧‍👦', text: 'Families identified as poor and vulnerable based on SECC 2011 data.' },
        { icon: '🚫', text: 'No cap on family size or age of members.' },
    ],
    documents: ['Aadhaar Card', 'Ration Card', 'Contact Details', 'PM-JAY e-card'],
    applicationProcess: [
        { step: 1, description: 'Check your eligibility on the official PM-JAY portal or by calling the helpline.'},
        { step: 2, description: 'If eligible, visit any empanelled hospital or Common Service Center (CSC).'},
        { step: 3, description: 'Undergo the verification process using your Aadhaar card or ration card to get your Ayushman Bharat e-card.'},
    ],
    officialLink: 'https://pmjay.gov.in/',
    faqs: [
        { question: 'Is there a limit on the family size?', answer: 'No, there is no cap on the family size or age of members under Ayushman Bharat PM-JAY.' },
        { question: 'What is covered under this scheme?', answer: 'It covers secondary and tertiary care hospitalization, including pre and post-hospitalization expenses.' }
    ],
    eligibilityTags: ['Low Income', 'Families'],
  },
  {
    id: 'atal-pension',
    name: 'Atal Pension Yojana',
    category: 'Pension',
    icon: '👵',
    shortDescription: 'A pension scheme for citizens of India focused on the unorganized sector workers.',
    overview: 'Atal Pension Yojana (APY) is a government-backed pension scheme in India, primarily targeted at the unorganized sector. It provides a defined pension, depending on the contribution, and its period.',
    objectives: [
        'To encourage workers in the unorganized sector to voluntarily save for their retirement.',
        'To provide a social security net for citizens in their old age.',
        'To ensure a minimum pension for all subscribers.'
    ],
    benefits: [
      { icon: '📈', text: 'Guaranteed monthly pension of ₹1000 to ₹5000 after the age of 60.' },
      { icon: '🔒', text: 'Government co-contribution for eligible subscribers.' },
    ],
     eligibility: [
        { icon: '👤', text: 'Any Indian citizen between 18 and 40 years of age.' },
        { icon: '🏦', text: 'Must have a savings bank account or a post office savings bank account.' },
    ],
    documents: ['Aadhaar Card', 'Bank Account Details', 'Mobile Number'],
     applicationProcess: [
        { step: 1, description: 'Approach the bank/post office branch where you have a savings account.'},
        { step: 2, description: 'Fill out the APY registration form.'},
        { step: 3, description: 'Provide your Aadhaar and mobile number. Ensure sufficient balance for the first contribution.'},
    ],
    officialLink: 'https://www.npscra.nsdl.co.in/scheme-details.php',
     faqs: [
        { question: 'Can I exit the scheme before 60 years?', answer: 'Exit before 60 years is generally not permitted. However, it is permitted in exceptional circumstances, such as in the event of the death of the beneficiary or specified illness.' },
        { question: 'What happens if I miss a payment?', answer: 'A penalty is charged for delayed contributions. The account will be frozen after 6 months of non-payment and deactivated after 24 months.' }
    ],
    eligibilityTags: ['18-40 Years', 'Unorganized Sector'],
  },
  {
    id: 'skill-india',
    name: 'Skill India Mission',
    category: 'Education',
    icon: '🛠️',
    shortDescription: 'Aims to train over 40 crore people in India in different skills, covering various sectors.',
    overview: 'The Skill India Mission, launched by the Prime Minister, aims to train people in different skills. It includes various initiatives of the government like "National Skill Development Mission", "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)" and the "Skill Loan scheme".',
    objectives: [
        'To create opportunities, space and scope for the development of the talents of the Indian youth.',
        'To develop sectors which have already been put under skill development.',
        'To identify new sectors for skill development and create a market for them.'
    ],
    benefits: [
      { icon: '🔧', text: 'Access to vocational training across various sectors.' },
      { icon: '📄', text: 'Industry-recognized certification upon completion.' },
      { icon: '💼', text: 'Placement assistance and support for self-employment.' },
    ],
     eligibility: [
        { icon: '🧑‍🎓', text: 'Any Indian national who is unemployed, a school/college dropout, or looking to upskill.' },
        { icon: '✅', text: 'Specific course eligibility may vary based on the training provider.' },
    ],
    documents: ['Aadhaar Card', 'Proof of Address', 'Educational Certificates', 'Passport Size Photographs'],
     applicationProcess: [
        { step: 1, description: 'Visit the official Skill India portal or the PMKVY website.'},
        { step: 2, description: 'Find a training center near you for your desired course.'},
        { step: 3, description: 'Enroll in the course by providing the required details and documents.'},
        { step: 4, description: 'Attend the training and get certified.'},
    ],
    officialLink: 'https://www.skillindia.gov.in/',
     faqs: [
        { question: 'Is the training free?', answer: 'Many courses under the PMKVY component of the Skill India Mission are free of cost for the candidates.' },
        { question: 'Do I get a job after the training?', answer: 'The mission provides placement assistance, but a job is not guaranteed. It depends on the candidate\'s performance and the availability of jobs.' }
    ],
    eligibilityTags: ['Youth', 'Job Seekers'],
  },
];
