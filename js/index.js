document.addEventListener('DOMContentLoaded', function() {
    let imphtml = 
`

<div id="loading">loading...</div>
    <div id="smain">

        <div id='titl'>

            <div class="about">


            </div>
        </div>






        <div id="main">
            <div class="ndiv">
                <div class="img">
                    <img src="icons/demo.svg" alt="loading" srcset="">
                </div>
                <div class="details">
                    <p>Loading Deals for you</p>
                    <p>Please wait....</p>
                </div>
            </div>
            <div class="ndiv">
                <div class="img">
                    <img src="icons/demo.svg" alt="loading" srcset="">
                </div>
                <div class="details">
                    <p>Loading Deals for you</p>
                    <p>Please wait....</p>
                </div>
            </div>



        </div>

    </div>




    <div id="footer">
        <div class="elem">
            <h4>Techhere</h4>
            <p>Techhere is a blog website that deals with topics related to tech, deals, offers and new products in
                the market. We put our efforts to find the best Items. Products for our users at lowest prices.</p>
        </div>
        <div class="elem">
            <h4>Deals</h4>
            <a href="?title=smartphones" title="smartphones">
                <p>Smartphones</p>
            </a>
            <a href="?title=Air_Conditioners" title="air conditioners">
                <P>Air Conditioners</P>
            </a>
            <a href="?title=Refrigerators" title="Refrigerators">
                <P>Refrigerators</P>
            </a>
            <a href="?title=Kitchen_Appliances" title="Kitchen_Appliances">
                <p>Kitchen Appliances</p>
            </a>
        </div>
        <div class="elem">
            <h4> Follow and contact</h4>

            <a href="https://www.facebook.com/Lowoncost/" title="facebook page">
                <p>Facebook</p>
            </a>
            <!--       <a href=""><p>Privacy</p></a> -->
            <!-- <a href=""><p>Instagram</p></a> -->
        </div>
        <div class="elem">
            <h4>More</h4>
            <a href="https://lowoncost.xyz" title="Best deals and offers">
                <p>Best Online Deals</p>
            </a>
            <a href="https://storywalle.blogspot.com/" title="StoryWalle Read stories">
                <p>StoryWalle</p>
            </a>
            <a href="https://techbuzz.rf.gd" title="techbuzz">
                <p>TechBuzz</p>
            </a>
        </div>
    </div>



`
document.body.insertAdjacentHTML("beforeend", imphtml)



    //........................code for menu bar..........................
    async function mdata() {
        let menudata = await fetch("data/data.json")
        let gotmdata = await menudata.json();
        //console.log(gotmdata);
        let nobj = Object.keys(gotmdata.id1)
        //console.log(nobj.length);
        let about = document.getElementsByClassName("about");







        for (let i = 0; i < nobj.length; i++) {
            let cattitle = `<h3>${nobj[i]}</h3>`;
            about[0].insertAdjacentHTML('beforeend', cattitle)



            let lgtinner = Object.keys(gotmdata.id1[nobj[i]])
            //console.log(lgtinner.length)
            for (let j = 0; j < lgtinner.length; j++) {
                let valinner = lgtinner[j]

                let gettitle = gotmdata.id1[nobj[i]][valinner].title;
                let c = gettitle.split(" ").join('_');

                let link = `<a href=?title=${c} title="${c}">
          <p>${gotmdata.id1[nobj[i]][valinner].title}</p>
            </a>`
                about[0].insertAdjacentHTML('beforeend', link)
                //console.log(link);
            }

        }
    }
    mdata();








    //menubar ends here......................................................



    // insert html into the page from  code................................................

    let main = document.getElementById('main');
    
    let div = document.createElement("div");
    let h1 = document.createElement('h1');
    div.setAttribute("id", 'head')
    h1.innerText = "Best Deals on " + c;
    div.appendChild(h1)


    ////breadcrumb
    let nav = ` <nav id="breadcrumb">
            <ol>
                <li>
               <a href="https://techhere.pages.dev/">
                    Home</a>
                    </li>
                &gt;
                
                  <li>
                <a class="b-label" href="https://techhere.pages.dev/?title=${title}">${c}</a>
                </li>
                &gt;
                <li class="current"> Best Deals on ${c}
                </li>
             </ol>
                  
                
            </nav>`

    //console.log(nav)

    // breadcrumbs ....................................

    let src = document.createElement('script');
    let schema =
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://techhere.pages.dev/"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": `${c}`,
            "item": `https://techhere.pages.dev/?title=${title}`
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": `Best Deals on ${c}`
        }]
    }
    src.setAttribute('type', 'application/ld+json');
    src.textContent = JSON.stringify(schema);
    document.head.appendChild(src);
    // main copntent page..............................................

    async function getdata() {
        let gdata = await fetch(`https://filmyapp-e1005.firebaseio.com/short/itemdata/${c}.json`)
        let data = await gdata.json()
        //console.log(data)
        let loopnum = Object.keys(data['items'])
        main.innerHTML = "";
        main.insertAdjacentHTML("afterbegin", nav)
        main.appendChild(div);
        let vall = loopnum.length;
        console.log(vall);
        let a = 0;
        let b = 10;

        function load() {
            //obj for item list schema......................
            let obj = {

                "@context": "https://schema.org/",
                "@type": "ItemList",
                "itemListElement": [
                    {
                    },
                ]
            };


            function createDiv() {
                for (let i = a; i < a + b; i++) {
                    let name = data['items'][i]['name']


                    let prc = data['items'][i]['current_price']
                    let mrp = data['items'][i]['original_price']
                    let rat = data['items'][i]['rating']
                    let dis = data['items'][i]['discount_percent']
                    let blink = data['items'][i]['share_url']
                    let linkrep = blink.replace("https://www.flipkart.com/", "https://www.shopsy.in/")
                    let linkrep1 = linkrep.replace("https://dl.flipkart.com/dl/", "https://www.shopsy.in/")
                    //console.log(blink)
                    let rep = blink.replace("https://www.flipkart.com/", "")
                    let rep1 = rep.replace("https://dl.flipkart.com/dl/", "")
                    let detailsLink = rep1.split("/").join('_');
                    let img;
                    if (data['items'][i]['thumbnails'] === undefined) {
                        console.log('not')
                    } else {
                        img = data['items'][i]['thumbnails']
                    }

                    function lts(geth) {
                        if (geth != undefined) {
                            return `${geth.map((lol) => `<li>${lol}</li>`).join("")}`
                        } else
                            return `<li>Click on View details</li>`
                    }
                    c = c.split(" ").join('_');
                    let rename = name.split(" ").join('+');
                    let nrename = rename.split('&amp;').join('0lol')
                    let ndiv =
                        `
    <div class="ndiv">
        
            <div class="img">
                <img src="${img}" alt="${name}" loading="lazy">
            </div>
            <div class="details">
                <h2>${name}</h2>
                    <p class="price">Price:₹${prc}</p>
                    <p class="mrp"><s>MRP:₹${mrp}</s></p>
                    <p class="mrp">Discount: ${dis}%</p>
                    <p class="rat">${rat}</p>
                    
                <button class="but">
                            <a href="details?cat=${c}&title=${nrename}" title="Details of ${name}">
                            View Full Details
                            </a>
                        </button>
            
           
                </div>
                    </div>`


                    main.insertAdjacentHTML("beforeend", ndiv)


                    //inser data into obj for schema///////////////
                    obj.itemListElement[i] = {
                        "@type": "ListItem",
                        "position": i,
                        "name": `${name}`,
                        "url": `https://techhere.pages.dev/details.html?cat=${c}&title=${detailsLink}`
                    };

                }
                // schema data for itemslist ..............................................
                let itemlist = document.createElement('script');
                itemlist.setAttribute('type', 'application/ld+json');
                itemlist.textContent = JSON.stringify(obj);
                document.head.appendChild(itemlist);
            }
            createDiv()
            // let btn = document.getElementById("btn");
            // btn.addEventListener("click", load)

            a = a + b;
            let dif = vall - a;

            console.log(dif)
            //console.log(a)
            //console.log(dif+'difval')
            if (10 > dif) {
                a = a
                b = dif;





            }
            if (dif == 0) {
                //let btn = document.getElementById("btn");
                //btn.innerText = "No More Tech Found...";
                //console.log(btn)
                //console.log(dif+'disavle');
                //document.getElementById("btn").disabled = true;
            }
            function isScrolledToBottom() {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var visibleHeight = document.documentElement.clientHeight;
                var totalHeight = document.documentElement.scrollHeight;
                return (scrollTop + visibleHeight) >= totalHeight;
            }

            window.addEventListener('scroll', function () {

                if (isScrolledToBottom()) {


                    load();
                }
            });
        }

        load()

    }
    getdata()





    // let loadname = document.getElementById("loading");
    // loadname.remove();



});
