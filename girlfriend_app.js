const images = [
  'assets/us/us.png','assets/us/us2.png','assets/us/us3.JPG','assets/us/us4.JPG','assets/us/us5.JPG','assets/us/us6.JPG','assets/us/us7.JPG','assets/us/us8.JPG','assets/us/us9.JPG',
  'assets/us/us10.JPG','assets/us/us11.JPG', 'assets/us/us12.JPG','assets/us/us13.JPG','assets/us/us14.JPG','assets/us/us15.JPG','assets/us/us16.JPG','assets/us/us17.JPG','assets/us/us18.JPG',
  'assets/us/us19.JPG','assets/us/us20.JPG','assets/us/us21.JPG','assets/us/us22.JPG','assets/us/us23.JPG','assets/us/us24.JPG','assets/us/us25.JPG','assets/us/us26.JPG','assets/us/us27.JPG',
  'assets/us/us28.JPG','assets/us/us29.JPG','assets/us/us30.JPG','assets/us/us31.JPG','assets/us/us32.JPG','assets/us/us33.JPG','assets/us/us34.JPG','assets/us/us35.JPG','assets/us/us36.jpg',
  'assets/us/us37.jpg','assets/us/us38.jpg','assets/us/us39.jpg','assets/us/us40.jpg','assets/us/us41.jpg','assets/us/us42.jpg','assets/us/us43.jpg','assets/us/us44.jpg','assets/us/us45.jpg',
  'assets/us/us46.jpg','assets/us/us47.jpg','assets/us/us48.jpg','assets/us/us49.jpg','assets/us/us50.jpg','assets/us/us51.jpg','assets/us/us52.jpg','assets/us/us53.jpg','assets/us/us54.jpg',
  'assets/us/us55.jpg', 'assets/us/us56.jpg','assets/us/us57.jpg','assets/us/us58.jpg','assets/us/us59.jpg','assets/us/us60.jpg','assets/us/us61.jpg','assets/us/us62.jpg','assets/us/us63.jpg',
  'assets/us/us64.jpg','assets/us/us65.jpg','assets/us/us66.jpg','assets/us/us67.jpg','assets/us/us68.jpg','assets/us/us69.jpg','assets/us/us70.JPG', 'assets/us/us71.JPG','assets/us/us72.JPG',
  'assets/us/us73.jpeg','assets/us/us74.jpeg','assets/us/us75.jpeg','assets/us/us76.jpeg','assets/us/us77.jpeg','assets/us/us78.JPG','assets/us/us79.jpeg','assets/us/us80.jpeg','assets/us/us81.jpg',
  'assets/us/us82.jpg','assets/us/us83.jpg','assets/us/us84.jpg','assets/us/us85.jpg','assets/us/us86.jpg','assets/us/us87.jpg','assets/us/us88.jpg','assets/us/us89.PNG','assets/us/us90.PNG','assets/us/us91.PNG',
  'assets/us/us92.PNG','assets/us/us93.PNG','assets/us/us94.PNG','assets/us/us95.PNG','assets/us/us96.PNG','assets/us/us97.PNG','assets/us/us98.jpg','assets/us/us99.jpg','assets/us/us100.jpg','assets/us/us101.jpg',
  'assets/us/us102.jpg','assets/us/us103.jpg','assets/us/us104.jpg','assets/us/us105.JPEG',
];

