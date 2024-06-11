import React from 'react';

function Rules() {
  return (
    <div className="flex justify-center items-center shadow-md mt-9">
      <div className="w-full max-w-screen-lg p-4">
        <iframe
          src="/rules.pdf"
          className="w-full h-96 md:h-[600px] border"
          title="Rules"
        ></iframe>
      </div>
    </div>
  );
}

export default Rules;
