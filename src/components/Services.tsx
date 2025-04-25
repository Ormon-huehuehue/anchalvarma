import React from 'react';
import { ChevronRight } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode; // Allows you to pass JSX as the icon
}

const serviceData: ServiceItem[] = [
  {
    title: "Bridal Makeup",
    description: "Look radiant on your special day with long-lasting, photo-ready makeup that enhances your natural beauty.",
    details: [
      "Consultation & trial session",
      "Day-of makeup application",
      "Touch-up kit",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M8 19h8a2 2 0 0 0 2-2v-7.93a2 2 0 0 0-.59-1.42L12 2.25l-5.41 5.4A2 2 0 0 0 6 9.07V17a2 2 0 0 0 2 2Z" />
        <path d="M12 2.25V22" />
      </svg>
    ),
  },
  {
    title: "Special Event Makeup",
    description: "Perfect for parties, galas, proms, and other special occasions. Look your best for any event.",
    details: [
      "Customized look",
      "Long-lasting application",
      "False lashes included",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    title: "Makeup Lessons",
    description: "Learn professional techniques to enhance your everyday makeup routine or master a specific look.",
    details: [
      "Personalized instruction",
      "Product recommendations",
      "Technique practice",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M2 12h5" />
        <path d="M17 12h5" />
        <path d="M12 2v5" />
        <path d="M12 17v5" />
        <path d="M12 2v20" />
        <path d="M12 2L2 12" />
        <path d="M12 22l10-10" />
        <path d="M12 2l10 10" />
        <path d="M12 22L2 12" />
      </svg>
    ),
  },
];

const ServiceCard: React.FC<ServiceItem> = ({ title, description, details, icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
      <div className="mb-4 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
      <ul className="mt-4 space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="mr-2 h-4 w-4 text-primary" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        {/* You can add pricing here if needed */}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional makeup services tailored to your unique style and occasion
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              details={service.details}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
