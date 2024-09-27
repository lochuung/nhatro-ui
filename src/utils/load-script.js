export default function loadScript(src, className = null, id = null) {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    if (id) {
        script.id = id;
    }
    if (className) {
        script.className = className;
    }
    document.body.appendChild(script);
}