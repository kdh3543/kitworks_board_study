import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import "./tiptap.css";
import Image from "@tiptap/extension-image";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

export default function Tiptap() {
  const [text, setText] = useState("Hello wold");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Color,
      TextStyle,
      CodeBlockLowlight.configure({
        lowlight: createLowlight(all),
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
