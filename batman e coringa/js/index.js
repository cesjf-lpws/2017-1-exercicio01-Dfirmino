"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function showHover() {
    var timeline = new TimelineMax({ delay: 2 });
    var hover = $("#hover");
    timeline.to(hover, 1, { opacity: 1 });
    timeline.to(hover, 1, { opacity: 0 }, "+=1");
}

var Batman = function () {
    function Batman(batman, speed) {
        _classCallCheck(this, Batman);

        this.element = $(batman);
        this.eyes = { left: $("#eye-left"), right: $("#eye-right") };
        this.ears = { left: $("#ear-left"), right: $("#ear-right") };
        this.mouth = $("#mouth");
        this.shoulders = $("#shoulders");
        this.head = $("#head");
        this.logo = $("#logo");
        this.background = $("body");
        this.eyesTimeline = new TimelineMax({ repeat: -1, repeatDelay: 4, delay: 3 });
        this.toJokerTimeline = new TimelineMax();
        this.speed = speed;
        this.setEvents();
    }

    Batman.prototype.toJoker = function toJoker(speed) {
        this.toJokerTimeline.to(this.head, this.speed, { morphSVG: "#joker-head", fill: "#D8D8D8" }, 0);
        this.toJokerTimeline.to(MorphSVGPlugin.convertToPath(this.eyes.right), this.speed, { morphSVG: "#joker-eye-right", fill: "#121212" }, 0);
        this.toJokerTimeline.to(MorphSVGPlugin.convertToPath(this.eyes.left), this.speed, { morphSVG: "#joker-eye-left", fill: "#121212" }, 0);
        this.toJokerTimeline.to(this.mouth, this.speed, { morphSVG: "#joker-mouth", fill: "#FFFFFF", stroke: "#FF4545", strokeWidth: 6 }, 0);
        this.toJokerTimeline.to(this.ears.left, this.speed, { morphSVG: "#joker-hair-left", fill: "#55C67E" }, 0);
        this.toJokerTimeline.to(this.ears.right, this.speed, { morphSVG: "#joker-hair-right", fill: "#55C67E" }, 0);
        this.toJokerTimeline.to(this.shoulders, this.speed, { morphSVG: "#joker-shoulders", fill: "#A74ABA" }, 0);
        this.toJokerTimeline.to(this.logo, this.speed, { morphSVG: "#joker-pap", fill: "#55C67E" }, 0);
        this.toJokerTimeline.to(this.background, this.speed, { backgroundColor: '#121212' }, 0);
    };

    Batman.prototype.setEvents = function setEvents() {
        var batman = this;

        batman.element.on("mouseenter", function (event) {
            batman.toJoker();
            if (batman.toJokerTimeline.reversed()) {
                batman.toJokerTimeline.play();
            }
        });

        batman.element.on("mouseleave", function (event) {
            batman.toJokerTimeline.reverse();
        });
    };

    return Batman;
}();

var batman = new Batman("#batman", 0.6);

batman.element.delay(1000).queue(function (next) {
    batman.element.trigger('mouseover');
    next();
    batman.element.delay(1000).queue(function (next) {
        batman.element.trigger('mouseleave');
        showHover();
        next();
    });
});