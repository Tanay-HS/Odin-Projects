import './about.css';
import chefImage from './about.jpeg';

function loadAbout(){
    const aboutContainer = document.createElement('div');

    const chefPart = document.createElement("div");
    chefPart.classList.add("chefs")

    const chefImg = document.createElement("img");
    chefImg.src = chefImage;
    chefImg.alt = "Image of the founder chef standing beside each other";
    chefPart.append('YIN', chefImg, 'YANG');

    const infoPart = document.createElement("div");
    infoPart.classList.add("info")
    infoPart.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem facere vitae quia nihil consequatur suscipit autem dicta nam ad minima tempora voluptate ipsa repudiandae id excepturi a non quod doloribus reprehenderit cumque dolore, perferendis ratione? Enim delectus pariatur eveniet officiis eligendi ullam, culpa beatae vel similique accusamus nemo at ipsa labore facilis laudantium et magnam, laborum repudiandae placeat nisi, provident reprehenderit blanditiis. Iusto ratione ex beatae in id voluptate soluta iste, animi debitis odio autem eius, temporibus, pariatur earum eos.'

    aboutContainer.append(chefPart, infoPart);
    return aboutContainer;
}

export default loadAbout;
