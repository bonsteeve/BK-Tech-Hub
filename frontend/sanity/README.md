# Sanity Integration Notes

This folder contains starter schema definitions for a CMS-ready content model.

## Next steps to activate
1. Create `sanity.config.ts` and register `schemaTypes` from `sanity/schemas/index.ts`.
2. Add `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `NEXT_PUBLIC_SANITY_API_VERSION`.
3. Implement GROQ queries and mapping functions in `lib/sanity/`.
4. Replace local `content/*.ts` modules with CMS fetches where needed.
