function getvalue() {
    var input_value = document.getElementById('search').value;
//    var url = window.location.href;
//    var hostname_start = url.indexOf("://");
//    var hostname_end = url.indexOf("/", hostname_start + 3);
//    var hostname = url.substring(hostname_start + 3, hostname_end);
//    var redirect_url = "https://" + hostname + "/akosta/lots.xhtml?keyword=" + input_value;
    var redirect_url = "./akosta/lots.xhtml?keyword=" + input_value;
    window.location.href = redirect_url;
}