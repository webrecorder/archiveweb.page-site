---
layout: page
title: Sharing archives
nav_order: 7
permalink: /sharing
---

# Sharing Web Archives via Peer-to-Peer Networks

What if there was a way to quickly share an archived page or even a small collection with others, without having to download the WACZ, upload it, etc...

To make this possible, ArchiveWeb.page includes experimental features to share web archives, directly from your machine using peer-to-peer protocols.

## Sharing via IPFS

Thus far, the [IPFS](https://ipfs.io/) protocol is supported, and others will likely be added in the future.

### Starting Sharing 

To start sharing:

1. Click on the **Sharing** button on the extension home page or on the collection Info page. If sharing for the first time, you may see a warning
   explaining that sharing may make your data accessible to others

  ![sharing-start](/assets/images/sharing/start-button.png)

2. Wait for sharing to start. The shareable URL (using ReplayWeb.page) should be copied to your clipboard.

3. To verify, you can open the URL in a new browser window and see that it works.

4. If successful, you can share this URL with others

### Sharing Menu

When an archive is being shared, the sharing menu is available, along with the Stop Sharing button.

![share-menu](/assets/images/sharing/share-menu.png)

- Click Stop Sharing to stop sharing immediately.

- *Copy Shareable ReplayWeb.page Link* will copy the shareable link using ReplayWeb.page. This is the preferred method of sharing.

- *Copy Shareable IPFS Gateway Link* will share a link using the `ipfs.io` gateway, another way to view the web archive.

- *Copy IPFS URL* will copy the unique `ipfs://` URL for this web archive. The URL contains a unique hash which identifies this shared copy.

- *Reshare Latest* will reshare the archive again. This is useful if the archive has changed since it was last shared, or if there are any issues (see below).

## How it works / Caveats

The sharing feature should be considered experimental and is not guaranteed to work. The sharing works by generating a WACZ file (same as if the file was downloaded)
and then sharing it over the IPFS protocol. Just like downloading, sharing a large collection will take longer than a smaller one since a full WACZ must be generated.

For sharing to work, your browser and the extension must be open, as the data will be loaded from your machine directly (initially).

The generated file includes timestamps and so sharing the same file multiple times will result in a different IPFS hash. The shared version is a snapshot (much like a downloaded WACZ) and is not automatically updated with the collection. For this reason, the *Reshare Latest* option is available.

ArchiveWeb.page uses IPFS in a custom way to only transmit all data only on-demand. When a user loads the shared ReplayWeb.page IPFS URL, first the page list is loaded,
and then only the pages that are browsed are shared. Users browsing the shared archive can choose which pages to browse, and only those pages are then synched over IPFS.

To create a persistent backup of an archive, an outside 'pinning' service is recommended. Such services can 'pin' the IPFS hash, which can be obtained from *Copy IPFS URL*, and mke it available. See [IPFS Docs on persistence and pinning](https://docs.ipfs.io/concepts/persistence/#persistence-versus-permanence) for more info on this.

## Troubleshooting

Loading via peer-to-peer network has its tradeoffs, including that it may be slower than loading from a web server. When loading a shareable IPFS URL in ReplayWeb.page, it may take several few seconds or even minutes to load the web archive, as it must connect to an intermediary IPFS node, and then to the machine hosting the extension.

As this feature is experimental, it may not always work. One source of errors is if the connection to the IPFS network is disrupted.

ArchiveWeb.page will attempt to reconnect if it can.


- If a previously shared archive is no longer accessible via the shareable link, you can try to stop sharing and reshare again.

- If sharing is failing to start, you may disable and reenable the extension, or restart the browser.

We hope to address these issues in future updates.




