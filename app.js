$(document).ready(function () {

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=7580fb5719676a7d21d93b82fba89321`;

            async function mynews() {
                let responce = await fetch(url);
                let data = await responce.json();
                console.log(data);
                

                if (Array.isArray(data.articles)) {
                    data.articles.forEach(item => {
                        const box = document.createElement('div');
                        box.className = 'col-md-4';
                        box.innerHTML = `
                            <div class="box">
                                <div class="imgbox">
                                    <img src="${item.image}" alt="">
                                </div>
                                <h1>${item.title}</h1>
                                <h4>${item.description}</h4>
                                <div class="infobox">
                                    <div class="lbtn">Good</div> 
                                    <div class="dbtn">Bad</div>
                                </div>
                            </div>
                        `;
                        $(".row").append(box);
                    });
                }
            }

            mynews();
        }
    });

    $("h2").click(async function (e) {
        e.preventDefault();
        let url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=7580fb5719676a7d21d93b82fba89321`;

        async function mynews() {
            let responce = await fetch(url);
            let data = await responce.json();
            console.log(data);

            if (Array.isArray(data.articles)) {
                data.articles.forEach(item => {
                    const box = document.createElement('div');
                    box.className = 'col-md-4';
                    box.innerHTML = `
                            <div class="box">
                                <div class="imgbox">
                                    <img src="${item.image}" alt="">
                                </div>
                                <h1>${item.title}</h1>
                                <h4>${item.description}</h4>
                                <div class="infobox">
                                    <div class="lbtn">Good</div>
                                    <div class="dbtn">Bad</div>
                                </div>
                            </div>
                        `;
                    $(".row").append(box);
                });
            }
        }

        mynews();
    });


    $(document).on("keypress", function (e) {
        if (e.which == 13) {
            let url = `https://task-news-five.vercel.app/`;
            async function mynews() {
                let responce = await fetch(url);
                let data = await responce.json();
                console.log(data);
            }
            mynews();
        }
    });


});
