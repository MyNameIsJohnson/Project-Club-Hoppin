const db = require('./models');

const clubs = [
    {
        name: "Black Cat",
        genre: "Jazz Club",
        image: "/images/BlackCat-Jazz.png",
        link: "https://blackcatsf.com/",
        details: "A RESTAURANT, BAR & LIVE JAZZ VENUE IN THE HEART OF SAN FRANCISCO’S HISTORIC ARTS & ENTERTAINMENT DISTRICT. Cocktail bar & New American bistro with two levels of seating & live music. Swanky jazz lounge, cocktail bar & New American bistro with two levels of seating &live music. What a treasure to find this sleepy place in the heart of Tenderloin of SF. ... Black Cat was a shit-show - hip hop at a Jazz Club! ",
    },
    {
        name: "F8",
        genre: "Hip-Hop, Techno, Dubstep, Electro House",
        image: "/images/F8-HipHop.png",
        link: "http://www.feightsf.com/",
        details: "Swanky multi-room lounge. Sitting in the heart of SOMA, f8 provides a culture of eclectic music ranging from House to Hip hop, Techno to Dubstep, Electro House to Drum and Bass and much more. Our main goal is music and everything else is supplementary, although we are proud to boast our intimate atmosphere, some of the best drink specials in SF and overall quality vibes from the staff to the patrons. Come one, come all. F8 is one of the last authentic clubs that remains vibrant till this day. We hope too see you on your next adventure.",
    },
    {
        name: "Harlot",
        genre: "Hip-Hop",
        image: "/images/Harlot-HipHop.png",
        link: "http://www.harlotsf.com/",
        details: "Dramatic red lighting & burlesque art set the mood at this swanky lounge & late-night dance club. As local legend tells, the alleys of San Francisco’s South of Market district are named after the Barbary Coast era’s famous ladies of the evening, the HARLOTS. Deeply coveted and highly respected, the Harlot was admired for the services she provided. Time has passed, but the city’s lore remains. From her infamous dark alley, Harlot waits to please all who enter her doors.",
    },
    {
        name: "Hawthorn",
        genre: "Hip-Hop",
        image: "/images/Hawthorn-Latin:HipHop.png",
        link: "https://hawthornsf.com/",
        details: "For early evening cocktail guests, Hawthorn offers a full craft cocktail menu as well as signature favorites, lovingly prepared by some of the cities finest mixologists. For nightlife patrons, indulge your senses with the help of our world-class VOID Sound System, custom made for the space and designed in the UK. Whether you arrive early in the evening, or later into the night, Hawthorn strives to provide a comfortably playful atmosphere which uplifts the spirits with cocktails, art, music and dance!",
    },
    {
        name: "Love and Propaganda",
        genre: "Hip-Hop",
        image: "/images/Love&Prop-HipHop.png",
        link:"https://www.loveandpropaganda.com/",
        details: "Trendy, yes! Multilevel club with visiting DJs & late night dancing in a dramatic, modern setting. Situated in San Francisco's Union Square district, Love and Propaganda is a crossroads where music, fashion, and art all meet to form an audio-visual experience unlike anything you've ever seen before. After you've settled into the gorgeous neo-classic inspired design, sound becomes the focal point. Expect to have your understanding of nightlife challenged.",
    },
    {
        name: "Raven Bar",
        genre: "90's Hip-Hop",
        image: "/images/Raven-HipHop.png",
        link: "https://www.ravenbarsf.com/",
        details: "Raven Bar is San Francisco’s Premier Throwback Nightclub & South Of Market Happy Hour destination. Raven’s weekly DJs play the Throwback R&B, Hip Hop, & Pop Music Videos you love, and our flexible space is perfect for drinks and dancing, hosting birthdays, bachelorette parties, corporate buyouts, and more.",
    },
    {
        name: "Temple SF",
        genre: "House, Hip-Hop",
        image:"/images/Temple-House.png",
        link:"https://templesf.com/",
        details:"Temple Nightclub offers private and semi-private nightclub tables coupled with VIP bottle service treatment. Table service pricing varies nightly. Please inquire here for availability and our VIP Reservations Manager will follow up in a timely manner to recommend the best experience for you. Temple Presents Valentino Khan. Valentino Khan makes everything. From hip hop club anthems to dance music hits."
    },
    {
        name:"The Grand",
        genre:"Hip-Hop",
        image:"/images/TheGrand.png",
        link:"https://www.grandnightclub.com/",
        details:"Upscale, Vegas-style club with state-of-the-art lighting & sound, plus VIP seating on the top floor. The Grand offers four bars fully stocked with the best stuff on earth so you and your friends can enjoy smooth signature cocktails made with premium liquor. If you and your friends are celebrating a special occasion or just looking for the ultimate VIP treatment, reserve a VIP Table with a bird's eye view of all the action and more.",
    },
    {
        name:"City Nights",
        genre:"Hip-Hop",
        image:"/images/city-nights.png",
        link:"https://www.sfclubs.com/",
        details:"Upscale, Vegas-style club with state-of-the-art lighting & sound, plus VIP seating on the top floor. The Grand offers four bars fully stocked with the best stuff on earth so you and your friends can enjoy smooth signature cocktails made with premium liquor. If you and your friends are celebrating a special occasion or just looking for the ultimate VIP treatment, reserve a VIP Table with a bird's eye view of all the action and more.",
    },
];


// Delete All Clubs
console.log('Deleting all clubs...');

db.Club.deleteMany({}, (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }

    console.log(`Successfully deleted ${result.deletedCount} clubs.`);

    // Delete All Posts
    console.log('Deleting all posts...');

    db.Post.deleteMany({}, (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }

    console.log(`Successfully deleted ${result.deletedCount} posts.`);

        // Create New Clubs
        console.log('Creating new cities...');
        db.Club.create(clubs, (err, newClubs) => {
        if (err) {
            console.log(err);
            process.exit();
        }

        console.log(`Successfully created ${newClubs.length} clubs.`);

            process.exit();
        });
    });
});




