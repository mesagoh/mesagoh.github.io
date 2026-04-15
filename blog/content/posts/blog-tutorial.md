---
title: "Blog Tutorial (Github Pages + Hugo)"
date: 2026-04-13T21:11:46-07:00
draft: false
---
My website is a simple HTML+CSS base, hosted on GitHub Pages. I wanted to extend this page to contain a collection of writings, thoughts, learnings. I've decided to try out [Hugo](https://gohugo.io), due to its reputation of being the world's fastest static site generator (SSG).


## Step 1: Install Hugo locally

Use the official .deb from the [Hugo GitHub Releases](https://github.com/gohugoio/hugo/releases)
- Download the latest .deb
- Install: `sudo dpkg -i hugo*.deb`
- Verify version: `hugo version`

## Step 2: Initialize your site
```
cd username.github.io/
hugo new site my-blog
cd my-blog
git init
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

## Step 3: Add a new Post
```
hugo new posts/first-entry.md
```
Open this MD file and start adding your content

## Step 4: Check changes live
```
hugo server -D
```
Open `localhost:1313` in your browser to view your changes.

## Step 4: Configure for Github pages

In `username.github.io/my-blog/config.toml`:

```
baseURL = 'https://username.github.io/'
languageCode = 'en-us'
title = 'My Writing Collection'
theme = 'PaperMod'


[params]
    mainSections = ["blog", "posts"]
```

In `username.github.io/.github/workflows/hugo.yaml`, paste the content found in [Hugo - Host on Github Pages](https://gohugo.io/host-and-deploy/host-on-github-pages/). Note: Update the `branches` section to match the branch you're working on.

## Step 5: Update Github Build Settings
Go to your Github repository, go to Settings > Pages > Build and deployment. Click on drop down and select "Github Actions".

## Step 6: Commmit changes
Go back to your editor, commit the changes to your branch.

## Step 7: Check build status
Go to your Github repository, choose Actions. Under "All Workflows",you should see a build workflow based on your latest commit.

## Finally
& voila! You've got your blog set up on Hugo, and hosted on Github Pages!

