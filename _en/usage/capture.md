---
layout: page
title:  Capture Session
parent: Create Web Archives
grand_parent: Guide to Archiveweb.page
nav_order: 3
redirect_from: /guide/usage/capture/
---

# What Happens During A Capture Session

| Quick Links: Looking for [Autopilot Behavior Overview and Status?](/guide/features/behaviors) |

## The Banner

During a capture session, a banner will appear and state, "Webrecorder ArchiveWeb.page started debugging this browser". This banner should be present at all times during your web archiving process. No banner means the archiveweb.page extension is not capturing. 

![Screenshot of the webrecorder banner](/assets/images/usage/wr-banner.png)
---
## The Color Cues
At the same time as the banner appears, archiveweb.page extension will give you a status update with color cues. You should notice that the icon now how a green light (or yellow light). 

![archiveweb.page icon with a green box. archiveweb.page icon with a yellow box.Green means continue archiving. Yellow means give me a moment.](/assets/images/usage/wr-colors.png)

* Green will say "Idle, Continue Browsing" which means "Ready to go! Continue archiving"
* Yellow will say "# URLs pending, please wait before loading a new page" which means "Currently debugging and capturing the assets on this specific page. Give me a moment to capture everything please"

## [Autopilot](/guide/features/autopilot)
The latest version includes the new Automated page behavior and scrolling system, or Autopilot! This means archiveweb.page will scroll or interact with certain complex sites for you! The system is designed to run on a single page and currently aimed at social media sites or sites with infinite scroll. 
For more info, see the [Autopilot](/guide/features/autopilot) and [Behaviors Overview and Status](/guide/features/behaviors) sections of this guide.

## Instant Replay

You can instantly view what the archived page looks like, without stopping the capture session, by clicking **View Recorded Page**. This will open the page replay in a new tab so you can view the replay as the page is being archived. The **Browse Archive** link will open the current web archive collection that is being recorded into, also in a new tab.

These options will also be available after the archiving has been stopped.

---

[Continue to Terminate Session >](/guide/usage/terminate)
