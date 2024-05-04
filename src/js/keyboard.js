/*------ Importing JQuery ------*/
window.$ = window.jQuery = require("jquery");

/*------ Reseting keyboard ------*/
$(document).ready(function () {
  $("#test").click(function () {
    $("use").removeClass("pressed");
    $("use").removeClass("pressed-key");
    $("use").removeClass("led");
  });
});

/*------ Adding reset button for keyboard ------*/
const clearAllBtn = document.querySelector(".clear-all a");
clearAllBtn.addEventListener("click", () => {
  $("use").removeClass("pressed");
  $("use").removeClass("pressed-key");
  $("use").removeClass("led");
});

/*------ Keyboard button click fucntion ------*/
const keyClick = () => {
  $(document).keyup(function (e) {
    if ($("#test").prop("checked") !== true) {
      $("use").removeClass("pressed");
      $("use").removeClass("pressed-key");
      $("use").removeClass("led");
    }
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $("#esc use").addClass("pressed-key");
      $("#esc-b use").addClass("pressed");
      $("#out").text("esc");
    }
    if (e.keyCode == 112) {
      e.preventDefault();
      $("#f1 use").addClass("pressed-key");
      $("#f1-b use").addClass("pressed");
      $("#out").text("f1");
    }
    if (e.keyCode == 113) {
      $("#f2 use").addClass("pressed-key");
      $("#f2-b use").addClass("pressed");
      $("#out").text("f2");
    }
    if (e.keyCode == 114) {
      e.preventDefault();
      $("#f3 use").addClass("pressed-key");
      $("#f3-b use").addClass("pressed");
      $("#out").text("f3");
    }
    if (e.keyCode == 115) {
      $("#f4 use").addClass("pressed-key");
      $("#f4-b use").addClass("pressed");
      $("#out").text("f4");
    }
    if (e.keyCode == 116) {
      e.preventDefault();
      $("#f5 use").addClass("pressed-key");
      $("#f5-b use").addClass("pressed");
      $("#out").text("f5");
    }
    if (e.keyCode == 117) {
      e.preventDefault();
      $("#f6 use").addClass("pressed-key");
      $("#f6-b use").addClass("pressed");
      $("#out").text("f6");
    }
    if (e.keyCode == 118) {
      $("#f7 use").addClass("pressed-key");
      $("#f7-b use").addClass("pressed");
      $("#out").text("f7");
    }
    if (e.keyCode == 119) {
      $("#f8 use").addClass("pressed-key");
      $("#f8-b use").addClass("pressed");
      $("#out").text("f8");
    }
    if (e.keyCode == 120) {
      $("#f9 use").addClass("pressed-key");
      $("#f9-b use").addClass("pressed");
      $("#out").text("f9");
    }
    if (e.keyCode == 121) {
      $("#f10 use").addClass("pressed-key");
      $("#f10-b use").addClass("pressed");
      $("#out").text("f10");
    }
    if (e.keyCode == 122) {
      e.preventDefault();
      $("#f11 use").addClass("pressed-key");
      $("#f11-b use").addClass("pressed");
      $("#out").text("f11");
    }
    if (e.keyCode == 123) {
      e.preventDefault();
      $("#f12 use").addClass("pressed-key");
      $("#f12-b use").addClass("pressed");
      $("#out").text("f12");
    }
    if (e.keyCode == 124) {
      $("#f13 use").addClass("pressed-key");
      $("#f14 use").addClass("pressed-key");
      $("#f15 use").addClass("pressed-key");
      $("#f13-b use").addClass("pressed");
      $("#f14-b use").addClass("pressed");
      $("#f15-b use").addClass("pressed");
      $("#out").text("f13â€”f15");
    }
    if (e.keyCode == 127) {
      $("#f16 use").addClass("pressed-key");
      $("#f16-b use").addClass("pressed");
      $("#out").text("f16");
    }
    if (e.keyCode == 128) {
      $("#f17 use").addClass("pressed-key");
      $("#f17-b use").addClass("pressed");
      $("#out").text("f17");
    }
    if (e.keyCode == 129) {
      $("#f18 use").addClass("pressed-key");
      $("#f18-b use").addClass("pressed");
      $("#out").text("f18");
    }
    if (e.keyCode == 130) {
      $("#f19 use").addClass("pressed-key");
      $("#f19-b use").addClass("pressed");
      $("#out").text("f19");
    }
    if (e.keyCode == 192) {
      $("#paragraph use").addClass("pressed-key");
      $("#paragraph-b use").addClass("pressed");
      $("#out").text("~");
    }
    if (e.keyCode == 49) {
      $("#one use").addClass("pressed-key");
      $("#one-b use").addClass("pressed");
      $("#out").text("1");
    }
    if (e.keyCode == 50) {
      $("#two use").addClass("pressed-key");
      $("#two-b use").addClass("pressed");
      $("#out").text("2");
    }
    if (e.keyCode == 51) {
      $("#three use").addClass("pressed-key");
      $("#three-b use").addClass("pressed");
      $("#out").text("3");
    }
    if (e.keyCode == 52) {
      $("#four use").addClass("pressed-key");
      $("#four-b use").addClass("pressed");
      $("#out").text("4");
    }
    if (e.keyCode == 53) {
      $("#five use").addClass("pressed-key");
      $("#five-b use").addClass("pressed");
      $("#out").text("5");
    }
    if (e.keyCode == 54) {
      $("#six use").addClass("pressed-key");
      $("#six-b use").addClass("pressed");
      $("#out").text("6");
    }
    if (e.keyCode == 55) {
      $("#seven use").addClass("pressed-key");
      $("#seven-b use").addClass("pressed");
      $("#out").text("7");
    }
    if (e.keyCode == 56) {
      $("#eight use").addClass("pressed-key");
      $("#eight-b use").addClass("pressed");
      $("#out").text("8");
    }
    if (e.keyCode == 57) {
      $("#nine use").addClass("pressed-key");
      $("#nine-b use").addClass("pressed");
      $("#out").text("9");
    }
    if (e.keyCode == 48) {
      $("#zero use").addClass("pressed-key");
      $("#zero-b use").addClass("pressed");
      $("#out").text("0");
    }
    if (e.keyCode == 189) {
      $("#dash use").addClass("pressed-key");
      $("#dash-b use").addClass("pressed");
      $("#out").text("-");
    }
    if (e.keyCode == 187) {
      $("#ravno use").addClass("pressed-key");
      $("#ravno-b use").addClass("pressed");
      $("#out").text("=");
    }
    if (e.keyCode == 8) {
      $("#backspace use").addClass("pressed-key");
      $("#backspace-b use").addClass("pressed");
      $("#out").text("backspace");
    }
    if (e.keyCode == 36) {
      e.preventDefault();
      $("#home use").addClass("pressed-key");
      $("#home-b use").addClass("pressed");
      $("#out").text("home");
    }
    if (e.keyCode == 35) {
      e.preventDefault();
      $("#end use").addClass("pressed-key");
      $("#end-b use").addClass("pressed");
      $("#out").text("end");
    }
    if (e.keyCode == 33) {
      e.preventDefault();
      $("#pageup use").addClass("pressed-key");
      $("#pageup-b use").addClass("pressed");
      $("#out").text("page up");
    }
    if (e.keyCode == 34) {
      e.preventDefault();
      $("#pagedown use").addClass("pressed-key");
      $("#pagedown-b use").addClass("pressed");
      $("#out").text("page down");
    }
    if (e.keyCode == 12) {
      $("#numlock-led use").addClass("led");
      $("#numlock use").addClass("pressed-key");
      $("#numlock-b use").addClass("pressed");
      $("#out").text("num lock");
    }
    if (e.keyCode == 144) {
      $("#numlock-led use").addClass("led");
      $("#numlock use").addClass("pressed-key");
      $("#numlock-b use").addClass("pressed");
      $("#out").text("num lock");
    }
    if (e.keyCode == 145) {
      $("#scrolllock-led use").addClass("led");
      $("#scrolllock use").addClass("pressed-key");
      $("#scrolllock-b use").addClass("pressed");
      $("#out").text("scroll lock");
    }
    if (e.keyCode == 44) {
      $("#printscr use").addClass("pressed-key");
      $("#printscr-b use").addClass("pressed");
      $("#out").text("print screen");
    }
    if (e.keyCode == 45) {
      $("#insert use").addClass("pressed-key");
      $("#insert-b use").addClass("pressed");
      $("#out").text("insert");
    }
    if (e.keyCode == 19) {
      $("#pausebreak use").addClass("pressed-key");
      $("#pausebreak-b use").addClass("pressed");
      $("#out").text("pause");
    }
    if (e.keyCode == 111) {
      $("#slash-r use").addClass("pressed-key");
      $("#slash-r-b use").addClass("pressed");
      $("#out").text("slash");
    }
    if (e.keyCode == 106) {
      $("#star use").addClass("pressed-key");
      $("#star-b use").addClass("pressed");
      $("#out").text("*");
    }
    if (e.keyCode == 9) {
      e.preventDefault();
      $("#tab use").addClass("pressed-key");
      $("#tab-b use").addClass("pressed");
      $("#out").text("tab");
    }
    if (e.keyCode == 219) {
      $("#figure-l use").addClass("pressed-key");
      $("#figure-l-b use").addClass("pressed");
      $("#out").text("[");
    }
    if (e.keyCode == 221) {
      $("#figure-r use").addClass("pressed-key");
      $("#figure-r-b use").addClass("pressed");
      $("#out").text("]");
    }
    if (e.keyCode == 13) {
      $("#enter use").addClass("pressed-key");
      $("#enter-b use").addClass("pressed");
      $("#numenter use").addClass("pressed-key");
      $("#numenter-b use").addClass("pressed");
      $("#out").text("enter");
    }
    if (e.keyCode == 46) {
      $("#delete use").addClass("pressed-key");
      $("#delete-b use").addClass("pressed");
      $("#out").text("delete");
    }
    if (e.keyCode == 109) {
      $("#minus use").addClass("pressed-key");
      $("#minus-b use").addClass("pressed");
      $("#out").text("minus");
    }
    if (e.keyCode == 65) {
      $("#A use").addClass("pressed-key");
      $("#A-b use").addClass("pressed");
      $("#out").text("a");
    }
    if (e.keyCode == 66) {
      $("#B use").addClass("pressed-key");
      $("#B-b use").addClass("pressed");
      $("#out").text("b");
    }
    if (e.keyCode == 67) {
      $("#C use").addClass("pressed-key");
      $("#C-b use").addClass("pressed");
      $("#out").text("c");
    }
    if (e.keyCode == 68) {
      $("#D use").addClass("pressed-key");
      $("#D-b use").addClass("pressed");
      $("#out").text("d");
    }
    if (e.keyCode == 69) {
      $("#E use").addClass("pressed-key");
      $("#E-b use").addClass("pressed");
      $("#out").text("e");
    }
    if (e.keyCode == 70) {
      $("#F use").addClass("pressed-key");
      $("#F-b use").addClass("pressed");
      $("#out").text("f");
    }
    if (e.keyCode == 71) {
      $("#G use").addClass("pressed-key");
      $("#G-b use").addClass("pressed");
      $("#out").text("g");
    }
    if (e.keyCode == 72) {
      $("#H use").addClass("pressed-key");
      $("#H-b use").addClass("pressed");
      $("#out").text("h");
    }
    if (e.keyCode == 73) {
      $("#I use").addClass("pressed-key");
      $("#I-b use").addClass("pressed");
      $("#out").text("i");
    }
    if (e.keyCode == 74) {
      $("#J use").addClass("pressed-key");
      $("#J-b use").addClass("pressed");
      $("#out").text("j");
    }
    if (e.keyCode == 75) {
      $("#K use").addClass("pressed-key");
      $("#K-b use").addClass("pressed");
      $("#out").text("k");
    }
    if (e.keyCode == 76) {
      $("#L use").addClass("pressed-key");
      $("#L-b use").addClass("pressed");
      $("#out").text("l");
    }
    if (e.keyCode == 77) {
      $("#M use").addClass("pressed-key");
      $("#M-b use").addClass("pressed");
      $("#out").text("m");
    }
    if (e.keyCode == 78) {
      $("#N use").addClass("pressed-key");
      $("#N-b use").addClass("pressed");
      $("#out").text("n");
    }
    if (e.keyCode == 79) {
      $("#O use").addClass("pressed-key");
      $("#O-b use").addClass("pressed");
      $("#out").text("o");
    }
    if (e.keyCode == 80) {
      $("#P use").addClass("pressed-key");
      $("#P-b use").addClass("pressed");
      $("#out").text("p");
    }
    if (e.keyCode == 81) {
      $("#Q use").addClass("pressed-key");
      $("#Q-b use").addClass("pressed");
      $("#out").text("q");
    }
    if (e.keyCode == 82) {
      $("#R use").addClass("pressed-key");
      $("#R-b use").addClass("pressed");
      $("#out").text("r");
    }
    if (e.keyCode == 83) {
      $("#S use").addClass("pressed-key");
      $("#S-b use").addClass("pressed");
      $("#out").text("s");
    }
    if (e.keyCode == 84) {
      $("#T use").addClass("pressed-key");
      $("#T-b use").addClass("pressed");
      $("#out").text("t");
    }
    if (e.keyCode == 85) {
      $("#U use").addClass("pressed-key");
      $("#U-b use").addClass("pressed");
      $("#out").text("u");
    }
    if (e.keyCode == 86) {
      $("#V use").addClass("pressed-key");
      $("#V-b use").addClass("pressed");
      $("#out").text("v");
    }
    if (e.keyCode == 87) {
      $("#W use").addClass("pressed-key");
      $("#W-b use").addClass("pressed");
      $("#out").text("w");
    }
    if (e.keyCode == 88) {
      $("#X use").addClass("pressed-key");
      $("#X-b use").addClass("pressed");
      $("#out").text("x");
    }
    if (e.keyCode == 89) {
      $("#Y use").addClass("pressed-key");
      $("#Y-b use").addClass("pressed");
      $("#out").text("y");
    }
    if (e.keyCode == 90) {
      $("#Z use").addClass("pressed-key");
      $("#Z-b use").addClass("pressed");
      $("#out").text("z");
    }
    if (e.keyCode == 20) {
      $("#capslock use").addClass("pressed-key");
      $("#capslock-led use").addClass("led");
      $("#capslock-b use").addClass("pressed");
      $("#out").text("caps lock");
    }
    if (e.keyCode == 186) {
      $("#tochkazpt use").addClass("pressed-key");
      $("#tochkazpt-b use").addClass("pressed");
      $("#out").text(";");
    }
    if (e.keyCode == 222) {
      $("#squote use").addClass("pressed-key");
      $("#squote-b use").addClass("pressed");
      $("#out").text("'");
    }
    if (e.keyCode == 220) {
      $("#slash-l use").addClass("pressed-key");
      $("#slash-l-b use").addClass("pressed");
      $("#out").text("backslash");
    }
    if (e.keyCode == 107) {
      $("#plus use").addClass("pressed-key");
      $("#plus-b use").addClass("pressed");
      $("#out").text("+");
    }
    if (e.keyCode == 16) {
      $("#shift use").addClass("pressed-key");
      $("#shift-b use").addClass("pressed");
      $("#out").text("shift");
    }
    if (e.keyCode == 188) {
      $("#comma use").addClass("pressed-key");
      $("#comma-b use").addClass("pressed");
      $("#out").text(",");
    }
    if (e.keyCode == 190) {
      $("#dot use").addClass("pressed-key");
      $("#dot-b use").addClass("pressed");
      $("#out").text(".");
    }
    if (e.keyCode == 191) {
      $("#question use").addClass("pressed-key");
      $("#question-b use").addClass("pressed");
      $("#out").text("slash");
    }
    if (e.keyCode == 17) {
      $("#ctrl use").addClass("pressed-key");
      $("#ctrl-b use").addClass("pressed");
      $("#out").text("control");
    }
    if (e.keyCode == 18) {
      $("#alt use").addClass("pressed-key");
      $("#alt-b use").addClass("pressed");
      $("#out").text("alt");
    }
    if (e.keyCode == 91) {
      e.preventDefault();
      $("#win-l use").addClass("pressed-key");
      $("#win-l-b use").addClass("pressed");
      $("#cmd-l use").addClass("pressed-key");
      $("#cmd-r use").addClass("pressed-key");
      $("#cmd-l-b use").addClass("pressed");
      $("#cmd-r-b use").addClass("pressed");
      $("#out").text("meta");
    }
    if (e.keyCode == 92) {
      e.preventDefault();
      $("#win-r use").addClass("pressed-key");
      $("#win-r-b use").addClass("pressed");
      $("#out").text("meta");
    }
    if (e.keyCode == 93) {
      e.preventDefault();
      $("#menu use").addClass("pressed-key");
      $("#menu-b use").addClass("pressed");
      $("#cmd-l use").addClass("pressed-key");
      $("#cmd-r use").addClass("pressed-key");
      $("#cmd-l-b use").addClass("pressed");
      $("#cmd-r-b use").addClass("pressed");
      $("#out").text("menu");
    }
    if (e.keyCode == 32) {
      e.preventDefault();
      $("#space-b use").addClass("pressed");
      $("#out").text("space");
    }
    if (e.keyCode == 110) {
      $("#numdot use").addClass("pressed-key");
      $("#numdot-b use").addClass("pressed");
      $("#out").text(".");
    }
    if (e.keyCode == 37) {
      e.preventDefault();
      $("#left use").addClass("pressed-key");
      $("#left-b use").addClass("pressed");
      $("#out").text("left");
    }
    if (e.keyCode == 38) {
      e.preventDefault();
      $("#up use").addClass("pressed-key");
      $("#up-b use").addClass("pressed");
      $("#out").text("up");
    }
    if (e.keyCode == 39) {
      e.preventDefault();
      $("#right use").addClass("pressed-key");
      $("#right-b use").addClass("pressed");
      $("#out").text("right");
    }
    if (e.keyCode == 40) {
      e.preventDefault();
      $("#down use").addClass("pressed-key");
      $("#down-b use").addClass("pressed");
      $("#out").text("down");
    }
    if (e.keyCode == 96) {
      e.preventDefault();
      $("#num0 use").addClass("pressed-key");
      $("#num0-b use").addClass("pressed");
      $("#out").text("numpad 0");
    }
    if (e.keyCode == 97) {
      e.preventDefault();
      $("#num1 use").addClass("pressed-key");
      $("#num1-b use").addClass("pressed");
      $("#out").text("numpad 1");
    }
    if (e.keyCode == 98) {
      e.preventDefault();
      $("#num2 use").addClass("pressed-key");
      $("#num2-b use").addClass("pressed");
      $("#out").text("numpad 2");
    }
    if (e.keyCode == 99) {
      e.preventDefault();
      $("#num3 use").addClass("pressed-key");
      $("#num3-b use").addClass("pressed");
      $("#out").text("numpad 3");
    }
    if (e.keyCode == 100) {
      e.preventDefault();
      $("#num4 use").addClass("pressed-key");
      $("#num4-b use").addClass("pressed");
      $("#out").text("numpad 4");
    }
    if (e.keyCode == 101) {
      e.preventDefault();
      $("#num5 use").addClass("pressed-key");
      $("#num5-b use").addClass("pressed");
      $("#out").text("numpad 5");
    }
    if (e.keyCode == 102) {
      e.preventDefault();
      $("#num6 use").addClass("pressed-key");
      $("#num6-b use").addClass("pressed");
      $("#out").text("numpad 6");
    }
    if (e.keyCode == 103) {
      e.preventDefault();
      $("#num7 use").addClass("pressed-key");
      $("#num7-b use").addClass("pressed");
      $("#out").text("numpad 7");
    }
    if (e.keyCode == 104) {
      e.preventDefault();
      $("#num8 use").addClass("pressed-key");
      $("#num8-b use").addClass("pressed");
      $("#out").text("numpad 8");
    }
    if (e.keyCode == 105) {
      e.preventDefault();
      $("#num9 use").addClass("pressed-key");
      $("#num9-b use").addClass("pressed");
      $("#out").text("numpad 9");
    }
  });
};

/*------ Starting keyboard fucntion when click on keybaord test link / for performance ------*/
links[1].addEventListener("click", () => {
  keyClick();
});
