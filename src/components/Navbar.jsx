import React from 'react';

const Navbar = () => {
  return (
    <body className="bg-orange-500 font-poppins items-center justify-center">
      <nav className="fixed top-28 left-6 w-16 py-24 bg-white bg-opacity-80 flex flex-col items-center z-50 rounded-xl shadow-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
        {/* Add logo or brand icon here */}

        <ul className="flex flex-col items-center flex-grow justify-center space-y-6">
          <li>
            <a className="hover:text-orange-500" href="#Intro" title="Intro">
              <svg className='w-6 h-6 fill-gray-700 hover:fill-orange-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/>
              </svg>
            </a>
          </li>
          <li>
            <a className="hover:text-orange-500" href="#about" title="About Me">
              <svg className='w-6 h-6 fill-gray-700 hover:fill-orange-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
              </svg>
            </a>
          </li>
          <li>
            <a className="hover:text-orange-500" href="#experience" title="Experience">
              <svg className='w-6 h-6 fill-gray-700 hover:fill-orange-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/>
              </svg>
            </a>
          </li>
          <li>
            <a className=" hover:text-orange-500" href="#projects" title="Projects">
			<svg className='w-6 l-6 fill-gray-700 hover:fill-orange-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z"/>              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3H3v4H1v14h20V7h-2V3h-4v2H6V3zM3 19v-9h4v4h6v-4h4v9H3z" />
              </svg>
            </a>
          </li>
          <li>
            <a className=" hover:text-orange-500" href="#achievements" title="Achievements">
              <svg className='w-6 h-6 fill-gray-700 hover:fill-orange-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M512 0c-8.4 0-15.6 5.4-18.1 12.8L324.8 312c-3.8 7.9-12.1 12.8-20.8 12.8h-48c-8.7 0-17.1-4.8-20.8-12.8L82.1 12.8C79.6 5.4 72.4 0 64 0c-16.1 0-32.4 12.1-32.4 32v448c0 19.2 15.6 34.8 34.8 34.8l72.5 0 0-128 35.2 0 0 64c0 15.2 12.4 27.6 27.6 27.6h128c15.2 0 27.6-12.4 27.6-27.6l0-64 35.2 0 0 128 72.5 0c19.2 0 34.8-15.6 34.8-34.8V32c0-19.6-16.3-32-32.4-32z"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </body>
  );
};

export default Navbar;
