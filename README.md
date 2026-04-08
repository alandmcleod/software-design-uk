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
- `site_data.py` contains shared site content
- `templates/` contains the HTML templates
- `static/` contains CSS and images
