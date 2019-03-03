#!/bin/bash
npm run clean
mkdir build
git worktree prune
rm -rf .git/worktrees/build/
git worktree add -B gh-pages build origin/gh-pages
PUBLIC_PATH=https://jokude.github.io/react-nonogram/ USE_HASH_ROUTER=true npm run build
cd build && git add --all && git commit -m "Publishing to gh-pages" && cd ..
git push origin gh-pages --force