# Software Design UK

Python version of the Software Design UK website, built with Flask and Jinja templates.

## Local development

Install dependencies:

```powershell
python -m pip install -r requirements.txt
```

Run the site locally:

```powershell
python app.py
```

## Netlify build

Netlify uses:

- `python build_static.py` to generate the static site
- `site-build/` as the publish directory

## Project structure

- `app.py` contains the Flask routes
- `site_data.py` contains shared site content and loads Markdown posts
- `templates/` contains the HTML templates
- `static/` contains CSS and images
- `content/posts/` contains the blog articles in Markdown

## Adding a new article

Create a new Markdown file in `content/posts/` with a front matter block like this:

```md
---
slug: example-post
title: Example Post
excerpt: Short summary for the blog listing page.
read_time: 4 min read
intro: Short intro shown at the top of the article page.
---

## First section

Your article content goes here.
```
