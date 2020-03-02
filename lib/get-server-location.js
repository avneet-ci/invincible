const getServerLocation = function (host) {
  return host && host.split && host.split('-avneetsarang-')[1]
    ? host.split('-avneetsarang-')[1].split('.azurewebsites.net')[0]
    : 'UNKNOWN'
}

module.exports = getServerLocation
