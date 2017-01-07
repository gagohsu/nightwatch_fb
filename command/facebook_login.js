exports.command = function(account,password){
	var brower = this.page.facebook();
	brower
		.navigate()
		.setValue('@longin_account',account)
		.setValue('@longin_password',password)
		.click('@login_submit')
		.waitForElementVisible('@search_input',"登入成功")
	return this;
};