const poems = [
  "In your eyes, I see forever; A bond so strong, no force can sever; Through every trial, through joy and pain; Our love remains, a bright refrain; Your laughter lights my darkest days; A guiding star, a warming blaze; Each moment shared, a gift so rare;With you, my heart finds love laid bare; Forevermore, my soul will say; You are my light, my night, my day. ",
  "You’d never known the word love; Believing someday it’d come from up above; To only find that it was right in front of you; If only you had a clue; Thinking you lost your chance; That’d you'd never be able to give this girl a dance; Then you find out the fire between you could be true; The force you see could break a dam; That girl is you Sam.",
  "No treasure on Earth could match your worth; No diamond shines like your laughter; The way you love, the way you care; Has filled my life with treasures rare; Your touch, your words, all more valuable than gold; I belong with you; No gift could I give that equals your grace; You are my heart’s most loved space.",
  "The sun shines for 8 hours a day; But for me it shines 24/7; That’s because of this girl; Her presence can light up a room; Her smile can make you blind; Her laughter casts rays that can be seen from different galaxies; She is a star that never stops burning in my day. ",
  "Sometimes the darkness wins; It settles over me like a heavy fog; Dulling the edges of the world; Filling my mind with silence that feels too loud; I move through it slowly; Every step heavier than the last; Wondering if it will ever lift; Or if this is where I’m meant to stay; And then there’s you; You don’t banish the darkness; You don’t pretend it isn’t there; You just sit with me in it; Your presence a quiet reminder; That I’m not alone; You bring warmth where there was only cold; Not with bright flashes or grand gestures; But with the steady light of who you are; Because of you, I remember; The darkness is not endless; It is only a passing moment; In a life filled with your love.",
  "Loudness;Sometimes the world is too loud; and everyone else is talking; the quiet I crave is you; You listen to me without judgment,without interruption,as though my words matter; In a room full of voices,you hear me—not just the sound,but the weight behind it, the things I cannot say, I can’t get out; You hold my silence,and in that stillness,I find the space to be truly known; While others offer advice; you simply listen,and that is enough; Your presence alone gives me peace, reminds me that I am understood, even in my most difficult moments.",
  "When the world feels to heavy; And everything is unknown; Your presence is where I find peace; In your eyes, I see no judgment,only acceptance and calm; You are my sanctuary,the place where I can breathe,where I am simply enough.",
  "Every moment with you feels like a dream; Your love, a steady flowing stream; Together we've built something rare; A bond that shows how much we care; One year together, a milestone reached; My heart forever to yours is leached; Your smile still makes my heart race; In your arms is my favorite place; I promise to love you, day by day; As we continue on our beautiful way.",
  "A year of moments, big and small; Each one special, I treasure them all; The way you laugh, the way you smile; Makes every second with you worthwhile; From our first kiss to this day; You've shown me love in every way; I can't believe how lucky I've been; To have your heart and call you mine; Here's to our first year, my dear; And to many more, year after year.",
  "One year together, how time flies; When I'm with you, my spirit flies high; Through every season, winter to fall; Your love has been my all in all; The memories we've made are treasures; Filled with countless joyful pleasures; Your hand in mine feels just right; Like stars that brighten the darkest night; Thank you for twelve months of bliss; Sealed with every loving kiss.",
  "They say when you know, you know; And with you, my love continues to grow; A year has passed since we began; This journey together, hand in hand; Through laughter and tears, ups and downs; You're the one who turns my frowns; Into smiles that light up my face; With your warmth, your charm, your grace; Forever with you is where I belong; Our love a beautiful, endless song.",
  "Your eyes tell stories of kindness and grace; In this world, you're my favorite place; Through seasons changing, one thing stays true; My heart belongs completely to you; One year of memories we've written so far; Each one precious, like a wishing star; I promise to love you tomorrow and today; Walking beside you all the way; Happy anniversary to my heart's delight; You make my world incredibly bright."
    
];

