<!-- ---
layout: page
title: Web Object Encapsulation Complexity
nav_order: 2
parent: Troubleshooting
permalink: /troubleshooting/encapsulation_complexity
--- -->

## [Web Object Encapsulation Complexity](https://webrecorder.net/2020/11/09/encapsulation-complexity.html)
Web object encapsulation complexity is a term we're using to describe the difficulty in capturing certain websites. The encapsulation depends on which assets and factors can be archived. You can read more about it on webrecorder's [blog](https://webrecorder.net/2020/11/09/encapsulation-complexity.html). For now, use the examples below to better understand the levels and know that we are defining web object encapsulation complexity as:

>> "How difficult it is to encapsulate any web object and reproduce it later can be called the ‘encapsulation complexity’ of the object, which depends on a number of factors, such as external dependencies."


### Level 0: Web Archive Encapsulatable
<details>
  <summary>
      What's this even mean?
  </summary>
    <p>
      This type of single-paged web object has zero external dependencies. Basically what you see within the HTML code is what you get during capture. The images, CSS, JavaScript, and other HTML structure are all within the page.
    </p>
</details>
<details>
  <summary>
      How can I capture this?
  </summary>
    <p>
      Usually Level 0 objects do not require much effort for encapsulation, and can be easily captured with the Chrome Extension, webrecorder desktop, and even other tools such as saving the page as a PDF or even a screenshot. How you capture will depend on how you want to use and show the webpage.
    </p>
</details>
<details>
  <summary>
      What are some examples?
  </summary>
    <p>
      Usually static pages or single-paged websites are level 0. We're in the process of searching and finding examples to share!
    </p>
</details>
<details>
  <summary>
      Can you just show me?
  </summary>
    <p>
      Videos coming soon!
    </p>
</details>

### Level 1: Web Archive Encapsultable
<details>
  <summary>
      What's this even mean?
  </summary>
    <p>
      These are the types of web objects that you'll encounter more often on the Internet. Current websites have a lot of external dependencies. The images, CSS, JavaScript, and other resources are no longer part of the HTML code. Instead they're embedded, linked, or included from a different web server.
    </p>
</details>
<details>
  <summary>
      How can I capture this?
  </summary>
    <p>
    Most web objects that work well within web archives fit into this level of complexity, from small or single-page projects to large sites requiring crawling.

    You can use browser-based capture tools such as Webrecorder or web crawlers such as Browsertrix, Heritrix, etc…
    </p>
</details>
<details>
  <summary>
      What are some examples?
  </summary>
    <p>
      Dynamic sites whose look depend on user interaction can be level 1. We're in the process of searching and finding examples to share!
    </p>
</details>
<details>
  <summary>
      Can you just show me?
  </summary>
    <p>
      Videos coming soon!
    </p>
</details>

### Level 2: Web Archive + Server Emulation Encapsulatable
<details>
  <summary>
      What's this even mean?
  </summary>
    <p>
      For these web objects to work, they depend on a web server and the dependencies that this server might have, such as a database.
    </p>
</details>
<details>
  <summary>
      How can I capture this?
  </summary>
    <p>
      If a website is packaged and has an accessible link to these servers, you can capture these types of web objects with web server containers like Docker Compose along with web archives and web server emulation.
    </p>
</details>
<details>
  <summary>
      What are some examples?
  </summary>
    <p>
      We're in the process of searching and finding examples to share!
    </p>
</details>
<details>
  <summary>
      Can you just show me?
  </summary>
    <p>
      Videos coming soon!
    </p>
</details>

### Level 3+: Not fully Encapsulatable
<details>
  <summary>
      What's this even mean?
  </summary>
    <p>
      This means the web object is really hard to capture. Like really hard. We can't confirm or find the external dependencies the site has. The user experience not only depends on the user interaction, but also of external servers that depend on other user interactions. These web objects could rely on external data or hardware such as a camera, microphone, geolocation inputs or network speeds. These type of sites require a lot of customization and attention in order to be captured.
    </p>
</details>
<details>
  <summary>
      How can I capture this?
  </summary>
    <p>
      Unfortunately, you can't get a good capture of a level 3. You can capture level 0, 1, and 2 web objects and kind of piece them together, but level 3 web objects require this type of migration for encapsulation.
    </p>
</details>
<details>
  <summary>
      What are some examples?
  </summary>
    <p>
      Basically all of social media is level 3 because not only does it depend on user interaction, but the apps are constantly changing, updated, growing, and distributed in ways that crawling and capturing even a page can be complicated, let alone the entire site.
    </p>
</details>
<details>
  <summary>
      Can you just show me?
  </summary>
    <p>
      Videos coming soon!
    </p>
</details>
