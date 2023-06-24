const template = document.createElement("template");
template.innerHTML = `
  <style>
    #logo .ring {
      fill: none;
      stroke-dasharray: 720 180;
      stroke-linecap: round;
      stroke: #ff1251;
      stroke-width: 30px;
      animation: progress 3s linear normal infinite;
    }
    #logo .left {
      transform: translate(100px, 0) rotate(90deg);
    }
    #logo .right {
      transform: translate(100px, 200px) rotate(-90deg);
      animation-delay: 1.5s;
      animation-direction: reverse;
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
  <svg id="logo" height="80" width="160" viewBox="-20 -20 240 240">
    <path class="ring left" d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200,0" fill="none" />
    <path class="ring right" d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200,0" />
  </svg>
`;

class LogoBoros extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("logo-bz", LogoBoros);
