"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Orders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      editMode: false,
      orders: []
    };
  },
  computed: {
    getAllOrders: {
      get: function get() {
        return this.$store.state.theOrders.orders;
      }
    }
  },
  created: function created() {
    this.$store.dispatch('theOrders/getOrders');
  },
  methods: {
    openModalWindow: function openModalWindow() {
      this.editMode = false;
      this.form.reset();
      $('#addNew').modal('show');
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Orders.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Orders.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=36c3bb78& */ "./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/views/Orders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__.render,
  _Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Orders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Orders.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Orders.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_36c3bb78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=template&id=36c3bb78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders.vue?vue&type=template&id=36c3bb78& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-body ", attrs: { id: "index-table" } },
                [
                  _c(
                    "table",
                    {
                      staticClass: "table table-striped table-sm",
                      attrs: { id: "group-tb" },
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.getAllOrders, function (order) {
                          return _c("tr", { key: order.id }, [
                            _c("td", [_vm._v(_vm._s(order.id))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-capitalize" }, [
                              _vm._v(_vm._s(order.order)),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-capitalize" }, [
                              _vm._v(_vm._s(order.depot)),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-capitalize" }, [
                              _vm._v(_vm._s(order.vehicle)),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-capitalize" }, [
                              _vm._v(_vm._s(order.order_status)),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._m(2, true),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": "#addNew",
                                  },
                                  on: { click: _vm.openModalWindow },
                                },
                                [
                                  _vm._v("Add New "),
                                  _c("i", {
                                    staticClass: "fas fa-user-plus fa-fw",
                                  }),
                                ]
                              ),
                            ]),
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("tfoot"),
                    ]
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _vm._m(3),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", [
          _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
            _c("ol", { staticClass: "breadcrumb" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")]),
              ]),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "breadcrumb-item active",
                  attrs: { "aria-current": "page" },
                },
                [_vm._v("orders")]
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("p", { staticClass: "font-weight-bold" }, [_vm._v("orders")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "text-dark" }, [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Order")]),
        _vm._v(" "),
        _c("th", [_vm._v("Depot")]),
        _vm._v(" "),
        _c("th", [_vm._v("Vehicle")]),
        _vm._v(" "),
        _c("th", [_vm._v("Delivery")]),
        _vm._v(" "),
        _c("th", [_vm._v("More")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "text-secondary btn btn-sm btn-info",
        attrs: {
          href: "",
          id: "",
          "data-toggle": "tooltip",
          title: "Manage member",
        },
      },
      [
        _c("span", { staticStyle: { color: "white" } }, [
          _c("i", { staticClass: "fa fa-tasks" }),
          _vm._v("  Assign"),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addNew",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "addNewLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" },
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  { staticClass: "modal-title", attrs: { id: "addNewLabel" } },
                  [_vm._v("Add New User")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close",
                    },
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body view-body" }, [
                _c("div", { staticClass: "row", attrs: { id: "info" } }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _vm._v(
                          "\n                                                    Nomare\n                                                "
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);