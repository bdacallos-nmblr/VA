import React from "react";
import {
  SERVICES_LABELS,
  SERVICES_LIST,
} from "../shared/constants/Labels/Services/Labels";

const Services = () => {
  return (
    <div id="offer" className="container pt-20! space-y-16">
      <div className="flex flex-col justify-center items-center space-y-3 text-center">
        <h3 className="page-header">What I Offer</h3>
        <h1 className="text-4xl font-extrabold">{SERVICES_LABELS.header}</h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl">
          {SERVICES_LABELS.subHeader}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SERVICES_LIST?.map((service) => (
          <ServiceItem {...service} key={service.title} />
        ))}
      </div>
    </div>
  );
};

type Props = {
  title: string;
  description: string;
  color: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ServiceItem = (item: Props) => {
  const { icon: Icon, title, description, color } = item;

  return (
    <div className="rounded-xl p-5 border-2 border-slate-300 space-y-5">
      <div className="w-10 bg-blue-50 p-2 rounded-lg">
        <Icon className={`${color}`} />
      </div>
      <div className="text-2xl font-bold">{title}</div>
      <p>{description}</p>
    </div>
  );
};

export default Services;
