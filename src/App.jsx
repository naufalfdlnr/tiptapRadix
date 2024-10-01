import { useState } from 'react'
import './App.css'
import Tiptap from './Tiptap'
import PopoverDemo from './popover'

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
      <div className='font-thin'>HEADDDD</div>
      <div>
        <h1>Tiptap Form</h1>
        <form onSubmit={handleSubmit}>
          <Tiptap content={content} onUpdate={setFormData} />
          <button type="submit">Submit</button>
        </form>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: formData }} />
      </div>
      {/* <div>
        <PopoverDemo />
      </div> */}
    </>
  )
}

export default App
