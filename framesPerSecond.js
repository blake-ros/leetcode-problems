// Question:

Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

  Examples
frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000


// Answer:

function frames(minutes, fps) {
  fps = fps * 60
  minutes = minutes * fps
  return minutes
}
