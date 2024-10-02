import { useState } from 'react'
import './App.css'
// import Tiptap from './tiptap'
import Header from './header'
// import PopoverDemo from './popover'
import Nav from './navi'
// import Post from './newPostElement'
import NewPost from './newPost'
import NewPostCheck from './newPostCheck'
import NewPostDesc from './newPostDesc'


const App = () => {

  return (
    <>
      <div className='flex flex-col gap-14 w-screen'>
        <div>
          <Header />
        </div>
        <div className='flex flex-row gap-56'>
          <div>
            <Nav />
          </div>
          <div className='w-full flex flex-col border p-2 mx-4'>
            <div className='flex flex-row gap-4'>
              <div>Logo</div>
              <div className='font-bold'>Post</div>
            </div>
            <div className='w-full flex flex-col gap-4 text-gray-500'>
              <div className='flex gap-4 font-bold text-black'>
                <div>Details</div>
                <div>AI Result</div>
              </div>
              <div className='flex gap-3 w-full'>
                <div className='w-2/3'>
                  Title
                  <div className='w-full border-orange-300 border rounded-md px-2'>
                    <NewPost />
                  </div>
                </div>
                <div className='w-1/3'>
                  Published URL
                  <div className='w-full border-orange-300 border rounded-md px-2'>
                    <NewPost />
                  </div>
                </div>
              </div>
              <div className='w-2/3'>
                Post Type
                <div className='w-full border-orange-300 border rounded-md px-2'>
                  <NewPost />
                </div>
              </div>
              <div className='flex gap-3 w-full'>
                <div className='w-1/3'>
                  Category
                  <div className='w-full border-orange-300 border rounded-md px-2'>
                    <NewPost />
                  </div>
                </div>
                <div className='w-1/3'>
                  Brand
                  <div className='w-full border-orange-300 border rounded-md px-2'>
                    <NewPost />
                  </div>
                </div>
                <div className='w-1/3'>
                  Route
                  <div className='w-full border-orange-300 border rounded-md px-2'>
                    <NewPost />
                  </div>
                </div>
              </div>
              <div className='flex gap-3 w-full'>
                <div className='w-1/3'>
                  Posting Date
                  <div className='w-full border-orange-300 border rounded-md px-2'>
                    <NewPost />
                  </div>
                  Asia/Jakarta
                </div>
                <div className='w-1/3'>
                  Author
                  <div className='w-full border-orange-300 border rounded-md px-2'>
                    <NewPost />
                  </div>
                  Status
                </div>
                <div className='w-1/3'>
                  <NewPostCheck />
                </div>
              </div>
              <div className='w-full h-fit'>
                Description
                <div className='w-full border-orange-300 border rounded-md px-2'>
                  <NewPostDesc />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
