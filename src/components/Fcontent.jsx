import React from "react";

function Fcontent({ head, l1, l2, l3, l4, l5 }) {
  return (
    <div>
      <h6 className="font-medium text-gray-400">{head}</h6>
      <ul>
        <li className="py-2 text-sm">{l1}</li>
        <li className="py-2 text-sm">{l2}</li>
        <li className="py-2 text-sm">{l3}</li>
        <li className="py-2 text-sm">{l4}</li>
        <li className="py-2 text-sm">{l5}</li>
      </ul>
    </div>
  );
}

export default Fcontent;
