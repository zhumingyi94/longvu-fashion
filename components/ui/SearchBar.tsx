import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div 
      className="flex items-center bg-white rounded-full shadow-lg"
      style={{
        width: '1014px',
        height: '43px',
        padding: '9.264px 0px 8.003px 18.529px',
        gap: '12.35px',
        borderRadius: '51.466px',
        boxShadow: '-7.841px 5.227px 4.117px 0px rgba(0, 0, 0, 0.25)'
      }}
    >
       <Search size={20} className="text-black min-w-[20px]" />
      <input
        type="text"
        placeholder="Find your favorite clothes"
        className="bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-sm ml-3"
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          width: 'calc(100% - 40px)', // Subtracting the width of the icon and some padding
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none'
        }}
      />
      <style jsx>{`
        input:focus {
          outline: none !important;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;

