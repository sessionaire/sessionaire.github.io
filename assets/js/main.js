(()=>{(function(){var u=window.location.hostname;if(u==="localhost"||u==="127.0.0.1"||u.startsWith("192.168.")||u.startsWith("10.")||u===""||u.endsWith(".local"))return;var a=document.createElement("script");a.async=!0,a.src="https://www.googletagmanager.com/gtag/js?id=G-KJCLJSX4HE",document.head.appendChild(a),window.dataLayer=window.dataLayer||[];function r(){dataLayer.push(arguments)}window.gtag=r,r("js",new Date),r("config","G-KJCLJSX4HE")})();(function(){"use strict";function u(){var n=document.getElementById("mobile-menu-btn"),o=document.getElementById("mobile-menu"),i=n?n.querySelector(".menu-icon-hamburger"):null,d=n?n.querySelector(".menu-icon-close"):null;function p(m){i&&d&&(m?(i.classList.add("hidden"),d.classList.remove("hidden")):(i.classList.remove("hidden"),d.classList.add("hidden")))}n&&o&&(n.addEventListener("click",function(){var m=o.classList.contains("hidden");o.classList.toggle("hidden"),p(m)}),document.addEventListener("click",function(m){!n.contains(m.target)&&!o.contains(m.target)&&(o.classList.add("hidden"),p(!1))}))}function a(){var n=document.querySelectorAll('a[href^="#"]');n.forEach(function(o){o.addEventListener("click",function(i){var d=this.getAttribute("href");if(!(!d||d==="#"||!d.startsWith("#")||d.length<2)&&/^#[a-zA-Z_][a-zA-Z0-9_-]*$/.test(d))try{var p=document.querySelector(d);p&&(i.preventDefault(),p.scrollIntoView({behavior:"smooth",block:"start"}))}catch(m){}})})}function r(){var n=document.getElementById("screenshot-modal"),o=document.getElementById("modal-image");!n||!o||(document.addEventListener("keydown",function(i){i.key==="Escape"&&closeScreenshot()}),n.addEventListener("click",function(i){i.target===n&&closeScreenshot()}))}window.openScreenshot=function(n){var o=document.getElementById("screenshot-modal"),i=document.getElementById("modal-image");o&&i&&(i.src=n,o.classList.add("active"),document.body.style.overflow="hidden")},window.closeScreenshot=function(){var n=document.getElementById("screenshot-modal");n&&(n.classList.remove("active"),document.body.style.overflow="")};function v(){var n=document.getElementById("hero-version");n&&window.SESSIONAIRE_RELEASES&&window.SESSIONAIRE_RELEASES.length>0&&(n.textContent=window.SESSIONAIRE_RELEASES[0].version)}function f(){var n=document.createElement("script");n.src="assets/js/releases-data.js",n.onload=v,n.onerror=function(){},document.head.appendChild(n)}function E(){u(),a(),r(),f()}document.addEventListener("DOMContentLoaded",E)})();(function(){"use strict";let a=1,r=[];function v(){if(r=window.SESSIONAIRE_RELEASES||[],r.length===0)return;const e=r[0],t=document.getElementById("latest-version");t&&(t.textContent=e.version);const l=document.getElementById("latest-date");l&&(l.textContent=o(e.date));const s=document.getElementById("download-xpi");s&&e.downloadUrl&&(s.href=e.downloadUrl);const c=document.getElementById("latest-changelog");c&&(c.innerHTML=i(e.changelog)),f()}function f(){const e=document.getElementById("releases-list");if(!e)return;const t=Math.ceil(r.length/5),l=(a-1)*5,s=l+5,g=r.slice(l,s).map((h,y)=>{const b=l+y;return`
        <div class="bg-white rounded-xl border border-gray-200 overflow-hidden ${b===0?"ring-2 ring-primary-500":""}">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <h3 class="font-display font-semibold text-lg text-gray-900">${h.version}</h3>
                ${b===0?'<span class="bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full text-xs font-medium">Latest</span>':""}
              </div>
              <span class="text-gray-500 text-sm">${o(h.date)}</span>
            </div>

            <div class="text-gray-600 text-sm mb-4">
              ${d(h.changelog)}
            </div>

            <div class="flex gap-3">
              ${h.downloadUrl?`
                <a href="${h.downloadUrl}" class="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download
                </a>
              `:""}
              ${h.releaseUrl?`
                <a href="${h.releaseUrl}" target="_blank" class="text-gray-500 hover:text-gray-700 font-medium text-sm flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  View Release
                </a>
              `:""}
            </div>
          </div>
        </div>
      `}).join(""),w=t>1?E(t):"";e.innerHTML=g+w,t>1&&n()}function E(e){const t=[];let s=Math.max(1,a-Math.floor(2.5)),c=Math.min(e,s+5-1);c-s+1<5&&(s=Math.max(1,c-5+1)),t.push(`
      <button class="pagination-btn pagination-prev ${a===1?"disabled":""}"
              ${a===1?"disabled":""} data-page="${a-1}">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        <span class="hidden sm:inline">Previous</span>
      </button>
    `),s>1&&(t.push('<button class="pagination-btn pagination-num" data-page="1">1</button>'),s>2&&t.push('<span class="pagination-ellipsis">...</span>'));for(let g=s;g<=c;g++)t.push(`
        <button class="pagination-btn pagination-num ${g===a?"active":""}" data-page="${g}">
          ${g}
        </button>
      `);return c<e&&(c<e-1&&t.push('<span class="pagination-ellipsis">...</span>'),t.push(`<button class="pagination-btn pagination-num" data-page="${e}">${e}</button>`)),t.push(`
      <button class="pagination-btn pagination-next ${a===e?"disabled":""}"
              ${a===e?"disabled":""} data-page="${a+1}">
        <span class="hidden sm:inline">Next</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    `),`
      <div class="pagination-container mt-8">
        <div class="pagination-info text-sm text-gray-500 mb-4 text-center">
          Showing ${(a-1)*5+1}-${Math.min(a*5,r.length)} of ${r.length} releases
        </div>
        <div class="pagination-controls flex items-center justify-center gap-2 flex-wrap">
          ${t.join("")}
        </div>
      </div>
    `}function n(){document.querySelectorAll(".pagination-btn:not(.disabled)").forEach(e=>{e.addEventListener("click",t=>{var s;const l=parseInt(t.currentTarget.dataset.page);l&&l!==a&&(a=l,f(),(s=document.getElementById("releases-list"))==null||s.scrollIntoView({behavior:"smooth",block:"start"}))})})}function o(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):""}function i(e){return!e||e.length===0?'<p class="text-gray-500">No changelog available.</p>':`
      <ul class="space-y-2">
        ${e.map(t=>`
          <li class="flex items-start gap-2">
            <span class="text-primary-500 mt-1">•</span>
            <span>${p(t)}</span>
          </li>
        `).join("")}
      </ul>
    `}function d(e){if(!e||e.length===0)return"No changes listed.";const t=3,l=e.slice(0,t),s=e.length-t;let c=l.map(g=>`• ${p(g)}`).join("<br>");return s>0&&(c+=`<br><span class="text-gray-400">+${s} more changes</span>`),c}function p(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function m(){const e=document.createElement("script");e.src="assets/js/releases-data.js",e.onload=v,e.onerror=()=>{const t=document.getElementById("releases-list");t&&(t.innerHTML=`
          <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
            <p class="text-yellow-800">Unable to load releases. Please check back later.</p>
          </div>
        `)},document.head.appendChild(e)}document.addEventListener("DOMContentLoaded",m)})();})();
