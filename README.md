# para-leer-ole
Pequeña extensión de Chrome para leer las noticias del sitio Olé sin necesidad de registrarse.

## ¿Qué hace?

```javascript
function removeOverlay(height) {
  const iframeOverlays = document.querySelectorAll(".modal-pase");
  const iframe = document.querySelector("iframe");
  const news = document.querySelector(".ole-site");

  iframe.parentNode.removeChild(iframe);
  iframeOverlays.forEach(function(overlay) {
    overlay.innerHTML = "";
    overlay.parentNode.removeChild(overlay);
  });
  news.style.height = height;
  news.style.overflow = "auto";
}
```

# Licencia
MIT