import './event.css';
import foodImgSource from './food.jpg';
import gamesImgSource from './games.jpg';
import partyImgSource from './party.jpg';

export function loadEvents() {
    // 1. Create the main event container wrapper
    const eventContainer = document.createElement('div');
    eventContainer.id = 'eventContainer';

    // --- EVENT 1: FOOD FEST ---
    const img1 = document.createElement('img');
    img1.src = foodImgSource;
    img1.alt = 'Food party event';
    eventContainer.appendChild(img1);

    const info1 = document.createElement('div');
    info1.classList.add('eventInfo');
    
    const h3_1 = document.createElement('h3');
    h3_1.textContent = 'Food Fest';
    info1.appendChild(h3_1);
    
    const text1 = document.createTextNode(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi numquam ducimus dolor molestias consequatur suscipit impedit quos, cumque odit deserunt qui reiciendis assumenda aut minima rem necessitatibus doloremque, odio ullam doloribus vel! Culpa similique quasi ducimus perspiciatis, quia vel magni, porro nesciunt, unde maxime ipsam esse tempore et minima nobis!'
    );
    info1.appendChild(text1);
    eventContainer.appendChild(info1);

    // --- EVENT 2: GAME EVENT ---
    const img2 = document.createElement('img');
    img2.src = gamesImgSource;
    img2.alt = 'games event';
    eventContainer.appendChild(img2);

    const info2 = document.createElement('div');
    info2.classList.add('eventInfo');
    
    const h3_2 = document.createElement('h3');
    h3_2.textContent = 'Game event';
    info2.appendChild(h3_2);
    
    const text2 = document.createTextNode(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, est minima earum provident laudantium eligendi nihil quidem, dolorem voluptates quisquam, ducimus ipsam eius unde consectetur enim dolores cumque repellat qui? Repellendus perferendis veritatis enim a non praesentium mollitia totam eius doloremque ad, optio, et accusamus molestiae minus cumque illum harum!'
    );
    info2.appendChild(text2);
    eventContainer.appendChild(info2);

    // --- EVENT 3: PARTY ---
    const img3 = document.createElement('img');
    img3.src = partyImgSource;
    img3.alt = 'party image';
    eventContainer.appendChild(img3);

    const info3 = document.createElement('div');
    info3.classList.add('eventInfo');
    
    const h3_3 = document.createElement('h3');
    h3_3.textContent = 'Party';
    info3.appendChild(h3_3);
    
    const text3 = document.createTextNode(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero veniam quia libero in deserunt qui minus sint adipisci voluptatibus, sunt nam ratione omnis tempore ex earum impedit quaerat dicta repellat inventore illo. Dignissimos fuga consectetur soluta pariatur nulla tenetur cum consequatur illum? Sunt molestias est ut a quisquam quia!'
    );
    info3.appendChild(text3);
    eventContainer.appendChild(info3);

    // 2. Return the completed tree module
    return eventContainer;
}

export default loadEvents;