import './assets/tiptap.css'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Youtube from '@tiptap/extension-youtube'
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/react'
import React from 'react'

export default ({ content, onUpdate }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  return (
    <EditorContent editor={editor} />
  );
};