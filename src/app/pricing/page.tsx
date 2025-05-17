import React from 'react';
import Link from 'next/link';

const PricingPage = () => {
  const packages = [
    {
      id: 'basic-web',
      name: 'Core Website',
      price: 500,
      features: [
        'Custom design (limited scope)',
        'Up to 5 pages',
        'Deployment & hosting setup',
        '3rd party links',
        'Responsive/mobile-first',
        'Basic SEO',
        'Contact form',
        '1 revision round'
      ],
      assumptions: 'Custom design based on pre-defined framework or limited concepts. Strict adherence to 5-page limit. Hosting costs are client\'s responsibility post-setup. Content provided by client.',
      upgrades: [
        {
          name: 'Starter E-commerce',
          price: 1000,
          features: ['Basic cart', 'Up to 20-50 products', '1 payment gateway (Stripe/PayPal)', 'Simple inventory'],
          notes: 'Assumes plugin/platform integration.'
        },
        {
          name: 'Advanced E-commerce',
          price: 2000,
          features: ['Larger catalog', 'Customer accounts', 'Multiple gateways', 'Shipping integration', 'Discounts'],
          notes: 'Custom quote often needed.'
        },
        {
          name: 'Simple API Integration',
          price: 500,
          features: ['Widget embed', '1-way data sync', 'Basic form integration'],
          notes: 'For well-documented, standard APIs.'
        },
        {
          name: 'Complex API Integration',
          price: 2000,
          features: ['Custom workflow', '2-way sync', 'Proprietary API'],
          notes: 'Requires discovery.'
        },
        {
          name: 'Basic Backend',
          price: 1000,
          features: ['Simple CMS for sections', 'Basic DB for dynamic content', 'Form-to-DB'],
          notes: 'Fixed add-on.'
        },
        {
          name: 'Advanced Backend',
          price: 3000,
          features: ['Custom admin panel', 'Complex data operations'],
          notes: 'Scope dependent.'
        },
        {
          name: 'Standard User Accounts & Profiles',
          price: 500,
          features: ['Registration', 'Login', 'Password recovery', 'Basic profiles'],
          notes: 'Fixed add-on.'
        },
        {
          name: 'Standard CMS Integration',
          price: 1000,
          features: ['Integration of common CMS (e.g., WordPress, Strapi) with existing design', 'Basic training'],
          notes: 'Client manages CMS content.'
        }
      ]
    },
    {
      id: 'basic-mobile',
      name: 'Core Mobile App',
      price: 1000,
      features: [
        'Custom design (limited scope)',
        'iOS & Android compatible (cross-platform)',
        'Up to 5 screens/features',
        'Deployment assistance',
        'Basic user authentication (if needed)',
        '1 revision round'
      ],
      assumptions: 'Custom design using component-based approach. Cross-platform framework (e.g., React Native, Flutter). App store developer account fees are client\'s responsibility. Backend/API development beyond basic authentication is extra. Content provided by client.',
      upgrades: [
        {
          name: 'Starter In-App E-commerce',
          price: 1000,
          features: ['Basic product list', 'Simple cart', '1 payment gateway SDK'],
          notes: 'Fixed add-on.'
        },
        {
          name: 'Advanced In-App E-commerce',
          price: 3000,
          features: ['Larger catalog', 'Search/filter', 'Customer accounts', 'Order history'],
          notes: 'Custom quote often needed.'
        },
        {
          name: 'Simple API Integration',
          price: 750,
          features: ['Social login', 'Basic analytics SDK', 'Simple map embed'],
          notes: 'Per integration.'
        },
        {
          name: 'Complex API Integration',
          price: 2500,
          features: ['2-way sync', 'Enterprise system integration'],
          notes: 'Requires discovery.'
        },
        {
          name: 'Advanced Push Notifications',
          price: 500,
          features: ['Segmentation', 'Scheduled', 'Rich media', 'A/B testing integration'],
          notes: 'Platform subscription costs may apply.'
        },
        {
          name: 'Advanced Analytics',
          price: 750,
          features: ['Advanced SDK integration (Mixpanel, etc.)', 'Custom event tracking'],
          notes: 'Platform subscription costs may apply.'
        },
        {
          name: 'Basic Offline Storage',
          price: 1000,
          features: ['Offline access to specific app data/features', 'Basic sync'],
          notes: 'Platform subscription costs may apply.'
        },
        {
          name: 'Multilingual',
          price: 500,
          features: ['App interface localization'],
          notes: 'Content translation separate.'
        },
        {
          name: 'In-App Chatbot',
          price: 2000,
          features: ['Integration of conversational AI for support/guidance'],
          notes: 'Sophistication dependent.'
        }
      ]
    },
    {
      id: 'basic-ai-agent',
      name: 'Core AI Phone Agent',
      price: 1000,
      features: [
        'Scheduling',
        'Ordering (simple)',
        'Company info (FAQ)',
        'One basic 3rd party integration',
        'Standard voice',
        'Rule-based/keyword conversational flow'
      ],
      assumptions: 'AI is rule-based/keyword-driven, not advanced NLP/ML. One integration limited to pre-approved, simple APIs (e.g., standard calendar). Phone number and any associated telephony costs are client\'s responsibility. Limited to a defined number of conversational intents.',
      upgrades: [
        {
          name: 'Multi-Location Support',
          price: 500,
          features: ['Logic for location-specific info/routing'],
          notes: 'Complexity dependent.'
        },
        {
          name: 'Expanded Integration',
          price: 1500,
          features: ['Integration with additional CRM', 'Advanced scheduling', 'Inventory etc.'],
          notes: 'For moderately complex APIs.'
        },
        {
          name: 'NLP Enhancement',
          price: 2000,
          features: ['Improved intent recognition', 'Contextual understanding'],
          notes: 'Fixed add-on.'
        },
        {
          name: 'Sentiment Analysis',
          price: 1000,
          features: ['Basic sentiment detection (positive, negative, neutral)'],
          notes: 'Fixed add-on.'
        },
        {
          name: 'Omni-Channel Capability',
          price: 1500,
          features: ['Extension to SMS', 'Web chat', 'etc.'],
          notes: 'Per additional channel.'
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">{pkg.name}</h2>
            <p className="text-2xl font-bold mb-4">${pkg.price}</p>
            <ul className="mb-4">
              {pkg.features.map((feature, i) => (
                <li key={i} className="mb-2">{feature}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mb-4">{pkg.assumptions}</p>
            <Link 
              href={`/payment?package=${pkg.id}`} 
              className="block text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center mt-12 mb-8">Upgrades</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4">{pkg.name} Upgrades</h3>
            <div className="space-y-4">
              {pkg.upgrades.map((upgrade, i) => (
                <div key={i} className="border-t pt-4">
                  <h4 className="font-semibold">{upgrade.name}</h4>
                  <p className="text-lg font-bold">${upgrade.price}</p>
                  <ul className="text-sm mb-2">
                    {upgrade.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-600">{upgrade.notes}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage; 