var Twit = require('twit')
require('dotenv').config
const result = dotenv.config()
if (result.error) {
  throw result.error
} 
console.log(result.parsed)

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
})
var stream = T.stream('statuses/filter', {track: ['#SG_FIL']})

stream.on('tweet', function(tweet){
  console.log(tweet);
  T.post('collections/entries/add',{id: 1229985985926033408, tweet_id: tweet.id_str}, function (err, data, response) {
            console.log(data)
  })
})