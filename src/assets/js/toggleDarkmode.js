export default () => {
    if (localStorage.darkmode == "light") {
        localStorage.setItem("darkmode", "dark");
        document.documentElement.classList.add("dark");
    } else {
        localStorage.setItem("darkmode", "light");
        document.documentElement.classList.remove("dark");
    }
};
