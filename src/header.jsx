import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { HamburgerMenuIcon, MagnifyingGlassIcon, BellIcon, CaretDownIcon } from '@radix-ui/react-icons'

const Header = () => {

  return (
    <Menubar.Root className="w-full fixed top-0 left-0 flex bg-white p-[3px] rounded-md	justify-between z-10">
      <div className='flex justify-between gap-10'>
        <Menubar.Menu>
          <Menubar.Trigger>
            <HamburgerMenuIcon />
          </Menubar.Trigger>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>
            LOGO
          </Menubar.Trigger>
        </Menubar.Menu>
      </div>

      <div className='flex justify-between gap-6'>
        <Menubar.Menu>
          <div className='flex items-center border-orange-300 border rounded-md w-fit'>
            <MagnifyingGlassIcon className='size-6 mx-1.5'/>
              <input type="text" placeholder='Search or type a command' className='w-56 mr-2 outline-none'/>
          </div>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className='border rounded-full'>
            <BellIcon />
          </Menubar.Trigger>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className='flex items-center gap-2 px-2'>
            <div>
              Help
            </div>
            <div>
              <CaretDownIcon />
            </div>
          </Menubar.Trigger>
        </Menubar.Menu>

        <Menubar.Menu >
          <Menubar.Trigger className='border rounded-full'>
            P
          </Menubar.Trigger>
        </Menubar.Menu>
      </div>
    </Menubar.Root>
  );
};

export default Header;
