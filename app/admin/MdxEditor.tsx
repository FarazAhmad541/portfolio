"use client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import ArticleForm from "./ArticleForm";

import * as commands from "@uiw/react-md-editor/commands";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
export default function MdxEditor() {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-4xl">
      <MDEditor value={value} onChange={setValue} />

      <ArticleForm />
    </div>
  );
}
