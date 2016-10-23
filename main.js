var clickhole = require('clickhole-headlines');

clickhole(function(err, headlines) {
    //console.log(headlines);
    for (var i = 0; i < headlines.length; i++)
        console.log(headlines[i]);
});
