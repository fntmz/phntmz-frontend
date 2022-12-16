export default () => {
    if (localStorage.getItem("darkmode") == "light_theme") {
        localStorage.setItem("darkmode", "dark_theme");
        document.body.setAttribute("data-theme", "dark_theme");
    } else {
        localStorage.setItem("darkmode", "light_theme");
        document.body.setAttribute("data-theme", "light_theme");
    }
};
