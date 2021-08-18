const definitionDigits = [
    [1, 1, 1, 1, 1, 1, 0], // Zero
    [0, 1, 1, 0, 0, 0, 0], // One
    [1, 1, 0, 1, 1, 0, 1], // Two
    [1, 1, 1, 1, 0, 0, 1], // Three
    [0, 1, 1, 0, 0, 1, 1], // Four
    [1, 0, 1, 1, 0, 1, 1], // Five
    [1, 0, 1, 1, 1, 1, 1], // Six
    [1, 1, 1, 0, 0, 0, 0], // Seven
    [1, 1, 1, 1, 1, 1, 1], // Eight
    [1, 1, 1, 1, 0, 1, 1], // Nine
];

function buildDigit(config, margin) {
    let led = ["one", "two", "tree", "four", "five", "six", "seven"];
    htmlString = `<div class="digit">`;
    let cl = 0;
    config.forEach((c) => {
        if (c) {
            htmlString += `<div class="segment ${led[cl]}"></div>`;
        }
        cl++;
    });
    htmlString += "</div>";
    return htmlString;
}

function buildPair(pairToDraw) {
    let final = "";
    let margin = 0;
    pairToDraw.forEach((f) => {
        final += buildDigit(definitionDigits[f], margin);
        margin += 75;
    });
    return final;
}

function run() {
  let now = new Date();

  const h = now.getHours();
  let hour = (h < 10 ? `0${h}` : h) + "";
  const hours = document.getElementById("hours");
  hours.innerHTML = buildPair(hour.split(""));

  const m = now.getMinutes();
  let min = (m < 10 ? `0${m}` : m) + "";
  const minutes = document.getElementById("minutes");
  minutes.innerHTML = buildPair(min.split(""));

  const s = now.getSeconds();
  let sec = (s < 10 ? `0${s}` : s) + "";
  const seconds = document.getElementById("seconds");
  seconds.innerHTML = buildPair(sec.split(""));

  document.getElementById("draw").innerHTML = `${hour}:${min}:${sec}`;
  setTimeout(function(){
    run();
  }, 1000);
}

run();