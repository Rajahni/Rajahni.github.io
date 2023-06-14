window.onload = function() {
    const container = document.getElementById('photo-container');

    const imgFolder = 'Kam_30/';
    const errorFolder = 'errorGifs/'

    const imgList = ['0002Ivysaur', '0019Rattata', '0041Zubat', '0079Slowpoke',
                     '0129Magikarp', '0155Cyndaquil', '0183Marill', '0209Snubbull', 
                     '0239Elekid', '250px-0010Caterpie', '250px-0043Oddish', '250px-0048Venonat',
                     '250px-0104Cubone', '250px-0109Koffing', '250px-0148Dragonair', '250px-0276Taillow',
                     '250px-0296Makuhita', '250px-0734Yungoos', '250px-0921Pawmi', '0252Treecko', '0263Zigzagoon',
                     '0280Ralts', '0285Shroomish', '0393Piplup', '0448Lucario', '600px-0025Pikachu', '600px-0027Sandshrew',
                     '600px-0915Lechonk', '0907Floragato', '0957Tinkatink'];

    const responses = ['Nope. Try again.', 
                        '*Michael Scott voice* NOOOO! GOD. NO, GOD! PLEASE, NO! ... NO! NO! NOOOOOOO!',
                        'I regret to inform you that this selection you have made has failed to meet'+
                        'the conditions of accuracy required to provide you with an approving response'+
                        'and thus, you will have to attempt your selection anew... PUNK.',
                        "Sorry, Kam. You're not wrong often, but this time you are.",
                        '*Yawn*', 'Senpai, yameteee~! (>n<)'];
                        
    const image_ext = '.png';
    const error_ext = '.gif';

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    // modal.style.display = "block";
    // }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    modal_content.innerHTML = "";
    modal_footer.innerHTML = "";
    if (modal_state == 1){
        window.open('reward-page.html');
    }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal_content.innerHTML = "";
        modal_footer.innerHTML = "";
        if (modal_state == 1){
            window.open('reward-page.html');
        }
    }
    }

    const modal_content = document.getElementById('modal-bod')
    const modal_footer = document.getElementById('modal-foot')

    let imageName;
    let modal_state;

    for (let i = 0; i < imgList.length; i++) {
        const imgSrc = imgFolder + imgList[i] + image_ext;

        const img = document.createElement('img');
        img.src = imgSrc;

        // Add an onclick event listener to each image element
        img.onclick = function(event) {
            modal.style.display = "block";

            console.log('Image clicked:', event.target.src);
            console.log('Image name:', imgList[i]);
            imageName = imgList[i];
            if (imageName == '0239Elekid') {
                const successMessage = document.createElement('div');
                successMessage.classList.add('success-message');
                successMessage.textContent = 'Your curiosity, playfulness and out-of-the-box brilliance leads me to believe '+
                                                'that no matter how much of an old geezer you become, '+
                                                'you will still be just an EleKid at heart. '+
                                                'You inspire me to hold on to that within myself too. '+
                                                'Please enjoy this song that I prepared for you.'+
                                                '\n -Love, Lin-chan';
                
                                            
                document.getElementById("modal-head").style.backgroundColor = "#5cb85c";
                document.getElementById("modal-foot").style.backgroundColor = "#5cb85c";
                modal_state = 1;
                
                
                // set modal content
                var para = document.createElement("P");
                var t = document.createTextNode(successMessage.innerText);
                para.appendChild(t);
                modal_content.appendChild(para);

                
                // modal_content.appendChild(successMessage);
                var footer = document.createElement("P");
                var msg = document.createTextNode('Success');
                footer.appendChild(msg);
                modal_footer.appendChild(msg);
                

                // modal_content.appendChild(successMessage);
            }
            else {
                modal_state = 0;
                const randomMessage = Math.floor(Math.random() * responses.length);
                console.log(randomMessage, responses[randomMessage]);

                document.getElementById("modal-head").style.backgroundColor = "red";

                document.getElementById("modal-foot").style.backgroundColor = "red";


                // to set modal footer as 'Try Again'
                var footer = document.createElement("P");
                var msg = document.createTextNode('Try Again');
                footer.appendChild(msg);
                modal_footer.appendChild(msg);

                if (responses[randomMessage] == responses[1]){
                    const errorimgs = 'no-god-please-no-no';
                    const errorImage = errorFolder + errorimgs + error_ext
                    const errimg = document.createElement('img');
                    errimg.src = errorImage;
                    modal_content.appendChild(errimg)
                }
                else if (responses[randomMessage] == responses[5]){
                    const errorimgs = 'wrong-neighbourhood-oniichan';
                    const errorImage = errorFolder + errorimgs + '.jpg'
                    const errimg = document.createElement('img');
                    errimg.src = errorImage;
                    modal_content.appendChild(errimg)
                }
                else {
                    var para = document.createElement("P");
                    var t = document.createTextNode(responses[randomMessage]);
                    para.appendChild(t);
                    modal_content.appendChild(para);
                }
            }
        };

        container.appendChild(img);
    }

};

