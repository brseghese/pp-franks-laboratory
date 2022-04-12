export function drawStatusText(context, input) {
  context.font = "30px Helvetica";
  context.fillText("Last input: " + input.lastKey, 20, 50);
}
