'use client';
import { useEffect } from 'react';

const GosWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pos.gosuslugi.ru/bin/script.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (typeof window === 'undefined' || !window.document) {
    return null;
  }
  return (
    <>
      <style>
        {`#js-show-iframe-wrapper{position:relative;display:flex;align-items:center;justify-content:center;width:100%;min-width:293px;max-width:100%;background:linear-gradient(138.4deg,#38bafe 26.49%,#2d73bc 79.45%);color:#fff;cursor:pointer}#js-show-iframe-wrapper .pos-banner-fluid *{box-sizing:border-box}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2{display:block;width:240px;min-height:56px;font-size:18px;line-height:24px;cursor:pointer;background:#0d4cd3;color:#fff;border:none;border-radius:8px;outline:0}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover{background:#1d5deb}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus{background:#2a63ad}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active{background:#2a63ad}@-webkit-keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@font-face{font-family:LatoWebLight;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:LatoWeb;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:LatoWebBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:RobotoWebLight;src:url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:RobotoWebRegular;src:url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:RobotoWebBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:ScadaWebRegular;src:url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:ScadaWebBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:Geometria;src:url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.eot);src:url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.eot?#iefix) format("embedded-opentype"),url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Geometria-ExtraBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.eot);src:url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.eot?#iefix) format("embedded-opentype"),url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.ttf) format("truetype");font-weight:900;font-style:normal}`}
      </style>

      <style>
        {`#js-show-iframe-wrapper .bf-2{position:relative;display:grid;grid-template-columns:var(--pos-banner-fluid-2__grid-template-columns);grid-template-rows:var(--pos-banner-fluid-2__grid-template-rows);width:100%;max-width:1060px;font-family:LatoWeb,sans-serif;box-sizing:border-box}#js-show-iframe-wrapper .bf-2__decor{grid-column:var(--pos-banner-fluid-2__decor-grid-column);grid-row:var(--pos-banner-fluid-2__decor-grid-row);padding:var(--pos-banner-fluid-2__decor-padding);background:var(--pos-banner-fluid-2__bg-url) var(--pos-banner-fluid-2__bg-position) no-repeat;background-size:var(--pos-banner-fluid-2__bg-size)}#js-show-iframe-wrapper .bf-2__logo-wrap{position:absolute;top:var(--pos-banner-fluid-2__logo-wrap-top);bottom:var(--pos-banner-fluid-2__logo-wrap-bottom);right:0;display:flex;flex-direction:column;align-items:flex-end;padding:var(--pos-banner-fluid-2__logo-wrap-padding);background:#2d73bc;border-radius:var(--pos-banner-fluid-2__logo-wrap-border-radius)}#js-show-iframe-wrapper .bf-2__logo{width:128px}#js-show-iframe-wrapper .bf-2__slogan{font-family:LatoWebBold,sans-serif;font-size:var(--pos-banner-fluid-2__slogan-font-size);line-height:var(--pos-banner-fluid-2__slogan-line-height);color:#fff}#js-show-iframe-wrapper .bf-2__content{padding:var(--pos-banner-fluid-2__content-padding)}#js-show-iframe-wrapper .bf-2__description{display:flex;flex-direction:column;margin-bottom:24px}#js-show-iframe-wrapper .bf-2__text{margin-bottom:12px;font-size:24px;line-height:32px;font-family:LatoWebBold,sans-serif;color:#fff}#js-show-iframe-wrapper .bf-2__text_small{margin-bottom:0;font-size:16px;line-height:24px;font-family:LatoWeb,sans-serif}#js-show-iframe-wrapper .bf-2__btn-wrap{display:flex;align-items:center;justify-content:center}`}
      </style>
      <div id="js-show-iframe-wrapper">
        <div className="pos-banner-fluid bf-2">
          <div className="bf-2__decor">
            <div className="bf-2__logo-wrap">
              <img
                className="bf-2__logo"
                src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo.svg"
                alt="Госуслуги"
              />
              <div className="bf-2__slogan">Решаем вместе</div>
            </div>
          </div>
          <div className="bf-2__content">
            <div className="bf-2__description">
              <span className="bf-2__text">Не убран мусор, яма на дороге, не горит фонарь?</span>
              <span className="bf-2__text bf-2__text_small">
                Столкнулись с проблемой&nbsp;— сообщите о ней!
              </span>
            </div>

            <div className="bf-2__btn-wrap">
              {/* <!-- pos-banner-btn_2 не удалять; другие классы не добавлять --> */}
              <button className="pos-banner-btn_2" type="button">
                Сообщить о проблеме
              </button>
            </div>
          </div>
        </div>
      </div>
      <script>
        {(function () {
          'use strict';
          function ownKeys(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              if (t)
                n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                });
              o.push.apply(o, n);
            }
            return o;
          }
          function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {};
              if (t % 2)
                ownKeys(Object(o), true).forEach(function (t) {
                  _defineProperty(e, t, o[t]);
                });
              else if (Object.getOwnPropertyDescriptors)
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(o));
              else
                ownKeys(Object(o)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                });
            }
            return e;
          }
          function _defineProperty(e, t, o) {
            if (t in e)
              Object.defineProperty(e, t, {
                value: o,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            else e[t] = o;
            return e;
          }
          var POS_PREFIX_2 = '--pos-banner-fluid-2__',
            posOptionsInitial = {
              'grid-template-columns': '100%',
              'grid-template-rows': '310px auto',
              'decor-grid-column': 'initial',
              'decor-grid-row': 'initial',
              'decor-padding': '30px 30px 0 30px',
              'bg-url':
                "url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2-small.svg')",
              'bg-position': 'calc(10% + 64px) calc(100% - 20px)',
              'bg-size': 'cover',
              'content-padding': '0 30px 30px 30px',
              'slogan-font-size': '20px',
              'slogan-line-height': '32px',
              'logo-wrap-padding': '20px 30px 30px 40px',
              'logo-wrap-top': '0',
              'logo-wrap-bottom': 'initial',
              'logo-wrap-border-radius': '0 0 0 80px',
            },
            setStyles = function (e, t) {
              Object.keys(e).forEach(function (o) {
                t.style.setProperty(POS_PREFIX_2 + o, e[o]);
              });
            },
            removeStyles = function (e, t) {
              Object.keys(e).forEach(function (e) {
                t.style.removeProperty(POS_PREFIX_2 + e);
              });
            };
          function changePosBannerOnResize() {
            var e = document.documentElement,
              t = _objectSpread({}, posOptionsInitial),
              o = document.getElementById('js-show-iframe-wrapper'),
              n = o ? o.offsetWidth : document.body.offsetWidth;
            if (n > 405)
              (t['slogan-font-size'] = '24px'), (t['logo-wrap-padding'] = '30px 50px 30px 70px');
            if (n > 500)
              (t['grid-template-columns'] = 'min-content 1fr'),
                (t['grid-template-rows'] = '100%'),
                (t['decor-grid-column'] = '2'),
                (t['decor-grid-row'] = '1'),
                (t['decor-padding'] = '30px 30px 30px 0'),
                (t['content-padding'] = '30px'),
                (t['bg-position'] = '0% calc(100% - 70px)'),
                (t['logo-wrap-padding'] = '30px 30px 24px 40px'),
                (t['logo-wrap-top'] = 'initial'),
                (t['logo-wrap-bottom'] = '0'),
                (t['logo-wrap-border-radius'] = '80px 0 0 0');
            if (n > 585) t['bg-position'] = '0% calc(100% - 6px)';
            if (n > 800)
              (t['bg-url'] =
                "url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2.svg')"),
                (t['bg-position'] = '0% center');
            if (n > 1020)
              (t['slogan-font-size'] = '32px'),
                (t['line-height'] = '40px'),
                (t['logo-wrap-padding'] = '30px 30px 24px 50px');
            setStyles(t, e);
          }
          changePosBannerOnResize(),
            window.addEventListener('resize', changePosBannerOnResize),
            (window.onunload = function () {
              var e = document.documentElement;
              window.removeEventListener('resize', changePosBannerOnResize),
                removeStyles(posOptionsInitial, e);
            });
        })()}
      </script>
    </>
  );
};

export default GosWidget;
