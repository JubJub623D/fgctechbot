var Twit = require('twit')
var T = new Twit({
  consumer_key:         'JqOtNk4LCzm9GbzSQ8bbB8EeJ',
  consumer_secret:      'z6r92ByboUpEtIWZXJG3TxKiorSi4exJSfqfutBm8JkSxtdGKy',
  access_token:         '1226559082812723200-DnI3kxqEYgZ7zTR9tvRe28b8wWB4nW',
  access_token_secret:  'grfUgJsM3lyBC2H9fPqwMSv5au2tIRrwy7K3A9lutaYpm',
})
var stream = T.stream('statuses/filter', {track: ['#SG_FIL']})

stream.on('tweet', function(tweet){
  console.log(tweet);
  T.post('collections/entries/add',{id: 1229985985926033408, tweet_id: tweet.id_str}, function (err, data, response) {
            console.log(data)
  })
})