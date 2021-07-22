import React from 'react';

const Header = () => {
  return (
    <nav className='space-x-10'>
      <ul className='flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
        <li>
          <a href='#projects' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
           Erfahrungen
          </a>
        </li>
        <li>
          <a href='#contact' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Kontakt
          </a>
        </li>
        <li>
          <a href='./images/icons/lebenslauf.pdf' target='_blank' rel='noreferrer' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Lebenslauf
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
