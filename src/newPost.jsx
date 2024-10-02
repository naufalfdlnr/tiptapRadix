import React, { useState, useEffect, useRef } from 'react';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';    
import { FontBoldIcon, FontItalicIcon, StrikethroughIcon, HeadingIcon, PilcrowIcon, TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon, TextAlignJustifyIcon } from '@radix-ui/react-icons';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="control-group fixed bottom-0">
      <div className="button-group">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
          <FontBoldIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
          <FontItalicIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
          <StrikethroughIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'is-active' : ''}>
          <HeadingIcon /> {/* Change this to a highlight icon if needed */}
        </button>
        <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>
          <PilcrowIcon />
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive('textAlign', 'left') ? 'is-active' : ''}>
          <TextAlignLeftIcon />
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive('textAlign', 'center') ? 'is-active' : ''}>
          <TextAlignCenterIcon />
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive('textAlign', 'right') ? 'is-active' : ''}>
          <TextAlignRightIcon />
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive('textAlign', 'justify') ? 'is-active' : ''}>
          <TextAlignJustifyIcon />
        </button>
      </div>
    </div>
  );
};

const NewPost = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const contentRef = useRef(null);
  const menuRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
    ],
    content: `
      <p> 
        <p>Title</p>
        <br/>
        <p>Published URL</p>
        <br/>
        <p>Category</p>
        <br/>
        <p>Brand</p>
        <br/>
      </p>
    `,
  });

  const handleContentClick = () => {
    setMenuVisible(true);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) && 
      contentRef.current && !contentRef.current.contains(event.target)
    ) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <> 
        <div id='menu' ref={menuRef} style={{ display: menuVisible ? 'block' : 'none' }} className='z-20 fixed bottom-0 left-1/4'>
            <MenuBar editor={editor}/>
        </div>
        <div id='content' ref={contentRef} onClick={handleContentClick} className='w-full h-full'>
            <EditorContent editor={editor} className='w-full h-full' />
        </div>
    </>
  );
};

export default NewPost;