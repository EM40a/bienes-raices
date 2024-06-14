import { NOSOTROS, CASAS, BLOG } from "./data.js";

const loadNosotrosHandler = (e) => {
  const $contenedor = document.getElementById("container-nosotros");
  const $template = document.getElementById("template-nosotros").content;

  NOSOTROS.forEach(({ title, content }, i) => {
    const clone = document.importNode($template, true);
    clone.querySelector("figcaption").textContent = title;
    clone.querySelector("img").src = `public/icono${i + 1}.svg`;
    clone.querySelector("img").alt = title;
    clone.querySelector("p").textContent = content;
    $contenedor.appendChild(clone);
  });
};

const loadCasasHandler = (e) => {
  const $contenedor = document.getElementById("container-casas");
  const $template = document.getElementById("template-casas").content;

  const $templateTools = document.getElementById("template-tools").content;

  CASAS.map(({ title, content, price, tools }, i) => {
    const clone = document.importNode($template, true);
    clone.querySelector("h3").textContent = title;
    clone.querySelector("p").textContent = content;
    clone.querySelector("img").src = `public/anuncio${i + 1}.jpg`;
    clone.querySelector("img").alt = title;
    clone.querySelector("h4").textContent = price.toLocaleString("es-ES", {
      style: "currency",
      currency: "USD",
    });

    const $contenedorTools = clone.getElementById("tools");

    tools.map(({ src, count }) => {
      const cloneTools = document.importNode($templateTools, true);
      cloneTools.querySelector("img").src = `public/${src}.svg`;
      cloneTools.querySelector("img").alt = src;
      cloneTools.querySelector("figcaption").textContent = count;
      $contenedorTools.appendChild(cloneTools);
    });

    $contenedor.appendChild(clone);
  });
};

const loadBlogHandler = (e) => {
  const $contenedor = document.getElementById("container-blog");
  const $template = document.getElementById("template-blog").content;

  BLOG.forEach(({ title, content, time, author }, i) => {
    const clone = document.importNode($template, true);
    clone.querySelector("h2").textContent = title;
    clone.querySelector("img").src = `public/blog${i + 1}.jpg`;
    clone.querySelector("img").alt = title;
    clone.querySelector("time").textContent = time;
    clone.querySelector("time").dateTime = time;
    clone.querySelector("author").textContent = author;
    clone.querySelector(".content").textContent = content;
    $contenedor.appendChild(clone);
  });
};

export { loadNosotrosHandler, loadCasasHandler, loadBlogHandler };
