data=require('../config/facebook.json')

module.exports = {
	"go facebook page":function (browser) {
	browser
      //.resizeWindow(1920, 1080)
      .facebook_login(data.emil, data.password)
      .facebook_search('url','https://www.facebook.com/groups/410691162307979/forsaleposts/?referral_surface=group_mall_header_nav&availability=available')
      .end();

	}




}
