$(document).ready(function() {
    var style = localStorage.getItem("styleIcon");
    if (style == null) {
        $(".heart").removeClass("is-active");
        localStorage.setItem("styleIcon", "list");
    } else if (style == "grid") {
        $(".heart").addClass("is-active");
    } else if (style == "list") {
        $(".heart").removeClass("is-active");
    }
});

function checkStyle() {
    var style = localStorage.getItem("styleIcon");
    if (style == "grid") {
        $(".heart").removeClass("is-active");
        localStorage.setItem("styleIcon", "list");
    } else if (style == "list") {
        $(".heart").addClass("is-active");
        localStorage.setItem("styleIcon", "grid");
    }
};