module.exports = {
  getBandData: id => [{
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
        {song_title: "Hello Goodbye", song_id: 2, yt_id: "rblYSKz_VnI"},
        {song_title: "She Loves You", song_id: 3, yt_id: "BOuu88OwdK8"}
      ]},
      {title: "Long Set", set_id: 1, songs: [
        {song_title: "Ticket to Ride", song_id: 0, yt_id: "70-WSgZn1MQ"},
        {song_title: "I Feel Fine", song_id: 1, yt_id: "ZFleHMgn8dg"},
        {song_title: "Hello Goodbye", song_id: 2, yt_id: "rblYSKz_VnI"},
        {song_title: "She Loves You", song_id: 3, yt_id: "BOuu88OwdK8"}
      ]}
    ]
  }][id]
};
