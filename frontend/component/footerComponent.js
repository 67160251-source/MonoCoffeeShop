class footerComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
        .footer-main {
            display: flex;
            justify-content: space-between;
            text-align: left;
            width: 100%;
            padding: auto;
        }
    </style>
    <div class="footer-main">
        <div>
            <h1>About us</h1>
            <p>ร้านกาแฟตึงๆ</p>
        </div>
        <div>
            <h1>Social</h1>
            <p>0999999999</p>
            <p>IG:mono_axk</p>
            <p>Facebook:Mono sawatdee</p>
        </div>
        <div>
            <h1>Location</h1>
            <p>แถวบ้านพ่อมึง</p>
        </div>
        <div>
            <h1>Announcement</h1>
            <p>ยังไม่มีอะไรประกาศ</p>
        </div>
    </div>`;
  }
}

customElements.define("coffee-footer", footerComponent);