const comments = [
  "You are my favorite person ♡","Babe you are so gorgeous ♡", "Your eyes light up my world ♡","I get lost in your eyes ♡", "You are so pretty ♡","I love you so much ♡","I love you to infinity and beyond ♡",
  "I am thinking of you right now ♡","Everytime I see you, you make me smile ♡", "You make me so happy ♡","I absolutely love cuddling with you ♡","You make me feel so safe and secure ♡","Your back rubs are heavenly ♡",
  "You are the most beautiful girl in the world ♡", "Are you a model? Well you should be ♡","You are my girl ♡", "You know who thinks your beautiful …. Me ♡", "You are the strongest person I know ♡", "I think your an angel from heaven ♡",
  "I dreamed about you last night ♡", "You are the best girlfriend in the world ♡", "I love your laugh ♡", "You are my sunshine on a cloudy day ♡", "Your smile melts my heart ♡", "You are my greatest treasure ♡", "I’m so lucky to have you in my life ♡",
  "You light up every room you walk into ♡", "You are my dream come true ♡", "I could stare at your beautiful face all day ♡", "Your laugh is my favorite sound ♡", "You’re my favorite person in the whole world ♡", "You are my reason to smile every day ♡",
  "You make my life so much brighter ♡","Every moment with you is magical ♡","You’re my everything ♡","I fall in love with you more every day ♡","Your beauty is unmatched ♡", "You have the most amazing heart ♡","You are the love of my life ♡",
  "Just hearing your voice makes my day ♡", "You’re my favorite adventure ♡", "I’m in awe of how amazing you are ♡","You are my forever and always ♡","I adore everything about you ♡","You make my world complete ♡", "You’re the most incredible person I’ve ever met ♡",
  "You are my greatest blessing ♡", "You’re my home ♡","You have the most beautiful soul ♡", "You make my heart skip a beat ♡","I cherish every moment with you ♡","You’re the best thing that’s ever happened to me ♡","I can’t imagine my life without you ♡",
  "You are my light in the dark ♡","You have the sweetest heart ♡","You make me want to be a better person ♡","I love everything about you ♡","You’re my favorite hello and hardest goodbye ♡", "You’re my partner in everything ♡","I could spend forever in your arms ♡",
  "You make every day special ♡","You’re the reason I believe in love ♡","You leave me speechless ♡","I feel like the luckiest person alive because I have you ♡","You make my heart so full ♡","You are my soulmate ♡", "I love you more than words can ever express ♡",
  "You are my best friend ♡","You are my twin fr  ♡ ", 
  "One year down, forever to go! ♡",
  "Every day with you feels like a gift ♡",
  "You're my favorite hello and my hardest goodbye ♡",
  "Being with you for a year has been the best adventure ♡",
  "You're my happy place ♡",
  "I fall more in love with you every day ♡",
  "Thank you for the most incredible year of my life ♡",
  "You're the reason I believe in soulmates ♡",
  "I love calling you mine ♡",
  "I never knew love could feel this good ♡",
  "Your heart is the most beautiful thing I know ♡",
  "One year later and I'm still crazy about you ♡",
  "You make ordinary days extraordinary ♡",
  "I love our love story ♡",
  "You're everything I never knew I needed ♡"
];
const catPictures = [
  'assets/animals/pet1.JPEG','assets/animals/pet2.JPEG','assets/animals/pet3.JPEG','assets/animals/pet4.JPEG','assets/animals/pet5.JPEG','assets/animals/pet6.JPEG',
  'assets/animals/pet7.JPG','assets/animals/pet8.JPG','assets/animals/pet9.JPG','assets/animals/pet10.JPG','assets/animals/pet11.JPG','assets/animals/pet12.JPG',
  'assets/animals/pet13.JPG','assets/animals/pet14.JPG','assets/animals/pet15.JPG','assets/animals/pet16.JPG','assets/animals/pet17.JPG','assets/animals/pet18.JPG',
  'assets/animals/pet19.JPG','assets/animals/pet20.JPG','assets/animals/pet21.JPG','assets/animals/pet22.JPG','assets/animals/pet23.jpg','assets/animals/pet24.jpg',
  'assets/animals/pet25.jpg','assets/animals/pet26.jpg','assets/animals/pet27.jpg','assets/animals/pet28.jpg','assets/animals/pet29.jpg','assets/animals/pet30.jpg',
  'assets/animals/pet31.jpg','assets/animals/pet32.jpg','assets/animals/pet33.jpg','assets/animals/pet34.jpg','assets/animals/pet35.jpg','assets/animals/pet36.jpg',
  'assets/animals/pet37.jpg','assets/animals/pet38.jpg','assets/animals/pet39.jpg','assets/animals/pet40.jpg','assets/animals/pet41.jpg','assets/animals/pet42.jpg',
  'assets/animals/pet43.jpg','assets/animals/pet44.jpg','assets/animals/pet45.jpg','assets/animals/pet46.jpg','assets/animals/pet47.jpg','assets/animals/pet48.jpg',
  'assets/animals/pet49.jpg','assets/animals/pet50.jpg','assets/animals/pet51.jpg','assets/animals/pet52.jpg','assets/animals/pet53.jpg','assets/animals/pet54.jpg',
  'assets/animals/pet55.jpg','assets/animals/pet56.jpg','assets/animals/pet57.jpg','assets/animals/pet58.jpg','assets/animals/pet59.jpg','assets/animals/pet60.jpg',
  'assets/animals/pet61.jpg','assets/animals/pet62.jpg','assets/animals/pet63.jpg','assets/animals/pet64.jpg','assets/animals/pet65.jpg','assets/animals/pet66.jpg',
  'assets/animals/pet67.jpg','assets/animals/pet68.jpg','assets/animals/pet69.jpg','assets/animals/pet70.jpg','assets/animals/pet71.jpg','assets/animals/pet72.jpg',
  'assets/animals/pet73.jpg','assets/animals/pet74.jpg','assets/animals/pet75.jpg','assets/animals/pet76.jpg','assets/animals/pet77.jpg','assets/animals/pet78.jpg',
  'assets/animals/pet79.jpg','assets/animals/pet80.jpg','assets/animals/pet81.jpg','assets/animals/pet82.jpg','assets/animals/pet83.JPG','assets/animals/pet84.jpg',
  'assets/animals/pet85.jpg','assets/animals/pet86.jpg','assets/animals/pet87.jpg','assets/animals/pet88.jpg','assets/animals/pet89.jpg','assets/animals/pet90.jpg',
  'assets/animals/pet91.jpg','assets/animals/pet92.jpg','assets/animals/pet93.jpg','assets/animals/pet94.jpg','assets/animals/pet95.jpg','assets/animals/pet96.jpg',
  'assets/animals/pet97.jpg','assets/animals/pet98.jpg',
];

