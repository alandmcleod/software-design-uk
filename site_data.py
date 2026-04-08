from pathlib import Path

import markdown


BASE_DIR = Path(__file__).parent
POSTS_DIR = BASE_DIR / "content" / "posts"


SITE = {
    "name": "Software Design UK",
    "tagline": "Systems analysis, architecture thinking, and practical AI guidance for organisations that want clarity before they scale.",
    "description": (
        "Software Design UK shares grounded thinking on solution design, cloud delivery, "
        "business analysis, and technical communication."
    ),
    "email": "contact@software-design-uk.com",
    "location": "United Kingdom",
}


NAV_ITEMS = [
    {"label": "Home", "endpoint": "home"},
    {"label": "About", "endpoint": "about"},
    {"label": "Services", "endpoint": "services"},
    {"label": "Blog", "endpoint": "blog"},
    {"label": "Contact", "endpoint": "contact"},
]


SERVICES = [
    {
        "title": "Solution Design",
        "summary": "Translate business goals into robust, explainable technical approaches.",
    },
    {
        "title": "Cloud & Integration Review",
        "summary": "Untangle delivery risks, interfaces, and architecture decisions before they become expensive.",
    },
    {
        "title": "AI-Assisted Analysis",
        "summary": "Use modern AI tools to accelerate discovery, requirements shaping, and documentation without losing judgement.",
    },
]


def parse_front_matter(raw_text: str) -> tuple[dict[str, str], str]:
    if not raw_text.startswith("---"):
        raise ValueError("Post is missing front matter block.")

    _, front_matter, content = raw_text.split("---", 2)
    metadata: dict[str, str] = {}

    for line in front_matter.strip().splitlines():
        if not line.strip():
            continue
        key, _, value = line.partition(":")
        metadata[key.strip()] = value.strip()

    return metadata, content.strip()


def load_post(path: Path) -> dict[str, str]:
    metadata, content = parse_front_matter(path.read_text(encoding="utf-8"))
    slug = metadata.get("slug", path.stem)

    required_keys = ["title", "excerpt", "read_time", "intro"]
    missing = [key for key in required_keys if not metadata.get(key)]
    if missing:
        raise ValueError(f"Post '{path.name}' is missing metadata: {', '.join(missing)}")

    return {
        "slug": slug,
        "title": metadata["title"],
        "excerpt": metadata["excerpt"],
        "read_time": metadata["read_time"],
        "intro": metadata["intro"],
        "content_html": markdown.markdown(content, extensions=["extra", "sane_lists"]),
    }


def load_posts() -> list[dict[str, str]]:
    return [load_post(path) for path in sorted(POSTS_DIR.glob("*.md"))]


POSTS = load_posts()
