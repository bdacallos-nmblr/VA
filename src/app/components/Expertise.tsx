import React from "react";
import {
  EXPERTISE_LABELS,
  EXPERTISE_LIST,
} from "../shared/constants/Labels/Experties/Expertise";

const Expertise = () => {
  return (
    <div id="expertise" className="container pt-20! bg-blue-50 space-y-16">
      <div className="flex flex-col justify-center items-center space-y-3 text-center">
        <h3 className="page-header">Expertise</h3>
        <h1 className="text-4xl font-extrabold">{EXPERTISE_LABELS.header}</h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl">
          {EXPERTISE_LABELS.subHeader}
        </p>
      </div>
      <div className="space-y-10">
        {EXPERTISE_LIST?.map((item) => (
          <ExpertiseList {...item} key={item.category} />
        ))}
      </div>
    </div>
  );
};

const ExpertiseList = (props) => {
  const { category, color, skills } = props;

  return (
    <div className="bg-white p-10 rounded-xl">
      <div
        className={`inline-block px-4 py-2 bg-blue-600 text-white rounded-lg mb-6 font-semibold`}
      >
        {category}
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            className="px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg font-semibold hover:border-blue-400 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
