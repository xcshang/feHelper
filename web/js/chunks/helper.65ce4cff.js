(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "+b6q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_componentArea_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lRoq");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_componentArea_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_componentArea_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_componentArea_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "+owy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/manage/index.vue?vue&type=template&id=0050c4c2&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Row",
    { staticStyle: { height: "100%" }, attrs: { gutter: 10 } },
    [
      _c(
        "div",
        { staticStyle: { "text-align": "right" } },
        [
          _vm._v("\n    仓库地址："),
          _c("Input", {
            staticStyle: { width: "400px" },
            model: {
              value: _vm.storePath,
              callback: function($$v) {
                _vm.storePath = $$v
              },
              expression: "storePath"
            }
          }),
          _vm._v(" "),
          _c(
            "Button",
            { attrs: { type: "primary" }, on: { click: _vm.editStroePath } },
            [_vm._v("设置")]
          ),
          _vm._v(" "),
          _c(
            "Button",
            { attrs: { type: "primary" }, on: { click: _vm.addProject } },
            [_vm._v("新增项目")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Br"),
      _vm._v(" "),
      _c("Table", { attrs: { columns: _vm.columns1, data: _vm.projectsData } }),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "编辑/新增", "mask-closable": false },
          on: { "on-ok": _vm.okEdit },
          model: {
            value: _vm.show1,
            callback: function($$v) {
              _vm.show1 = $$v
            },
            expression: "show1"
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "Form",
                { attrs: { model: _vm.formData, "label-width": 80 } },
                [
                  _c(
                    "FormItem",
                    { attrs: { label: "项目名称" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "项目名称" },
                        model: {
                          value: _vm.formData.name,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "name", $$v)
                          },
                          expression: "formData.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "项目类型" } },
                    [
                      _c(
                        "Select",
                        {
                          staticStyle: { width: "200px" },
                          model: {
                            value: _vm.formData.type,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "type", $$v)
                            },
                            expression: "formData.type"
                          }
                        },
                        _vm._l(_vm.types, function(item) {
                          return _c("Option", { attrs: { value: item } }, [
                            _vm._v(_vm._s(item))
                          ])
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "FormItem",
                    { attrs: { label: "项目地址" } },
                    [
                      _c("Input", {
                        attrs: { placeholder: "项目地址" },
                        model: {
                          value: _vm.formData.projectPath,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "projectPath", $$v)
                          },
                          expression: "formData.projectPath"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.formData.type != "feHelper"
                    ? _c(
                        "FormItem",
                        { attrs: { label: "feHelper" } },
                        [
                          _c("Input", {
                            attrs: { placeholder: "feHelper目录" },
                            model: {
                              value: _vm.formData.projectStore,
                              callback: function($$v) {
                                _vm.$set(_vm.formData, "projectStore", $$v)
                              },
                              expression: "formData.projectStore"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "删除项目", "mask-closable": false },
          on: { "on-ok": _vm.okDel },
          model: {
            value: _vm.show3,
            callback: function($$v) {
              _vm.show3 = $$v
            },
            expression: "show3"
          }
        },
        [
          _c("div", [
            _vm._v(
              "        \n      确认删除项目" +
                _vm._s(_vm.cItem.name) +
                "?\n    "
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/manage/index.vue?vue&type=template&id=0050c4c2&

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("t3Un");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/manage/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var managevue_type_script_lang_js_ = ({
  name: "manage",
  data: function data() {
    var _this = this;

    var h = this.$createElement;

    return {
      storePath: '',
      optype: 'add',
      formData: {
        type: 'feHelper'
      },
      types: ['feHelper', 'old'],
      show1: false,
      show2: false,
      show3: false,
      cIndex: 0,
      cItem: {},
      projectsData: [],
      columns1: [{
        title: '项目名称',
        key: 'name'
      }, {
        title: '项目类型',
        key: 'type'
      }, {
        title: '项目地址',
        key: 'projectPath',
        width: 400
      }, {
        title: 'feHelper目录',
        key: 'projectStore',
        width: 400
      }, {
        title: '操作',
        key: '',
        render: function render(h, params) {
          return h('div', [h(
            'a',
            {
              attrs: { href: 'javascript:;' },
              on: {
                'click': _this.edit.bind(null, params)
              }
            },
            ['\u7F16\u8F91']
          ), '\xA0\xA0', h(
            'a',
            {
              attrs: { href: 'javascript:;' },
              on: {
                'click': _this.goPageEdit.bind(null, params)
              }
            },
            ['\u9875\u9762\u7F16\u8F91']
          ), '\xA0\xA0', h(
            'a',
            {
              attrs: { href: 'javascript:;' },
              on: {
                'click': _this.delProject.bind(null, params.row)
              }
            },
            ['\u5220\u9664']
          )]);
        }
      }]
    };
  },

  //
  components: {},
  methods: {
    goPageEdit: function goPageEdit(_ref) {
      var row = _ref.row;

      if (row.name) {
        this.$router.push({ path: '/index/index', query: { project: row._index } });
      }
    },
    editStroePath: function editStroePath() {
      var _this2 = this;

      request["a" /* default */].post('api/editStorePath', { storePath: this.storePath }).then(function (data) {
        _this2.$Message.success('操作成功');
      });
    },
    getProject: function getProject() {
      var _this3 = this;

      request["a" /* default */].get('api/vue/projectInfo').then(function (data) {
        _this3.projectsData = data.project;
        _this3.storePath = data.storePath;
      });
    },
    addProject: function addProject() {
      this.optype = 'add';
      this.show1 = true;
      this.formData = {
        type: 'feHelper'
      };
    },
    edit: function edit(row) {
      this.optype = 'edit';
      this.show1 = true;
      this.formData = Object.assign({}, row.row);
      this.cIndex = row.index;
      this.cItem = row.row;
    },
    okEdit: function okEdit() {
      var _this4 = this;

      var _formData = this.formData,
          name = _formData.name,
          projectPath = _formData.projectPath,
          projectStore = _formData.projectStore,
          type = _formData.type;

      var sendData = { name: name, projectPath: projectPath, projectStore: projectStore, type: type };
      if (this.optype === 'add') {
        request["a" /* default */].post('api/addProject', sendData).then(function (data) {
          _this4.$Message.success('添加成功');
          _this4.getProject();
        });
      }

      if (this.optype === 'edit') {
        var editData = {
          index: this.cIndex,
          project: sendData
        };
        request["a" /* default */].post('api/editProject', editData).then(function (data) {
          _this4.$Message.success('编辑成功');
          _this4.getProject();
        });
      }
    },
    editPage: function editPage(row) {
      this.show2 = true;
      this.treeData = row.row.pages;
    },
    delProject: function delProject(row) {
      this.show3 = true;
      this.cItem = row;
    },
    okDel: function okDel() {
      var _this5 = this;

      var sendData = {
        name: this.cItem.name
      };
      request["a" /* default */].post('api/delProject', sendData).then(function (data) {
        _this5.$Message.success('删除成功');
        _this5.getProject();
      });
    },
    run: function run(name) {
      var _this6 = this;

      request["a" /* default */].get('api/runProject', { name: name }).then(function (data) {
        _this6.$Message.success('启动成功');
      });
    }
  },
  mounted: function mounted(e) {
    this.getProject();
  }
});
// CONCATENATED MODULE: ./src/views/manage/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_managevue_type_script_lang_js_ = (managevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/manage/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_managevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/manage/index.vue"
/* harmony default export */ var manage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "34bG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FIf5");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_0__);


var originEl = void 0;
var highlight = function highlight(el) {
    if (originEl !== el) {
        originEl = el;
        var blocks = el.querySelectorAll('pre code');
        blocks.forEach(function (block) {
            highlight_js__WEBPACK_IMPORTED_MODULE_0___default.a.highlightBlock(block);
        });
    }
};
var install = function install(Vue) {
    Vue.directive("highlight", highlight);
};

if (window.Vue) {
    window["highlight"] = highlight;
    Vue.use(install); // eslint-disable-line
}

highlight.install = install;
/* harmony default export */ __webpack_exports__["a"] = (highlight);

/***/ }),

/***/ "4JMS":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "BbHQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dynamic/index.vue?vue&type=template&id=658acb50&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "Modal",
        {
          attrs: { title: "动态组件", width: "1400px", "footer-hide": "" },
          model: {
            value: _vm.showModal,
            callback: function($$v) {
              _vm.showModal = $$v
            },
            expression: "showModal"
          }
        },
        [
          _c(
            "div",
            { staticClass: "dynamic-box" },
            [
              _c(
                "div",
                [
                  _c(
                    "RadioGroup",
                    {
                      model: {
                        value: _vm.moduleType,
                        callback: function($$v) {
                          _vm.moduleType = $$v
                        },
                        expression: "moduleType"
                      }
                    },
                    [
                      _c("Radio", { attrs: { label: "table" } }, [
                        _c("span", [_vm._v("表格")])
                      ]),
                      _vm._v(" "),
                      _c("Radio", { attrs: { label: "form" } }, [
                        _c("span", [_vm._v("表单")])
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("Divider"),
              _vm._v(" "),
              _c(
                "div",
                [
                  _vm.moduleType === "table"
                    ? _c("dyTable", { ref: "dyTable" })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.moduleType === "form"
                    ? _c("dyForm", { ref: "dyForm", attrs: { type: "form" } })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "dynamic-modal-footer",
                  attrs: { slot: "footer" },
                  slot: "footer"
                },
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.ok("file")
                        }
                      }
                    },
                    [_vm._v("确认插入页面")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.ok("code")
                        }
                      }
                    },
                    [_vm._v("查看源码")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.ok("copy")
                        }
                      }
                    },
                    [_vm._v("copy源码")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      staticStyle: { display: "none" },
                      attrs: { "data-clipboard-text": "", id: "hideCopyBtn" }
                    },
                    [_vm._v("copy源码")]
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "查看源码", width: "850", "mask-closable": false },
          model: {
            value: _vm.codeModal,
            callback: function($$v) {
              _vm.codeModal = $$v
            },
            expression: "codeModal"
          }
        },
        [
          _c(
            "pre",
            {
              directives: [{ name: "highlight", rawName: "v-highlight" }],
              key: _vm.key
            },
            [_c("code", [_vm._v(_vm._s(_vm.code))])]
          ),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/dynamic/index.vue?vue&type=template&id=658acb50&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("L2JU");

// EXTERNAL MODULE: ./src/directive/highlight.js
var highlight = __webpack_require__("34bG");

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("t3Un");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dynamic/table.vue?vue&type=template&id=f2546158&
var tablevue_type_template_id_f2546158_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "Checkbox",
        {
          model: {
            value: _vm.tableData.pages,
            callback: function($$v) {
              _vm.$set(_vm.tableData, "pages", $$v)
            },
            expression: "tableData.pages"
          }
        },
        [_vm._v("翻页")]
      ),
      _vm._v(" "),
      _c(
        "Checkbox",
        {
          model: {
            value: _vm.tableData.search,
            callback: function($$v) {
              _vm.$set(_vm.tableData, "search", $$v)
            },
            expression: "tableData.search"
          }
        },
        [_vm._v("搜索")]
      ),
      _vm._v(" "),
      _c(
        "Checkbox",
        {
          model: {
            value: _vm.tableData.del,
            callback: function($$v) {
              _vm.$set(_vm.tableData, "del", $$v)
            },
            expression: "tableData.del"
          }
        },
        [_vm._v("删除")]
      ),
      _vm._v(" "),
      _c(
        "Checkbox",
        {
          model: {
            value: _vm.tableData.edit,
            callback: function($$v) {
              _vm.$set(_vm.tableData, "edit", $$v)
            },
            expression: "tableData.edit"
          }
        },
        [_vm._v("编辑")]
      ),
      _vm._v(" "),
      _c(
        "Checkbox",
        {
          model: {
            value: _vm.tableData.oprateBtn,
            callback: function($$v) {
              _vm.$set(_vm.tableData, "oprateBtn", $$v)
            },
            expression: "tableData.oprateBtn"
          }
        },
        [_vm._v("功能按钮")]
      ),
      _vm._v(" "),
      _vm.tableData.oprateBtn
        ? _c("div", { staticClass: "dynamic-search" }, [
            _vm._v("\n    功能按钮设置：\n  \n    "),
            _c("br"),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: { "text-align": "right", "padding-bottom": "5px" }
              },
              [
                _vm.tableData.oprateBtns.length === 0
                  ? _c(
                      "Button",
                      {
                        attrs: { type: "primary" },
                        on: {
                          click: function($event) {
                            return _vm.addButton(_vm.tableData.oprateBtns)
                          }
                        }
                      },
                      [_vm._v("新增")]
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "FEtable" },
              [
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.tableData.oprateBtns, function(item, index) {
                  return _c(
                    "tr",
                    {
                      attrs: { draggable: "true" },
                      on: {
                        dragstart: function($event) {
                          return _vm.dragstart($event, index)
                        },
                        dragend: function($event) {
                          return _vm.dragend(_vm.tableData.oprateBtns)
                        },
                        dragenter: function($event) {
                          return _vm.dragenter($event, index)
                        }
                      }
                    },
                    [
                      _c(
                        "td",
                        [
                          _c("Input", {
                            attrs: { placeholder: "按钮名称" },
                            model: {
                              value: item.name,
                              callback: function($$v) {
                                _vm.$set(item, "name", $$v)
                              },
                              expression: "item.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "Select",
                            {
                              attrs: { clearable: "", placeholder: "按钮类型" },
                              model: {
                                value: item.type,
                                callback: function($$v) {
                                  _vm.$set(item, "type", $$v)
                                },
                                expression: "item.type"
                              }
                            },
                            _vm._l(_vm.buttonTypes, function(type) {
                              return _c(
                                "Option",
                                { key: type, attrs: { value: type } },
                                [_vm._v(_vm._s(type))]
                              )
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("Checkbox", {
                            model: {
                              value: item.ghost,
                              callback: function($$v) {
                                _vm.$set(item, "ghost", $$v)
                              },
                              expression: "item.ghost"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "Button",
                            {
                              attrs: { type: "error", ghost: "" },
                              on: {
                                click: function($event) {
                                  return _vm.delItem(
                                    _vm.tableData.oprateBtns,
                                    index
                                  )
                                }
                              }
                            },
                            [_vm._v("删除")]
                          ),
                          _vm._v("  \n          "),
                          index === _vm.tableData.oprateBtns.length - 1
                            ? _c(
                                "Button",
                                {
                                  attrs: { type: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.addButton(
                                        _vm.tableData.oprateBtns
                                      )
                                    }
                                  }
                                },
                                [_vm._v("新增")]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.tableData.search
        ? _c(
            "div",
            { staticClass: "dynamic-search" },
            [
              _vm._v("\n    搜索内容设置：\n    "),
              _c("dyForm", { ref: "searchForm", attrs: { type: "search" } })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dynamic-search" },
        [
          _vm._v("\n    表格内容设置：\n    "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v("data变量名：\n    "),
          _c("Input", {
            attrs: { placeholder: "如不输自动生成" },
            model: {
              value: _vm.tableData.dataName,
              callback: function($$v) {
                _vm.$set(_vm.tableData, "dataName", $$v)
              },
              expression: "tableData.dataName"
            }
          }),
          _vm._v("columns变量名:\n    "),
          _c("Input", {
            attrs: { placeholder: "如不输自动生成" },
            model: {
              value: _vm.tableData.columnsDataName,
              callback: function($$v) {
                _vm.$set(_vm.tableData, "columnsDataName", $$v)
              },
              expression: "tableData.columnsDataName"
            }
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v("columns批量生成：\n    "),
          _c("Input", {
            staticStyle: { width: "800px" },
            attrs: { placeholder: "title,key|title,key" },
            model: {
              value: _vm.columnsArr,
              callback: function($$v) {
                _vm.columnsArr = $$v
              },
              expression: "columnsArr"
            }
          }),
          _vm._v(" "),
          _c(
            "Button",
            {
              on: {
                click: function($event) {
                  return _vm.addColumns(_vm.tableData.columns)
                }
              }
            },
            [_vm._v("批量生成columns")]
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { "text-align": "right", "padding-bottom": "5px" } },
            [
              _vm.tableData.columns.length === 0
                ? _c(
                    "Button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.addTableItem(_vm.tableData.columns)
                        }
                      }
                    },
                    [_vm._v("新增")]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "FEtable" },
            [
              _vm._m(1),
              _vm._v(" "),
              _vm._l(_vm.tableData.columns, function(column, index) {
                return _c(
                  "tr",
                  {
                    staticClass: "dynamic-module-item",
                    attrs: { draggable: "true" },
                    on: {
                      dragstart: function($event) {
                        return _vm.dragstart($event, index)
                      },
                      dragend: function($event) {
                        return _vm.dragend(_vm.tableData.columns)
                      },
                      dragenter: function($event) {
                        return _vm.dragenter($event, index)
                      }
                    }
                  },
                  [
                    _c(
                      "td",
                      [
                        _c("Input", {
                          attrs: { clearable: "", placeholder: "title" },
                          model: {
                            value: column.title,
                            callback: function($$v) {
                              _vm.$set(column, "title", $$v)
                            },
                            expression: "column.title"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c("Input", {
                          attrs: { clearable: "", placeholder: "key" },
                          model: {
                            value: column.key,
                            callback: function($$v) {
                              _vm.$set(column, "key", $$v)
                            },
                            expression: "column.key"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "Select",
                          {
                            staticStyle: { width: "80px" },
                            attrs: { clearable: "" },
                            model: {
                              value: column.type,
                              callback: function($$v) {
                                _vm.$set(column, "type", $$v)
                              },
                              expression: "column.type"
                            }
                          },
                          _vm._l(_vm.tableTypes, function(type) {
                            return _c(
                              "Option",
                              { key: type, attrs: { value: type } },
                              [_vm._v(_vm._s(type))]
                            )
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c("Input", {
                          staticStyle: { width: "80px" },
                          attrs: { clearable: "", placeholder: "width" },
                          model: {
                            value: column.width,
                            callback: function($$v) {
                              _vm.$set(column, "width", $$v)
                            },
                            expression: "column.width"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "Select",
                          {
                            staticStyle: { width: "80px" },
                            attrs: { clearable: "" },
                            model: {
                              value: column.fixed,
                              callback: function($$v) {
                                _vm.$set(column, "fixed", $$v)
                              },
                              expression: "column.fixed"
                            }
                          },
                          [
                            _c(
                              "Option",
                              { key: "left", attrs: { value: "left" } },
                              [_vm._v("left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "Option",
                              { key: "right", attrs: { value: "right" } },
                              [_vm._v("right")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "Select",
                          {
                            staticStyle: { width: "80px" },
                            attrs: { clearable: "" },
                            model: {
                              value: column.align,
                              callback: function($$v) {
                                _vm.$set(column, "align", $$v)
                              },
                              expression: "column.align"
                            }
                          },
                          [
                            _c(
                              "Option",
                              { key: "left", attrs: { value: "left" } },
                              [_vm._v("left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "Option",
                              { key: "right", attrs: { value: "right" } },
                              [_vm._v("right")]
                            ),
                            _vm._v(" "),
                            _c(
                              "Option",
                              { key: "center", attrs: { value: "center" } },
                              [_vm._v("center")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "CheckboxGroup",
                          {
                            model: {
                              value: column.options,
                              callback: function($$v) {
                                _vm.$set(column, "options", $$v)
                              },
                              expression: "column.options"
                            }
                          },
                          [
                            _c("Checkbox", { attrs: { label: "render" } }, [
                              _c("span", [_vm._v("render")])
                            ]),
                            _vm._v(" "),
                            _c("Checkbox", { attrs: { label: "filter" } }, [
                              _c("span", [_vm._v("过滤")])
                            ]),
                            _vm._v(" "),
                            _c("Checkbox", { attrs: { label: "sort" } }, [
                              _c("span", [_vm._v("排序")])
                            ]),
                            _vm._v(" "),
                            _c("Checkbox", { attrs: { label: "oprate" } }, [
                              _c("span", [_vm._v("操作")])
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "Button",
                          {
                            attrs: { type: "error", ghost: "" },
                            on: {
                              click: function($event) {
                                return _vm.delItem(_vm.tableData.columns, index)
                              }
                            }
                          },
                          [_vm._v("删除")]
                        ),
                        _vm._v("  \n          "),
                        index === _vm.tableData.columns.length - 1
                          ? _c(
                              "Button",
                              {
                                attrs: { type: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.addTableItem(
                                      _vm.tableData.columns
                                    )
                                  }
                                }
                              },
                              [_vm._v("新增")]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ]
                )
              })
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var tablevue_type_template_id_f2546158_staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("按钮名称")]),
      _vm._v(" "),
      _c("th", [_vm._v("按钮类型")]),
      _vm._v(" "),
      _c("th", [_vm._v("ghost")]),
      _vm._v(" "),
      _c("th", { staticStyle: { "text-align": "center" } }, [_vm._v("操作")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("title")]),
      _vm._v(" "),
      _c("th", [_vm._v("key")]),
      _vm._v(" "),
      _c("th", [_vm._v("type")]),
      _vm._v(" "),
      _c("th", [_vm._v("width")]),
      _vm._v(" "),
      _c("th", [_vm._v("fixed")]),
      _vm._v(" "),
      _c("th", [_vm._v("align")]),
      _vm._v(" "),
      _c("th", { staticStyle: { "text-align": "center" } }, [_vm._v("其他")]),
      _vm._v(" "),
      _c("th", { staticStyle: { "text-align": "center" } }, [_vm._v("操作")])
    ])
  }
]
tablevue_type_template_id_f2546158_render._withStripped = true


// CONCATENATED MODULE: ./src/views/dynamic/table.vue?vue&type=template&id=f2546158&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dynamic/form.vue?vue&type=template&id=24578fae&
var formvue_type_template_id_24578fae_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.type == "form"
      ? _c(
          "div",
          [
            _vm._v("\n    表单类型：\n    "),
            _c(
              "RadioGroup",
              {
                model: {
                  value: _vm.formData.formType,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "formType", $$v)
                  },
                  expression: "formData.formType"
                }
              },
              [
                _c("Radio", { attrs: { label: "form" } }, [_vm._v("普通表单")]),
                _vm._v(" "),
                _c("Radio", { attrs: { label: "search" } }, [_vm._v("搜索")])
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.type == "form"
      ? _c(
          "div",
          { staticClass: "dynamic-search" },
          [
            _vm._v("\n   model变量名：\n    "),
            _c("Input", {
              attrs: { placeholder: "如不输自动生成" },
              model: {
                value: _vm.formData.dataName,
                callback: function($$v) {
                  _vm.$set(_vm.formData, "dataName", $$v)
                },
                expression: "formData.dataName"
              }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticStyle: { "text-align": "right", "padding-bottom": "5px" } },
      [
        _vm.formData.formItem.length === 0
          ? _c(
              "Button",
              {
                attrs: { type: "primary" },
                on: {
                  click: function($event) {
                    return _vm.addFormItem(_vm.formData.formItem)
                  }
                }
              },
              [_vm._v("新增")]
            )
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "table",
      { staticClass: "FEtable" },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._l(_vm.formData.formItem, function(item, index) {
          return _c(
            "tr",
            {
              staticClass: "dynamic-module-item",
              attrs: { draggable: "true" },
              on: {
                dragstart: function($event) {
                  return _vm.dragstart($event, index)
                },
                dragend: function($event) {
                  return _vm.dragend(_vm.formData.formItem)
                },
                dragenter: function($event) {
                  return _vm.dragenter($event, index)
                }
              }
            },
            [
              _c(
                "td",
                [
                  _c(
                    "Select",
                    {
                      attrs: { clearable: "", placeholder: "控件类型" },
                      on: {
                        "on-change": function($event) {
                          return _vm.changeFormItemType(
                            $event,
                            index,
                            _vm.formData.formItem
                          )
                        }
                      },
                      model: {
                        value: item.type,
                        callback: function($$v) {
                          _vm.$set(item, "type", $$v)
                        },
                        expression: "item.type"
                      }
                    },
                    _vm._l(_vm.formTypes, function(type) {
                      return _c(
                        "Option",
                        { key: type, attrs: { value: type } },
                        [_vm._v(_vm._s(type))]
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  item.type
                    ? [
                        _c("Input", {
                          attrs: { placeholder: "label", clearable: "" },
                          model: {
                            value: item.label,
                            callback: function($$v) {
                              _vm.$set(item, "label", $$v)
                            },
                            expression: "item.label"
                          }
                        }),
                        _vm._v(" "),
                        _c("Input", {
                          staticStyle: { width: "80px" },
                          attrs: { placeholder: "key", clearable: "" },
                          model: {
                            value: item.key,
                            callback: function($$v) {
                              _vm.$set(item, "key", $$v)
                            },
                            expression: "item.key"
                          }
                        }),
                        _vm._v(" "),
                        item.type === "text"
                          ? _c(
                              "span",
                              [
                                _c("Input", {
                                  staticStyle: { width: "80px" },
                                  attrs: { placeholder: "text", clearable: "" },
                                  model: {
                                    value: item.text,
                                    callback: function($$v) {
                                      _vm.$set(item, "text", $$v)
                                    },
                                    expression: "item.text"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasParm(item.type, "placeholder")
                          ? [
                              _c("Input", {
                                attrs: {
                                  placeholder: "placeholder",
                                  clearable: ""
                                },
                                model: {
                                  value: item.placeholder,
                                  callback: function($$v) {
                                    _vm.$set(item, "placeholder", $$v)
                                  },
                                  expression: "item.placeholder"
                                }
                              })
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.hasParm(item.type, "dataName")
                          ? [
                              _c("Input", {
                                attrs: {
                                  placeholder: "数据名称,如不输自动生成",
                                  clearable: ""
                                },
                                model: {
                                  value: item.dataName,
                                  callback: function($$v) {
                                    _vm.$set(item, "dataName", $$v)
                                  },
                                  expression: "item.dataName"
                                }
                              })
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "CheckboxGroup",
                          {
                            model: {
                              value: item.options,
                              callback: function($$v) {
                                _vm.$set(item, "options", $$v)
                              },
                              expression: "item.options"
                            }
                          },
                          [
                            _vm.hasParm(item.type, "clearable")
                              ? _c(
                                  "Checkbox",
                                  {
                                    key: "clearable",
                                    attrs: { label: "clearable" }
                                  },
                                  [_vm._v("可清空")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "Checkbox",
                              {
                                key: "labelGroup",
                                attrs: { label: "labelGroup" }
                              },
                              [_vm._v("label组")]
                            ),
                            _vm._v(" "),
                            _vm.hasParm(item.type, "multiple")
                              ? _c(
                                  "Checkbox",
                                  {
                                    key: "multiple",
                                    attrs: { label: "multiple" }
                                  },
                                  [_vm._v("多选")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.hasParm(item.type, "filterable")
                              ? _c(
                                  "Checkbox",
                                  {
                                    key: "filterable",
                                    attrs: { label: "filterable" }
                                  },
                                  [_vm._v("可搜索")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.hasParm(item.type, "compass")
                              ? _c(
                                  "Checkbox",
                                  {
                                    key: "compass",
                                    attrs: { label: "compass" }
                                  },
                                  [_vm._v("组合")]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.formData.formType === "form"
                    ? _c(
                        "div",
                        [
                          _c("br"),
                          _vm._v("验证相关：\n          "),
                          _c(
                            "Checkbox",
                            {
                              model: {
                                value: item.validate.required,
                                callback: function($$v) {
                                  _vm.$set(item.validate, "required", $$v)
                                },
                                expression: "item.validate.required"
                              }
                            },
                            [_vm._v("required")]
                          ),
                          _vm._v(" "),
                          _c(
                            "Select",
                            {
                              attrs: { clearable: "", placeholder: "验证类型" },
                              model: {
                                value: item.validate.type,
                                callback: function($$v) {
                                  _vm.$set(item.validate, "type", $$v)
                                },
                                expression: "item.validate.type"
                              }
                            },
                            _vm._l(_vm.validateTypes, function(type) {
                              return _c(
                                "Option",
                                { key: type, attrs: { value: type } },
                                [_vm._v(_vm._s(type))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("Input", {
                            staticStyle: { width: "400px" },
                            attrs: { placeholder: "错误提示", clearable: "" },
                            model: {
                              value: item.validate.message,
                              callback: function($$v) {
                                _vm.$set(item.validate, "message", $$v)
                              },
                              expression: "item.validate.message"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "td",
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "error", ghost: "" },
                      on: {
                        click: function($event) {
                          return _vm.delItem(_vm.formData.formItem, index)
                        }
                      }
                    },
                    [_vm._v("del")]
                  ),
                  _vm._v("  \n        "),
                  index === _vm.formData.formItem.length - 1
                    ? _c(
                        "Button",
                        {
                          attrs: { type: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.addFormItem(_vm.formData.formItem)
                            }
                          }
                        },
                        [_vm._v("add")]
                      )
                    : _vm._e()
                ],
                1
              )
            ]
          )
        })
      ],
      2
    )
  ])
}
var formvue_type_template_id_24578fae_staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("表单元素配置")]),
      _vm._v(" "),
      _c("th", { staticStyle: { "text-align": "center", width: "160px" } }, [
        _vm._v("操作")
      ])
    ])
  }
]
formvue_type_template_id_24578fae_render._withStripped = true


// CONCATENATED MODULE: ./src/views/dynamic/form.vue?vue&type=template&id=24578fae&

// CONCATENATED MODULE: ./src/views/dynamic/mixin.js
var mixin = {
    data: function data() {
        return {
            index: 0,
            rIndex: 0

        };
    },

    methods: {
        dragstart: function dragstart(e, index) {
            this.index = index;
        },
        dragend: function dragend(list) {
            if (this.rIndex == this.index) {
                return;
            }
            var item = list[this.index];
            list.splice(this.index, 1);
            list.splice(this.rIndex, 0, item);
        },
        dragenter: function dragenter(e, index) {
            this.rIndex = index;
        }
    },

    mounted: function mounted() {}
};

/* harmony default export */ var dynamic_mixin = (mixin);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dynamic/form.vue?vue&type=script&lang=js&
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


/* harmony default export */ var formvue_type_script_lang_js_ = ({
  name: "DFORM",
  mixins: [dynamic_mixin],
  props: {
    type: ""
  },
  data: function data() {
    return {
      optionCase: {
        placeholder: ["input", "select", "date", "daterange", "time", "timerange", "year", "month", "inputNumber", "password", "textarea"],
        clearable: ["input", "select", "date", "daterange", "time", "timerange", "year", "month", "password", "textarea"],
        multiple: ["select"],
        filterable: ["select"],
        compass: ["radio", "checkbox"],
        dataName: ["select"]
      },
      validateTypes: ["string", "number", "array", "object", "boolean", "email", "url", "date"],

      formTypes: ["text", "input", "select", "radio", "checkbox", "textarea", "switch", "date", "daterange", "year", "month", "time", "timerange", "inputNumber", "password"],

      formData: {
        name: "表单",
        type: "form",
        formType: "form",
        dataName: "",
        formItem: [{
          type: "",
          label: "",
          key: "",
          placeholder: "",
          dataName: "",
          options: ["clearable"],
          validate: {
            required: true,
            type: "",
            message: "",
            trigger: ""
          }
        }]
      }
    };
  },


  methods: {
    getData: function getData() {
      return this.formData;
    },
    addFormItem: function addFormItem(o) {
      o.push({
        type: "",
        label: "",
        key: "",
        placeholder: "",
        options: [],
        validate: {
          required: true,
          type: "",
          message: "",
          trigger: ""
        }
      });
    },
    delItem: function delItem(o, index) {
      o.splice(index, 1);
    },
    hasParm: function hasParm(type, key) {
      var arr = this.optionCase[key];
      if (arr.indexOf(type) !== -1) {
        return true;
      }
      return false;
    },
    changeFormItemType: function changeFormItemType(type, index, items) {
      var basePrm = {
        type: type,
        label: "",
        key: "",
        placeholder: "",
        dataName: "",
        options: [],
        validate: {
          required: true,
          type: "",
          message: "",
          trigger: ""
        }
      };
      if (this.hasParm(type, "clearable")) {
        basePrm.options.push("clearable");
      }
      if (this.hasParm(type, "compass")) {
        basePrm.options.push("compass");
      }
      this.$set(items, index, basePrm);
    }
  },
  mounted: function mounted() {
    console.log(this.type);
    if (this.type === "search") {
      this.formData.formType = "search";
    }
  }
});
// CONCATENATED MODULE: ./src/views/dynamic/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var dynamic_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/dynamic/form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dynamic_formvue_type_script_lang_js_,
  formvue_type_template_id_24578fae_render,
  formvue_type_template_id_24578fae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/dynamic/form.vue"
/* harmony default export */ var dynamic_form = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dynamic/table.vue?vue&type=script&lang=js&
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



/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name: "DFTABLE",
  mixins: [dynamic_mixin],
  components: { dyForm: dynamic_form },
  data: function data() {
    return {
      columnsArr: "",
      tableData: {
        name: "表格",
        type: "table",
        pages: true,
        tableType: "",
        search: false,
        searchData: null,
        editFormData: null,
        dataName: "",
        columnsDataName: "",
        columns: [],
        oprateBtn: false,
        oprateBtns: [{
          name: "",
          type: "",
          ghost: false
        }]
      },

      tableTypes: ["index", "selection", "expand", "html"],
      buttonTypes: ["primary", "default", "dashed", "text", "info", "success", "warning", "error"]
    };
  },


  methods: {
    getData: function getData() {
      if (this.tableData.search) {
        this.tableData.searchData = this.$refs.searchForm.getData();
      }

      return this.tableData;
    },
    addColumns: function addColumns(columns) {
      var arr = this.columnsArr;
      arr = arr.trim();
      arr = arr.split(",");
      var newClumns = [];
      arr.forEach(function (item) {
        var p = item.split("|");
        columns.push({
          type: "",
          title: p[0],
          key: p[1],
          options: []
        });
      });
    },
    delItem: function delItem(o, index) {
      o.splice(index, 1);
    },
    addButton: function addButton(o) {
      o.push({
        name: "",
        type: "",
        ghost: false
      });
    },
    addTableItem: function addTableItem(o) {
      o.push({
        key: "",
        title: ""
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/dynamic/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var dynamic_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/dynamic/table.vue?vue&type=style&index=0&lang=less&
var tablevue_type_style_index_0_lang_less_ = __webpack_require__("DDAI");

// CONCATENATED MODULE: ./src/views/dynamic/table.vue






/* normalize component */

var table_component = Object(componentNormalizer["a" /* default */])(
  dynamic_tablevue_type_script_lang_js_,
  tablevue_type_template_id_f2546158_render,
  tablevue_type_template_id_f2546158_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var table_api; }
table_component.options.__file = "src/views/dynamic/table.vue"
/* harmony default export */ var table = (table_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dynamic/index.vue?vue&type=script&lang=js&
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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






/* harmony default export */ var dynamicvue_type_script_lang_js_ = ({
  name: "dynamic",
  data: function data() {
    return {
      key: 1,
      codeModal: false,
      showModal: false,
      moduleType: "table",
      clipboard: null
    };
  },

  components: { dyTable: table, dyForm: dynamic_form },
  directives: {
    highlight: highlight["a" /* default */]
  },

  computed: _extends({}, Object(vuex_esm["b" /* mapState */])({
    componentList: function componentList(state) {
      return state.index.componentList;
    },
    project: function project(state) {
      return state.index.project;
    },
    code: function code(state) {
      return state.index.code.replace(/↵/g, "\n");
    }
  })),
  methods: {
    show: function show() {
      this.moduleType = "";
      this.showModal = true;
    },
    ok: function ok(type) {
      var _this = this;

      var _project = this.project,
          fileName = _project.fileName,
          projectPath = _project.projectPath,
          projectStore = _project.projectStore;

      var sendData = {};
      if (type === "file") {
        if (!fileName) {
          this.$Message.error("请先输入要插入的页面地址");
          return;
        }
        fileName = "" + projectPath + fileName;
        sendData.filePath = fileName;
      }
      if (this.moduleType === "table") {
        sendData.modules = this.$refs.dyTable.getData();
      }

      if (this.moduleType === "form") {
        sendData.modules = this.$refs.dyForm.getData();
      }

      request["a" /* default */].post("api/dynamic", sendData).then(function (data) {
        if (type === "code") {
          _this.key++;
          _this.$store.dispatch("index/setCode", data);
          _this.codeModal = true;
        } else if (type === "copy") {
          var colCopyBtn = document.getElementById("hideCopyBtn");
          var str = data;
          if (colCopyBtn) {
            if (str === "") {
              _this.$Message.error("当前暂无数据");
            } else {
              colCopyBtn.setAttribute("data-clipboard-text", str);
              colCopyBtn.click();
            }
          }
        } else {
          _this.$Message.success("代码插入成功");
        }

        //console.log(data);
      });
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./src/views/dynamic/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_dynamicvue_type_script_lang_js_ = (dynamicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/dynamic/index.vue?vue&type=style&index=0&lang=less&
var dynamicvue_type_style_index_0_lang_less_ = __webpack_require__("W60w");

// CONCATENATED MODULE: ./src/views/dynamic/index.vue






/* normalize component */

var dynamic_component = Object(componentNormalizer["a" /* default */])(
  views_dynamicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dynamic_api; }
dynamic_component.options.__file = "src/views/dynamic/index.vue"
/* harmony default export */ var dynamic = __webpack_exports__["default"] = (dynamic_component.exports);

/***/ }),

/***/ "DDAI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Hs+8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "DHm6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Hs+8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "N/kD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/index.vue?vue&type=template&id=498142aa&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Row",
    { staticStyle: { height: "100%" }, attrs: { gutter: 10 } },
    [
      _c(
        "Col",
        { staticStyle: { height: "100%" }, attrs: { span: "5" } },
        [_c("FileList")],
        1
      ),
      _vm._v(" "),
      _c(
        "Col",
        { staticStyle: { height: "100%" }, attrs: { span: "10" } },
        [_c("OperateArea")],
        1
      ),
      _vm._v(" "),
      _c(
        "Col",
        { staticStyle: { height: "100%" }, attrs: { span: "9" } },
        [_c("ModuleList")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/index/index.vue?vue&type=template&id=498142aa&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/fileList/fileList.vue?vue&type=template&id=08ee4848&scoped=true&
var fileListvue_type_template_id_08ee4848_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "select-project" },
      [
        _c(
          "Select",
          {
            attrs: { placeholder: "请选择项目" },
            on: { "on-change": _vm.changeProject },
            model: {
              value: _vm.projectId,
              callback: function($$v) {
                _vm.projectId = $$v
              },
              expression: "projectId"
            }
          },
          _vm._l(_vm.projects, function(item, index) {
            return _c("Option", { attrs: { value: index } }, [
              _vm._v("\n        " + _vm._s(item.name) + "\n      ")
            ])
          }),
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm.fileList.length
      ? _c("div", { staticClass: "file-list" }, [
          _c(
            "div",
            { staticClass: "fileListUl" },
            [
              _c(
                "Select",
                {
                  attrs: { filterable: "", clearable: "" },
                  on: { "on-change": _vm.chooseFile },
                  model: {
                    value: _vm.file,
                    callback: function($$v) {
                      _vm.file = $$v
                    },
                    expression: "file"
                  }
                },
                _vm._l(_vm.fileList, function(item) {
                  return _c("Option", { key: item, attrs: { value: item } }, [
                    _vm._v(_vm._s(item))
                  ])
                }),
                1
              ),
              _vm._v(" "),
              _c("Tree", {
                attrs: { data: _vm.filterFileTree },
                on: { "on-select-change": _vm.selectVueFile }
              })
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var fileListvue_type_template_id_08ee4848_scoped_true_staticRenderFns = []
fileListvue_type_template_id_08ee4848_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/views/index/fileList/fileList.vue?vue&type=template&id=08ee4848&scoped=true&

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("t3Un");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("L2JU");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/fileList/fileList.vue?vue&type=script&lang=js&
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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




/* harmony default export */ var fileListvue_type_script_lang_js_ = ({
  computed: Object(vuex_esm["b" /* mapState */])({
    project: function project(state) {
      return state.index.project;
    }
  }),
  data: function data() {
    return {
      projectId: undefined,
      file: '',
      fileList: [], //项目文件列表
      filterFileTree: [],
      projects: [],
      searchword: ''
    };
  },

  methods: {
    getProject: function getProject() {
      var _this = this;

      request["a" /* default */].get('api/vue/projectInfo').then(function (data) {
        _this.projects = data.project;
        var curProject = _this.$route.query.project;
        if (curProject || curProject === 0) {
          _this.projectId = curProject;
          _this.changeProject(curProject);
        }
      });
    },
    getVueFile: function getVueFile(url) {
      var _this2 = this;

      if (!url) {
        return;
      }
      request["a" /* default */].post('api/vue/getVueFile', { url: url }).then(function (data) {
        var list = _this2.pathToTree(data.map(function (item) {
          return item.slice(1);
        }));
        _this2.fileList = data;
        _this2.filterFileTree = list;
      });
    },

    //左侧树选中文件
    selectVueFile: function selectVueFile(file) {
      var project = this.projects[this.projectId];
      if (file && file.length > 0) {
        if (file[0].children.length > 0) {
          file[0].selected = false;
          file[0].expand = !file[0].expand;
          return;
        }
        var fileName = '/' + file[0].key;
        this.$store.dispatch('index/setProject', _extends({}, project, {
          fileName: fileName
        }));
        // document.getElementById('fileNameId').scrollIntoView()
      } else {
        this.$store.dispatch('index/setProject', _extends({}, project, {
          fileName: ''
        }));
      }
    },

    //下拉框选中文件
    chooseFile: function chooseFile(fileName) {
      var project = this.projects[this.projectId];
      this.$store.dispatch('index/setProject', _extends({}, project, {
        fileName: fileName
      }));
    },
    changeProject: function changeProject(index) {
      if (this.projects[index]) {
        this.searchword = '';
        var project = this.projects[index];
        var v = project.projectPath;
        // if(project.type === 'feHelper'){
        //   v = `${v}/src`
        // }
        this.getVueFile(v);
        this.projects[index].fileName = '';
        this.$store.dispatch('index/setProject', this.projects[index]);
      }
    },
    pathToTree: function pathToTree(list) {
      var output = [];
      list.forEach(function (item) {
        var chain = item.split("/");
        var currentNode = output;
        for (var j = 0; j < chain.length; j++) {
          var wantedNode = chain[j];
          var lastNode = currentNode;
          for (var k = 0; k < currentNode.length; k++) {
            if (currentNode[k].title == wantedNode) {
              currentNode = currentNode[k].children;
              break;
            }
          }
          if (lastNode == currentNode) {
            var newNode = currentNode[k] = { key: item, title: wantedNode, children: [] };
            currentNode = newNode.children;
          } else {
            delete currentNode.children;
          }
        }
      });
      return output;
    }
  },
  mounted: function mounted(e) {
    this.getProject();
  }
});
// CONCATENATED MODULE: ./src/views/index/fileList/fileList.vue?vue&type=script&lang=js&
 /* harmony default export */ var fileList_fileListvue_type_script_lang_js_ = (fileListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/index/fileList/fileList.vue?vue&type=style&index=0&id=08ee4848&lang=less&scoped=true&
var fileListvue_type_style_index_0_id_08ee4848_lang_less_scoped_true_ = __webpack_require__("pNMM");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/index/fileList/fileList.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  fileList_fileListvue_type_script_lang_js_,
  fileListvue_type_template_id_08ee4848_scoped_true_render,
  fileListvue_type_template_id_08ee4848_scoped_true_staticRenderFns,
  false,
  null,
  "08ee4848",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/index/fileList/fileList.vue"
/* harmony default export */ var fileList = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/operateArea/index.vue?vue&type=template&id=1642eccd&scoped=true&
var operateAreavue_type_template_id_1642eccd_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "oprate" },
    [
      _c("h4", { staticClass: "file-name", attrs: { id: "fileNameId" } }, [
        _c("span", [_vm._v("当前文件：")]),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.project.fileName) + "  ")]),
        _vm._v(" "),
        !_vm.project.fileName ? _c("span", [_vm._v("暂末选择文件")]) : _vm._e(),
        _vm._v(" "),
        _vm.project.fileName
          ? _c(
              "a",
              { attrs: { href: "javascript:;" }, on: { click: _vm.clearFile } },
              [_vm._v("清空")]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("ComponentArea"),
      _vm._v(" "),
      _c("ActionArea")
    ],
    1
  )
}
var operateAreavue_type_template_id_1642eccd_scoped_true_staticRenderFns = []
operateAreavue_type_template_id_1642eccd_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/views/index/operateArea/index.vue?vue&type=template&id=1642eccd&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/operateArea/actionArea.vue?vue&type=template&id=7842fc78&scoped=true&
var actionAreavue_type_template_id_7842fc78_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "area btn-box" },
    [
      _c("Button", { attrs: { type: "primary" }, on: { click: _vm.confirm } }, [
        _vm._v("确认")
      ]),
      _vm._v(" "),
      _c("Button", { on: { click: _vm.preview } }, [_vm._v("预览")]),
      _vm._v(" "),
      _c("Button", { on: { click: _vm.checkCode } }, [_vm._v("查看源码")]),
      _vm._v(" "),
      _c("Button", { on: { click: _vm.copyCode } }, [_vm._v("copy源码")]),
      _vm._v(" "),
      _c(
        "Button",
        {
          staticStyle: { display: "none" },
          attrs: { "data-clipboard-text": "", id: "hideCopyBtn" }
        },
        [_vm._v("copy源码")]
      ),
      _vm._v(" "),
      _c("Button", { on: { click: _vm.clear } }, [_vm._v("清空组件")]),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "查看源码", width: "850", "mask-closable": false },
          model: {
            value: _vm.codeModal,
            callback: function($$v) {
              _vm.codeModal = $$v
            },
            expression: "codeModal"
          }
        },
        [
          _c(
            "pre",
            {
              directives: [{ name: "highlight", rawName: "v-highlight" }],
              key: _vm.key
            },
            [_c("code", [_vm._v(_vm._s(_vm.code))])]
          ),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" })
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "确认", "mask-closable": false },
          on: { "on-ok": _vm.okEdit },
          model: {
            value: _vm.confirmModal,
            callback: function($$v) {
              _vm.confirmModal = $$v
            },
            expression: "confirmModal"
          }
        },
        [
          _c("div", [
            _vm._v("\n      确认将组件插入到下面的文件吗？\n      "),
            _c("div", { staticClass: "fileName-confirm" }, [
              _vm._v(_vm._s(_vm.project.fileName))
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "组件预览", width: "1000px", "mask-closable": false },
          model: {
            value: _vm.previewModal,
            callback: function($$v) {
              _vm.previewModal = $$v
            },
            expression: "previewModal"
          }
        },
        [
          _c("div", { staticClass: "overview-box" }, [
            _c("iframe", {
              staticClass: "overview",
              attrs: { id: "previewIframe", src: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" })
        ]
      )
    ],
    1
  )
}
var actionAreavue_type_template_id_7842fc78_scoped_true_staticRenderFns = []
actionAreavue_type_template_id_7842fc78_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/views/index/operateArea/actionArea.vue?vue&type=template&id=7842fc78&scoped=true&

// EXTERNAL MODULE: ./node_modules/clipboard/dist/clipboard.js
var clipboard = __webpack_require__("sxGJ");
var clipboard_default = /*#__PURE__*/__webpack_require__.n(clipboard);

// EXTERNAL MODULE: ./src/directive/highlight.js
var highlight = __webpack_require__("34bG");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/operateArea/actionArea.vue?vue&type=script&lang=js&
var actionAreavue_type_script_lang_js_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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







/* harmony default export */ var actionAreavue_type_script_lang_js_ = ({
  name: "actions",
  data: function data() {
    return {
      previewFile: '',
      previewUrl: '',
      drag: false,
      key: 1, //用于重新初始化highlight计算
      previewModal: false,
      codeModal: false,
      confirmModal: false,
      clipboard: null
    };
  },

  computed: actionAreavue_type_script_lang_js_extends({}, Object(vuex_esm["b" /* mapState */])({
    componentList: function componentList(state) {
      return state.index.componentList;
    },
    project: function project(state) {
      return state.index.project;
    },
    code: function code(state) {
      return state.index.code.replace(/↵/g, '\n');
    }
  })),
  directives: {
    highlight: highlight["a" /* default */]
  },
  methods: {
    //点击确认
    confirm: function confirm() {
      if (!this.project.projectPath) {
        this.$Message.error('请先选择项目');
        return;
      }
      if (!this.project.projectStore) {
        this.$Message.error('项目组件仓库没有配置');
        return;
      }
      if (!this.componentList.length) {
        this.$Message.error('请选择组件');
        return;
      }

      var components = this.componentList.map(function (ele) {
        return ele.name;
      });
      var _project = this.project,
          fileName = _project.fileName,
          projectPath = _project.projectPath,
          projectStore = _project.projectStore;

      var postData = {
        components: components,
        fileName: fileName ? '' + projectPath + fileName : '',
        projectPath: projectPath,
        projectStore: projectStore
      };
      this.cSendData = postData;

      if (!fileName) {
        this.confirmEdit(1);
      } else {
        this.confirmModal = true;
      }
    },
    confirmEdit: function confirmEdit(t) {
      var _this = this;

      var txt = t === 1 ? '组件代码生存成功' : '组件代码成功插入页面';
      request["a" /* default */].post('api/vue/getCode', this.cSendData).then(function (data) {
        _this.key++;
        _this.$store.dispatch('index/setCode', data);
        _this.clear();
        _this.$Message.success(txt);
      });
    },

    //清空组件选择框
    clear: function clear() {
      this.$store.dispatch('index/setComponent', []);
    },
    okEdit: function okEdit() {
      this.confirmEdit();
    },

    //查看源码
    checkCode: function checkCode() {
      var _this2 = this;

      var components = this.componentList.map(function (ele) {
        return ele.name;
      });
      if (!components.length) {
        this.$Message.error('请选择组件后查看源码');
        return;
      }
      var sendData = {
        components: components
      };
      request["a" /* default */].post('api/vue/checkCode', sendData).then(function (data) {
        _this2.key++;
        _this2.$store.dispatch('index/setCode', data);
        _this2.codeModal = true;
      });
    },

    //copy源码
    copyCode: function copyCode(e) {
      var _this3 = this;

      var components = this.componentList.map(function (ele) {
        return ele.name;
      });
      var str = '';
      if (!components.length) {
        this.$Message.error('请选择组件后copy源码');
        e.stopPropagation();
        return;
      }
      var sendData = {
        components: components
      };
      request["a" /* default */].post('api/vue/checkCode', sendData).then(function (data) {
        var colCopyBtn = document.getElementById('hideCopyBtn');
        str = data;
        if (colCopyBtn) {
          if (str === '') {
            _this3.$Message.error('当前暂无数据');
          } else {
            colCopyBtn.setAttribute('data-clipboard-text', str);
            colCopyBtn.click();
          }
        }
      });
    },

    //预览
    preview: function preview() {
      var _this4 = this;

      var components = this.componentList.map(function (ele) {
        return ele.name;
      });
      if (!components.length) {
        this.$Message.error('请选择组件');
        return;
      }
      var sendData = {
        components: components
      };
      document.getElementById('previewIframe').src = 'about:blank';
      request["a" /* default */].post('api/vue/preview', sendData).then(function (data) {
        _this4.key++;
        _this4.$store.dispatch('index/setCode', data);
        _this4.$Message.success('预览加载中，请稍候...');
        setTimeout(function () {
          _this4.previewModal = true;
          document.getElementById('previewIframe').src = 'http://localhost:8010/#/preview';
        }, 1000);
      });
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    this.clipboard = new clipboard_default.a('#hideCopyBtn');
    this.clipboard.on('success', function (e) {
      _this5.$Message.success('源码已copy到剪贴板，请直接粘贴使用');
      e.clearSelection();
    });
    this.clipboard.on('error', function (e) {
      _this5.$Message.error('copy失败');
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clipboard.destroy();
  }
});
// CONCATENATED MODULE: ./src/views/index/operateArea/actionArea.vue?vue&type=script&lang=js&
 /* harmony default export */ var operateArea_actionAreavue_type_script_lang_js_ = (actionAreavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/index/operateArea/actionArea.vue?vue&type=style&index=0&id=7842fc78&lang=less&scoped=true&
var actionAreavue_type_style_index_0_id_7842fc78_lang_less_scoped_true_ = __webpack_require__("v/th");

// CONCATENATED MODULE: ./src/views/index/operateArea/actionArea.vue






/* normalize component */

var actionArea_component = Object(componentNormalizer["a" /* default */])(
  operateArea_actionAreavue_type_script_lang_js_,
  actionAreavue_type_template_id_7842fc78_scoped_true_render,
  actionAreavue_type_template_id_7842fc78_scoped_true_staticRenderFns,
  false,
  null,
  "7842fc78",
  null
  
)

/* hot reload */
if (false) { var actionArea_api; }
actionArea_component.options.__file = "src/views/index/operateArea/actionArea.vue"
/* harmony default export */ var actionArea = (actionArea_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/operateArea/componentArea.vue?vue&type=template&id=ad5d3fb6&
var componentAreavue_type_template_id_ad5d3fb6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.componentList.length,
              expression: "!componentList.length"
            }
          ],
          staticClass: "dragArea",
          staticStyle: { "text-align": "center" }
        },
        [_vm._v("请从右侧选择组件")]
      ),
      _vm._v(" "),
      _c(
        "draggable",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.componentList.length,
              expression: "componentList.length"
            }
          ],
          staticClass: "dragArea",
          attrs: { group: "people" },
          on: {
            change: _vm.log,
            start: function($event) {
              _vm.drag = true
            },
            end: function($event) {
              _vm.drag = false
            }
          },
          model: {
            value: _vm.componentList,
            callback: function($$v) {
              _vm.componentList = $$v
            },
            expression: "componentList"
          }
        },
        [
          _c(
            "transition-group",
            {
              staticClass: "trans-group",
              attrs: {
                type: "transition",
                name: !_vm.drag ? "flip-list" : null
              }
            },
            _vm._l(_vm.componentList, function(item) {
              return _c(
                "div",
                { key: item.uuid, staticClass: "component-cell" },
                [
                  _c(
                    "div",
                    [
                      _c("span", [_vm._v(_vm._s(item.cName))]),
                      _vm._v(" "),
                      _c("Icon", {
                        staticClass: "del-icon",
                        attrs: { type: "md-close" },
                        on: {
                          click: function($event) {
                            return _vm.delComponent(item.uuid)
                          }
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.viewImgSrc,
              expression: "viewImgSrc"
            }
          ],
          staticClass: "img-area"
        },
        [_c("img", { attrs: { src: _vm.viewImgSrc } })]
      )
    ],
    1
  )
}
var componentAreavue_type_template_id_ad5d3fb6_staticRenderFns = []
componentAreavue_type_template_id_ad5d3fb6_render._withStripped = true


// CONCATENATED MODULE: ./src/views/index/operateArea/componentArea.vue?vue&type=template&id=ad5d3fb6&

// EXTERNAL MODULE: ./node_modules/vuedraggable/dist/vuedraggable.common.js
var vuedraggable_common = __webpack_require__("MQ60");
var vuedraggable_common_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_common);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/operateArea/componentArea.vue?vue&type=script&lang=js&
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




/* harmony default export */ var componentAreavue_type_script_lang_js_ = ({
  name: "componentList",
  components: {
    draggable: vuedraggable_common_default.a
  },
  data: function data() {
    return {
      drag: false
    };
  },

  computed: {
    componentList: {
      get: function get() {
        return this.$store.state.index.componentList;
      },
      set: function set(value) {
        this.$store.dispatch('index/setComponent', value);
      }
    },
    viewImgSrc: function viewImgSrc() {
      return this.$store.state.index.viewImgSrc;
    }
  },
  methods: {
    log: function log(evt) {
      window.console.log(evt);
    },
    delComponent: function delComponent(uuid) {
      var newList = this.componentList.filter(function (ele) {
        return ele.uuid !== uuid;
      });
      this.$store.dispatch('index/setComponent', newList);
    }
  }
});
// CONCATENATED MODULE: ./src/views/index/operateArea/componentArea.vue?vue&type=script&lang=js&
 /* harmony default export */ var operateArea_componentAreavue_type_script_lang_js_ = (componentAreavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/index/operateArea/componentArea.vue?vue&type=style&index=0&lang=less&
var componentAreavue_type_style_index_0_lang_less_ = __webpack_require__("+b6q");

// CONCATENATED MODULE: ./src/views/index/operateArea/componentArea.vue






/* normalize component */

var componentArea_component = Object(componentNormalizer["a" /* default */])(
  operateArea_componentAreavue_type_script_lang_js_,
  componentAreavue_type_template_id_ad5d3fb6_render,
  componentAreavue_type_template_id_ad5d3fb6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var componentArea_api; }
componentArea_component.options.__file = "src/views/index/operateArea/componentArea.vue"
/* harmony default export */ var componentArea = (componentArea_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/operateArea/index.vue?vue&type=script&lang=js&
var operateAreavue_type_script_lang_js_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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






/* harmony default export */ var operateAreavue_type_script_lang_js_ = ({
  components: {
    ActionArea: actionArea,
    ComponentArea: componentArea
  },
  computed: Object(vuex_esm["b" /* mapState */])({
    project: function project(state) {
      return state.index.project;
    }
  }),
  data: function data() {
    return {
      list: [],
      cSendData: {}
    };
  },

  methods: {
    clearFile: function clearFile() {
      this.$store.dispatch('index/setProject', operateAreavue_type_script_lang_js_extends({}, this.project, {
        fileName: ''
      }));
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./src/views/index/operateArea/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_operateAreavue_type_script_lang_js_ = (operateAreavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/index/operateArea/index.vue?vue&type=style&index=0&id=1642eccd&lang=less&scoped=true&
var operateAreavue_type_style_index_0_id_1642eccd_lang_less_scoped_true_ = __webpack_require__("UAzo");

// CONCATENATED MODULE: ./src/views/index/operateArea/index.vue






/* normalize component */

var operateArea_component = Object(componentNormalizer["a" /* default */])(
  index_operateAreavue_type_script_lang_js_,
  operateAreavue_type_template_id_1642eccd_scoped_true_render,
  operateAreavue_type_template_id_1642eccd_scoped_true_staticRenderFns,
  false,
  null,
  "1642eccd",
  null
  
)

/* hot reload */
if (false) { var operateArea_api; }
operateArea_component.options.__file = "src/views/index/operateArea/index.vue"
/* harmony default export */ var operateArea = (operateArea_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/moduleList/moduleList.vue?vue&type=template&id=0ff5f088&scoped=true&
var moduleListvue_type_template_id_0ff5f088_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "module" },
    [
      _c("Dynamic", { ref: "dynamic" }),
      _vm._v("\n\n    组件搜索："),
      _c("Input", {
        staticStyle: { width: "310px" },
        attrs: { clearable: "", placeholder: "分类、中、英文名、描述搜索" },
        on: { "on-change": _vm.searchModule },
        model: {
          value: _vm.searchKey,
          callback: function($$v) {
            _vm.searchKey = $$v
          },
          expression: "searchKey"
        }
      }),
      _vm._v(" "),
      _c("Button", { attrs: { type: "info" }, on: { click: _vm.addDynamic } }, [
        _vm._v("添加动态组件")
      ]),
      _vm._v(" "),
      _c(
        "ul",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.modulesSearch.length,
              expression: "modulesSearch.length"
            }
          ],
          staticClass: "module-ul"
        },
        [
          _c("li", { staticClass: "module-menu-li" }, [
            _c(
              "div",
              { staticStyle: { padding: "10px 0", "text-align": "center" } },
              [_vm._v("\n          搜索到以下结果：\n        ")]
            ),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "module-li-ul" },
              [
                _vm._l(_vm.modulesSearch, function(item2) {
                  return _c(
                    "li",
                    {
                      staticClass: "module-li",
                      attrs: { title: _vm.getTitle(item2) },
                      on: {
                        mouseenter: function($event) {
                          return _vm.enterItem(item2)
                        },
                        mouseleave: function($event) {
                          return _vm.leaveItem(item2)
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "module-img",
                        attrs: {
                          src:
                            "http://localhost:3000/storeImg/" +
                            item2.name +
                            ".png"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "big-img" }, [
                        _c("img", {
                          staticClass: "module-img",
                          attrs: {
                            src:
                              "http://localhost:3000/storeImg/" +
                              item2.name +
                              ".png"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "module-name" }, [
                        _vm._v(_vm._s(item2.cName))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "module-btn" },
                        [
                          _c("Icon", {
                            attrs: { type: "md-add-circle" },
                            on: {
                              click: function($event) {
                                return _vm.add(item2)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("Icon", {
                            attrs: { type: "md-document" },
                            on: {
                              click: function($event) {
                                return _vm.showReadMe(item2)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("Icon", {
                            attrs: { type: "md-code-working" },
                            on: {
                              click: function($event) {
                                return _vm.checkCode(item2)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("Icon", {
                            attrs: { type: "md-eye" },
                            on: {
                              click: function($event) {
                                return _vm.preView(item2)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                }),
                _vm._v(" "),
                _c("div", { staticStyle: { clear: "both" } })
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "module-ul" },
        _vm._l(_vm.components, function(item, index) {
          return _c(
            "li",
            {
              staticClass: "module-menu-li",
              on: {
                click: function($event) {
                  _vm.cIndex = index
                }
              }
            },
            [
              _c("div", { class: _vm.getClass(index) }, [
                _vm._v("\n          " + _vm._s(item.name) + "\n        ")
              ]),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass: "module-li-ul",
                  style: _vm.cIndex !== index ? "display:none" : ""
                },
                [
                  _vm._l(item.components, function(item2) {
                    return _c(
                      "li",
                      {
                        staticClass: "module-li",
                        attrs: { title: _vm.getTitle(item2) },
                        on: {
                          mouseenter: function($event) {
                            return _vm.enterItem(item2)
                          },
                          mouseleave: function($event) {
                            return _vm.leaveItem(item2)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "module-img",
                          attrs: {
                            src:
                              "http://localhost:3000/storeImg/" +
                              item2.name +
                              ".png"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "big-img" }, [
                          _c("img", {
                            staticClass: "module-img",
                            attrs: {
                              src:
                                "http://localhost:3000/storeImg/" +
                                item2.name +
                                ".png"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "module-name" }, [
                          _vm._v(_vm._s(item2.cName))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "module-btn" },
                          [
                            _c("Icon", {
                              attrs: { type: "md-add-circle" },
                              on: {
                                click: function($event) {
                                  return _vm.add(item2)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("Icon", {
                              attrs: { type: "md-document" },
                              on: {
                                click: function($event) {
                                  return _vm.showReadMe(item2)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("Icon", {
                              attrs: { type: "md-code-working" },
                              on: {
                                click: function($event) {
                                  return _vm.checkCode(item2)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("Icon", {
                              attrs: { type: "md-eye" },
                              on: {
                                click: function($event) {
                                  return _vm.preView(item2)
                                }
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", { staticStyle: { clear: "both" } })
                ],
                2
              )
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "readMe", width: "850", "mask-closable": false },
          model: {
            value: _vm.readModal,
            callback: function($$v) {
              _vm.readModal = $$v
            },
            expression: "readModal"
          }
        },
        [
          _vm._v("\n      " + _vm._s(_vm.readTxt) + "\n      "),
          _vm.cComponents.name
            ? _c("div", [
                _c("img", {
                  staticClass: "docImg",
                  attrs: {
                    src:
                      "http://localhost:3000/storeImg/" +
                      _vm.cComponents.name +
                      ".png"
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" })
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: _vm.codeTitle, width: "850", "mask-closable": false },
          model: {
            value: _vm.codeModal,
            callback: function($$v) {
              _vm.codeModal = $$v
            },
            expression: "codeModal"
          }
        },
        [
          _c(
            "pre",
            {
              directives: [{ name: "highlight", rawName: "v-highlight" }],
              key: _vm.key
            },
            [_c("code", [_vm._v(_vm._s(_vm.code))])]
          ),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" })
        ]
      ),
      _vm._v(" "),
      _c(
        "Modal",
        {
          attrs: { title: "组件预览", width: "1000px", "mask-closable": false },
          model: {
            value: _vm.previewModal,
            callback: function($$v) {
              _vm.previewModal = $$v
            },
            expression: "previewModal"
          }
        },
        [
          _c("div", { staticClass: "overview-box" }, [
            _c("iframe", {
              staticClass: "overview",
              attrs: { id: "previewIframe2", src: "" }
            })
          ]),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" })
        ]
      )
    ],
    1
  )
}
var moduleListvue_type_template_id_0ff5f088_scoped_true_staticRenderFns = []
moduleListvue_type_template_id_0ff5f088_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/views/index/moduleList/moduleList.vue?vue&type=template&id=0ff5f088&scoped=true&

// EXTERNAL MODULE: ./src/views/dynamic/index.vue + 15 modules
var dynamic = __webpack_require__("BbHQ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/moduleList/moduleList.vue?vue&type=script&lang=js&
var moduleListvue_type_script_lang_js_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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






/* harmony default export */ var moduleListvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      timeout: null,
      searchKey: '',
      cIndex: null,
      components: [],
      modules: [],
      modulesSearch: [],
      readModal: false,
      readTxt: '',
      cComponents: '',
      key: 1, //用于重新初始化highlight计算
      codeModal: false,
      codeTitle: '',
      previewModal: false
    };
  },

  components: {
    Dynamic: dynamic["default"]
  },
  computed: Object(vuex_esm["b" /* mapState */])({
    uuid: function uuid(state) {
      return state.index.uuid;
    },
    code: function code(state) {
      return state.index.code.replace(/↵/g, '\n');
    },
    viewImgSrc: function viewImgSrc(state) {
      return state.index.viewImgSrc;
    }
  }),
  directives: {
    highlight: highlight["a" /* default */]
  },
  methods: {
    addDynamic: function addDynamic() {
      this.$refs.dynamic.show();
    },
    searchModule: function searchModule(e) {
      var _this = this;

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      var key = e.target.value;
      if (!key) {
        this.modulesSearch = [];
        return;
      }
      this.timeout = setTimeout(function () {
        _this.getModulesByKey(key);
      }, 100);
    },
    getComponetsByType: function getComponetsByType(type, data) {
      var arr = [];
      data.forEach(function (item) {
        if (item.type === type) {
          arr.push(item);
        }
      });
      return arr;
    },
    getModules: function getModules() {
      var _this2 = this;

      request["a" /* default */].get('api/vue/getComponets').then(function (data) {
        var types = [],
            arr = [];
        data.infos.forEach(function (item) {
          if (types.indexOf(item.type) === -1) {
            types.push(item.type);
          }
        });

        types.forEach(function (item) {
          var obj = {
            name: item
          };
          obj.components = _this2.getComponetsByType(item, data.infos);
          arr.push(obj);
        });
        _this2.components = arr;

        var modules = [];
        arr.forEach(function (item) {
          item.components.forEach(function (item2) {
            modules.push(item2);
          });
        });
        _this2.modules = modules;
      });
    },
    getModulesByKey: function getModulesByKey(key) {
      var arr = [];
      key = key.toLowerCase();
      this.modules.forEach(function (item) {
        var str = '';
        for (var p in item) {
          if (p !== 'autho') {
            str += item[p];
          }
        }

        if (str.toLowerCase().indexOf(key) != -1) {
          arr.push(item);
        }
      });
      this.modulesSearch = arr;
    },
    getTitle: function getTitle(item) {
      //if(!item.desc){ return ''}
      return '\u540D\u79F0:' + item.name + '\n\u63CF\u8FF0:' + (item.desc || '暂无');
    },
    getClass: function getClass(index) {
      if (index === this.cIndex) {
        return 'module-type-active';
      }
      return 'module-type';
    },
    add: function add(item) {
      item.uuid = this.uuid;
      this.$store.dispatch('index/uuidAdd');
      this.$store.dispatch('index/addComponent', moduleListvue_type_script_lang_js_extends({}, item));
    },
    showReadMe: function showReadMe(item) {
      var _this3 = this;

      this.readModal = true;
      this.cComponents = item;
      request["a" /* default */].get('api/vue/getReadMe', { name: item.name }).then(function (data) {
        _this3.readTxt = data;
      });
    },

    //查看组件源码
    checkCode: function checkCode(item) {
      var _this4 = this;

      var components = [item.name];
      request["a" /* default */].post('api/vue/checkCode', { components: components }).then(function (data) {
        _this4.key++;
        _this4.codeTitle = item.cName + ' \u6E90\u7801';
        _this4.$store.dispatch('index/setCode', data);
        _this4.codeModal = true;
      });
    },
    preView: function preView(item) {
      var _this5 = this;

      var components = [item.name];
      var sendData = {
        components: components
      };
      document.getElementById('previewIframe2').src = 'about:blank';
      request["a" /* default */].post('api/vue/preview', sendData).then(function () {
        _this5.$Message.success('预览加载中，请稍候...');
        setTimeout(function () {
          _this5.previewModal = true;
          document.getElementById('previewIframe2').src = 'http://localhost:8010/#/preview';
        }, 1000);
      });
    },
    enterItem: function enterItem(item) {
      var name = item.name;
      this.$store.dispatch('index/setViewImgSrc', 'http://localhost:3000/storeImg/' + name + '.png');
    },
    leaveItem: function leaveItem(item) {
      var name = item.name;
      this.$store.dispatch('index/setViewImgSrc', '');
    }
  },
  mounted: function mounted() {
    this.getModules();
  }
});
// CONCATENATED MODULE: ./src/views/index/moduleList/moduleList.vue?vue&type=script&lang=js&
 /* harmony default export */ var moduleList_moduleListvue_type_script_lang_js_ = (moduleListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/index/moduleList/moduleList.vue?vue&type=style&index=0&id=0ff5f088&lang=less&scoped=true&
var moduleListvue_type_style_index_0_id_0ff5f088_lang_less_scoped_true_ = __webpack_require__("WY28");

// CONCATENATED MODULE: ./src/views/index/moduleList/moduleList.vue






/* normalize component */

var moduleList_component = Object(componentNormalizer["a" /* default */])(
  moduleList_moduleListvue_type_script_lang_js_,
  moduleListvue_type_template_id_0ff5f088_scoped_true_render,
  moduleListvue_type_template_id_0ff5f088_scoped_true_staticRenderFns,
  false,
  null,
  "0ff5f088",
  null
  
)

/* hot reload */
if (false) { var moduleList_api; }
moduleList_component.options.__file = "src/views/index/moduleList/moduleList.vue"
/* harmony default export */ var moduleList = (moduleList_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/index/index.vue?vue&type=script&lang=js&
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





/* harmony default export */ var indexvue_type_script_lang_js_ = ({
  name: "index",
  components: {
    FileList: fileList,
    OperateArea: operateArea,
    ModuleList: moduleList
  },
  methods: {}
});
// CONCATENATED MODULE: ./src/views/index/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_indexvue_type_script_lang_js_ = (indexvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/index/index.vue





/* normalize component */

var index_component = Object(componentNormalizer["a" /* default */])(
  views_indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var index_api; }
index_component.options.__file = "src/views/index/index.vue"
/* harmony default export */ var index = __webpack_exports__["default"] = (index_component.exports);

/***/ }),

/***/ "UAzo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1642eccd_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4JMS");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1642eccd_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1642eccd_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1642eccd_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "W60w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tVNY");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "WY28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_moduleList_vue_vue_type_style_index_0_id_0ff5f088_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vL9t");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_moduleList_vue_vue_type_style_index_0_id_0ff5f088_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_moduleList_vue_vue_type_style_index_0_id_0ff5f088_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_moduleList_vue_vue_type_style_index_0_id_0ff5f088_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "WZVb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "lRoq":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "pNMM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fileList_vue_vue_type_style_index_0_id_08ee4848_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DHm6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fileList_vue_vue_type_style_index_0_id_08ee4848_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fileList_vue_vue_type_style_index_0_id_08ee4848_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fileList_vue_vue_type_style_index_0_id_08ee4848_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "t3Un":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/*
 * --------------------------------------------
 * 通用发送请求文件
 * 默认返回json结构
 * - retCode : 返回码  默认200为成功，其他失败
 * - retDesc : 返回信息
 * - result : 返回信息结构体，必须为Object
 * --------------------------------------------
 */



var TIMEOUT = 10000,
    baseUrl = "/";

// 新建axios实例，避免污染全局axios
var axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({});
// 错误处理通用方法
var errorHandler = function errorHandler(res, message) {
  // 抛出错误
  if (message) {
    alert(message);
    //Vue.toast.fail(`请求失败：${message}`);
  }
  return Promise.reject(res);
};

// 请求拦截器
axios.interceptors.request.use(function (config) {
  config.url = baseUrl + config.url;
  config.timeout || (config.timeout = TIMEOUT);

  return config;
}, function (error) {
  var message = error.message;

  return errorHandler({
    config: error.config,
    data: {
      retCode: -2,
      retDesc: "\u8BF7\u6C42\u9519\u8BEF\uFF1A" + message
    }
  }, message);
});

// 返回拦截器
axios.interceptors.response.use(function (res) {
  var data = res.data;
  var message = data.message;


  if (data.code == "200" || data.code == "10200") {
    return Promise.resolve(data.data);
  } else {
    return errorHandler(res, message);
  }
}, function (error) {
  var response = error.response;

  var message = response.data.message || "";
  // 超时等其他catch到的错误
  return errorHandler({
    config: error.config,
    data: {
      retCode: -1,
      retDesc: "\u8BF7\u6C42\u5931\u8D25\uFF1A" + message,
      code: response.data.code
    }
  }, message);
});

var ajax = {},
    methods = ["get", "post", "delete", "put"];

methods.forEach(function (m) {
  /**
   * 参数说明
   * 降低修改成本，url和data参数保持原样
   * 其他所有参数改成解构，需要其他参数自行添加
   * =>timeout  number  超时时间  默认10s
   */
  ajax[m] = function (url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === undefined ? 10000 : _ref$timeout;

    var config = {
      timeout: timeout
    };
    // post和其他method区分
    if (m !== "post" && m !== "put") {
      // 获取一个副本，避免修改data时影响传入的参数对象
      var params = Object.assign({}, data);
      // 非post请求 追加时间戳参数
      params.t = new Date().getTime();
      config.params = params;
      return axios[m](url, config);
    } else {
      // post请求 追加header
      config.headers = {
        "Content-Type": "application/json"
      };
      return axios[m](url, data, config);
    }
  };
});

/* harmony default export */ __webpack_exports__["a"] = (ajax);

/***/ }),

/***/ "tVNY":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "v/th":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_actionArea_vue_vue_type_style_index_0_id_7842fc78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WZVb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_actionArea_vue_vue_type_style_index_0_id_7842fc78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_actionArea_vue_vue_type_style_index_0_id_7842fc78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_actionArea_vue_vue_type_style_index_0_id_7842fc78_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "vL9t":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);