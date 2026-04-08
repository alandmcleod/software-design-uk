from __future__ import annotations

from flask import Flask, abort, render_template

from site_data import NAV_ITEMS, POSTS, SERVICES, SITE


app = Flask(__name__)


def get_post_or_404(slug: str) -> dict:
    for post in POSTS:
        if post["slug"] == slug:
            return post
    abort(404)


@app.context_processor
def inject_site_context() -> dict:
    return {
        "site": SITE,
        "nav_items": NAV_ITEMS,
    }


@app.route("/")
def home():
    return render_template("home.html", posts=POSTS[:3], services=SERVICES)


@app.route("/about/")
def about():
    return render_template("about.html")


@app.route("/services/")
def services():
    return render_template("services.html", services=SERVICES)


@app.route("/blog/")
def blog():
    return render_template("blog.html", posts=POSTS)


@app.route("/blog/<slug>/")
def post(slug: str):
    return render_template("post.html", post=get_post_or_404(slug))


@app.route("/contact/")
def contact():
    return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True)
