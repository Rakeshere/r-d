# Migrate the R&D website

## Goal
Bring the uploaded R&D Software Solutions website into the live preview without changing its existing colors, typography, copy, imagery, or page design.

## Work
- Port the existing home, services, about, blog, blog article, contact, and careers pages and preserve their shared navigation and footer.
- Keep the source palette (navy, orange, and cream), Sora typography, page copy, animations, and supplied imagery intact.
- Add only dependencies missing from the current app, while keeping its pinned TanStack framework versions.
- Check route metadata, page navigation, forms, asset loading, mobile presentation, browser errors, and existing route tests; fix migration issues without redesigning pages.
- Record any source capability that cannot be verified or reproduced, and summarize what remains needed.

## Technical details
Keep the existing TanStack Start app structure. Place imported site modules under `src/muftlo`, keep URL pages in `src/routes`, and preserve the target project's framework versions and generated route files.
