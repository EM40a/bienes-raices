import { loadNosotrosHandler, loadCasasHandler } from "./contentLoad.js";

document.addEventListener("DOMContentLoaded", onInit);

function onInit(e) {
  console.log(
    'Un sabio una vez dijo: "Cuanto mas css sepas menos js vas a usar"'
  );

  console.log("(yo soy el sabio)");
  loadNosotrosHandler(e);
  loadCasasHandler(e);
}
