import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div 
      className="bg-white flex items-center rounded-full shadow-lg w-full"
      style={{
        height: '43px',
        padding: '9px 20px',
        gap: '12px',
        backgroundColor: 'white',
        borderRadius: '51.466px',
        boxShadow: '-7.841px 5.227px 4.117px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Search size={20} className="text-black flex-shrink-0" />
      <input
        type="text"
        placeholder="Find your favorite clothes"
        className="outline-none focus:outline-none focus:ring-0 border-none text-sm w-full"
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
          background: 'transparent',
          backgroundColor: 'transparent'
        }}
      />
      <style jsx>{`
        input {
          background-color: transparent !important;
        }
        input:focus {
          outline: none !important;
          box-shadow: none !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
          background-color: transparent !important;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;