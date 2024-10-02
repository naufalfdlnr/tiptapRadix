import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const NewPosCheck = () => (
    <div className='flex gap-3 flex-col'>
        <div className='flex gap-5'>
            <form>
                <div className="flex items-center">
                <Checkbox.Root
                    className="border border-orange-300 flex h-1 w-px  items-center justify-center rounded-[5px] bg-white "
                    defaultunchecked
                    id="c1"
                >
                    <Checkbox.Indicator className="text-violet11 flex ">
                    <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                </div>
            </form>
            <div>Disabled Comment</div>
        </ div>
        <div className='flex gap-5'>
            <form>
                <div className="flex items-center">
                <Checkbox.Root
                    className="border border-orange-300 flex h-1 w-px  items-center justify-center rounded-[5px] bg-white "
                    defaultunchecked
                    id="c2"
                >
                    <Checkbox.Indicator className="text-violet11 flex ">
                    <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                </div>
            </form>
            <div>Featured</div>
        </ div>
        <div className='flex gap-5'>
            <form>
                <div className="flex items-center">
                <Checkbox.Root
                    className="border border-orange-300 flex h-1 w-px  items-center justify-center rounded-[5px] bg-white "
                    defaultunchecked
                    id="c3"
                >
                    <Checkbox.Indicator className="text-violet11 flex ">
                    <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                </div>
            </form>
            <div>Disabled Like</div>
        </div>
    </div>
);

export default NewPosCheck;
