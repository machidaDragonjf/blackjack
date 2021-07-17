const deal = document.querySelector(".deal");
const newgame = document.querySelector(".New");
const hold1 = document.querySelector(".hold");
const hold2 = document.querySelector(".hold2");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".cardA");
const card6 = document.querySelector(".cardB");
const card7 = document.querySelector(".cardA2");
const card8 = document.querySelector(".cardB2");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let announcement = document.querySelector(".announcement");
const another1 = document.querySelector(".another1");
const another2 = document.querySelector(".another2");
let checkA = 1;
let checkB = 1;
let total1 = 0;
let total2 = 0;
let double = false;
let val1 = 0;
let val2 = 0;
let val3 = 0;
let val4 = 0;
let val5 = 0;
let val7 = 0;
let val8 = 0;
function resetNumbers() {
  val1 = Math.trunc(Math.random() * 13) + 1;
  val2 = Math.trunc(Math.random() * 13) + 1;
  val3 = Math.trunc(Math.random() * 13) + 1;
  val4 = Math.trunc(Math.random() * 13) + 1;
  val5 = Math.trunc(Math.random() * 13) + 1;
  val6 = Math.trunc(Math.random() * 13) + 1;
  val7 = Math.trunc(Math.random() * 13) + 1;
  val8 = Math.trunc(Math.random() * 13) + 1;
}
function dealCard() {
  resetNumbers();
  hold2.disabled = true;
  deal.disabled = true;
  if (val1 === 1) {
    card1.src = "images/a's.png";
    total1 += 11;
  }

  if (val1 === 2) {
    card1.src = "images/2.png";
    total1 += 2;
  }
  if (val1 === 3) {
    card1.src = "images/3.png";
    total1 += 3;
  }
  if (val1 === 4) {
    card1.src = "images/4.png";
    total1 += 4;
  }
  if (val1 === 5) {
    card1.src = "images/5.png";
    total1 += 5;
  }
  if (val1 === 6) {
    card1.src = "images/6.png";
    total1 += 6;
  }
  if (val1 === 7) {
    card1.src = "images/7.png";
    total1 += 7;
  }
  if (val1 === 8) {
    card1.src = "images/8.png";
    total1 += 8;
  }
  if (val1 === 9) {
    card1.src = "images/9.png";
    total1 += 9;
  }
  if (val1 === 10) {
    card1.src = "images/10.png";
    total1 += 10;
  }
  if (val1 === 11) {
    card1.src = "images/jack.png";
    total1 += 10;
  }
  if (val1 === 12) {
    card1.src = "images/queen.png";
    total1 += 10;
  }
  if (val1 === 13) {
    card1.src = "images/king.png";
    total1 += 10;
  }
  if (val2 === 1) {
    card2.src = "images/a's.png";
    total1 += 11;
  }
  if (val2 === 2) {
    card2.src = "images/2.png";
    total1 += 2;
  }
  if (val2 === 3) {
    card2.src = "images/3.png";
    total1 += 3;
  }
  if (val2 === 4) {
    card2.src = "images/4.png";
    total1 += 4;
  }
  if (val2 === 5) {
    card2.src = "images/5.png";
    total1 += 5;
  }
  if (val2 === 6) {
    card2.src = "images/6.png";
    total1 += 6;
  }
  if (val2 === 7) {
    card2.src = "images/7.png";
    total1 += 7;
  }
  if (val2 === 8) {
    card2.src = "images/8.png";
    total1 += 8;
  }
  if (val2 === 9) {
    card2.src = "images/9.png";
    total1 += 9;
  }
  if (val2 === 10) {
    card2.src = "images/10.png";
    total1 += 10;
  }
  if (val2 === 11) {
    card2.src = "images/jack.png";
    total1 += 10;
  }
  if (val2 === 12) {
    card2.src = "images/queen.png";
    total1 += 10;
  }
  if (val2 === 13) {
    card2.src = "images/king.png";
    total1 += 10;
  }
  if (total1 === 21) {
    another1.disabled = true;
  }
  //////////////////////////////////////
  if (val1 === 1 && val2 === 1) {
    total1 = total1 - 10;
    double = true;
  }
  /////////////////////////////////////
  score1.textContent = total1;
  if (val3 === 1) {
    card3.src = "images/a's.png";
    total2 += 11;
  }
  if (val3 === 2) {
    card3.src = "images/2.png";
    total2 += 2;
  }
  if (val3 === 3) {
    card3.src = "images/3.png";
    total2 += 3;
  }
  if (val3 === 4) {
    card3.src = "images/4.png";
    total2 += 4;
  }
  if (val3 === 5) {
    card3.src = "images/5.png";
    total2 += 5;
  }
  if (val3 === 6) {
    card3.src = "images/6.png";
    total2 += 6;
  }
  if (val3 === 7) {
    card3.src = "images/7.png";
    total2 += 7;
  }
  if (val3 === 8) {
    card3.src = "images/8.png";
    total2 += 8;
  }
  if (val3 === 9) {
    card3.src = "images/9.png";
    total2 += 9;
  }
  if (val3 === 10) {
    card3.src = "images/10.png";
    total2 += 10;
  }
  if (val3 === 11) {
    card3.src = "images/jack.png";
    total2 += 10;
  }
  if (val3 === 12) {
    card3.src = "images/queen.png";
    total2 += 10;
  }
  if (val3 === 13) {
    card3.src = "images/king.png";
    total2 += 10;
  }
  if (val4 === 1) {
    card4.src = "images/a's.png";
    total2 += 11;
  }
  if (val4 === 2) {
    card4.src = "images/2.png";
    total2 += 2;
  }
  if (val4 === 3) {
    card4.src = "images/3.png";
    total2 += 3;
  }
  if (val4 === 4) {
    card4.src = "images/4.png";
    total2 += 4;
  }
  if (val4 === 5) {
    card4.src = "images/5.png";
    total2 += 5;
  }
  if (val4 === 6) {
    card4.src = "images/6.png";
    total2 += 6;
  }
  if (val4 === 7) {
    card4.src = "images/7.png";
    total2 += 7;
  }
  if (val4 === 8) {
    card4.src = "images/8.png";
    total2 += 8;
  }
  if (val4 === 9) {
    card4.src = "images/9.png";
    total2 += 9;
  }
  if (val4 === 10) {
    card4.src = "images/10.png";
    total2 += 10;
  }
  if (val4 === 11) {
    card4.src = "images/jack.png";
    total2 += 10;
  }
  if (val4 === 12) {
    card4.src = "images/queen.png";
    total2 += 10;
  }
  if (val4 === 13) {
    card4.src = "images/king.png";
    total2 += 10;
  }
  if (val3 === 1 && val4 === 1) {
    total2 = total2 - 10;
  }
  score2.textContent = total2;
  if (total2 === 21) {
    another2.disabled = true;
    hold2.disabled = false;
  }
}
function holdCards1() {
  deal.disabled = true;
  score1.textContent = total1;
  hold2.disabled = false;
  hold1.disabled = true;
  another1.disabled = true;
}
function holdCards2() {
  /* total 1st player   */
  deal.disabled = true;
  another2.disabled = true;
  score2.textContent = total2;
  if (total1 > total2) {
    announcement.textContent = "Player 1 Wins the Game!";
    announcement.classList.remove("hidden");
  }
  if (total1 === total2) {
    announcement.textContent = "Equal Values Nobody Wins";
    announcement.classList.remove("hidden");
  }
  if (total2 > total1) {
    announcement.textContent = "Player 2 Wins the Game!";
    announcement.classList.remove("hidden");
  }
}
function anotherCard() {
  deal.disabled = true;
  if (checkA === 1) {
    if (val5 === 1) {
      card5.src = "images/a's.png";
      total1 += 11;
    }
    if (val5 === 2) {
      card5.src = "images/2.png";
      total1 += 2;
    }
    if (val5 === 3) {
      card5.src = "images/3.png";
      total1 += 3;
    }
    if (val5 === 4) {
      card5.src = "images/4.png";
      total1 += 4;
    }
    if (val5 === 5) {
      card5.src = "images/5.png";
      total1 += 5;
    }
    if (val5 === 6) {
      card5.src = "images/6.png";
      total1 += 6;
    }
    if (val5 === 7) {
      card5.src = "images/7.png";
      total1 += 7;
    }
    if (val5 === 8) {
      card5.src = "images/8.png";
      total1 += 8;
    }
    if (val5 === 9) {
      card5.src = "images/9.png";
      total1 += 9;
    }
    if (val5 === 10) {
      card5.src = "images/10.png";
      total1 += 10;
    }
    if (val5 === 11) {
      card5.src = "images/jack.png";
      total1 += 10;
    }
    if (val5 === 12) {
      card5.src = "images/queen.png";
      total1 += 10;
    }
    if (val5 === 13) {
      card5.src = "images/king.png";
      total1 += 10;
    }
    if (total1 > 21 && (val1 === 1 || val2 === 1 || val5 === 1)) {
      total1 = total1 - 10;
    }
    score1.textContent = total1;
    if (total1 > 21) {
      announcement.textContent = "You busted, Player 2 Wins ";
      announcement.classList.remove("hidden");
    }
    checkA++;
  } else if (checkA > 1) {
    if (val6 === 1) {
      card6.src = "images/a's.png";
      total1 += 11;
    }
    if (val6 === 2) {
      card6.src = "images/2.png";
      total1 += 2;
    }
    if (val6 === 3) {
      card6.src = "images/3.png";
      total1 += 3;
    }
    if (val6 === 4) {
      card6.src = "images/4.png";
      total1 += 4;
    }
    if (val6 === 5) {
      card6.src = "images/5.png";
      total1 += 5;
    }
    if (val6 === 6) {
      card6.src = "images/6.png";
      total1 += 6;
    }
    if (val6 === 7) {
      card6.src = "images/7.png";
      total1 += 7;
    }
    if (val6 === 8) {
      card6.src = "images/8.png";
      total1 += 8;
    }
    if (val6 === 9) {
      card6.src = "images/9.png";
      total1 += 9;
    }
    if (val6 === 10) {
      card6.src = "images/10.png";
      total1 += 10;
    }
    if (val6 === 11) {
      card6.src = "images/jack.png";
      total1 += 10;
    }
    if (val6 === 12) {
      card6.src = "images/queen.png";
      total1 += 10;
    }
    if (val6 === 13) {
      card6.src = "images/king.png";
      total1 += 10;
    }
    if (total1 > 21 && (val1 === 1 || val2 === 1 || val6 === 1)) {
      total1 = total1 - 10;
    }
    score1.textContent = total1;
    if (total1 > 21) {
      announcement.textContent = "You busted, Player 2 Wins ";
      announcement.classList.remove("hidden");
    }
    another2.disalbed = false;
    another1.disabled = true;
    hold2.disabled = false;
  }
}
function anotherCard2() {
  deal.disabled = true;
  if (checkB === 1) {
    if (val7 === 1) {
      card7.src = "images/a's.png";
      total2 += 11;
    }
    if (val7 === 2) {
      card7.src = "images/2.png";
      total2 += 2;
    }
    if (val7 === 3) {
      card7.src = "images/3.png";
      total2 += 3;
    }
    if (val7 === 4) {
      card7.src = "images/4.png";
      total2 += 4;
    }
    if (val7 === 5) {
      card7.src = "images/5.png";
      total2 += 5;
    }
    if (val7 === 6) {
      card7.src = "images/6.png";
      total2 += 6;
    }
    if (val7 === 7) {
      card7.src = "images/7.png";
      total2 += 7;
    }
    if (val7 === 8) {
      card7.src = "images/8.png";
      total2 += 8;
    }
    if (val7 === 9) {
      card7.src = "images/9.png";
      total2 += 9;
    }
    if (val7 === 10) {
      card7.src = "images/10.png";
      total2 += 10;
    }
    if (val7 === 11) {
      card7.src = "images/jack.png";
      total2 += 10;
    }
    if (val7 === 12) {
      card7.src = "images/queen.png";
      total2 += 10;
    }
    if (val7 === 13) {
      card7.src = "images/king.png";
      total2 += 10;
    }
    if (total2 > 21 && (val3 === 1 || val4 === 1 || val7 === 1)) {
      total2 = total2 - 10;
    }

    score2.textContent = total2;
    checkB = 2;
    if (total2 > 21) {
      announcement.textContent = "You busted, Player 1 Wins ";
      announcement.classList.remove("hidden");
    }
  } else {
    if (val8 === 1) {
      card8.src = "images/a's.png";
      total2 += 11;
    }
    if (val8 === 2) {
      card8.src = "images/2.png";
      total2 += 2;
    }
    if (val8 === 3) {
      card8.src = "images/3.png";
      total2 += 3;
    }
    if (val8 === 4) {
      card8.src = "images/4.png";
      total2 += 4;
    }
    if (val8 === 5) {
      card8.src = "images/5.png";
      total2 += 5;
    }
    if (val8 === 6) {
      card8.src = "images/6.png";
      total2 += 6;
    }
    if (val8 === 7) {
      card8.src = "images/7.png";
      total2 += 7;
    }
    if (val8 === 8) {
      card8.src = "images/8.png";
      total2 += 8;
    }
    if (val8 === 9) {
      card8.src = "images/9.png";
      total2 += 9;
    }
    if (val8 === 10) {
      card8.src = "images/10.png";
      total2 += 10;
    }
    if (val8 === 11) {
      card8.src = "images/jack.png";
      total2 += 10;
    }
    if (val8 === 12) {
      card8.src = "images/queen.png";
      total2 += 10;
    }
    if (val8 === 13) {
      card8.src = "images/king.png";
      total2 += 10;
    }
    if (total2 > 21 && (val3 === 1 || val4 === 1 || val8 === 1)) {
      total2 = total2 - 10;
    }
    score2.textContent = total2;
    if (total2 > 21) {
      announcement.textContent = "You busted, Player 1 Wins ";
      announcement.classList.remove("hidden");
    }
  }
}
function newGame() {
  score1.textContent = 0;
  score2.textContent = 0;
  total1 = 0;
  total2 = 0;
  checkA = 1;
  checkB = 1;
  hold2.disabled = true;
  hold1.disabled = false;
  card1.src = "images/blank.png";
  card2.src = "images/blank.png";
  card3.src = "images/blank.png";
  card4.src = "images/blank.png";
  card5.src = "images/blank.png";
  card6.src = "images/blank.png";
  card7.src = "images/blank.png";
  card8.src = "images/blank.png";
  deal.disabled = false;
  another1.disabled = false;
  another2.disabled = false;
  announcement.classList.add("hidden");
  announcement.textContent = "";
  double = false;
}
hold1.addEventListener("click", holdCards1);
hold2.addEventListener("click", holdCards2);
deal.addEventListener("click", dealCard);
another1.addEventListener("click", anotherCard);
another2.addEventListener("click", anotherCard2);
newgame.addEventListener("click", newGame);
