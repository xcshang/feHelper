let tableMixin = {
    data() {
        return {
            //page
            pageTotal: 1000,
            pageData: {
                pageSize: 20,
                pageNo: 1
            },
            //search
            searchDataName: 'searchData', //搜索数据名称，页面可覆盖
            searchValue: {}, //数据数据的值
            searchDefaultValue: {}, //搜索默认数据

            //select
            rowId: "id", //行唯一标志key，页面可覆盖
            selectedData: { //要发送过后端的选择数据，
                isAll: false,
                //全选
                in: [],
                //数组内为已选择id
                out: [] //数组内为排除选择id
            }

        }
    },
    methods: {

        /* ----------------------------- page ----------------------------- */

        //换页
        pageChange(v) {
            this.pageData.pageNo = v
            this.getTableData('page')
        },
        //换页面条数
        pageSizeChange(v) {
            this.pageData.pageSize = v
            this.pageData.pageNo = 1
            this.getTableData('pageSize')
        },
        /* ----------------------------- search ----------------------------- */

        //搜索
        searchHandle() {
            this.pageData.pageNo = 1
            this.searchValue = this.getNotEmptyData(this[this.searchDataName])
            this.getTableData('search')
        },

        getNotEmptyData(obj) {
            let newObj = {}
            for (var p in obj) {
                if (obj[p] !== '' && obj[p] !== undefined && obj[p] !== null) {
                    newObj[p] = obj[p]
                }
            }
            return newObj
        },

        //重置
        resetSearchHandle() {
            this.pageData.pageNo = 1
            this.searchValue = this.getNotEmptyData(this.searchDefaultValue)
            this[this.searchDataName] = Object.assign({}, this.searchDefaultValue)
            this.getTableData('reset')
        },

        /* ----------------------------- select ----------------------------- */
        //每次重新获取表格数据的初始化选择
        initSelect(tableData) {
            tableData.forEach(item => {
                //全选
                if (this.selectedData.isAll) {
                    item._checked = true;
                } else {
                    item._checked = this.selectedData.in.indexOf(item[this.rowId]) !== -1 ? true : false;
                }
            });
        },

        //更改已选择数据
        changeSelected(t, id) {
            //全选
            if (t === "all") {
                this.selectedData.isAll = true;
            } //取消全选

            if (t === "allCancel") {
                this.selectedData.isAll = false;
            }

            if (t === "all" || t === "allCancel") {
                this.selectedData.in = [];
                this.selectedData.out = [];
            }
            //选择一个

            if (t === "add") {
                if (this.selectedData.isAll) {
                    this.delSeleced("out", id);
                } else {
                    this.selectedData.in.push(id);
                }
            } //取消一个


            if (t === "cancel") {
                if (this.selectedData.isAll) {
                    this.selectedData.out.push(id);
                } else {
                    this.delSeleced("in", id);
                }
            }
        },

        //删除一个选择
        delSeleced(t, id) {
            for (var i = 0; i < this.selectedData[t].length; i++) {
                let tId = this.selectedData[t][i];

                if (id === tId) {
                    this.selectedData[t].splice(i, 1);
                    break;
                }
            }
        },

        //选择一行数据
        selectID(selection, row) {
            let id = row[this.rowId];
            this.changeSelected("add", id);
        },

        //取消一个选择
        selectCancel(selection, row) {
            let id = row[this.rowId];
            this.changeSelected("cancel", id);
        },

        //选择所有
        selectAll() {
            this.changeSelected("all");
        },

        //取消所有选择
        selectAllCancel() {
            this.changeSelected("allCancel");
        }

    },

    mounted() {

    }

}

export default tableMixin