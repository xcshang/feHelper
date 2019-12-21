let dutil = require('../dutil')
const form = require('./form')
let component = {
    id: 0,
    sort: false,
    selection: false,

    init(m) {
        component.id = '_' + parseInt(Math.random(10000) * 10000)
        component.sort = false
        if (m.search) {
            component.searchData = form.init(m.searchData)
        }
        let data = component.getData(m)
        let methods = component.getMethods(m)
        let template = component.getTemplate(m)
        template = `<!--table start-->\n${template}\n<!--table end-->`
        return {
            template,
            data,
            methods
        }
    },

    //获取数据名称
    getPram(m) {
        let columnsName = m.columnsDataName || `columns${component.id}`
        let dataName = m.dataName || `tableData${component.id}`
        return {
            columnsName,
            dataName
        }
    },

    //获取模板
    getTemplate(m) {
        let parm = component.getPram(m)
        let oprateBtn = ''
        let pages = ''
        let sort = ''
        let selection = ''
        let editModal = ''
        let delModal = ''

        if (m.oprateBtn) {
            let bnts = ''
            m.oprateBtns.forEach((item) => {
                let ghost = item.ghost ? 'ghost' : ''
                let btn = `<Button type="${item.type}" ${ghost} @click="">${item.name}</Button>`
                bnts += btn
            })
            oprateBtn = `<!--tool start-->
            <div class="FEtoolBtnBar">
              <div class="FEtoolBtn" style="top:15px">
                ${bnts}
              </div>
            </div>
            <!--tool end-->`
        }
        //排序
        if (m.sort) {
            sort = `@on-sort-change="sortChange"`
        }
        //选择
        if (m.selection) {
            selection = `@on-select="selectID"
			@on-select-cancel="selectCancel"
			@on-select-all="selectAll"
			@on-select-all-cancel="selectAllCancel"`
        }
        //翻页
        if (m.pages) {
            pages = `<div class="FEpageBox">
			<Page
			  v-if="pageTotal"
			  show-sizer
			  show-total
			  :total="pageTotal"
			  :current="pageData.pageNo"
			  :pageSize="pageData.pageSize"
			  @on-change="pageChange"
              @on-page-size-change="pageSizeChange"
              show-elevator
			/>
		  </div>`
        }
        //删除
        if (m.del) {
            delModal = ` <!--del modal start-->
			<Modal v-model="showDelModal" title="删除" footer-hide :mask-closable="false">
			  <div>
				确认删除吗？
				<div slot="footer" class="FEmodalBtnBox">
				  <div class="FEmodalBtn">
					<Button @click="delOK" type="error">确认</Button>
					<Button @click="showDelModal=false">取消</Button>
				  </div>
				</div>
			  </div>
			</Modal>
			<!--del modal end-->`
        }
        //编辑
        if (m.edit) {
            //let formStr = form.init(m.editFormData).template
            editModal = `<!--edit modal start-->
			<Modal v-model="showEditModal" title="编辑" footer-hide :mask-closable="false">
			  <div>
				<!--edit form start-->
				
				<!--edit form end-->
				<div slot="footer" class="FEmodalBtnBox">
				  <div class="FEmodalBtn">
					<Button type="primary" @click="editOK">确认</Button>
					<Button @click="showEditModal=false">取消</Button>
				  </div>
				</div>
			  </div>
			</Modal>
			<!--edit modal end-->`
        }
        let searchStr = ''
        if (m.search) {
            searchStr = component.searchData.template
        }
        let str = `${oprateBtn}\n${searchStr}\n<Table :columns="${parm.columnsName}" :data="${parm.dataName}" ${sort} ${selection}></Table>${pages}${delModal}${editModal}`
        return str
    },

    getData(m) {
        let data = {}
        let parm = component.getPram(m)
        let columns = parm.columnsName
        let tableData = parm.dataName
        data[columns] = []
        m.columns.forEach((item) => {
            let column = component.getColumns(item, m)
            data[columns].push(column)
        })
        data[tableData] = [{}]
        data.tableSendData = {}
        if (m.search) {
            let searchData = component.searchData.data
            data = {...data, ...searchData }
        }
        if (m.del) {
            data[`showDelModal`] = false
        }
        if (m.edit) {
            data[`showEditModal`] = false
                //let editRuleValidate = form.init(m.editFormData).data.editRuleValidate
                //data[`editRuleValidate`] = editRuleValidate
        }
        if (m.edit || m.del || m.export) {
            data[`cRow`] = {}
        }
        return data
    },

    getMethods(m) {
        let parm = component.getPram(m)
        let methods = []

        let pageData = m.pages ? '...this.pageData,' : ''
        let pageTotal = m.pages ? 'this.pageTotal = data.pageTotal' : ''
        let searchData = m.search ? '...this.searchValue,' : ''
        let selection = m.selection ? `\nthis.initSelect(data)//表格选择初始化\n` : ''

        methods.push(
            `//获取表格数据
			getTableData(type){
			let sendData = {
				${pageData}
                ${searchData}
                ...this.tableSendData
			}
			ajax.post('api', sendData).then((data)=>{
				${selection}
				${pageTotal}
				this.${parm.dataName} = data.list	
			})}`
        )

        if (m.sort) {
            methods.push(`sortChange(column){
                this.pageData.pageNo = 1;
                this.tableSendData[column.key] = column.order;
                this.getTableData();
            }`)
        }

        if (m.del) {
            methods.push(
                `//删除一行数据
				delRow(row) {
				  row = row || {};
				  this.cRow = row;
				  this.showDelModal = true;
				},
				//确认删除一行数据
				delOK() {
				let sendData = {
					id: this.cRow.id
				};
				ajax.post("api", sendData).then(data => {
					this.showDelModal = false;
					this.$Message.success("删除成功");
					this.getTableData();
				});
				}`
            )
        }

        if (m.edit) {
            methods.push(
                `//编辑一行数据
                editRow(row) {
                    this.showEditModal = true;
                },
                //确认编辑一行数据
                editOK() {
                    
                }`
            )
        }
        return methods

    },

    //获取Columns
    getColumns(m, table) {

        let column = {}
        if (m.title) {
            column.title = m.title
        }
        if (m.key) {
            column.key = m.key
        }
        if (m.type) {
            if (m.type === 'selection') {
                table.selection = true
            }
            column.type = m.type
        }
        if (m.width) {
            column.width = m.width
        }
        if (m.fixed) {
            column.fixed = m.fixed
        }
        if (m.align) {
            column.align = m.align
        }

        if (m.options && m.options.length) {
            if (m.options.indexOf('sort') !== -1) {
                table.sort = true
                column.sortable = 'custom'
            }
            if (m.options.indexOf('filter') !== -1) {
                column.filters = [{ label: '选择1', value: 1 }]
                column.filterMultiple = false,
                    column.filterRemote = `$fun(value, row)=>{ this.pageData.pageNo = 1;this.tableSendData[row] = value[0];this.getTableData()}$fun`
            }
            if (m.options.indexOf('render') !== -1) {
                column.render = `$fun (h, params)=> {return <div></div>}$fun`
            }
            if (m.options.indexOf('oprate') !== -1) {
                let renderStr = ''
                if (table.del) {
                    renderStr += `<a onClick={this.delRow.bind(null, params.row)}>删除</a>`
                }
                if (table.edit) {
                    renderStr += `<a onClick={this.editRow.bind(null, params.row)}>编辑</a>`
                }
                column.render = `$fun (h, params)=> {return <div>${renderStr}</div>}$fun`
            }
        }

        return column
    }

}

module.exports = component