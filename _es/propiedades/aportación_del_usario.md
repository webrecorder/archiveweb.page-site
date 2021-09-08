---
layout: page
title: Aportación del Usuario
parent: Propiedades de la herramienta
grand_parent: Guía de Archiveweb.page
nav_order: 3

---

# Comportamientos del piloto automático
El sistema de piloto automático ejecuta uno de los siguientes comportamientos que se desplazan o realizan otras interacciones personalizadas en una página en particular. El sistema ejecuta uno de los comportamientos específicos del sitio cuando está habilitado en un sitio para el que existe un comportamiento. De lo contrario, el sistema utiliza el comportamiento predeterminado (Autodesplazamiento). Por último, el sistema también incluye "comportamientos en segundo plano" que siempre se ejecutan y garantizan que la captura sea lo más completa posible.

Los comportamientos se ejecutan en sitios que pueden cambiar con frecuencia y pueden romperse en cualquier momento. Cada comportamiento se prueba diariamente y el estado correspondiente indica si se sabe que el comportamiento está funcionando en el último día (al menos dentro de una muestra de prueba limitada). Los comportamientos actuales son los siguientes.

Comportamiento por defecto:
* [Desplazamiento automático](#autoscroll)

Comportamientos específicos del sitio:
* [Instagram](i#nstagram)
* [Facebook](#facebook)
* [Twitter](#twitter)

Comportamientos en segundo plano:
* [Reproducción automática y búsqueda automática](#autoplay)


## <a id="autoscroll"> Desplazamiento automático</a>

|:-------|:-------|
| Estatus | [![Autoscroll Behavior](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/autoscroll.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/autoscroll.yaml) |
| Multilingual | Partial Support (see description) |
| ¿Iniciar Sesión? (Login) | No |

El comportamiento de Autodesplazamiento es el comportamiento predeterminado que se ejecuta en cualquier sitio que no esté cubierto por otro comportamiento. Este comportamiento intenta admitir el desplazamiento infinito desplazándose hacia abajo tanto como sea posible. Al llegar al final, el comportamiento espera a que se carguen más elementos, esperando un poco más cuanto más se ha desplazado (por si acaso).
El comportamiento también prueba la presencia de cualquier botón "Mostrar más" e intenta hacer clic en dicho botón, si lo encuentra. El comportamiento esperará un poco más e intentará desplazarse más. La opción de desplazarse más está (scroll more), por supuesto, limitada a los sitios en inglés y los sitios que tienen un botón con ese nombre.
El objetivo de este comportamiento es hacer lo más útil en cualquier página, lo cual es difícil y estará lejos de ser perfecto.


## <a id="instagram"> Instagram</a>

|:-------|:-------|
| Estatus | [![Instagram Behavior (Logged In)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/instagram.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/instagram.yaml) |
| Multilingual | Yes |
| ¿Inciar sesión? (Login) | No |

El comportamiento de Instagram se ejecuta en un perfil de Instagram y recorrerá todas las publicaciones, una fila a la vez. Dentro de cada publicación, el comportamiento pasará por todas las diapositivas y también intentará cargar comentarios (hasta por 10 segundos). Los videos y fotos en cada publicación deben archivarse cuando se usa este comportamiento.
El comportamiento también carga la vista de "publicación única", de modo que las publicaciones individuales también se pueden cargar directamente.
Actualmente, el comportamiento no admite la iteración a través de las historias de Instagram.
El comportamiento debería funcionar con la interfaz de usuario de Twitter configurada en cualquier idioma.
Debido a las restricciones de Instagram, el comportamiento requiere que el usuario inicie sesión en Instagram para funcionar.

## <a id="facebook"> Facebook</a>


|:-------|:-------|
| Estatus | [![Facebook Behavior: Page (Owner Logged In)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-page.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-page.yaml) <br> [![Facebook Behavior: Page Photos (Owner Logged In)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-photos.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-photos.yaml) <br> [![Facebook Behavior: Page Videos (Owner Logged In)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-videos.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/facebook-videos.yaml)
| Multilingual | Yes |
| ¿Inciar Sesión? (Login) | Yes |

El comportamiento de Facebook es más complejo y experimental. El comportamiento hace cosas diferentes según el tipo de página de Facebook en la que se ejecuta:
* Para una página con un feed (perfil, página o grupo), el comportamiento intentará desplazarse por el feed y expandir los primeros 2 niveles de comentarios. (Esto puede cambiar en el futuro).
* Para una página de Página de Fotografías (que termina en / fotografías), el comportamiento intentará desplazarse por todas las fotos y expandir los primeros 2 niveles de comentarios. Actualmente, los álbumes no son compatibles.
* Para una página de Página de Videos (que termina en / videos), el comportamiento intentará reproducir cada video listado en todos los videos, uno a la vez, esperando que el video comience antes de pasar al siguiente. Actualmente, las listas de reproducción no son compatibles.
* Para una página de una sola foto, el comportamiento intentará expandir todos los comentarios.

Facebook plantea enormes desafíos para el archivo, especialmente la reproducción. Si bien el contenido puede capturarse, es posible que en ocasiones no se reproduzca, especialmente para fuentes más largas. Por esta razón, el comportamiento intenta limitar lo que hace a la vez, por ejemplo, desplazarse y expandir los comentarios, pero no hacer clic en todas las ventanas emergentes, ya que reduce la complejidad de la reproducción.

Es más probable que el comportamiento cambie para adaptarse y hacer que los archivos resultantes sean más reproducibles.
Las pruebas actualmente verifican la captura de una página de nivel superior, páginas de fotos y videos.

El comportamiento requiere inicio de sesión, ya que Facebook usa una interfaz de usuario diferente cuando no está conectado. Solo se admite la interfaz de usuario registrada.

El comportamiento debería funcionar con la interfaz de usuario de Facebook configurada en cualquier idioma.


## <a id="twitter"> Twitter</a>


|:-------|:-------|
| Estatus | [![Twitter Behavior](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/twitter.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/twitter.yaml) <br> [![Twitter Behavior (Logged In)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/twitter-logged-in.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/twitter-logged-in.yaml)
| Multilingual | Yes |
| ¿Inciar sesión? (Login) | No |

El comportamiento de Twitter pasará por una línea de tiempo de Twitter, para una cuenta o hashtag, y verá las conversaciones a un nivel de profundidad. El comportamiento hará clic e iterará a través de cada foto en un Tweet. El comportamiento también esperará a que finalice cualquier video cargado en un tweet. El comportamiento también hará clic en cualquier tweet citado (pero no en sus respuestas).
El comportamiento aún no admite hacer clic en tarjetas personalizadas de Twitter, como incrustaciones externas. El comportamiento debería funcionar con la interfaz de usuario de Twitter configurada en cualquier idioma.
El comportamiento debería funcionar tanto para la vista con sesión iniciada como para la vista no registrada de Twitter. (Se prueban las versiones con sesión iniciada y sin sesión).

## Reproducción automática y Búsqueda automática

|:-------|:-------|
| Estatus | [![Autoplay Behavior: Youtube](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/youtube-autoplay.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/youtube-autoplay.yaml) <br> [![Autoplay Behavior: Vimeo](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/vimeo-autoplay.yaml/badge.svg)](https://github.com/webrecorder/browsertrix-behaviors/actions/workflows/vimeo-autoplay.yaml) |
| Multilingual | Yes |
| ¿Inciar Sesión? (Login) | No |

Estos comportamientos se ejecutan en segundo plano y garantizan que los videos detectados en una página se carguen automáticamente para garantizar una captura completa. El comportamiento de reproducción automática detecta y reproduce videos cargados en cualquier iframes. El comportamiento de AutoFetch detecta imágenes y estilos para diferentes resoluciones en la página y garantiza que se recuperen en segundo plano.

Las pruebas existentes actualmente prueban la reproducción automática y el archivo de videos desde plataformas de video comunes.

Los comportamientos se diseñaron inicialmente para [Browsertrix Crawler](https://github.com/webrecorder/browsertrix-crawler), pero también están disponibles para ArchiveWeb.page

<hr>

Para obtener más detalles sobre cómo funcionan los comportamientos, consulte [Comportamientos de Browsertrix](https://github.com/webrecorder/browsertrix-behaviors) en GitHub.

Para problemas específicos con cualquiera de estos comportamientos, [abra un *issue*](https://github.com/webrecorder/browsertrix-behaviors/issues) en este repositorio.
---

