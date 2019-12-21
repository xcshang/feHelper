let dutil = require('../dutil')

function hasKey(s, arr) {
    if (arr.indexOf(s) !== -1) {
        return true
    }
    return false
}

let getParm = {
    vModel(item, form) {
        let dataName = component.formDataName
        return item.key ? `v-model="${dataName}.${item.key}"` : ''
    },
    placeholder(item) {
        return item.placeholder ? `placeholder="${item.placeholder}"` : ''
    },
    clearable(item) {
        return hasKey('clearable', item.options) ? `clearable` : ''
    },
    multiple(item) {
        return hasKey('multiple', item.options) ? `multiple` : ''
    }
}

let elems = {
    input(item, form, type) {
        let vModel = getParm.vModel(item, form)
        let placeholder = getParm.placeholder(item)
        let clearable = getParm.clearable(item)
        let ctype = type ? `type="${type}"` : ''
        return `<Input ${ctype} ${vModel} ${placeholder} ${clearable}  />`
    },
    text(item, form) {
        return `${item.text}`
    },

    inputNumber(item, form) {
        let vModel = getParm.vModel(item, form)
        let placeholder = getParm.placeholder(item)
        return `<InputNumber ${vModel} ${placeholder}  />`
    },

    password(item, form) {
        return elems.input(item, form, 'password')
    },

    textarea(item, form) {
        return elems.input(item, form, 'textarea')
    },

    select(item, form) {
        let vModel = getParm.vModel(item, form)
        let placeholder = getParm.placeholder(item)
        let clearable = getParm.clearable(item)
        let selectData = item.dataName || `${item.key}List${component.id}`
        let multiple = getParm.multiple(item)
        let filterable = hasKey('filterable', item.options) ? `filterable` : ''
        return `<Select ${vModel} ${placeholder} ${clearable} ${multiple} ${filterable} >\n\t<Option v-for="item in ${selectData}" :value="item.value" :key="item.value">{{ item.label }}</Option>\n</Select>`
    },

    radio(item, form) {
        let template = ''
        let vModel = getParm.vModel(item, form)
        if (hasKey('compass', item.options)) {
            template = `<RadioGroup ${vModel}>\n\t<Radio label="">radio1</Radio>\n</RadioGroup>`
        } else {
            template = `<Radio ${vModel}>${item.label}</Radio>`
        }
        return template
    },

    checkbox(item, form) {
        let template = ''
        let vModel = getParm.vModel(item, form)
        if (hasKey('compass', item.options)) {
            template = `<CheckboxGroup ${vModel}>\n\t<Checkbox label="">Checkbox1</Checkbox>\n</CheckboxGroup>`
        } else {
            template = `<Checkbox ${vModel}>${item.label}</Checkbox>`
        }
        return template
    },

    switch (item, form) {
        let vModel = getParm.vModel(item, form)
        return `<i-switch ${vModel}></i-switch>`
    },

    date(item, form, type) {
        let vModel = getParm.vModel(item, form)
        let placeholder = getParm.placeholder(item)
        let clearable = getParm.clearable(item)
        type = type || 'date'
        let ctype = type ? `type="${type}"` : ''
        return `<DatePicker ${ctype} ${vModel} ${placeholder} ${clearable}></DatePicker>`
    },

    daterange(item, form) {
        return elems.date(item, form, 'daterange')
    },

    year(item, form) {
        return elems.date(item, form, 'year')
    },

    month(item, form) {
        return elems.date(item, form, 'month')
    },

    time(item, form, type) {
        let vModel = getParm.vModel(item, form)
        let placeholder = getParm.placeholder(item)
        let clearable = getParm.clearable(item)
        type = type || 'time'
        let ctype = type ? `type="${type}"` : ''
        return `<TimePicker ${ctype} ${vModel} ${placeholder} ${clearable}></TimePicker>`
    },

    timerange(item, form) {
        return elems.time(item, form, 'timerange')
    },

}

