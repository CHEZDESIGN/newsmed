!(function () {
  function t(t) {
    this.element = t;
  }
  var e = function (t) {
      return RegExp("(^| )" + t + "( |$)");
    },
    n = function (t, e, n) {
      for (var i = 0; i < t.length; i++) e.call(n, t[i]);
    };
  (t.prototype = {
    add: function () {
      n(
        arguments,
        function (t) {
          this.contains(t) || (this.element.className += " " + t);
        },
        this
      );
    },
    remove: function () {
      n(
        arguments,
        function (t) {
          this.element.className = this.element.className.replace(e(t), "");
        },
        this
      );
    },
    toggle: function (t) {
      return this.contains(t) ? (this.remove(t), !1) : (this.add(t), !0);
    },
    contains: function (t) {
      return e(t).test(this.element.className);
    },
    replace: function (t, e) {
      this.remove(t), this.add(e);
    },
  }),
    "classList" in Element.prototype ||
      Object.defineProperty(Element.prototype, "classList", {
        get: function () {
          return new t(this);
        },
      }),
    window.DOMTokenList &&
      null == DOMTokenList.prototype.replace &&
      (DOMTokenList.prototype.replace = t.prototype.replace);
})();

if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
      i,
      el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {}
    } while (i < 0 && (el = el.parentElement));
    return el;
  };
}

document
  .getElementById("nav")
  .querySelector("ul")
  .insertAdjacentHTML(
    "beforebegin",
    "<span id='menutoggle' class='test'><span>Meniu</span></span>"
  );
var menutoggle = document.getElementById("menutoggle");
var activeClass = "is-active";

menutoggle.onclick = function (event) {
  menutoggle.classList.toggle(activeClass);
  var el = document.querySelectorAll("#nav span.submenu, #nav ul.submenu");
  var i;
  for (i = 0; i < el.length; i++) {
    el[i].classList.remove(activeClass);
  }
  event.preventDefault();
};

var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};
forEach(
  document.querySelectorAll("#nav span.submenu"),
  function (index, value) {
    value.addEventListener("click", function () {
      if (menutoggle.offsetWidth > 0 && menutoggle.offsetHeight > 0) {
        value.classList.toggle(activeClass);
      }
    });
  }
);

function hideMenu() {
  var el = document.querySelectorAll(
    "#menutoggle, #menutoggle + ul, #nav span.submenu, #nav ul.submenu"
  );
  var i;
  for (i = 0; i < el.length; i++) {
    el[i].classList.remove(activeClass);
  }
}

document.addEventListener(
  "click",
  function (e) {
    if (menutoggle.offsetWidth > 0 && menutoggle.offsetHeight > 0) {
      var e = e ? e : window.event;
      var event_element = e.target ? e.target : e.srcElement;
      if (!event_element.closest("#nav")) {
        if (menutoggle.classList.contains(activeClass)) {
          hideMenu();
        }
      }
    }
  },
  false
);

var resizeTimer;
window.addEventListener(
  "resize",
  function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (menutoggle.offsetWidth <= 0 && menutoggle.offsetHeight <= 0) {
        hideMenu();
      }
    }, 250);
  },
  false
);

forEach(
  document.querySelectorAll(".dropdown_list span.dropdown"),
  function (index, value) {
    value.addEventListener("click", function () {
      if (!value.classList.contains(activeClass)) {
        var el = document.querySelectorAll(".dropdown_list span.dropdown");
        var i;
        for (i = 0; i < el.length; i++) {
          el[i].classList.remove(activeClass);
        }
        value.classList.toggle(activeClass);
      } else if (value.classList.contains(activeClass)) {
        value.classList.remove(activeClass);
      }
    });
  }
);
document.addEventListener(
  "click",
  function (e) {
    var el = document.querySelectorAll(".dropdown_list span.dropdown");
    var e = e ? e : window.event;
    var event_element = e.target ? e.target : e.srcElement;
    if (!event_element.closest(".dropdown_list")) {
      var i;
      for (i = 0; i < el.length; i++) {
        el[i].classList.remove(activeClass);
      }
    }
  },
  false
);

function showMore() {
  var element = document.getElementById("specialitati");
  element.classList.remove("hidden");
}

function toggleModal(modalID) {
  document.getElementById(modalID).classList.toggle("hidden");
  document.getElementById(modalID).classList.toggle("block");
  document.body.classList.toggle("overflow-y-hidden h-screen");
}

function rating() {
  document.getElementById("rating").classList.toggle("hidden");
}


/****************************Interpretari analize scroll efect on medic image */

var medicImage = document.querySelector("#medic");
var medici = document.querySelector("#medici");

function checkOffset() {
  function getRectTop(el) {
    var rect = el.getBoundingClientRect();
    return rect.top;
  }

  if (
    getRectTop(medicImage) +
      document.body.scrollTop +
      medicImage.offsetHeight >=
    getRectTop(medici) + document.body.scrollTop - 10
  )
    medicImage.style.position = "absolute";
    medicImage.style.position = "right: 0";
  if (
    document.body.scrollTop + window.innerHeight <
    getRectTop(medici) + document.body.scrollTop
  )
    medicImage.style.position = "fixed"; // restore when you scroll up
    medicImage.style.position = "right: 80px"; // restore when you scroll up

  medicImage.innerHTML = document.body.scrollTop + window.innerHeight;
}

document.addEventListener("scroll", function () {
  checkOffset();
});