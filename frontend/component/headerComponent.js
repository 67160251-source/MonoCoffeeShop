class headerComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
        .header-logo {
            width: 135.4px;
            height: 73.8px;
        }

        .header-banner {
            box-shadow: lavenderblush;
            display: flex;
        }

        .header-container {
            text-align: center;
            margin: 10px;
            align-items: center;
        }

        .header-container-right {
            text-align: center;
            margin: 10px;
            align-items: center;
            margin-left: auto;
        }
    </style>
    <div class="header-banner">
        <div class="header-logo">
            <img src="src/monologo.png" alt="header-logo" class="header-logo">
        </div>
        <div class="header-container">
            <a href="https://github.com/67160251-source">ข่าวสาร</a>
            <a href="https://github.com/67160251-source">สินค้า</a>
            <a href="https://github.com/67160251-source">ค้นหาสาขา</a>
        </div>
        <div class="header-container-right">
            <a href="https://github.com/67160251-source">สมัครสมาชิก</a>
            <a href="https://github.com/67160251-source">เข้าสู่ระบบ</a>
        </div>
    </div>`;
  }
}
customElements.define("coffee-header", headerComponent);
