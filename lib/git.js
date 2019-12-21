
const { exec } = require('child_process')

let GIT = {

	getCommand(){
		let commands = [
			`git config core.sparsecheckout true`,
			`echo input >> .git/info/sparse-checkout`,
			`git checkout master`,
			`git pull`
		]
		return commands.join('&&')
	},

	pull(){
		let commands = GIT.getCommand()
		return new Promise((resolve, reject) => {
			exec(commands, (err, stdout, stderr) => {
			  if (err) {
			    console.error(err);
			    reject()
			    return;
			  }
			  resolve('success')
			  //process.exit(0)
			})
		})
	}
}

module.exports = GIT