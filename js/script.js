
    (async function() {
        var extShow = ".ext-not-avail";
  
        if (window.chrome) {
          extShow = ".ext-needed";
          try {
            const res = await fetch("chrome-extension://fpeoodllldobpkbkabpblcfaogecpndd/ruffle/ruffle.js");
            if (res.status === 200) {
              extShow = ".ext-installed";
            }
          } catch (e) {
          }
        }
  
        if (document.readyState === "complete") {
          document.querySelector(extShow).style.display = "";
        } else {
          window.addEventListener("load", () => {
            document.querySelector(extShow).style.display = "";
          });
        }
      })();
    
