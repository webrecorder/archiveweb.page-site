---
layout: page
title: Compartir Archivos
parent: Propiedades de la herramienta
grand_parent: Guía de Archiveweb.page
nav_order: 1
---

# Compartir archivos web a través de Peer-to-Peer (P2P)
Nota: Una red peer-to-peer, también red de pares o red entre pares, es una red de ordenadores en la que todos o algunos aspectos funcionan sin clientes ni servidores fijos.

¿Qué pasaría si hubiera una manera de compartir rápidamente una página archivada o incluso una pequeña colección con otros, sin tener que descargar el WACZ, subirlo, etc.?

Para hacer esto posible, ArchiveWeb.page incluye funciones experimentales para compartir archivos web, directamente desde su máquina usando protocolos de P2P.

## Compartir a través de IPFS
Hasta ahora, el protocolo [IPFS](https://ipfs.io/) es compatible y es probable que se agreguen otros en el futuro.

### IPFS parte 1: Comenzando a compartir
Para empezar a compartir:
1. Haz clic en el botón Compartir en la página de inicio de la extensión o en la página de información de la colección. Si compartes por primera vez, es posible que veas una advertencia que explique que compartir puede hacer que sus datos sean accesibles para otras personas.

![sharing-start](/assets/images/sharing/start-button.png)

2. Espera a que comience a compartir. La URL que se puede compartir (usando ReplayWeb.page) debe copiarse en su computador.

3. Para verificar, puedes abrir la URL en una nueva ventana del navegador y ver que funciona.

4. Si tienes éxito, puedes compartir esta URL con otras personas.

### IPFS parte 2: Menú para compartir
Cuando se comparte un archivo, el menú para compartir está disponible, junto con el botón Dejar de compartir.

![share-menu](/assets/images/sharing/share-menu.png)

- Haz clic en Dejar de compartir para dejar de compartir inmediatamente.
- *Copy Shareable ReplayWeb.page Link*: Copiar el enlace para compartir ReplayWeb.page copiará el enlace para compartir usando ReplayWeb.page. Este es el método preferido para compartir.
- *Copy Shareable IPFS Gateway Link*: Copiar la puerta enlace de puerta de  IPFS que sería compartible utilizando la puerta `ipfs.io` , otra forma de ver el archivo web.
- *Copy IPFS URL* : Copiar URL de IPFS copiará la URL `ipfs://` única para este archivo web. La URL contiene un hash único que identifica esta copia compartida.
- *Reshare Latest*: Está opción volverá a compartir el archivo más reciente de tu colección. Esto es útil si el archivo ha cambiado desde la última vez que se compartió o si hay algún problema (ver más abajo).

## Cómo funciona / Advertencias
La función para compartir debe considerarse experimental y no se garantiza que funcione. El intercambio funciona generando un archivo WACZ (igual que si el archivo se hubiera descargado) y luego compartiéndolo a través del protocolo IPFS. Al igual que la descarga, compartir una colección grande llevará más tiempo que una más pequeña, ya que se debe generar una WACZ completa.


Para que el uso compartido funcione, tu navegador y la extensión deben estar abiertos, ya que los datos se cargarán directamente desde su máquina (inicialmente).

El archivo generado incluye marcas de tiempo, por lo que compartir el mismo archivo varias veces dará como resultado un hash IPFS diferente. La versión compartida es una instantánea (muy parecida a un WACZ descargado) y no se actualiza automáticamente con la colección. Por esta razón, la opción Volver a Compartir Más Reciente está disponible.

ArchiveWeb.page utiliza IPFS de forma personalizada para transmitir todos los datos solo bajo demanda. Cuando un usuario carga la URL IPFS compartida de ReplayWeb.page, primero se carga la lista de páginas y luego solo se comparten las páginas que se navegan. Los usuarios que navegan por el archivo compartido pueden elegir qué páginas navegar, y solo esas páginas se sincronizan a través de IPFS.

Para crear una copia de seguridad persistente de un archivo, se recomienda un servicio de "fijación" externo. Dichos servicios pueden "anclar" el hash de IPFS, que se puede obtener de Copiar URL de IPFS (*Copy IPFS URL*), y hacer que esté disponible. Consulte Documentos de IPFS sobre persistencia y fijación [IPFS Docs on persistence and pinning](https://docs.ipfs.io/concepts/persistence/#persistence-versus-permanence) para obtener más información al respecto.

## Reparos / Solución de problemas
La carga a través de una red de peer-to-peer tiene sus inconvenientes, incluido que puede ser más lenta que la carga desde un servidor web. Al cargar una URL IPFS que se puede compartir en ReplayWeb.page, puede llevar varios segundos o incluso minutos cargar el archivo web, ya que debe conectarse a un nodo IPFS intermediario y luego a la máquina que aloja la extensión.

Como esta función es experimental, es posible que no siempre funcione. Una fuente de errores es si se interrumpe la conexión a la red IPFS.

ArchiveWeb.page intentará volver a conectarse si puede.
- Si ya no se puede acceder a un archivo previamente compartido a través del enlace para compartir, puede intentar dejar de compartir y volver a compartirlo.
- Si el uso compartido no se inicia, puede deshabilitar y volver a habilitar la extensión, o reiniciar el navegador.

Esperamos abordar estos problemas en futuras actualizaciones.

