---
layout: page
title: Common Errors and Issues
nav_order: 1
parent: Troubleshooting
---

## Common Errors and Issues

The following are known recording issues in the extension and possible workarounds. The error details are shown on the ArchiveWeb.page popup when attempting to record.

### Pages with YouTube Videos.

*Error Details: Cannot attach to this target*

If you encounter this error message and are unable to record pages with YouTube videos, note that recording YouTube is not possible if you have the <b>'chrome youtube app'</b> installed (It's OK if it's installed. Everyone does by default).

If this is the case, go to chrome://apps. Click the YouTube app and remove it. Try capturing again.

Here's a video that shows how to fix this error:

<iframe width="560" height="315" src="https://www.youtube.com/embed/X2j27XeOp_0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Pages with certain types of iframes.

*Error Details: Cannot access contents of url "about:srcdoc". Extension manifest must request permission to access this host.*

Unfortunately, this is a [known bug in Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=1147826) that prevents the extension from being able to record certain pages with iframes that contain a `srcdoc` URL.

We hope it is fixed soon!


## Have another error or issue?
Since ArchiveWeb.page is still new, we'll need your help with what we should troubleshoot! Please [contact us](/contact) and ask us questions and show us examples.