const loveStoryPictures = [
  { src: 'assets/Story/story1.JPG', caption: 'April: The first picture that I have of us together. I know it is a random picture, but from the beginning I always loved when you put your head on my shoulder. ♡' },
  { src: 'assets/Story/story2.png', caption: 'April: Sigfest: Our first real party together. I remember how much fun we had. You looked so beautiful. ♡' },
  { src: 'assets/Story/story3.JPG', caption: "May: This is when we began long distance. It tested us and while it wasn't fun it showed me how much we truly loved eachother and how locked in we were. ♡" },
  { src: 'assets/Story/story4.jpg', caption: 'June: Still in long distance but we actually saw each other a lot this month. Whether it was you coming to visit me or meet me and my family for that polo match. Btw you looked so pretty at that. ♡' },
  { src: 'assets/Story/story5.jpg', caption: 'June: The Trip: When you came on my family vacation to Lake George and Vermont to celebrate my bday. I had so much fun and I miss these 5 days so much. This once again showed me just how special you were. Remember how good that food in Vermont was and how we slept in a closet and a basement.  ♡' },
  { src: 'assets/Story/story6.jpg', caption: 'July: This month was truly long distance, however we still managed to facetime everynight and see each other once in a while, making the times we saw each other just that much more special. ♡' },
  { src: 'assets/Story/story7.jpg', caption: 'August: Another long distance month but we went to LBI with all of our friends. That trip was so much fun and I loved being able to sleep with you for multiple days at a time. ♡' },
  { src: 'assets/Story/story8.JPG', caption: 'September: We went back to school! Now we were able to see each other everyday and spend each night in the same bed. We also went out together, went to my brothers for a weekend where we painted. This month was our introduction to being back at school with our friends and being together everyday. ♡' },
  { src: 'assets/Story/story9.png', caption: 'October: Another month of spending everyday with you. We got to experience the Northern Lights together which was so cool an I am so happy I got to see them with you. They were not as pretty as you though. ♡' },
  { src: 'assets/Story/story10.JPG', caption: 'October: BIRTHDAY GIRL!: October 18th we celebrated your birthday. You looked so pretty and the food was so good. I was really nervous to give you your gift but I was so happy you liked it. ♡' },
  { src: 'assets/Story/story11.JPG', caption: "Novemeber: Honestly, not much happened in November, other than us getting closer and spending each day together, and going to your house for your brothers bday which I had a lot of fun doing. That's the best thing though, spending time with the most beautiful girl in the world. ♡" },
  { src: 'assets/Story/story12.JPG', caption: "Decemeber: We spent the holidays together! We went to my sisters for her Christmas party, you came over my house to celebrate the New Year's with me. You don't understand how much that meant to me. Over the holiday, somehow, someway we got even closer than we already were. I am so happy, and lucky to have someone as beautiful as you in my life. ♡" },
  { src: 'assets/Story/story13.jpg', caption: "January: January was an eventful month for us. For starters we made it to 9 months together as a couple! We are almost at 10 months now and we are about to celebrate Valentine's Day together, which I can't wait for. In Januray we went to the city together, experienced the Summit and you gave me the greatest Christmas gift I have ever recieved. Going to a Knicks game! You and my family hav gotten so close and I can't wait to experience many more years with you. I love you so much beautiful. ♡" },
];

