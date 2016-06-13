var express = require('express'), router = express.Router();

router.use((req, res, next) => {
  var user = getUserData(0);
  user.bands = user.bands.map(getBandData);
  res.locals.user = user;
  next();
});

router.get('/', (req, res) => {
  res.render('bands', {});
});

router.get('/:band_id', (req, res) => {
  var band = getBandData(req.params.band_id),
    isAdmin = !!band.members.find(e => e.user_id === res.locals.user.user_id).isAdmin;
  res.render('band', {band: band, isAdmin: isAdmin});
});

module.exports = router;

function getUserData(id){
  return [{name: "Paul McCartney", user_id: 0, bands: [0]}][id];
}

function getBandData(id){
  return [{
    band_id: 0,
    name: "The Beatles",
    members: [
      {name: "Paul McCartney", isAdmin: true, user_id: 0},
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
