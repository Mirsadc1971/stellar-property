
import React from 'react';

export const Guidelines = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Construction Guidelines</h2>
      <div className="prose prose-sm max-w-none">
        <p className="text-red-600 font-medium">Important Notice:</p>
        <ul className="list-disc ml-5 space-y-2 text-gray-700">
          <li>No work involving structural changes, plumbing, electrical, flooring, drywall, unit exterior doors, windows, terrace doors, HVAC systems, or any permit-required work may proceed without prior Board approval and documentation.</li>
          <li>Work must comply with all House Rules.</li>
          <li>
            Work Hours:
            <ul className="list-disc ml-5 mt-2">
              <li>Monday–Friday: 8:00 AM – 5:00 PM</li>
              <li>Saturday: 8:00 AM – 1:00 PM (light work only – no substantial noise)</li>
              <li>Sunday: No construction allowed</li>
              <li>Exception: painting using tools already on site, allowed 8:00 AM – 1:00 PM</li>
            </ul>
          </li>
        </ul>
        
        <p className="font-medium mt-4 text-red-600">Violations and Penalties:</p>
        <ul className="list-disc ml-5 space-y-2 text-gray-700">
          <li>Unapproved construction will result in immediate work stoppage and project delays.</li>
          <li>Penalties for failing to report construction may be up to $1,000.</li>
          <li>Improper disposal of construction debris or unauthorized bulk waste pickup may result in a $1,000 fine plus cleanup charges.</li>
        </ul>
      </div>
    </div>
  );
};
