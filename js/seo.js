let url = new URLSearchParams(window.location.search);

    let title = url.get('title');
    if (title == null) {
        title = "Electronics";

    }

    let c = title.split("_").join(' ');
    //console.log(c);
    console.log("seo")

    document.title = " Best Deals and offers on " + c;

let meta = document.createElement('meta');
meta.name = "descriptione";
meta.content = `Top selected Best Deals on ${c} for the users to buy online. These are selected according to there specifications and user experiences.`;
document.getElementsByTagName('head')[0].appendChild(meta);
