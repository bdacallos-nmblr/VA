import React from "react";

const About = () => {
  return (
    <div id="about" className="container pt-20!">
      <div className="space-y-5">
        <h3 className="page-header w-28 text-center">About Me</h3>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Tech Virtual Assistant
        </h2>
        <div>
          <p className="text-lg text-gray-600 mb-3 leading-relaxed">
            I’m{" "}
            <span className="text-blue-600 font-bold text-xl">
              Brian Dacallos,{" "}
            </span>
            a Philippines-based software developer and Tech Virtual Assistant
            with 3+ years of experience and over 30 completed projects. While
            I’m newer to the VA role, my professional background aligns closely
            with the responsibilities of a Tech VA managing systems, handling
            technical tasks, following processes, and supporting daily
            operations with precision and reliability. I’m detail-oriented,
            adaptable, and committed to delivering consistent, high-quality
            support.
          </p>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            My mission is to empower entrepreneurs and businesses to focus on
            what they do best while I handle the technical details and
            administrative tasks that keep everything running smoothly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
