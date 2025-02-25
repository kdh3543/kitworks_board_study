import React from "react";
import { type Editor } from "@tiptap/react";
import { Button } from "./ui/button";

type Props = {
  editor: Editor | null;
};

export default function Toolbar({ editor }: Props) {
  if (!editor) return null;

  // const addImage = useCallback(() => {
  //   const url = window.prompt("URL");
  //   if (url) {
  //     editor?.chain().focus().setImage({ src: url }).run();
  //   }
  // }, [editor]);
  return (
    <div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`dark:bg-white bg-red-400 dark:active:text-black tiptap-btn ${
            editor.isActive("heading", { level: 1 })
              ? "h-active dark:!bg-[#8a2be2]"
              : "h-stop"
          }
            `}
        >
          H1
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`dark:bg-white tiptap-btn ${
            editor.isActive("heading", { level: 2 })
              ? "h-active dark:!bg-[#8a2be2] "
              : "h-stop"
          }
            `}
        >
          H2
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`dark:bg-white tiptap-btn ${
            editor.isActive("heading", { level: 3 })
              ? "h-active dark:bg-[#8a2be2]!"
              : "h-stop"
          }
            `}
        >
          H3
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`dark:bg-white tiptap-btn ${
            editor.isActive("bold")
              ? "h-active dark:bg-[#8a2be2]!"
              : "text-black"
          }
            `}
        >
          B
        </Button>
        <input
          type="color"
          onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
            editor
              .chain()
              .focus()
              .setColor(event?.target?.value || "")
              .run()
          }
          value={editor.getAttributes("textStyle").color || "#000000"}
          data-testid="setColor"
          className="dark:bg-white w-[30px] h-[30px] cursor-pointer"
        />
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`dark:bg-white tiptap-btn ${
            editor.isActive("bulletList")
              ? "h-active dark:bg-[#8a2be2]!"
              : "text-black"
          }
            `}
        >
          Bullet
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`dark:bg-white tiptap-btn ${
            editor.isActive("orderedList")
              ? "h-active dark:!bg-[#8a2be2]"
              : "text-black"
          }
            `}
        >
          Order
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`dark:bg-white tiptap-btn ${
            editor.isActive("codeBlock")
              ? "h-active dark:bg-[#8a2be2]!"
              : "text-black"
          }
            `}
        >
          Code
        </Button>
      </div>
    </div>
  );
}
