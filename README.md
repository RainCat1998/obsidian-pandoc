## Patches

- Based on the latest **[ obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin)**.
- Add settings for limiting body width (HTML output ONLY).
- Changes in renderer.ts .
  - getAppConfig: '.obsidian' to 'appearance.json').
  - Fix internal link.
    - Change absolute path to relative path.
    - Fix internal link to the label on the same page. (smooth scroll using javascript)
- Using Github CSS for default html output.(style/app-css.ts) Based on [jca41/gitsidian: An obsidian theme inspired by GitHub markdown styles](https://github.com/jca41/gitsidian)



## Obsidian Pandoc Plugin

This is a Pandoc export plugin for Obsidian (https://obsidian.md).

It adds command palette options to export your notes to a variety of formats including Word Documents, PDFs, ePub books, HTML websites, PowerPoints and LaTeX among (many) others. This is all thanks to [Pandoc](https://pandoc.org/).

This lets you **write presentations**, **draft books**, **make webpages**, and **write assignments** all in Markdown, and export to whichever format you fancy, all without leaving Obsidian.

Note: this plugin is in beta, and there are often minor formatting issues. Make sure to proof-read the output!

![screenshot of command palette](./command-palette.png)

## [Installation](https://github.com/OliverBalfour/obsidian-pandoc/wiki/Installation)

(Installation instructions are on the wiki, use the above link)

## Basic usage
* Press Ctrl+P/Cmd+P to show the command palette
* Search "Pandoc"
* Choose your export format
* If all goes well, it will say it was successful
* If you exported a file called `Pandoc.md` as a Word Document, in your file explorer there will be a `Pandoc.docx` file in the same folder

## Documentation
* [Using Pandoc templates](https://github.com/OliverBalfour/obsidian-pandoc/wiki/Pandoc-Templates)
* [Using Pandoc citations](https://github.com/OliverBalfour/obsidian-pandoc/wiki/Citations-(work-in-progress))
* [Combining/concatenating documents](https://github.com/OliverBalfour/obsidian-pandoc/wiki/Combining-Documents)
* [Troubleshooting](https://github.com/OliverBalfour/obsidian-pandoc/wiki/Troubleshooting)
* [Installation](https://github.com/OliverBalfour/obsidian-pandoc/wiki/Installation)
