"use client";
import { useEffect, useMemo, useState } from "react";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Youtube from "@tiptap/extension-youtube";

import { useIndexedDb } from "ankh-hooks";
import { EAnkhUiSize, IAnkhUiIntrinsicProps } from "ankh-types";

import { Auth } from "@/auth/Auth";
import { AnkhUiButton } from "@/uis/button/AnkhUiButton";
import { AnkhUiButtonGroup } from "@/uis/button/AnkhUiButtonGroup";

import "./wysiwyg.css";

function AnkhUiWysiwygMenuBar({ editor }: IAnkhUiWysiwygMenuBar) {
  const [height, setHeight] = useState(480);
  const [width, setWidth] = useState(640);
  if (!editor) return;

  const $e = {
    handleImage: () => {
      const url = window.prompt('URL');
      if (url) editor.chain().focus().setImage({ src: url }).run();
    },
    handleYoutube: () => {
      const url = prompt('Enter YouTube URL')

      if (url) {
        editor.commands.setYoutubeVideo({
          src: url,
          height: Math.max(180, height) || 480,
          width: Math.max(320, width) || 640,
        })
      }
    }
  }

  const memoizedWysiwygMenuBar = useMemo(() => (
    <Auth.WriteRole>
      <div className="flex gap-2">
        <AnkhUiButtonGroup _ui={{ id: 'wysiwyg-btn-group-heading' }}>
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="heading-1" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="heading-2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="heading-3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="heading-4" onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="pilcrow" onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''} />
        </AnkhUiButtonGroup>
        <AnkhUiButtonGroup _ui={{ id: 'wysiwyg-btn-group-text-style' }}>
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="bold" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="italic" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="strikethrough" onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="highlighter" onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'is-active' : ''} />
        </AnkhUiButtonGroup>
        <AnkhUiButtonGroup _ui={{ id: 'wysiwyg-btn-group-text-align' }}>
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="align-left" onClick={() => editor.chain().focus().setTextAlign("left").run()} className={editor.isActive('left') ? 'is-active' : ''} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="align-center" onClick={() => editor.chain().focus().setTextAlign("center").run()} className={editor.isActive('center') ? 'is-active' : ''} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="align-right" onClick={() => editor.chain().focus().setTextAlign("right").run()} className={editor.isActive('right') ? 'is-active' : ''} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="align-justify" onClick={() => editor.chain().focus().setTextAlign("justify").run()} className={editor.isActive('justify') ? 'is-active' : ''} />
        </AnkhUiButtonGroup>
        <AnkhUiButtonGroup _ui={{ id: 'wysiwyg-btn-group-media' }}>
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="image" onClick={$e.handleImage} />
          <AnkhUiButton size={EAnkhUiSize.Xs} icon="youtube" onClick={$e.handleYoutube} />
        </AnkhUiButtonGroup>
      </div>
    </Auth.WriteRole >
  ), []);

  return memoizedWysiwygMenuBar;
};

export function AnkhUiWysiwyg({ _ui: { id } }: IAnkhUiWysiwyg) {
  const { db, api } = useIndexedDb<IAnkhUiWysiwygConfig>({ dbName: 'ankh-cms', storeName: 'ui-config' });
  const $e = {
    save: () => {
      const html = editor?.getHTML();
      if (typeof html !== 'string') return;
      api.put({ id, html });
    }
  };

  useEffect(() => {
    if (!db) return;

    const content = `
      <h1>Wysiwyg Editor</h1>
      <h2>Headings</h2>
      <p>Support of 4 heading levels</p>
      <h2>Text Style</h2>
      <p>Support of <strong>Bold text</strong>, <em>italic text</em>, <s>strike-through text</s>, <mark>highlighted text</mark></p>
      <h2>Text Alignment</h2>
      <p style='text-align:left'>Left</p>
      <p style='text-align:center'>Center</p>
      <p style='text-align:right'>Right</p>
      <p style='text-align:justify'>Justify. And here another text, very long to visualize the meaning of justified text in a paragraph. I really don't know what I should write so I'm just typing and typing and hopefully this is enough now.</p>
      <h2>Images</h2>
      <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
    `;

    const loadConfig = async () => {
      const defaultConfig = { id, html: content };

      const storedConfig = await api.get(id);
      if (!storedConfig) await api.add(defaultConfig);

      const config = storedConfig || defaultConfig;
      editor?.chain().setContent(config.html).run();
    };
    loadConfig();
  }, [db]);

  const extensions = [
    Document,
    Highlight,
    Image,
    StarterKit,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Typography,
    Youtube
  ];

  const editor = useEditor({
    onUpdate: $e.save,
    extensions,
  });

  if (!editor) return;

  return (
    <Auth.ReadRole>
      <AnkhUiWysiwygMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </Auth.ReadRole>
  );
};

interface IAnkhUiWysiwygMenuBar {
  readonly editor: Editor;
}
interface IAnkhUiWysiwyg extends IAnkhUiIntrinsicProps { }
interface IAnkhUiWysiwygConfig {
  readonly id: number | string;
}