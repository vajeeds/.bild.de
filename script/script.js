let par = document.getElementById('questions');
let msgBox = document.getElementById('msgBox');
let yesBtn = document.getElementById('yesBtn');
let noBtn = document.getElementById('noBtn');
let sad = document.getElementById('sad');
let index = 0;
let mainBox = document.getElementById('box');

let btnBox = document.getElementById('btnBox');

let toMyLove = document.getElementById('toMyLove');

let loveBox = document.getElementById('loveBox');

let q_arr = ['you know your Beautiful Right?',
    'Is someone told you that your Beautiful?',
    'Is that Vajeed?',
    'He is cute isnt he?',
    'Then he have some message for you wanna read it?',
    'Are you sure?',
    'Then you have to replay for something before reading the actual message? will you replay?'
];




let finalMsg = `Happy Birthday to the most special person in my life,<br>

Today, as we celebrate your birthday, I can’t help but reflect on the beautiful journey we’ve shared together. Each memory we’ve created is a treasure that makes my heart full, and I want to dedicate this message to you—to us.<br>

I still remember our first meeting in Ilkal like it was yesterday. The way your eyes reflected such quiet elegance, the warmth of your shy smile, and the gentle way you carried yourself left a lasting impression on me. There was something so genuine, so real about you, and I knew right then that you were someone extraordinary. It was the beginning of something truly special, though at that time, I had no idea just how much you would come to mean to me.<br>

Then came our one-day trip to Akluz water park with our friends. What a fun and carefree day that was! I can still hear the sound of our laughter echoing through the slides and splashes. You were like a bundle of joy, making everyone’s day brighter with your antics. That day, amidst the water games and shared jokes, I started to see how much happiness you brought into my life. It was more than just a fun outing—it was a day that strengthened our bond.<br>

How could I forget the evening of Nikhil’s birthday? It was a moment I’ll cherish forever. I was riding my bike, and you were sitting behind me. The cool breeze brushed past us, and everything felt so perfect. Then, you gently confessed your feelings. For a moment, the world seemed to stop, and all I could focus on was your voice, your words, and the sincerity in your eyes. It was one of the happiest moments of my life—knowing that you felt the same way about me as I did about you.<br>

Our bike trips to Gadag hold a special place in my heart too. Those one-day getaways, just the two of us on the open road, were pure magic. We’d share stories, laugh over silly things, and even enjoy the silence, just being in each other’s company. Those rides taught me that happiness isn’t about where you’re going but who you’re with. And with you, every journey feels like a dream.<br>

And how could I not mention our three-day trip to Chikmagalur? Those three days were nothing short of perfect. From the serene coffee plantations to the mesmerizing sunsets, everything felt like it was out of a movie. But more than the beautiful landscapes, it was your presence that made the trip unforgettable. Exploring new places with you, laughing over the smallest things, and simply being together made me realize how lucky I am to have you in my life.<br>

Through every moment we’ve shared—the big adventures and the quiet, everyday ones—you’ve been my source of joy and strength. You’ve taught me what it means to love and to be loved in return. And today, as we celebrate you, I want you to know how deeply I care for you and how grateful I am to have you by my side.<br>

Happy Birthday, my love. Here’s to many more memories, adventures, and moments that take our breath away. You’re my everything, and I can’t wait to see what the future holds for us.<br>

With all my love, Appu
`;



getQuestion();
function getQuestion(){
    par.innerText= q_arr[index];
}

yesBtn.addEventListener('click',()=>{
    if(index<q_arr.length-1){
        index++;
        getQuestion();
        sad.innerText = ''
    }else{
        updateUi();
    }
})

noBtn.addEventListener('click',()=>{
    sad.innerText = `Don't lie please 🥺`;
})


function updateUi(){
    par.innerText = 'I love you 😊😘';
        let input = document.createElement('input');
        input.setAttribute('placeholder','sumne i love you too type maad..');
        input.focus();
        msgBox.appendChild(input);
        let submitBtn = document.createElement('button');
        submitBtn.setAttribute('class','btn');
        submitBtn.innerText = 'Submit';
        btnBox.innerHTML ='';
        yesBtn.removeEventListener('click',()=>{});
        noBtn.removeEventListener('click',()=>{});

        submitBtn.addEventListener('click',()=>{
            let value = input.value.toLowerCase();
            console.log(value);
            if(value == 'i love you too' ||value =='143' || value == 'i love you 2' || value == 'love you'){
                mainBox.innerHTML = ''
                mainBox.classList.toggle('hide');
                toMyLove.classList.toggle('hide');
                loveBox.innerHTML = `<p> ${finalMsg} </p>`
                
            }else{
                sad.innerText = '🥺🥺 please say i love you too 🥺🥺';
            }
            
        })
        btnBox.appendChild(submitBtn);
}