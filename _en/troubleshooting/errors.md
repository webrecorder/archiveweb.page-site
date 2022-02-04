---
layout: page
title: Common Errors and Issues
parent: Troubleshooting
grand_parent: Guide to Archiveweb.page
nav_order: 1
redirect_from: /guide/troubleshooting/errors/
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

### Pages with PDFs extensions.

*Error Details: Cannot access a chrome-extension:// URL of different extension*

If it happens on a PDF page, its a known issue caused by the latest versions of Chrome. When the page loads an extension, for example - a PDF viewer extension, it'll break the archiving of PDFs in archiveweb.page due to security settings. If it happens on other pages, users can try disabling their other extensions, but the error basically won't allow one to record if there's another extension involved, and the PDF viewer is itself another extension. Unfortunately there's nothing we can do at the moment.

## Have another error or issue?
Since ArchiveWeb.page is still new, we'll need your help with what we should troubleshoot! Please [contact us](/contact) and ask us questions and show us examples.
