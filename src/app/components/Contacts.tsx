import React from "react";
import { CONTACT_LIST } from "../shared/constants/Labels/Contact/Labels";
import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <div id="contact" className="container pt-20!  space-y-20">
      <div className="flex flex-col justify-center items-center space-y-3 text-center">
        <h3 className="page-header">Get In Touch</h3>

        <h1 className="text-4xl font-extrabold">Lets Work Together</h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl">
          Ready to streamline your business operations? Reach out and lets
          discuss how I can help you succeed.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          {CONTACT_LIST?.map((item, index) => (
            <ContactItem {...item} index={index} key={item.label} />
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

type ContactItemProps = {
  label: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  index: number;
};

const ContactItem = (props: ContactItemProps) => {
  const { label, value, icon: Icon, index } = props;

  return (
    <div className="border-2 border-slate-200 p-5 rounded-xl">
      <div className="flex space-x-5 items-start">
        <span
          className={`p-3 rounded-lg ${
            index === 0 ? "bg-blue-600" : "bg-pink-600"
          }`}
        >
          <Icon className="text-white" />
        </span>
        <div>
          <h3 className="text-2xl font-bold capitalize">{label}</h3>
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