const dateIdeas = [
  "Go to the movies",
  "Make a Build a Bear together",
  "Visit a local museum",
  "Do a puzzle together while watching a movie",
  "Go to a restaurant for dinner",
  "Cooking date where we both cook together",
  "Visit a nearby town for the day",
  "Enjoy a coffee date at a cute café",
  "Watch the sunset on the beach",
  "Plan a DIY spa day at home",
  "Take a scenic drive listening to our playlist",
  "Go on a shooping spree date",
  "Visit Luke",
  "Visit Jackie",
  'Visit your family',
  "Go on a lunch date",
  "Go on a date in Belmar",
  "Stargazing picnic at night",
  "Take a cooking class together",
  "Visit a new town or city for the day",
  "Indoor rock climbing adventure",
  "Go to a concert",
  "Have breakfast in bed together",
  "Visit a botanical garden",
  "Take dance lessons together",
  "Have a game night with friends",
  "Go on a weekend getaway",
  "Visit an aquarium",
  "Take a pottery class together",
  "Explore a farmers market and cook dinner with what you find",
  "Have a photoshoot together",
  "Go to a drive-in movie"
];


// The original Christmas letter (keep this)
const letter = ` 
  Hey beautiful, aka Sam, aka my special girlfriend.
  Isn't this a surprise? Did you expect me to make an app for you? Did this pass your mind at all when you were guessing what I "got" for you. 
  You know, for a long time I was thinking of buying tickets to go to a drake concert together however they were either far away or really expensive and so I scrambled. At the start of December I had an aha moment. 
  I know how to code so why don't I do my best and do everything I can to make an app for my gorgeous girlfriend. She deserves the world so the least I could do is spend a few hours everyday from now until Christmas 
  to make an app for her and I hope you like it. I probably by this time already mentioned to you that I can update and change the app to whatever you want. I can add more comments or pictures or even more things on it 
  if you want. I am the one who controls it so anything you want done to it say the word and I'll make it happen and when a change happens like all updates I'll send you little patch notes on what changed. Now I just want 
  to say how lucky I am to have you as a girlfriend. You are the best thing that has ever happened to me. I don't think I emphasize that enough. I can truly be myself around you and feel free to let my childish behavior out. 
  I am the happiest and the most giddy when I am around you. I am so excited to spend this holiday season with you gorgeous, aka Sam, aka the most beautiful girl in the world. I can't wait to build that gingerbread house 
  together, wear our matching pajamas tonight, watch a Christmas movie and hopefully when it snows go sledding together. You truly make me the best version of me that I can be and I can't wait to spend many more holidays 
  with you my love.
  I love you so much Sam, more than words can ever describe. 
  From Chris & Willie❤️`;

// Add anniversary letter
const anniversaryLetter = `
  My dearest Sam,

  Can you believe it's been a whole year since we made things official? 365 days of laughter, love, and growing together. As I sit here writing this letter, I'm overwhelmed with gratitude for having you in my life.

  This year has been the most incredible journey. From our first dates to long-distance challenges, from summer adventures to cozy nights watching movies together. Every moment with you has been a treasure, and I've saved each one in my heart.

  I remember how nervous I was in the beginning, wondering if someone as amazing as you could really be interested in me. Now I wake up every day grateful that you chose me, and that we chose each other.

  You've seen me at my best and my worst, and somehow you love both versions of me. You make me want to be better, not because you expect it, but because seeing your smile when I succeed is the greatest reward.

  Your kindness, your strength, your humor, and yes, your beauty (inside and out) continue to amaze me every single day. When you put your head on my shoulder or reach for my hand, I feel like the luckiest person alive.

  As we start our second year together, I promise to continue growing with you, supporting your dreams, making you laugh until you snort (which is adorable, by the way), and showing you every day how much you mean to me.

  Thank you for the best year of my life. Here's to many, many more.

  All my love forever,
  Chris (& Willie, who sends purrs and paw taps)❤️`;

// Add global variables
let loveStoryIndex = 0;
let modalIsOpen = false;
let currentModalContent = "";
let slideDirection = "right";