let component = {
    id: 0,
    formDataName: '',
    init(m) {
        component.id = '_' + parseInt(Math.random(10000) * 10000)
        this.getFormDataName(m)
        let template = component.getTemplate(m)
        let script = component.getScript(m)
        template = `<!--${m.formType} start-->\n${template}\n<!--${m.formType} end-->`
        return {
            template,
            ...script
        }
    },

    getFormDataName(form) {
        let dataName = ''
        if (form.formType === 'search') {
            dataName = form.dataName || 'searchData'
        } else if (form.edit) {
            dataName = 'cRow'
        } else {
            dataName = form.dataName || `formData${component.id}`
        }
        component.formDataName = dataName
    },

    getLabelGroupIndex(labelGroup, itemd) {
        let n = 0
        labelGroup.forEach((item, index) => {
            if (item.label === itemd.label) {
                n = index
            }
        })
        return n
    },

    getLabelGroup(label, m) {
        let labelGroup = []
        m.formItem.forEach((item, index) => {
            if (label === item.label && item.options.indexOf('labelGroup') !== -1) {
                labelGroup.push(item)
            }
        })
        return labelGroup
    },

    getTemplate(m) {
        let templates = []
        m.formItem.forEach((item, index) => {
            let template = elems[item.type](item, m)
            item.template = template
            templates.push({
                template,
                item
            })
        })

        let code = ''
        if (m.formType === 'form') {
            code = component.getForm(templates, m)
        }
        if (m.formType === 'search') {
            code = component.getFormSearch(templates, m)
        }
        return code
    },

    getFormSearch(templates, form) {
        let str1 = `<div class="FEsearchForm">`
        let tps = []
        templates.forEach((item, index) => {
            let formItem = `\t<div class="FEsearchForm-item">\n\t\t<span class="FEsearchForm-title">${item.item.label}</span>\n\t\t${item.template}\n\t</div>`
            tps.push(formItem)
        })
        let btnCode = component.getSearchBtn(form)
        let code = `${str1}\n${tps.join('\n')}\n${btnCode}\n</div>`
        return code
    },

    getSearchBtn(form) {
        let id = component.id
        let code = `<div class="FEsearchForm-btn"><Button type="primary" @click="searchHandle">搜索</Button>\n<Button @click="resetSearchHandle">重置</Button></div>`
        return code
    },

    getForm(templates, form) {
        let str1 = '',
            btns = ''

        if (form.edit) {
            str1 = `<Form ref="editForm" :model="cRow" :rules="editRuleValidate" :label-width="100">`
        } else {
            str1 = `<Form ref="form${component.id}" :model="${component.formDataName}" :rules="ruleValidate${component.id}" :label-width="100">`
            btns = `<FormItem>
            <Button type="primary" @click="handleSubmit${component.id}('form${component.id}')">Submit</Button>
            <Button @click="handleReset${component.id}('form${component.id}')" style="margin-left: 8px">Reset</Button>
        </FormItem>`
        }
        let tps = []
        let labels = []
        templates.forEach((item, index) => {
            let formItem = ''
            let label = item.item.label

            if (item.item.options.indexOf('labelGroup') !== -1) {
                if (labels.indexOf(label) === -1) {
                    labels.push(label)
                    let group = component.getLabelGroup(label, form)
                    formItem = component.getLabelGroupTemplate(group, form)
                }
            } else {
                formItem = `<FormItem label="${item.item.label}" prop="${item.item.key}">\n\t${item.template}\n</FormItem>`
            }
            tps.push(formItem)
        })

        let code = `${str1}\n${tps.join('\n')}${btns}\n</Form>`
        return code
    },

    getLabelGroupTemplate(group, form) {
        let label = group[0].label
        let str1 = `<FormItem label="${label}"><Row>`
        let formItems = []
        group.forEach((item) => {
            let formItem = `<Col span="11"><FormItem prop="${item.key}">${item.template}</FormItem></Col>`
            formItems.push(formItem)
        })
        let code = `${str1}${formItems.join('<Col span="2">&nbsp;</Col>')}</Row></FormItem>`
        return code
    },

    getScript(m) {
        let data = component.getData(m)
        let methods = component.getMethods(m)
        return {
            data,
            methods
        }
    },

    handleSubmit(name) {
        this.$refs[name].validate(valid => { if (valid) { this.$Message.success('Success!'); } else { this.$Message.error('Fail!'); } });
    },

    getMethods(m) {
        let methods = []
        let id = component.id
        let formDataName = component.formDataName
        if (m.formType === 'form') {
            methods.push(`handleSubmit${id}(name){this.$refs[name].validate(valid => {if (valid) {this.$Message.success('Success!');} else { this.$Message.error('Fail!'); }})}`)
            methods.push(`handleReset${id}(name){this.$refs[name].resetFields();}`)
        }
        // if(m.formType === 'search'){
        // 	methods[`searchHandle${id}`] = `$fun()=>{this.searchData${id}.value = Object.assign({}, this.${formDataName})}$fun`
        // 	methods[`resetSearchHandle${id}`] = `$fun()=>{this.${formDataName} = Object.assign({}, this.searchData${id}.defaultValue);this.searchData${id}.searchValue = Object.assign({}, this.searchData${id}.defaultValue)}$fun`
        // }
        return methods
    },

    getData(m) {
        let id = component.id
        let data = {}
        let formDataName = component.formDataName
        data[formDataName] = {}
        let ruleValidate = {}
        m.formItem.forEach((item, index) => {
            let value = ''
                //是数组类数据
            if (hasKey('multiple', item.options)) {
                value = []
            }
            if (item.type === 'checkbox' && hasKey('compass', item.options)) {
                value = []
            }
            if (item.type === 'inputNumber') {
                value = 0
            }
            data[formDataName][item.key] = value
            if (item.type === 'select') {
                let dataName = item.dataName || `${item.key}List${component.id}`
                data[dataName] = []
            }
            if (m.formType === 'form') {
                let validate = item.validate
                let rule = {}
                if (validate.required) {
                    rule.required = true
                }
                if (validate.type) {
                    rule.type = validate.type
                }

                rule.message = validate.message || `${item.label}不能为空`

                ruleValidate[[item.key]] = [
                    rule
                ]
            }
        })
        if (m.formType === 'form') {
            data[`ruleValidate${component.id}`] = ruleValidate
        }
        if (m.edit) {
            data[`editRuleValidate`] = ruleValidate
        }

        // if(m.formType === 'search'){
        // 	data[`searchData${id}`] = {
        //         defaultValue: {},
        //         value: {}
        //       }
        // }
        return data
    }

}

module.exports = component