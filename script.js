function getBatterOutcomes() {
  $(".batter-outcomes ul").hide();
  var battingRuns = $(".batting-runs").text();
  if (battingRuns >= 30) {
    $(".batter-col1").show();
  } else if (battingRuns >= 10 && battingRuns < 30) {
    $(".batter-col2").show();
  } else if (battingRuns >= -5 && battingRuns < 10) {
    $(".batter-col3").show();
  } else if (battingRuns < -5) {
    $(".batter-col4").show();
  }
}

function getPitcherOutcomes() {
  $(".pitcher-outcomes ul").hide();
  var pitcherSiera = $(".siera").text();
  if (pitcherSiera <= 3.5) {
    $(".pitcher-col1").show();
  } else if (pitcherSiera > 3.5 && pitcherSiera <= 4.25) {
    $(".pitcher-col2").show();
  } else if (pitcherSiera > 4.25 && pitcherSiera <= 4.75) {
    $(".pitcher-col3").show();
  } else if (pitcherSiera > 4.75) {
    $(".pitcher-col4").show();
  }
}

getBatterOutcomes();
getPitcherOutcomes();

//---------------------------------------------
// Field view
//---------------------------------------------

// baserunners
$(".base").on("click", function () {
  $(this).toggleClass("runner");
});

//---------------------------------------------
// Scoreboard
//---------------------------------------------

// runs
// $(".visitor-runs").on("click", function () {
//   var vRuns = $(this).find("span").text();
//   vRuns++;
//   $(".visitor-runs span").text(vRuns);
// });

// reverse runs
$(".visitor-runs").swipe({
  tap: function (event, target) {
    var vRuns = $(this).find("span").text();
    vRuns++;
    $(".visitor-runs span").text(vRuns);
  },
  threshold: 50
});

$(".visitor-runs").swipe({
  swipeLeft: function (event, target) {
    var vRuns = $(this).find("span").text();
    vRuns--;
    $(".visitor-runs span").text(vRuns);
  },
  threshold: 50
});

// $(".home-runs").on("click", function () {
//   var hRuns = $(this).find("span").text();
//   hRuns++;
//   $(".home-runs span").text(hRuns);
// });

// home runs
$(".home-runs").swipe({
  tap: function (event, target) {
    var vRuns = $(this).find("span").text();
    vRuns++;
    $(".home-runs span").text(vRuns);
  },
  threshold: 50
});

$(".home-runs").swipe({
  swipeLeft: function (event, target) {
    var vRuns = $(this).find("span").text();
    vRuns--;
    $(".home-runs span").text(vRuns);
  },
  threshold: 50
});

// visitor hits
$(".visitor-hits").swipe({
  swipeRight: function (event, target) {
    var vHits = $(this).find("span").text();
    vHits++;
    $(".visitor-hits span").text(vHits);
  },

  swipeLeft: function (event, target) {
    var vHits = $(this).find("span").text();
    vHits--;
    $(".visitor-hits span").text(vHits);
  },
  threshold: 0
});

// $(".home-hits").on("click", function () {
//   var hHits = $(this).find("span").text();
//   hHits++;
//   $(".home-hits span").text(hHits);
// });

// home hits
$(".home-hits").swipe({
  swipeRight: function (event, target) {
    var hHits = $(this).find("span").text();
    hHits++;
    $(".home-hits span").text(hHits);
  },

  swipeLeft: function (event, target) {
    var hHits = $(this).find("span").text();
    hHits--;
    $(".home-hits span").text(hHits);
  },
  threshold: 0
});

// errors
// $(".visitor-errors").on("click", function () {
//   var vErrors = $(this).find("span").text();
//   vErrors++;
//   $(".visitor-errors span").text(vErrors);
// });

// $(".home-errors").on("click", function () {
//   var hErrors = $(this).find("span").text();
//   hErrors++;
//   $(".home-errors span").text(hErrors);
// });

// visitor errors
$(".visitor-errors").swipe({
  swipeRight: function (event, target) {
    var vErrors = $(this).find("span").text();
    vErrors++;
    $(".visitor-errors span").text(vErrors);
  },

  swipeLeft: function (event, target) {
    var vErrors = $(this).find("span").text();
    vErrors--;
    $(".visitor-errors span").text(vErrors);
  },
  threshold: 0
});

