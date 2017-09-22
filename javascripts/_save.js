
;$( document ).ready(function() {

  var multiCrowbar = (function() {
      /*
       * SVG Export
       * converts html labels to svg text nodes
       * will produce incorrect results when used with multi-line html texts
       *
       * Author: Gregor Aisch
       * based on https://github.com/NYTimes/svg-crowbar/blob/gh-pages/svg-crowbar-2.js
       */

      window.d3 = null;
      var s = document.createElement('script');
      s.src = 'https://d3js.org/d3.v3.min.js';
      document.getElementsByTagName('head')[0].appendChild(s);
      function check() {
          if (!window.d3) return setTimeout(check, 200);
          // console.log('ready...');
          // run('body');
      }
      check();
      var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';

      var fontFamilyMapping = {
          'nyt-franklin': 'NYTFranklin'
      };

      return function(cont, label_selector) {
          var parent = d3.select(cont),
              parent_n = parent.node();

          var out_w = parent_n.nodeName == 'body' ? parent_n.scrollWidth : parent_n.clientWidth,
              out_h = parent_n.nodeName == 'body' ? parent_n.scrollHeight: parent_n.clientHeight;

          var labels = label_selector ? parent.selectAll(label_selector) : null,
              nodes = parent.selectAll('path, line, rect, circle, text'),
              copydefs = parent.selectAll('linearGradient,radialGradient,filter,pattern,clipPath');
              // divs = parent.selectAll('.export-rect,.rect'),
              // circles = parent.selectAll('.circle');


          var svgNodes = parent.selectAll('svg');

          // 1. create a new svg container of the size of the page
          var out = parent.append('svg');

          // empty css declaration
          var emptyCSS = window.getComputedStyle(out.node());

          out.attr({ width: out_w, height: out_h })
              .style({ position: 'absolute', left: 0, top: 0 });

          var out_defs = out.append('defs');

          copydefs.each(function() {
              var el = this;
              var cloned = el.cloneNode(true);
              out_defs.node().appendChild(cloned);
          });

          // top offset to parent element
          var offsetTop = parent_n.getBoundingClientRect().top,
              offsetLeft = parent_n.getBoundingClientRect().left;// - parent_n.parentNode.getBoundingClientRect().top;

          var out_g = out.append('g').attr('id', 'svg');

          nodes.each(function() {
              var el = this,
                  cur = el,
                  curCSS,
                  bbox,
                  transforms = [];
              while (cur) {
                  curCSS = getComputedStyle(cur);
                  if (cur.nodeName == 'defs') return;
                  if (cur.nodeName != 'svg') {
                      // check node visibility
                      transforms.push(attr(cur, 'transform'));
                      cur = cur.parentNode;
                  } else {
                      bbox = cur.getBoundingClientRect();
                      transforms.push('translate('+[bbox.left - offsetLeft, bbox.top - offsetTop]+')');
                      cur = null;
                  }
                  if (isHidden(curCSS)) return;
              }
              transforms = transforms.filter(function(d) { return d; }).reverse();
              var cloned = el.cloneNode(true);
              cloned.setAttribute('transform', transforms.join(' '));

              // copy all computed style attributes
              explicitlySetStyle(el, cloned);
              out_g.node().appendChild(cloned);
          });

          if (labels) {
              out_g = out.append('g').attr('id', 'text');

              labels.each(function() {
                  // create a text node for each label
                  var el = this,
                      cur = el,
                      bbox = el.getBoundingClientRect(),
                      align = 'left',
                      content = el.innerText,
                      transforms = [];

                  var lblPos = { x: bbox.left - offsetLeft, y: bbox.top - offsetTop };

                  var txt = out_g.append('text')
                      .text(content)
                      .attr({ x: lblPos.x });

                  copyTextStyles(el, txt.node());

                  txt.attr('y', lblPos.y)
                      .style('dominant-baseline', 'text-before-edge');

                  bbox = txt.node().getBoundingClientRect();
                  txt.attr('y', lblPos.y+bbox.height).style('dominant-baseline', 'text-after-edge');
              });
          }

          download(out.node(), cont.replace(/\.#/g, ''));

          out.remove();

          // labels.remove();
          // svgNodes.remove();

          function isHidden(css) {
              return css.display == 'none' ||
                  css.visibility == 'hidden' ||
                  +css.opacity === 0 ||
                      (+css.fillOpacity === 0 || css.fill == 'none') &&
                      (css.stroke == 'none' || !css.stroke || +css.strokeOpacity === 0);
          }

          function explicitlySetStyle(element, target) {
              var elCSS = getComputedStyle(element),
                  i, len, key, value,
                  computedStyleStr = "";
              for (i=0, len=elCSS.length; i<len; i++) {
                  key=elCSS[i];
                  value=elCSS.getPropertyValue(key);
                  if (value!==emptyCSS.getPropertyValue(key)) {
                      if (key == 'font-family' && fontFamilyMapping[value]) value = fontFamilyMapping[value];
                      computedStyleStr+=key+":"+value+";";
                  }
              }
              target.setAttribute('style', computedStyleStr);
          }

          function copyTextStyles(element, target) {
              var elCSS = getComputedStyle(element),
                  i, len, key, value,
                  computedStyleStr = "";
              for (i=0, len=elCSS.length; i<len; i++) {
                  key=elCSS[i];
                  if (key.substr(0,4) == 'font' || key.substr(0,4) == 'text' || key == 'color') {
                      value=elCSS.getPropertyValue(key);
                      if (key == 'color') key = 'fill';
                      if (value!==emptyCSS.getPropertyValue(key)) {
                          if (key == 'font-family' && fontFamilyMapping[value]) value = fontFamilyMapping[value];
                          computedStyleStr+=key+":"+value+";";
                      }
                  }
              }
              target.setAttribute('style', computedStyleStr);
          }

          function download(svg, filename) {
              var source = (new XMLSerializer()).serializeToString(svg);
              var url = window.URL.createObjectURL(new Blob([doctype + source], { "type" : "text\/xml" }));
              var a = document.createElement("a");
              document.body.appendChild(a);
              a.setAttribute("class", "svg-crowbar");
              a.setAttribute("download", filename + ".svg");
              a.setAttribute("href", url);
              a.style.display = "none";
              a.click();

              setTimeout(function() {
                  window.URL.revokeObjectURL(url);
              }, 10);
          }

          function attr(n, v) { return n.getAttribute(v); }

      };

  })();

  $('[save]').on('click', function(){
    console.log('save: ' + $(this).attr('save'));
    var el = "[svg-id='" + $(this).attr('save') + "'] svg"
    multiCrowbar(el)
  })

})
