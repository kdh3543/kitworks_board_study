import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Markdown } from 'tiptap-markdown';
import Toolbar from './Toolbar';
import { Heading } from '@tiptap/extension-heading';

export default function Tiptap() {
  const [text, setText] = useState('Hello wold');
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Markdown,
      Heading.configure({
        HTMLAttributes: {
          class: 'text-xl font-bold',
          levels: [2],
        },
      }),
    ],
    content: text,
    onUpdate({ editor }) {
      setText(editor.getHTML());
    },
  });
  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}
