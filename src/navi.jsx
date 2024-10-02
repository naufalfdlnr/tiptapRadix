import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';

const Nav = () => {

  return (
    <Menubar.Root className="w-fit h-screen fixed left-0 flex bg-orange-400 p-[3px] rounded-md flex-col text-white z-1">
        <Menubar.Menu>
          <Menubar.Trigger className='bg-orange-400 border-none'>
            <div className='gap-6 flex'>
                <div>LOGO</div>
                <div>Suara Pembaca</div>
            </div>
          </Menubar.Trigger>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className='bg-orange-400 border-none'>
            <div className='gap-6 flex'>
                <div>LOGO</div>
                <div>Tanggapan</div>
            </div>
          </Menubar.Trigger>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className='bg-orange-400 border-none'>
            <div className='gap-6 flex'>
                <div>LOGO</div>
                <div>Klaim Brand</div>
            </div>
          </Menubar.Trigger>
        </Menubar.Menu>

    </Menubar.Root>
  );
};

export default Nav;