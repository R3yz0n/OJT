# HTML Concepts Used

This document outlines some of the HTML elements and attributes found in the project.

## Basic Document Structure

The HTML files use a standard document structure:

- `<!DOCTYPE html>`: Declares the document type to be HTML5.
- `<html lang="en">`: The root element of an HTML page, with the language set to English.
- `<head>`: Contains meta-information about the HTML document, which is not displayed on the page itself.
  - `<meta charset="UTF-8">`: Specifies the character encoding for the document, usually UTF-8.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configures the viewport for responsiveness, making the website look good on all devices.
  - `<title>Document</title>`: Sets the title of the document, which is shown in the browser's title bar or tab.
- `<body>`: Contains the visible page content.

## HTML Elements

### Headings

- `<h2>`: Represents a level 2 heading. HTML provides six levels of headings, from `<h1>` (most important) to `<h6>` (least important).

### Paragraphs

- `<p>`: Defines a paragraph of text.

### Images

- `<img>`: Embeds an image into the document.
  - `src` attribute: Specifies the path to the image. This can be a relative path (e.g., `./assests/img1.jpg` or `../HTML XIX/mac.jpg`) or an absolute path (e.g., `C:\Users\ZEUS\Desktop\OJT\assests\img1.jpg`).
    - **Relative paths** are relative to the current document's location.
    - **Absolute paths** provide the full URL or file system path to the image.
  - `alt` attribute: Provides alternative text for an image if the image cannot be displayed. It's also important for accessibility.

### Comments

- `<!-- comment text -->`: HTML comments are not displayed in the browser but can help document the HTML source code.

## File Paths in `<img>` tags

In [day2/day2.html](day2/day2.html), different types of image paths are used:

- `src="../HTML XIX/mac.jpg"`: This is a relative path. `../` indicates moving up one directory level from the current file's location (`day2/`) to the parent directory, and then into the `HTML XIX` folder to find `mac.jpg`.
- `src="./assests/img1.jpg"`: This is a relative path. `./` refers to the current directory (where `day2.html` is located, i.e., `day2/`), and then it looks for an `assests` folder and `img1.jpg` inside it.
- `src="C:\Users\ZEUS\Desktop\OJT\assests\img1.jpg"`: This is an absolute file path specific to a local Windows file system. This type of path is not portable and will likely not work if the project is moved to another computer or hosted online. It's generally recommended to use relative paths for project assets.
