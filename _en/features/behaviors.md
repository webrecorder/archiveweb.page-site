---
layout: page
title: Behaviors Overview and Status
parent: Tool Features
grand_parent: Guide to Archiveweb.page
nav_order: 3
---

# Autopilot Behaviors

The Autopilot system runs one of the following behaviors that either scroll or perform other custom interactions
on a particular page. The system runs one of the site-specific behaviors when enabled on a site for which there is a behavior.
Otherwise, the system uses the default behavior (Autoscroll). Finally, the system also includes 'background behaviors' which
always run and ensure the capture is as complete as possible.

The behaviors run on sites that may change frequently and can break at any time. Each behavior is tested daily and the corresponding status indicates if the behavior is known to be working within the last day (at least within a limited test sample). The current behaviors are as follows.

Default Behavior:
* [Autoscroll](#autoscroll)

Site-Specific Behaviors:
* [Instagram](#instagram)
* [Facebook](#facebook)
* [Twitter](#twitter)

Background Behaviors:
* [Autoplay and Autofetch](#autoplay-and-autofetch)



## Autoscroll

|:-------|:-------|
| Status | [![Autoscroll Behavior](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/autoscroll.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/autoscroll.yaml) |
| Multilingual | Partial Support (see description) |
| Login Required? | No |

The Autoscroll behavior is the default behavior run on any site that is not covered by another behavior. This behavior attempts to support infinite scroll by scrolling down as far as possible. When reaching the end, the behavior waits for more elements to load, waiting a bit longer
the farther it has scrolled (just in case).

The behavior also tests for the presence of any 'Show More' buttons, and attempts to click such a button, if found. The behavior will then wait a bit longer and attempt to scroll more. The scroll more option is of course limited to English sites and sites that have a button with such a name.

The goal of this behavior is to do the most useful thing on any page, which is difficult and will be far from perfect.


## Instagram

|:-------|:-------|
| Status | [![Instagram Behavior (Logged In)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/instagram.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/instagram.yaml) |
| Multilingual | Yes |
| Login Required | No |

The Instagram behavior runs on an Instagram profile, and will iterate through all posts, one row at a time.
Within each post, the behavior will go through all slides, and also attempt to load comments (for upto 10 seconds).
Videos and photos in each post should get archived when using this behavior.

The behavior also loads the 'single post' view, so that individual posts can be loaded directly as well.

The behavior does not currently support iterating through Instagram stories.

The behavior should work with Twitter UI set to any language.

Due to Instagram's restrictions, the behavior requires the user to be logged in to instagram to work.


## Facebook

|:-------|:-------|
| Status | [![Facebook Behavior: Page (Owner Logged In)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-page.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-page.yaml) <br> [![Facebook Behavior: Page Photos (Owner Logged In)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-photos.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-photos.yaml) <br> [![Facebook Behavior: Page Videos (Owner Logged In)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-videos.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-videos.yaml)
| Multilingual | Yes |
| Login Required | Yes |

The Facebook behavior is most complex and experimental.
The behavior does different things depending on the type of Facebook page it is run on:

* For a page with a feed (profile, page, or group), the behavior will attempt to scroll through the feed, and expand the first 2 levels of comments. (This may change in the future).

* For a Page Photos page (ending in `/photos`), the behavior will attempt to scroll through all photos and expand first 2 levels of comments. Albums are not currently supported.

* For a Page Videos page (ending in `/videos`), the behavior will attempt to play each video listed in all videos, one at a time, waiting for the video to start before moving on to the next one. Playlists are not currently supported.

* For a single photo page, the behavior will attempt to expand all comments.

Facebook poses enormous challenges for archiving, especially the replay. While content may be captured, it may occasionally not replay, especially for longer feeds. For this reason, the behavior attempts to limit what it does at a time, eg. scrolling and expanding comments, but not clicking on all popups, as the reduces the complexity for replay.

The behavior is most likely to change to adapt to make the resulting archives more replayable.

The tests currently check the capture of a top-level page, photos and videos pages.

The behavior requires login, as Facebook uses a different UI when not logged in. Only the logged in UI is supported.

The behavior should work with Facebook UI set to any language.


## Twitter

|:-------|:-------|
| Status | [![Twitter Behavior](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/twitter.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/twitter.yaml) <br> [![Twitter Behavior (Logged In)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/twitter-logged-in.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/twitter-logged-in.yaml)
| Multilingual | Yes |
| Login Required | No |

The Twitter behavior will go through a twitter timeline, for an account or hashtag, and view conversations one level deep.
The behavior will click and iterate through each photo in a Tweet. The behavior will also wait for any videos loaded in a tweet to finish.
The behavior will also click on any quoted tweets (but not their replies).

The behavior does not yet supporting clicking on custom Twitter cards, such as external embeds.
The behaivor should work with the Twitter UI set to any language.

The behavior should work for both logged in and not-logged view of Twitter. (Both logged-in and not logged in versions are tested).


## Autoplay and Autofetch

|:-------|:-------|
| Status | [![Autoplay Behavior: Youtube](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/youtube-autoplay.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/youtube-autoplay.yaml) <br> [![Autoplay Behavior: Vimeo](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/vimeo-autoplay.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/vimeo-autoplay.yaml) |
| Multilingual | Yes |
| Login Required | No |


These behaviors run in the background, and ensure that any detected videos on a page are automatically loaded, to ensure a complete capture.
The AutoPlay behavior detects and plays videos loaded in any iframes.
The AutoFetch behavior detects images and styles for different resolutions in the page, and ensures they are fetchced in the background.

The existing tests currently test autoplay and archiving of videos from common video platforms.

The behaviors were initially designed for [Browsertrix Crawler](https://github.com/webrecorder/browsertrix-crawler) but are also available to ArchiveWeb.page
 
<hr>

For more details on how behaviors work, see the [Browsertrix Behaviors](https://github.com/webrecorder/browsertrix-behaviors) on GitHub.

For specific issues with any of these behaviors, please [open an issue](https://github.com/webrecorder/browsertrix-behaviors/issues) on this repository.