// home errors
$(".home-errors").swipe({
  swipeRight: function (event, target) {
    var hErrors = $(this).find("span").text();
    hErrors++;
    $(".home-errors span").text(hErrors);
  },

  swipeLeft: function (event, target) {
    var hErrors = $(this).find("span").text();
    hErrors--;
    $(".home-errors span").text(hErrors);
  },
  threshold: 0
});

//---------------------------------------------
// dice roll
//---------------------------------------------

function roll1() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll
  rollResult1 = dice.roll();
}

function roll2() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll
  rollResult2 = dice.roll();
}

function roll3() {
  var dice = {
    sides: 9,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll
  rollResult3 = dice.roll();
}

// Roll dice

$("#roll").on("click", function () {
  roll1();
  roll2();
  roll3();

  if (rollResult2 < rollResult1) {
    $(".d61 span").hide().text(rollResult2).fadeIn(200);
    $(".d62 span").hide().text(rollResult1).fadeIn(200);
  } else {
    $(".d61 span").hide().text(rollResult1).fadeIn(200);
    $(".d62 span").hide().text(rollResult2).fadeIn(200);
  }

  $(".d9 span").hide().text(rollResult3).fadeIn(200);

  die1 = $(".d61 span").text();
  console.log("Die 1 = " + die1);
  die2 = $(".d62 span").text();
  console.log("Die 2 = " + die2);
  die3 = $(".d9 span").text();
  console.log("Die 3 = " + die3);
});

//---------------------------------------------
// swiches the team name after each half inning
//---------------------------------------------

function switchTeams() {
  var teamAtBat = $(".team-at-bat").text();
  var vRuns = $(".visitor-runs").text();
  var hRuns = $(".home-runs").text();
  if (teamAtBat == "Visiting Team") {
    $(".home-team-name").addClass("team-at-bat");
    $(".visitor-team-name").removeClass("team-at-bat");
  } else if (teamAtBat == "Home Team") {
    $(".visitor-team-name").addClass("team-at-bat");
    $(".home-team-name").removeClass("team-at-bat");
    // change inning
    var inning = $(".inning").text();
    if (inning < 9 || vRuns == hRuns) {
      inning++;
    } else {
      inning = 1;
    }

    $(".inning").text(inning);
  }
}

//---------------------------------------------
// outs
//---------------------------------------------

$(".outs-group").on("click", function () {
  $this = $(this);
  var outs = $this.find(".outs").text();

  if (outs == 2) {
    outs = 0;
    switchTeams();
    $(".base").removeClass("runner");
  } else {
    outs++;
  }
  $(".outs").text(outs);
});

//---------------------------------------------
// modals
//---------------------------------------------

$(".modal-close").on("click", function () {
  $(".modal").hide();
});

//---------------------------------------------
// visitor team name change
//---------------------------------------------

// open visiting team change dialog
$(".visitor-team-name").on("click", function () {
  $(".visiting-team-name-modal").find("input").val("");
  $(".visiting-team-name-modal").fadeIn(300);
});

// change team name on save
$(".visiting-team-name-modal .save").on("click", function () {
  var visTeamName = $(".visiting-team-name-input").val();
  $(".visitor-team-name").text(visTeamName);
  $(".modal").fadeOut(300);
});

//---------------------------------------------
// home team name change
//---------------------------------------------

// open home team change dialog
$(".home-team-name").on("click", function () {
  $(".home-team-name-modal").find("input").val("");
  $(".home-team-name-modal").fadeIn(300);
});

// change team name on save
$(".home-team-name-modal .save").on("click", function () {
  var homTeamName = $(".home-team-name-input").val();
  $(".home-team-name").text(homTeamName);
  $(".modal").fadeOut(300);
});

//---------------------------------------------
// pitcher change
//---------------------------------------------

// open pitcher change dialog
$(".pitcher-group").on("click", function () {
  $(".change-pitcher-modal").find("input").val("");
  $(".change-pitcher-modal").fadeIn(300);
});

// change pitcher data on save
$(".change-pitcher-save").on("click", function () {
  var newPitcherSiera = $(".siera-input").val();
  var newPitcherStamina = $(".stamina-input").val();
  $(".pitcher-group .siera").text(newPitcherSiera);
  $(".pitcher-group .stamina").text(newPitcherStamina);
  getPitcherOutcomes();
  $(".modal").fadeOut(300);
});