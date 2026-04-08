from __future__ import annotations

import shutil
from pathlib import Path

from app import app


DIST_DIR = Path("site-build")
STATIC_DIR = Path("static")


def route_to_output(rule: str) -> Path:
    trimmed = rule.strip("/")
    if not trimmed:
        return DIST_DIR / "index.html"
    return DIST_DIR / trimmed / "index.html"


def export_routes() -> None:
    DIST_DIR.mkdir(exist_ok=True)

    with app.test_client() as client:
        for rule in app.url_map.iter_rules():
            if "GET" not in rule.methods or rule.endpoint == "static":
                continue
            if "<" in rule.rule:
                continue

            response = client.get(rule.rule)
            if response.status_code >= 400:
                raise RuntimeError(f"Failed to export {rule.rule}: {response.status_code}")

            output_path = route_to_output(rule.rule)
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_text(response.get_data(as_text=True), encoding="utf-8")


def export_post_routes() -> None:
    from site_data import POSTS

    with app.test_client() as client:
        for post in POSTS:
            route = f"/blog/{post['slug']}/"
            response = client.get(route)
            if response.status_code >= 400:
                raise RuntimeError(f"Failed to export {route}: {response.status_code}")

            output_path = route_to_output(route)
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_text(response.get_data(as_text=True), encoding="utf-8")


def copy_static_assets() -> None:
    target = DIST_DIR / "static"
    shutil.copytree(STATIC_DIR, target, dirs_exist_ok=True)


def build() -> None:
    DIST_DIR.mkdir(exist_ok=True)
    export_routes()
    export_post_routes()
    copy_static_assets()
    print(f"Static site written to {DIST_DIR.resolve()}")


if __name__ == "__main__":
    build()
