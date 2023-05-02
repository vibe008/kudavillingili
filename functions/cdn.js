const cdnSwitch = ( url ) => {

	var pathname = new URL(url).pathname
	const cdn = "https://kudavillingili-maldives.ams3.cdn.digitaloceanspaces.com"+ pathname
	return cdn

}

const cdnSwitchArray = ( images_array ) => {

	var data = []
	images_array.map( function( value, index ){

		var pathname = new URL(value).pathname
		console.log( pathname )
		var cdn = "https://kudavillingili-maldives.ams3.cdn.digitaloceanspaces.com"+ pathname
		data.push( cdn )
		return true

	})

	return data

}

module.exports = { cdnSwitch, cdnSwitchArray }
