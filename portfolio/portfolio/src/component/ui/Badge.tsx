import React from "react";

const Badge = ({ label, icon }: { label: string; icon: React.ReactElement | string }) => {
  return (
    <div
      id={label}
      className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium shadow-sm hover:shadow-md transition-all duration-300"
    >
      {icon && <span className="text-blue-600 text-base">{icon}</span>}
      <span>{label}</span>
    </div>
  );
};

export default Badge;
