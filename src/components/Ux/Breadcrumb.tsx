// components/Breadcrumb.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { BreadcrumbProps } from '../../data/banner';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items, 
  separator = "/" 
}) => {
  return (
    <nav className="flex items-center space-x-2 text-sm md:text-base">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.path ? (
            <Link
              to={item.path}
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-semibold">{item.label}</span>
          )}
          
          {index < items.length - 1 && (
            <span className="mx-2 text-white opacity-80">{separator}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;