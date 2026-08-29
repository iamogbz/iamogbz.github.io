class Logo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .ring {
          animation: progress 3s linear normal infinite;
          fill: none;
          stroke-dasharray: 720 180;
        }

        .left {
          transform: translate(100px, 0) rotate(90deg);
        }

        .right {
          animation-delay: 1.5s;
          animation-direction: reverse;
          transform: translate(100px, 200px) rotate(-90deg);
        }

        @keyframes progress {
          0%,
          10% {
            stroke-dashoffset: 100;
          }

          90%,
          100% {
            stroke-dashoffset: -900;
          }
        }
      </style>
      <svg
        height="${this.getAttribute("height") || this.getAttribute("width")}"
        width="${this.getAttribute("width") || this.getAttribute("height")}"
        viewBox="-260 -260 720 720"
      >
        <path
          class="ring left"
          stroke="#f8f4f2"
          stroke-linecap="round"
          stroke-width="32"
          fill-rule="nonzero"
          fill="none"
          d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200,0"
        ></path>
        <path
          class="ring right"
          stroke="#f8f4f2"
          stroke-linecap="round"
          stroke-width="32"
          fill-rule="nonzero"
          fill="none"
          d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200,0"
        ></path>
      </svg>
    `;
  }
}

customElements.define("og-logo", Logo);