// Show update modal when the page loads
document.addEventListener("DOMContentLoaded", function() {
  // Show the one-year anniversary update modal
  if (!localStorage.getItem("oneYearUpdateShown")) {
    document.getElementById('updateModal').style.display = 'flex';
    document.querySelector('.update-content').classList.add('fade-in');
    localStorage.setItem("oneYearUpdateShown", "true");
  }
  
  // Set initial image
  const imageElement = document.getElementById('profile');
  if (imageElement) {
    imageElement.src = images[0];
    imageElement.onclick = function() {
      showImageInModal(images[0]);
    };
  }
  
  // Set current date
  const dateElement = document.getElementById('current-date');
  if (dateElement) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = new Date().toLocaleDateString('en-US', options);
  }
  
  // Check for anniversary and show special message if it's today
  const today = new Date();
  if (today.getDate() === 28 or today.getDate() ==29 && today.getMonth() === 3) { 
    setTimeout(() => {
      const popupContent = `
        <div id="modal-content" class="anniversary-special">
          <h2>Happy Anniversary, My Love! ❤️</h2>
          <p>Today marks one year of us being together, and I couldn't be happier to celebrate this milestone with you.</p>
          <p>Here are some exciting updates to your app, made just for you:</p>
          <ul>
            <li>🎉 A new <strong>Countdown</strong> feature to track our special moments.</li>
            <li>💌 Beautifully designed <strong>letters</strong> for you to read.</li>
            <li>🎥 Enhanced <strong>animations</strong> for a smoother and more magical experience.</li>
            <li>📖 New <strong>love stories</strong> to relive our favorite memories.</li>
            <li>💬 Fresh <strong>comments</strong> and <strong>poems</strong> to make you smile.</li>
            <li>🐾 Adorable <strong>cat pictures</strong> to brighten your day.</li>
          </ul>
          <p>Thank you for making this past year the best of my life. Here's to many more years of love and happiness together. I love you so much, Sam. ❤️</p>
        </div>
      `;
      openModal(popupContent);
    }, 300);
  }
});

function closeUpdateModal() {
  const updateModal = document.getElementById('updateModal');
  const content = document.querySelector('.update-content');
  
  content.classList.remove('fade-in');
  content.classList.add('fade-out');
  
  setTimeout(() => {
    updateModal.style.display = 'none';
    content.classList.remove('fade-out');
  }, 300);
}

function showLetterOptions() {
  const popupContent = `
    <div id="modal-content">
      <h3>Choose a Letter</h3>
      <button class="letter-option" onclick="showLetter('christmas')">Christmas Love Letter</button>
      <button class="letter-option" onclick="showLetter('anniversary')">One Year Anniversary Letter</button>
    </div>
  `;
  openModal(popupContent);
}

function showLetter(type) {
  let letterContent;
  
  if (type === 'anniversary') {
    letterContent = anniversaryLetter;
  } else {
    letterContent = letter; // The original Christmas letter
  }
  
  closeModal();
  setTimeout(() => {
    openModal(`<p style="font-size: 12px;">${letterContent}</p>`);
  }, 300);
}

function openModal(content) {
  if (modalIsOpen) {
    closeModal();
    setTimeout(() => {
      actuallyOpenModal(content);
    }, 300);
  } else {
    actuallyOpenModal(content);
  }
}

function actuallyOpenModal(content) {
  const popupContent = document.getElementById('popupContent');
  popupContent.innerHTML = content;
  
  const modal = document.getElementById('popupModal');
  modal.style.display = 'flex';
  
  const modalContent = document.querySelector('.modal-content');
  modalContent.classList.add('fade-in');
  
  currentModalContent = content;
  modalIsOpen = true;
}

function closeModal() {
  const modal = document.getElementById('popupModal');
  const modalContent = document.querySelector('.modal-content');
  
  modalContent.classList.remove('fade-in');
  modalContent.classList.add('fade-out');
  
  setTimeout(() => {
    modal.style.display = 'none';
    modalContent.classList.remove('fade-out');
    modalIsOpen = false;
  }, 300);
}

function showImageInModal(imageSrc) {
  const popupContent = `
    <div id="modal-content">
      <img src="${imageSrc}" alt="Larger Image" style="width: 100%; height: auto; border-radius: 15px;">
      <div class="navigation-buttons">
      </div>
    </div>
  `;
  openModal(popupContent);
}

function showRandomImage() {
  let randomImage;
  do {
    randomImage = images[Math.floor(Math.random() * images.length)];
  } while (randomImage === window.lastRandomImage);
  window.lastRandomImage = randomImage;

  const imageElement = document.getElementById('profile');
  
  // Add animation before changing the image
  imageElement.style.opacity = '0';
  imageElement.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    imageElement.src = randomImage;
    
    // Animate the new image in
    setTimeout(() => {
      imageElement.style.opacity = '1';
      imageElement.style.transform = 'scale(1)';
    }, 100);
    
    imageElement.onclick = function() {
      showImageInModal(randomImage);
    };
  }, 300);
}

