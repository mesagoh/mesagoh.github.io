---
title: "Blog Tutorial (Github Pages + Hugo)"
date: 2026-04-13T21:11:46-07:00
draft: true
---
My website is a simple HTML+CSS base, hosted on GitHub Pages. I wanted to extend this page to contain a collection of writings, thoughts, learnings. I've decided to try out [Hugo](https://gohugo.io), due to its reputation of being the world's fastest static site generator (SSG).


# Step 1: Install Hugo locally

Use the official .deb from the [Hugo GitHub Releases](https://github.com/gohugoio/hugo/releases)
- Download the latest .deb
- Install: `sudo dpkg -i hugo*.deb`
- Verify version: `hugo version`

# Step 2: Initialize your site
```
cd workspace
hugo new site my-blog
cd my-blog
git init
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

# Step 3: Configure for Github pages

In `workspace/my-blog/config.toml`:

```
baseURL = 'https://username.github.io/'
languageCode = 'en-us'
title = 'My Writing Collection'
theme = 'PaperMod'
```
