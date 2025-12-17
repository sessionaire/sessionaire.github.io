(()=>{(function(){var c=window.location.hostname;if(c==="localhost"||c==="127.0.0.1"||c.startsWith("192.168.")||c.startsWith("10.")||c===""||c.endsWith(".local"))return;var a=document.createElement("script");a.async=!0,a.src="https://www.googletagmanager.com/gtag/js?id=G-KJCLJSX4HE",document.head.appendChild(a),window.dataLayer=window.dataLayer||[];function i(){dataLayer.push(arguments)}window.gtag=i,i("js",new Date),i("config","G-KJCLJSX4HE")})();(function(){"use strict";function c(){var n=document.getElementById("mobile-menu-btn"),o=document.getElementById("mobile-menu");n&&o&&(n.addEventListener("click",function(){o.classList.toggle("hidden")}),document.addEventListener("click",function(r){!n.contains(r.target)&&!o.contains(r.target)&&o.classList.add("hidden")}))}function a(){var n=document.querySelectorAll('a[href^="#"]');n.forEach(function(o){o.addEventListener("click",function(r){r.preventDefault();var v=this.getAttribute("href"),g=document.querySelector(v);g&&g.scrollIntoView({behavior:"smooth",block:"start"})})})}function i(){var n=document.getElementById("screenshot-modal"),o=document.getElementById("modal-image");!n||!o||(document.addEventListener("keydown",function(r){r.key==="Escape"&&closeScreenshot()}),n.addEventListener("click",function(r){r.target===n&&closeScreenshot()}))}window.openScreenshot=function(n){var o=document.getElementById("screenshot-modal"),r=document.getElementById("modal-image");o&&r&&(r.src=n,o.classList.add("active"),document.body.style.overflow="hidden")},window.closeScreenshot=function(){var n=document.getElementById("screenshot-modal");n&&(n.classList.remove("active"),document.body.style.overflow="")};function f(){var n=document.getElementById("hero-version");n&&window.SESSIONAIRE_RELEASES&&window.SESSIONAIRE_RELEASES.length>0&&(n.textContent=window.SESSIONAIRE_RELEASES[0].version)}function p(){var n=document.createElement("script");n.src="assets/js/releases-data.js",n.onload=f,n.onerror=function(){},document.head.appendChild(n)}function h(){c(),a(),i(),p()}document.addEventListener("DOMContentLoaded",h)})();(function(){"use strict";let a=1,i=[];function f(){if(i=window.SESSIONAIRE_RELEASES||[],i.length===0)return;const e=i[0],t=document.getElementById("latest-version");t&&(t.textContent=e.version);const l=document.getElementById("latest-date");l&&(l.textContent=o(e.date));const s=document.getElementById("download-xpi");s&&e.downloadUrl&&(s.href=e.downloadUrl);const d=document.getElementById("latest-changelog");d&&(d.innerHTML=r(e.changelog)),p()}function p(){const e=document.getElementById("releases-list");if(!e)return;const t=Math.ceil(i.length/5),l=(a-1)*5,s=l+5,m=i.slice(l,s).map((u,x)=>{const E=l+x;return`
        <div class="bg-white rounded-xl border border-gray-200 overflow-hidden ${E===0?"ring-2 ring-primary-500":""}">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <h3 class="font-display font-semibold text-lg text-gray-900">${u.version}</h3>
                ${E===0?'<span class="bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full text-xs font-medium">Latest</span>':""}
              </div>
              <span class="text-gray-500 text-sm">${o(u.date)}</span>
            </div>

            <div class="text-gray-600 text-sm mb-4">
              ${v(u.changelog)}
            </div>

            <div class="flex gap-3">
              ${u.downloadUrl?`
                <a href="${u.downloadUrl}" class="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download
                </a>
              `:""}
              ${u.releaseUrl?`
                <a href="${u.releaseUrl}" target="_blank" class="text-gray-500 hover:text-gray-700 font-medium text-sm flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  View Release
                </a>
              `:""}
            </div>
          </div>
        </div>
      `}).join(""),b=t>1?h(t):"";e.innerHTML=m+b,t>1&&n()}function h(e){const t=[];let s=Math.max(1,a-Math.floor(2.5)),d=Math.min(e,s+5-1);d-s+1<5&&(s=Math.max(1,d-5+1)),t.push(`
      <button class="pagination-btn pagination-prev ${a===1?"disabled":""}"
              ${a===1?"disabled":""} data-page="${a-1}">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        <span class="hidden sm:inline">Previous</span>
      </button>
    `),s>1&&(t.push('<button class="pagination-btn pagination-num" data-page="1">1</button>'),s>2&&t.push('<span class="pagination-ellipsis">...</span>'));for(let m=s;m<=d;m++)t.push(`
        <button class="pagination-btn pagination-num ${m===a?"active":""}" data-page="${m}">
          ${m}
        </button>
      `);return d<e&&(d<e-1&&t.push('<span class="pagination-ellipsis">...</span>'),t.push(`<button class="pagination-btn pagination-num" data-page="${e}">${e}</button>`)),t.push(`
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
          Showing ${(a-1)*5+1}-${Math.min(a*5,i.length)} of ${i.length} releases
        </div>
        <div class="pagination-controls flex items-center justify-center gap-2 flex-wrap">
          ${t.join("")}
        </div>
      </div>
    `}function n(){document.querySelectorAll(".pagination-btn:not(.disabled)").forEach(e=>{e.addEventListener("click",t=>{var s;const l=parseInt(t.currentTarget.dataset.page);l&&l!==a&&(a=l,p(),(s=document.getElementById("releases-list"))==null||s.scrollIntoView({behavior:"smooth",block:"start"}))})})}function o(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):""}function r(e){return!e||e.length===0?'<p class="text-gray-500">No changelog available.</p>':`
      <ul class="space-y-2">
        ${e.map(t=>`
          <li class="flex items-start gap-2">
            <span class="text-primary-500 mt-1">•</span>
            <span>${g(t)}</span>
          </li>
        `).join("")}
      </ul>
    `}function v(e){if(!e||e.length===0)return"No changes listed.";const t=3,l=e.slice(0,t),s=e.length-t;let d=l.map(m=>`• ${g(m)}`).join("<br>");return s>0&&(d+=`<br><span class="text-gray-400">+${s} more changes</span>`),d}function g(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function w(){const e=document.createElement("script");e.src="assets/js/releases-data.js",e.onload=f,e.onerror=()=>{const t=document.getElementById("releases-list");t&&(t.innerHTML=`
          <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
            <p class="text-yellow-800">Unable to load releases. Please check back later.</p>
          </div>
        `)},document.head.appendChild(e)}document.addEventListener("DOMContentLoaded",w)})();})();
