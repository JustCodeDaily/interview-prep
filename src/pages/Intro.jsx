import React from 'react';

function Intro() {
  return (
    <div className="prose prose-blue max-w-none">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Introduction</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Welcome to the interview prep repository! This section is designed to help you prepare for technical interviews.
      </p>
      <p className="text-gray-600">
        Select a question from the sidebar on the left to get started. Each question will have its own dedicated page with a problem statement and a solution area.
      </p>
    </div>
  );
}

export default Intro;

