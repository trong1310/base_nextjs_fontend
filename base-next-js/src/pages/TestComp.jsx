import { BoldButtonBar, BoldPlugin } from "@slate-editor/bold-plugin";
import { SlateContent, SlateEditor, SlateToolbar } from "slate-editor";

import React from "react";

const plugins = [BoldPlugin()];

const SlateRichTextEditor = () => (
  <SlateEditor plugins={plugins}>
    <SlateToolbar>
      <BoldButtonBar />
    </SlateToolbar>

    <SlateContent />
  </SlateEditor>
  // <div>hey</div>
);

export default SlateRichTextEditor;
