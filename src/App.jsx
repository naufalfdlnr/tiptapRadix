import { useState } from 'react'
import './App.css'
import Tiptap from './tiptap'
import Header from './header'
import PopoverDemo from './popover'
import Nav from './Nav'


const App = () => {
  const [content, setContent] = useState('<p>Type your content here...</p>');
  const [formData, setFormData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Content:', formData);
    // Here you can also send formData to your backend
  };

  return (
    <>
      <div className='flex flex-col gap-14'>
        <div>
          <Header />
        </div>
        <div className='flex flex-row gap-60'>
          <div>
            <Nav />
          </div>
          <div className='w-fit flex flex-col border p-2'>
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