function showRandomPoem() {
  let randomPoem;
  do {
    randomPoem = poems[Math.floor(Math.random() * poems.length)];
  } while (randomPoem === window.lastPoem);
  window.lastPoem = randomPoem;
  
  const popupContent = `
    <div id="modal-content">
      <p>${randomPoem}</p>
      <div class="navigation-buttons">
        <button class="regenerate-btn" onclick="showRandomPoem()">↻ New Poem</button>
      </div>
    </div>
  `;
  openModal(popupContent);
}

function showRandomComment() {
  let randomComment;
  do {
    randomComment = comments[Math.floor(Math.random() * comments.length)];
  } while (randomComment === window.lastComment);
  window.lastComment = randomComment;
  
  const popupContent = `
    <div id="modal-content">
      <p>${randomComment}</p>
      <div class="navigation-buttons">
        <button class="regenerate-btn" onclick="showRandomComment()">↻ New Comment</button>
      </div>
    </div>
  `;
  openModal(popupContent);
}

function generateDateIdea() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * dateIdeas.length);
  } while (randomIndex === window.lastIdeaIndex);
  window.lastIdeaIndex = randomIndex;
  const randomIdea = dateIdeas[randomIndex];
  
  const popupContent = `
    <div id="modal-content">
      <h3>Date Idea</h3>
      <p>${randomIdea}</p>
      <div class="navigation-buttons">
        <button class="regenerate-btn" onclick="generateDateIdea()">↻ New Idea</button>
      </div>
    </div>
  `;
  openModal(popupContent);
}

function showRandomCatPicture() {
  let randomCatPicture;
  do {
    randomCatPicture = catPictures[Math.floor(Math.random() * catPictures.length)];
  } while (randomCatPicture === window.lastCatPicture);
  window.lastCatPicture = randomCatPicture;
  
  const popupContent = `
    <div id="modal-content">
      <img src="${randomCatPicture}" alt="Cat Picture" style="width: 100%; height: auto; border-radius: 15px;">
      <div class="navigation-buttons">
        <button class="regenerate-btn" onclick="showRandomCatPicture()">↻ New Picture</button>
      </div>
    </div>
  `;
  openModal(popupContent);
}

// Functions to modify for handling the Previous/Next buttons visibility

function showLoveStory() {
  if (loveStoryIndex >= loveStoryPictures.length) {
    loveStoryIndex = 0;
  }
  
  const currentPicture = loveStoryPictures[loveStoryIndex];
  
  // Determine if previous/next buttons should be shown
  const showPrevButton = loveStoryIndex > 0;
  const showNextButton = loveStoryIndex < loveStoryPictures.length - 1;
  
  const popupContent = `
    <div id="modal-content">
      <div class="love-story-container">
        <img src="${currentPicture.src}" alt="Love Story" style="width: 100%; height: auto; border-radius: 15px;">
        <p class="love-story-caption">${currentPicture.caption}</p>
      </div>
      <div class="navigation-buttons">
        ${showPrevButton ? '<button class="nav-btn" onclick="previousLoveStory()">← Previous</button>' : ''}
        ${showNextButton ? '<button class="nav-btn" onclick="nextLoveStory()">Next →</button>' : ''}
      </div>
    </div>
  `;
  openModal(popupContent);
}

function nextLoveStory() {
  slideDirection = "left";
  if (loveStoryIndex < loveStoryPictures.length - 1) {
    loveStoryIndex++;
    animateLoveStoryTransition();
  }
}

function previousLoveStory() {
  slideDirection = "right";
  if (loveStoryIndex > 0) {
    loveStoryIndex--;
    animateLoveStoryTransition();
  }
}

