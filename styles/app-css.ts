
// This CSS is composed of Prism.css and a small amount of Obsidian CSS,
// which is copyrighted by the Obsidian developers.
// I've received permission from @Licat on Discord to include this snippet in the plugin
// and HTML exports from it.
// See https://discord.com/channels/686053708261228577/707816848615407697/830630553883377690

export function variables (light: boolean = true) {
  if (light) return `
:root {
  --default-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: 'Source Code Pro', monospace;
  --background-primary: #ffffff;
  --background-modifier-border: #ddd;
  --text-accent: #705dcf;
  --text-accent-hover: #7a6ae6;
  --text-normal: #2e3338;
  --background-secondary: #f2f3f5;
  --background-secondary-alt: #e3e5e8;
  --text-muted: #888888;

  --color-bg-primary: #fff;
  --color-bg-secondary: #fafbfc;
  --color-bg-tertiary: #f6f8fa;
  --color-bg-info: #f1f8ff;
  --color-markdown-code-bg: rgba(27, 31, 35, 0.05);

  --color-text-primary: #24292e;
  --color-timeline-text: #444d56;
  --color-text-tertiary: #6a737d;
  --color-text-link: #0366d6;
  --color-border-secondary: #eaecef;

  --color-border-primary: #e1e4e8;
  --color-border-tertiary: #d1d5da;
  --color-border-secondary: #eaecef;
  --color-markdown-frame-border: #dfe2e5;
  --color-markdown-table-tr-border: #c6cbd1;
}`;
  else return `
:root {
  --background-primary: #202020;
  --background-modifier-border: #333;
  --text-accent: #7f6df2;
  --text-accent-hover: #8875ff;
  --text-normal: #dcddde;
  --background-secondary: #161616;
  --background-secondary-alt: #000000;
  --text-muted: #999;

  --color-bg-primary: #0d1117;
  --color-bg-secondary: #0d1117;
  --color-bg-tertiary: #161b22;
  --color-bg-info: rgba(56, 139, 253, 0.1);
  --color-markdown-code-bg: rgba(240, 246, 252, 0.15);

  --color-text-primary: #c9d1d9;
  --color-timeline-text: #b1bac4;
  --color-text-tertiary: #8b949e;
  --color-text-link: #58a6ff;
  --color-border-secondary: #21262d;

  --color-border-primary: #30363d;
  --color-border-tertiary: #6e7681;
  --color-border-secondary: #21262d;
  --color-markdown-frame-border: #3b434b;
  --color-markdown-table-tr-border: #272c32;
}
`;
}

export default function (light: boolean = true, limitWidth: boolean = false, maxWidth: string = '700px') {
  let fixedBodyWidthCSS = `
  body {
    max-width: ${maxWidth};
    margin-left: auto;
    margin-right: auto;
  }
  `
  if(limitWidth)
    return variables(light) + body() + fixedBodyWidthCSS;
  else
    return variables(light) + body();
}

