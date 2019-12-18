# Design Decisions

- For the sake of longevity, I will strive always to achieve what I can without the use of a framework (i.e. exercvising a preference for web platform standards only)
- Avoid hierarchy in the URL where possible. It imposes one hierarchical organization model when, in fact, there can be many. Let the slug of a document be its unique identifier, try to have it at the root, and leverage proper server redirects when the slug needs to change.
