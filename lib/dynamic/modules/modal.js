
const dutil = require('../dutil')

let component = {
	id: 1,
	init(m){
		component.id = parseInt(Math.random(10000)*10000)
		let template = component.getTemplate(m)
		let script = component.getScript(m)
		return {
			template,
			script
		}
	},

	getTemplate(m){
		let str = `<Modal
    v-model="modal${component.id}"
    title="${m.title}"
    footer-hide
>
    <div>
        content
        <div slot="footer">
            <Button @click="" type="primary">确认</Button>
            <Button @click="">取消</Button>
        </div>
    </div>
</Modal>`
		return str
	},

	getScript(m){
		let data = {}
		data[`modal${component.id}`] = false
		let methods = {}
		
		return {
			data,
			methods
		}
	},

	
	
}

module.exports = component