var express = require('express'), router = express.Router();

router.get('/', (req, res) => {
  // get a list of bands
  // if user, filter user's bands to separate object
  var bands = [];
  console.log(getBandData(0));
  if(/*user is signed in + has bands*/true) res.locals.user = {name: "Paul McCartney", user_id: 0, bands: [getBandData(0)]};
  res.render('bands', {bands: bands});
});

router.get('/:band_id', (req, res) => {
  var data = getBandData(req.params.band_id); // Get data from id.
  if(/*user is admin of band*/true) data.isAdmin = true;
  res.render('band', {});
});

module.exports = router;

function getBandData(id){ // Sure would be nice to just store this as json.
  return [{
    band_id: 0,
    name: "The Beatles",
    members: [
      {name: "Paul McCartney", user_id: 0},
      {name: "John Lennon", user_id: 1},
      {name: "George Harrison", user_id: 2},
      {name: "Ringo Starr", user_id: 3}
    ],
    gigs: [{
      gig_id: 0,
      date: "June 17",
      venue: "Galvanize West Pearl",
      loadInTime: "6pm",
      startTime: "7pm",
      endTime: "9pm",
      setlist: {set_id: 1, name: "Long Set"}
    }],
    songs: [
      {title: "Ticket to Ride", song_id: 0, yt_id: "70-WSgZn1MQ"},
      {title: "I Feel Fine", song_id: 1, yt_id: "ZFleHMgn8dg"},
      {title: "Hello Goodbye", song_id: 2, yt_id: "rblYSKz_VnI"},
      {title: "She Loves You", song_id: 3, yt_id: "BOuu88OwdK8"}
    ],
    setlists: [
      {title: "Short Set", set_id: 0, songs: [
        {title: "Hello Goodbye", song_id: 2, yt_id: "rblYSKz_VnI"},
        {title: "She Loves You", song_id: 3, yt_id: "BOuu88OwdK8"}
      ]},
      {title: "Long Set", set_id: 1, songs: [
        {title: "Ticket to Ride", song_id: 0, yt_id: "70-WSgZn1MQ"},
        {title: "I Feel Fine", song_id: 1, yt_id: "ZFleHMgn8dg"},
        {title: "Hello Goodbye", song_id: 2, yt_id: "rblYSKz_VnI"},
        {title: "She Loves You", song_id: 3, yt_id: "BOuu88OwdK8"}
      ]}
    ]
  }][id];
}
