let url = new URLSearchParams(window.location.search);

    let title = url.get('title');
    if (title == null) {
        title = "Electronics";

    }

    let c = title.split("_").join(' ');
    //console.log(c);
    console.log("seo")

    document.title = " Best Deals and offers on " + c;

//let meta = document.createElement('meta');
//meta.name = "description";
//meta.content = `Top selected Best Deals on ${c} for the users to buy online. These are selected according to there specifications and user experiences.`;
//document.getElementsByTagName('head')[0].appendChild(meta);
let meta = document.querySelector('meta[name="description"]');
meta.setAttribute("content", `Top selected Best Deals on ${c} for the users to buy online. These are selected according to there specifications and user experiences.`);

//manu bar togle
function notvisi() {

    let btn = document.getElementById('ul');
    btn.classList.toggle('notvisi');

}
