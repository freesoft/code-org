// sprite moves to four directions ( north, east, west, south ) based on the arrow key you press

var moving_west;
var spinning_right;
var growing;
var swimming_left_and_right;
var moving_east;
var moving_north;
var patrolling;
var moving_south;
var jittering;
var wandering;
var shrinking;
var spinning_left;

function moving_west2(this_sprite) {
  moveInDirection(this_sprite, 5, "West");
}

function spinning_right2(this_sprite) {
  turn(this_sprite, 6, "right");
}

function growing2(this_sprite) {
  changePropBy(this_sprite, "scale", 1);
}

function swimming_left_and_right2(this_sprite) {
  if (getProp(this_sprite, "direction") == 0) {
    mirrorSprite(this_sprite, "right");
  } else if (getProp(this_sprite, "direction") == 180) {
    mirrorSprite(this_sprite, "left");
  }
  moveForward(this_sprite, 5);
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", 180);
  }
}

function moving_east2(this_sprite) {
  moveInDirection(this_sprite, 5, "East");
}

function moving_north2(this_sprite) {
  moveInDirection(this_sprite, 5, "North");
}

function patrolling2(this_sprite) {
  moveForward(this_sprite, 5);
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", 180);
  }
}

function moving_south2(this_sprite) {
  moveInDirection(this_sprite, 5, "South");
}

function math_random_int(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function jittering2(this_sprite) {
  changePropBy(this_sprite, "scale", math_random_int(-1, 1));
}

function wandering2(this_sprite) {
  if (math_random_int(0, 5) == 0) {
    changePropBy(this_sprite, "direction", math_random_int(-25, 25));
  }
  moveForward(this_sprite, 1);
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", math_random_int(135, 225));
  }
}

function shrinking2(this_sprite) {
  changePropBy(this_sprite, "scale", -1);
}

function spinning_left2(this_sprite) {
  turn(this_sprite, 6, "left");
}

makeNewSpriteAnon("purple bunny", ({"x":200,"y":200}));

keyPressed("while", "left", function () {
  moveInDirection(({costume: "purple bunny"}), 10, "West");
});

keyPressed("while", "right", function () {
  moveInDirection(({costume: "purple bunny"}), 10, "East");
});

keyPressed("while", "up", function () {
  moveInDirection(({costume: "purple bunny"}), 10, "North");
});

keyPressed("while", "down", function () {
  moveInDirection(({costume: "purple bunny"}), 10, "South");
});
