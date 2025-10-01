# sh25-intro-react-convex

React + Vite + Convex project setup.

## Setup

1. `npm create vite@latest`
Choose react and typescript+ SWC


## Convex Integration

1. `npm install convex`
2. `npx convex dev`
3. Add `guestbookData.jsonl`
4. `npx convex import --table guestbook guestbookData.jsonl`
5. Add `convex/schema.ts`
6. Add `convex/tasks.ts`
7. Connect backend in `src/main.tsx`
8. Display data in `src/components/GuestbookSection.tsx`

## Resources

- [Convex Quickstart](https://docs.convex.dev/quickstart/react)
- [Mutation Functions](https://docs.convex.dev/functions/mutation-functions)
