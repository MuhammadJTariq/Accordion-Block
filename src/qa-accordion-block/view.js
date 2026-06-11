/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */


const items = document.querySelectorAll(".qa-item");
const title = document.querySelector('.entry-title');

if (document.querySelector('.qa-accordion')) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": []
  };

  const script = document.createElement('script');

  script.id = "faq-schema-" + (title?.textContent?.replace(/\s+/g, '-').toLowerCase() || "default");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);

  document.head.appendChild(script);

  console.log("Schema added:", script);
}

items.forEach(item => {
    const content = item.querySelector(".qa-content");
    const title = item.querySelector('.title-area');
    const icons = item.querySelector(".dashicons");

    icons.addEventListener("click", function(){
        if(!content.classList.contains('expand')){
            content.classList.add('expand');
            if(icons.classList.contains('back')){
                icons.classList.remove('back');
            }
            icons.classList.add('rotate');

        }
        else{
            content.classList.remove('expand');
            icons.classList.add('back');
            icons.classList.remove('rotate');
        }
    })
    
    
})