function body () {
  return `
pre, code {
  font-family: var(--font-monospace);
}
h1, h2, h3, h4, h5, h6 {
  font-weight: 800;
}
a {
  color: var(--text-accent);
  outline: none;
}
a:hover {
  color: var(--text-accent-hover);
}
audio {
  outline: none;
}
hr {
  border: none;
  border-top: 1px solid;
  border-color: var(--background-modifier-border);
  margin: 26px 0;
}
* {
  box-sizing: border-box;
}
body {
  text-rendering: optimizeLegibility;
  font-family: var(--default-font);
  line-height: 1.5em;
  font-size: 16px;
  background-color: var(--background-primary);
  color: var(--text-normal);
}
ul ul, ol ul, ol ul, ul ol {
  list-style-type: disc;
}
button.copy-code-button {
  margin: 5px;
  padding: 5px;
  color: var(--text-muted);
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}



  /* PrismJS 1.20.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+abap+abnf+actionscript+ada+al+antlr4+apacheconf+apl+applescript+aql+arduino+arff+asciidoc+asm6502+aspnet+autohotkey+autoit+bash+basic+batch+bbcode+bison+bnf+brainfuck+brightscript+bro+c+concurnas+csharp+cpp+cil+coffeescript+cmake+clojure+crystal+csp+css-extras+d+dart+dax+diff+django+dns-zone-file+docker+ebnf+eiffel+ejs+elixir+elm+etlua+erb+erlang+excel-formula+fsharp+factor+firestore-security-rules+flow+fortran+ftl+gcode+gdscript+gedcom+gherkin+git+glsl+gml+go+graphql+groovy+haml+handlebars+haskell+haxe+hcl+hlsl+http+hpkp+hsts+ichigojam+icon+iecst+inform7+ini+io+j+java+javadoc+javadoclike+javastacktrace+jolie+jq+jsdoc+js-extras+js-templates+json+jsonp+json5+julia+keyman+kotlin+latex+latte+less+lilypond+liquid+lisp+livescript+llvm+lolcode+lua+makefile+markdown+markup-templating+matlab+mel+mizar+monkey+moonscript+n1ql+n4js+nand2tetris-hdl+nasm+neon+nginx+nim+nix+nsis+objectivec+ocaml+opencl+oz+parigp+parser+pascal+pascaligo+pcaxis+peoplecode+perl+php+phpdoc+php-extras+plsql+powerquery+powershell+processing+prolog+properties+protobuf+pug+puppet+pure+purebasic+python+q+qml+qore+r+racket+jsx+tsx+renpy+reason+regex+rest+rip+roboconf+robotframework+ruby+rust+sas+sass+scss+scala+scheme+shell-session+smalltalk+smarty+solidity+solution-file+soy+sparql+splunk-spl+sqf+sql+stylus+swift+tap+tcl+textile+toml+tt2+turtle+twig+typescript+t4-cs+t4-vb+t4-templating+unrealscript+vala+vbnet+velocity+verilog+vhdl+vim+visual-basic+warpscript+wasm+wiki+xeora+xml-doc+xojo+xquery+yaml+zig */
  /**
     * prism.js default theme for JavaScript, CSS and HTML
     * Based on dabblet (http://dabblet.com)
     * @author Lea Verou
     */
  /* Code blocks */
  /* Inline code */
code[class*="language-"],
pre[class*="language-"] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: var(--font-monospace);
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}
pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}
@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
  }
}
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #f5f2f0;
}
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}
.token.punctuation {
  color: #999;
}
.token.namespace {
  opacity: 0.7;
}
.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}
.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}
.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}
.token.function,
.token.class-name {
  color: #DD4A68;
}
.token.regex,
.token.important,
.token.variable {
  color: #e90;
}
.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}

//Gitsidian CSS

.workspace-split.mod-root .view-content {
  background-color: var(--color-bg-primary);
}

code[class*="language-"],
pre[class*="language-"],
.token.punctuation,
.token.operator {
  color: var(--color-text-primary) !important;
}

a:active,
a:hover {
  outline-width: 0;
}

strong {
  font-weight: inherit;
  font-weight: bolder;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

img {
  border-style: none;
}

code,
pre {
  font-family: monospace, monospace;
  font-size: 1em;
  color: var(--color-text-primary);
}

p code,
li code,
h1 code,
h2 code,
h3 code,
h4 code {
  display: inline-block;
}

hr {
  box-sizing: initial;
  height: 0;
  overflow: visible;
}

* {
  box-sizing: border-box;
}

input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

a {
  color: var(--color-text-link);
  text-decoration: none !important;
}

a:hover {
  text-decoration: underline !important;
}

strong {
  font-weight: 600;
}

hr {
  height: 0;
  margin: 15px 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--color-markdown-frame-border);
}

hr:after,
hr:before {
  display: table;
  content: "";
}

hr:after {
  clear: both;
}

table {
  border-spacing: 0;
  border-collapse: collapse;
}

td,
th {
  padding: 0;
}

details summary {
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0;
  color: var(--color-text-primary);
}

h1 {
  font-size: 32px;
}

h1,
h2 {
  font-weight: 600;
}

h2 {
  font-size: 24px;
}

h3 {
  font-size: 20px;
}

h3,
h4 {
  font-weight: 600;
}

h4 {
  font-size: 16px;
}

h5 {
  font-size: 14px;
}

h5,
h6 {
  font-weight: 600;
}

h6 {
  font-size: 12px;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}

blockquote {
  margin-left: 0;
  margin-right: 0;
}

ol,
ul {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

ol ol,
ul ol {
  list-style-type: lower-roman;
}

ol ol ol,
ol ul ol,
ul ol ol,
ul ul ol {
  list-style-type: lower-alpha;
}

dd {
  margin-left: 0;
}

code,
pre {
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  font-size: 12px;
}

pre {
  margin-top: 0;
  margin-bottom: 0;
}

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.task-list-item-checkbox {
  filter: none;
}

.border {
  border: 1px solid var(--color-border-primary) !important;
}

.border-0 {
  border: 0 !important;
}

.border-bottom {
  border-bottom: 1px solid var(--color-border-primary) !important;
}

.rounded-1 {
  border-radius: 3px !important;
}

.bg-white {
  background-color: var(--color-bg-primary) !important;
}

.bg-gray-light {
  background-color: var(--color-bg-secondary) !important;
}

.text-gray-light {
  color: var(--color-text-tertiary) !important;
}

hr {
  border-bottom-color: var(--color-border-secondary);
}

kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  line-height: 10px;
  color: var(--color-timeline-text);
  vertical-align: middle;
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border-tertiary);
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 var(--color-border-tertiary);
}

> :first-child {
  margin-top: 0 !important;
}

> :last-child {
  margin-bottom: 0 !important;
}

a:not([href]) {
  color: inherit;
  text-decoration: none;
}

blockquote,
dl,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: 16px;
}

hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: var(--color-border-primary);
  border: 0;
}

blockquote {
  padding: 0 1em;
  color: var(--color-text-tertiary);
  border: none;
  border-radius: 0px;
  border-left: 0.25em solid var(--color-markdown-frame-border) !important;
}

blockquote p,
blockquote ul {
  margin-bottom: 16px !important;
}

blockquote > :first-child {
  margin-top: 0;
}

blockquote > :last-child {
  margin-bottom: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

h1 {
  font-size: 2em;
}

h1,
h2 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid var(--color-border-secondary);
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.25em;
}

h4 {
  font-size: 1em;
}

h5 {
  font-size: 0.875em;
}

h6 {
  font-size: 0.85em;
  color: var(--color-text-tertiary);
}

ol,
ul {
  padding-left: 2em;
}

ol ol,
ol ul,
ul ol,
ul ul {
  margin-top: 0;
  margin-bottom: 0;
}

li {
  word-wrap: break-all;
}

li > p {
  margin-top: 16px;
}

li + li {
  margin-top: 0.25em;
}

dl {
  padding: 0;
}

dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

table {
  display: block;
  width: 100%;
  overflow: auto;
}

table th {
  font-weight: 600;
}

table td,
table th {
  padding: 6px 13px;
  border: 1px solid var(--color-markdown-frame-border);
}

table tr {
  background-color: var(--color-bg-primary);
  border-top: 1px solid var(--color-markdown-table-tr-border);
}

table tr:nth-child(2n) {
  background-color: var(--color-bg-tertiary);
}

img {
  max-width: 100%;
  box-sizing: initial;
  background-color: var(--color-bg-primary);
}

code {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: var(--color-markdown-code-bg);
  border-radius: 3px;
}

pre {
  word-wrap: normal;
}

pre > code {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

mark {
  color: var(--color-text-primary) !important;
}

pre,
.markdown-previev-view :not(pre) > code[class*="language-"],
pre[class*="language-"] {
  color: var(--color-text-primary);
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: var(--color-bg-tertiary);
  border-radius: 3px;
}

pre code {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: initial;
  border: 0;
}

ul > li.task-list-item {
  text-indent: -1.55em;
}

a.footnote-link {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Segoe UI Emoji;
}

a.tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  border: 1px solid transparent;
  border-radius: 2em;
  padding: 0 10px;
  line-height: 22px;
  color: var(--color-text-link);
  background-color: var(--color-bg-info);
}
`;
}
