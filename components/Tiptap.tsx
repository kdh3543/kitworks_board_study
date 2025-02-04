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
import Placeholder from "@tiptap/extension-placeholder";

export default function Tiptap() {
  const [text, setText] = useState("");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Color,
      TextStyle,
      CodeBlockLowlight.configure({
        lowlight: createLowlight(all),
      }),
      Placeholder.configure({
        placeholder: "내용을 입력하세요.",
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
