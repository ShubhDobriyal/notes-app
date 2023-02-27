import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { atomone } from "@uiw/codemirror-theme-atomone";
import { bbedit } from "@uiw/codemirror-theme-bbedit";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkCold,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

import { Setting } from "./../../assets/icons";

const Editor = () => {
  const [editorContent, setEditorContent] = useState(`# Hello, *world*!`);
  const [isEditorThemeDark, setEditorThemeDark] = useState(false);
  const [showSettings, setshowSettings] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const handleEditorContent = useCallback((value, viewUpdate) => {
    setEditorContent(value);
  }, []);

  const switchEditorTheme = () => {
    setEditorThemeDark((prev) => !prev);
  };

  const toggleSettings = () => {
    setshowSettings((prev) => !prev);
  };

  const togglePreview = () => {
    setShowPreview((prev) => !prev);
  };

  const editorTheme = isEditorThemeDark ? atomone : bbedit;

  return (
    <>
      <div className="editor flex h-100">
        <div className="editor-input flex-1 ">
          {/* <textarea
          name="editor"
          id="editor"
          autoFocus
          value={editorContent}
          onChange={handleEditorContent}
          placeholder="Let's rock with Markdown!"
          className="h-100"
        ></textarea> */}
          <CodeMirror
            value={editorContent}
            extensions={[
              markdown({ base: markdownLanguage, codeLanguages: languages }),
            ]}
            onChange={handleEditorContent}
            theme={editorTheme}
            height="100%"
            autoFocus={true}
            placeholder="Let's rock with Markdown!"
            basicSetup={{
              lineNumbers: false,
              foldGutter: false,
              highlightActiveLine: false,
              drawSelection: false,
            }}
          />
        </div>
        {showPreview && (
          <div className="editor-preview flex-1 p-1 ">
            <ReactMarkdown
              children={editorContent}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              remarkPlugins={[remarkGfm]}
              components={{
                code: MarkComponent,
              }}
            />
          </div>
        )}
      </div>
      <div className="settings flex gap-1 align-items-center">
        {showSettings && (
          <>
            <button className="editor-theme" onClick={switchEditorTheme}>
              Switch Editor Theme
            </button>
            <button className="editor-theme" onClick={togglePreview}>
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
          </>
        )}
        <p className="m-0">
          <Setting className="h-1 w-1" onClick={toggleSettings} />
        </p>
      </div>
    </>
  );
};

const MarkComponent = ({ node, inline, className, children, ...props }) => {
  return (
    <SyntaxHighlighter
      style={coldarkCold}
      wrapLongLines={true}
      language="markdown"
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default Editor;
