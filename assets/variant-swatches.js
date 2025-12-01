class variantSwatches extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
        this.querySelectorAll(".variant-image img").forEach(swatch => {
        swatch.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          const mainImage = event.target.closest(".card-wrapper").querySelector(".card__media .media img");
          const newImage = event.target.src;
          mainImage.setAttribute("src", newImage);
          mainImage.removeAttribute("srcset");
          console.log(mainImage);
          console.log(newImage);
        });
      });
  }
}
customElements.define('variant-swatches', variantSwatches);