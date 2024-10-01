import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';

const Header = () => {

  return (
    <Menubar.Root className="w-full fixed top-0 left-0 flex bg-white p-[3px] rounded-md	justify-between z-10">
      <div className='flex justify-between gap-10'>
        <Menubar.Menu>
          <Menubar.Trigger>
            Menu
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
          <Menubar.Trigger>
            search
          </Menubar.Trigger>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>
            Notif
          </Menubar.Trigger>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>
            Help
          </Menubar.Trigger>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>
            Profiles
          </Menubar.Trigger>
        </Menubar.Menu>
      </div>
    </Menubar.Root>
  );
};

export default Header;
