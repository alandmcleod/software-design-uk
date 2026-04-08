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


POSTS = [
    {
        "slug": "balancing-tradeoffs-in-system-design",
        "title": "Balancing Trade-offs in System Design",
        "excerpt": "Good architecture is rarely about perfect choices. It is about choosing the right compromise for the context.",
        "read_time": "4 min read",
        "intro": "Strong system design comes from making decisions that stay legible under pressure.",
        "sections": [
            {
                "heading": "Performance vs scalability",
                "body": (
                    "A single fast service can feel like the right answer early on, but growth changes the shape of the problem. "
                    "Architectures that tolerate distribution and failure often outperform 'fast' designs over the lifetime of a system."
                ),
            },
            {
                "heading": "Simplicity vs flexibility",
                "body": (
                    "Highly flexible solutions can become expensive to operate and difficult to explain. "
                    "A simpler pattern with clear boundaries is usually easier to evolve when real requirements arrive."
                ),
            },
            {
                "heading": "What to document",
                "body": (
                    "Capture the context, the options considered, and why one route was selected. "
                    "That reasoning is what helps future teams maintain momentum."
                ),
            },
        ],
    },
    {
        "slug": "ci-cd-as-a-cloud-superpower",
        "title": "Why CI/CD Is a Cloud Superpower",
        "excerpt": "Cloud platforms provide infrastructure on demand, but delivery pipelines turn that flexibility into a repeatable operating model.",
        "read_time": "3 min read",
        "intro": "Continuous delivery reduces fear. That matters just as much as speed.",
        "sections": [
            {
                "heading": "Consistency creates confidence",
                "body": (
                    "When environments are built and deployed the same way every time, teams spend less energy debugging drift and more time shipping."
                ),
            },
            {
                "heading": "Recovery becomes routine",
                "body": (
                    "Smaller releases, automated checks, and predictable rollback paths make change less risky. "
                    "That changes the culture around delivery."
                ),
            },
            {
                "heading": "Pipeline thinking",
                "body": (
                    "The strongest pipelines treat infrastructure, application code, and quality gates as part of one joined-up system."
                ),
            },
        ],
    },
    {
        "slug": "llms-for-requirements-gathering",
        "title": "How LLMs Can Support Requirements Gathering",
        "excerpt": "AI can help analysts move faster, surface assumptions earlier, and structure discovery without replacing human judgement.",
        "read_time": "4 min read",
        "intro": "LLMs are most useful when they sharpen thinking instead of pretending to be the final answer.",
        "sections": [
            {
                "heading": "Useful starting points",
                "body": (
                    "Drafting stakeholder questions, decomposing large requests, and summarising meeting notes are all good tasks for assisted analysis."
                ),
            },
            {
                "heading": "Where caution matters",
                "body": (
                    "Generated output still needs challenge and validation. "
                    "Analysts should treat AI as a collaborator for exploration, not as an authority."
                ),
            },
            {
                "heading": "A practical mindset",
                "body": (
                    "The real opportunity is not replacing workshops or critical thinking. "
                    "It is reducing blank-page effort so more time goes into sharper conversations."
                ),
            },
        ],
    },
]
