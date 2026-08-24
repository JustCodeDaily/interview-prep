import React from 'react';

function JosephProblem() {
  return (
    <div className="prose prose-blue max-w-none dark:prose-invert">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">2. Joseph Problem</h1>
      
      <div id="problem" className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8 scroll-mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Problem Statement</h3>
        <p className="text-gray-700 dark:text-gray-300">
          There are <code>n</code> people standing in a circle waiting to be executed. The counting out begins at some point in the circle and proceeds around the circle in a fixed direction. In each step, a certain number of people are skipped and the next person is executed. 
        </p>
      </div>

      <div id="solution" className="scroll-mt-8">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Solution</h3>
        <p className="text-gray-600 dark:text-gray-400 italic">Your solution component will go here...</p>
      </div>
    </div>
  );
}

export default JosephProblem;
