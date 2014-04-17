NeoCities = require 'neocities'
user = require "./protected/user"
api = new NeoCities(user.username, user.password)

api.upload(
    {name: file, path: "./"+file} for file in process.argv[2..],
    (resp) ->
        console.log resp)