function animateLoveStoryTransition() {
  const container = document.querySelector('.love-story-container');
  if (!container) return;
  
  container.classList.add(`slide-out-${slideDirection}`);
  
  setTimeout(() => {
    const currentPicture = loveStoryPictures[loveStoryIndex];
    container.innerHTML = `
      <img src="${currentPicture.src}" alt="Love Story" style="width: 100%; height: auto; border-radius: 15px;">
      <p class="love-story-caption">${currentPicture.caption}</p>
    `;
    
    container.classList.remove(`slide-out-${slideDirection}`);
    container.classList.add(`slide-in-${slideDirection}`);
    
    // Update the navigation buttons based on the current index
    const navigationButtons = document.querySelector('.navigation-buttons');
    const showPrevButton = loveStoryIndex > 0;
    const showNextButton = loveStoryIndex < loveStoryPictures.length - 1;
    
    navigationButtons.innerHTML = `
      ${showPrevButton ? '<button class="nav-btn" onclick="previousLoveStory()">← Previous</button>' : ''}
      ${showNextButton ? '<button class="nav-btn" onclick="nextLoveStory()">Next →</button>' : ''}
    `;
    
    setTimeout(() => {
      container.classList.remove(`slide-in-${slideDirection}`);
    }, 400);
  }, 400);
}

// Starting the love story from the first image
function startLoveStory() {
  loveStoryIndex = 0;
  showLoveStory();
}

function showCountdown() {
  // Define the start date of the relationship
  const startDate = new Date(2024, 3, 29); // April 28, 2023 (months are 0-indexed)
  const currentDate = new Date();
  const daysTogether = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

  // Calculate years and remaining days together
  const yearsTogether = Math.floor(daysTogether / 365);
  const remainingDays = daysTogether % 365;

  // Define special dates
  const specialDates = [
    { name: "Valentine's Day", date: "2025-02-14" },
    { name: "Next Anniversary", date: "2025-04-29" },
    { name: "Chris's Birthday", date: new Date("June 19, 2025") },
    { name: "Sam's Birthday", date: new Date("October 18, 2025") }
  ];

  // Calculate upcoming special dates
  const upcomingDates = specialDates.map(date => {
    const nextDate = new Date(date.date);
    if (nextDate < currentDate) {
      nextDate.setFullYear(currentDate.getFullYear() + 1);
    }

    const daysUntil = Math.ceil((nextDate - currentDate) / (1000 * 60 * 60 * 24));
    return {
      name: date.name,
      daysUntil: daysUntil
    };
  });

  // Sort by closest date
  upcomingDates.sort((a, b) => a.daysUntil - b.daysUntil);

  // Generate HTML for special dates
  let datesHTML = "";
  upcomingDates.forEach(date => {
    datesHTML += `<p>${date.name}: ${date.daysUntil} day${date.daysUntil !== 1 ? 's' : ''} away</p>`;
  });

  // Display the countdown in a modal
  const popupContent = `
    <div id="modal-content">
      <h3>Our Love by the Numbers</h3>
      <p>We've been together for ${yearsTogether} year${yearsTogether !== 1 ? 's' : ''} and ${remainingDays} day${remainingDays !== 1 ? 's' : ''}!</p>
      <p>That's ${daysTogether} beautiful days of love.</p>
      <h4>Upcoming Special Dates:</h4>
      ${datesHTML}
      <div class="heart-animation">❤️</div>
    </div>
  `;
  openModal(popupContent);
}
function runFlowerAnimation() {
  const popupContent = document.getElementById('popupContent');
  popupContent.innerHTML = `
    <iframe 
      src="assets/FlowerAnimation/index.html" 
      frameborder="0" 
      
      style="width: 100%; height: 320px; border-radius: 10px;">
    </iframe>
  `;
  document.getElementById('popupModal').style.display = 'flex';
}

function closeApp() {
  const container = document.querySelector('.container');
  container.classList.add('fade-out');
  
  setTimeout(() => {
    window.close();
    // Fallback if window.close() doesn't work
    document.body.innerHTML = `
      <div class="app-closed">
        <h2>App Closed</h2>
        <p>Thank you for using our Love App!</p>
        <button onclick="location.reload()">Reopen App</button>
      </div>
    `;
  }, 500);
}

// Add event listener to close modal when clicking outside
window.addEventListener('click', function(event) {
  const modal = document.getElementById('popupModal');
  if (event.target === modal) {
    closeModal();
  }
});

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
  if (!modalIsOpen) return;
  
  if (event.key === 'Escape') {
    closeModal();
  } else if (event.key === 'ArrowRight' && document.querySelector('.love-story-container')) {
    nextLoveStory();
  } else if (event.key === 'ArrowLeft' && document.querySelector('.love-story-container')) {
    previousLoveStory();
  }
});

