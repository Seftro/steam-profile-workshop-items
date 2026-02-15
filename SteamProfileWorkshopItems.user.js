// ==UserScript==
// @name        Steam profile link to workshop items
// @namespace   Violentmonkey Scripts
// @match       *://steamcommunity.com/id/*
// @grant       none
// @version     1.0
// @author      Seftro
// @description 15/2/2026, 23:59:37
// ==/UserScript==

(function() {
    'use strict';

    // Selecciona el primer elemento con la clase (los botones donde va a ir este)
    const contenedor = document.querySelector('.profile_header_actions');

    if (contenedor) {
        // Le añade el código al div
        contenedor.innerHTML += `<a data-panel="{&quot;autoFocus&quot;:true,&quot;focusable&quot;:true,&quot;clickOnActivate&quot;:true}" role="button" id="btn_goto_items" class="btn_profile_action btn_medium" href="myworkshopfiles">
										<span>See Items</span>
									</a>`;
    }
    // Obtiene la URL actual
  let currentUrl = new URL(window.location.href);

  // Si no termina en '/', se lo añade al pathname (leading slash)
  if (!currentUrl.pathname.endsWith('/')) {
    let newPath = currentUrl.pathname + '/';

    // Actualiza la URL de la barra sin recargar la página
    window.history.pushState(null, '', newPath + currentUrl.search + currentUrl.hash);
  }
})();
