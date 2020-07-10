import React from "react";
import hljs from "highlight.js";
import ReactQuill, { Quill } from "react-quill";

import $ from "jquery";
import "react-quill/dist/quill.snow.css";
import "./editor.css";
let BlockEmbed = Quill.import("blots/block/embed");
let Inline = Quill.import("blots/inline");
hljs.configure({
  languages: ["javascript", "python", "html", "css"],
});

const CustomButton = () => (
  <img
    style={{ width: "20px" }}
    src="https://www.svgrepo.com/show/77584/image.svg"
    alt=""
  />
);

const CodeLine = () => (
  <img
    style={{ width: "20px" }}
    src="https://www.svgrepo.com/show/294145/code.svg"
    alt=""
  />
);

const Size = Quill.import("formats/size");
Size.whitelist = [
  "1",
  "2",
  "4",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "20",
  "24",
  "26",
  "30",
];
Quill.register(Size, true);

class inlineCodeBlot extends Inline {}
inlineCodeBlot.blotName = "inlineCode";
inlineCodeBlot.tagName = "code";

class ImageBlot extends BlockEmbed {
  static create(value) {
    let node = super.create();
    node.setAttribute("alt", value.alt);
    node.setAttribute("src", value.url);
    node.setAttribute("class", value.class);
    console.log(node);
    return node;
  }

  static value(node) {
    return {
      alt: node.getAttribute("alt"),
      url: node.getAttribute("src"),
      class: node.getAttribute("class"),
    };
  }
}
ImageBlot.blotName = "image";
ImageBlot.tagName = "img";
Quill.register(ImageBlot);
Quill.register(inlineCodeBlot);

function insertImage() {
  let url = prompt("Enter link URL");
  let alt = prompt("Enter link alt");
  let clas = prompt("Enter class Name");
  let range = this.quill.getSelection(true);
  console.log(Quill.sources);
  this.quill.insertText(range.index, "\n", Quill.sources.USER);
  this.quill.insertEmbed(
    range.index + 1,
    "image",
    {
      alt: alt,
      url: url,
      class: clas,
    },
    Quill.sources.USER
  );
  this.quill.setSelection(range.index + 2, Quill.sources.SILENT);
}

function insertInlineCode(e) {
  e.preventDefault();
  // console.log(this.quill);
  // this.quill.format("inlineCode", true);
  console.log("inline code ins");
}

const CustomToolbar = () => (
  <div id="toolbar">
    <select
      className="ql-header"
      defaultValue={""}
      onChange={(e) => e.persist()}
    >
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      <option value="4"></option>
      <option value="5"></option>
      <option value="6"></option>
      <option selected></option>
    </select>

    <select class="ql-font">
      <option value="serif"></option>
      <option selected></option>
      <option value="monospace"></option>
    </select>

    <select className="ql-size">
      <option value="1">1</option>
      <option selected value="2">
        2
      </option>
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="8">8</option>
      <option value="10">10</option>
      <option value="12">12</option>
      <option value="14">14</option>
      <option value="16">16</option>
      <option value="20">20</option>
      <option value="24">24</option>
      <option value="26">26</option>
      <option value="30">30</option>
    </select>

    <select class="ql-align">
      <option value="center"></option>
      <option selected></option>
      <option value="right"></option>
      <option value="justify"></option>
    </select>

    <select className="ql-background">
      <option value="red"></option>
      <option value="green"></option>
      <option value="#4F69F8"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option selected></option>
    </select>

    <select className="ql-color">
      <option value="#DA0F47"></option>
      <option value="#4DCE1D"></option>
      <option value="#4F69F8"></option>
      <option value="orange"></option>
      <option value="#9933ff"></option>
      <option value="#d0d1d2"></option>
      <option selected></option>
    </select>

    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <button className="ql-blockquote"></button>
    <button className="ql-direction"></button>
    <button className="ql-link"></button>
    <button className="ql-image"></button>
    <button className="ql-video"></button>
    <button value="ordered" className="ql-list"></button>
    <button value="bullet" className="ql-list"></button>
    <button value="-1" className="ql-indent"></button>
    <button value="+1" className="ql-indent"></button>
    <button className="ql-code-block"></button>

    <button className="ql-insertImage">
      <CustomButton />
    </button>
  </div>
);

/*
 * Editor component with custom toolbar and content containers
 */

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: this.props.defaultValue };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
    this.props.handleEditor(html);
  }

  render() {
    // console.log(this.state.editorHtml);

    console.log(this.props.defaultValue);
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          onChange={this.handleChange}
          modules={Editor.modules}
          value={this.state.editorHtml || ""}
        />
      </div>
    );
  }
}

Editor.modules = {
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
  toolbar: {
    container: "#toolbar",

    handlers: {
      insertImage: insertImage,
      insertInlineCode: insertInlineCode,
    },
  },
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

/*
 * PropType validation
 */

export default Editor;

// // // -----------------------
