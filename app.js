const menuitem=[
    {
       id:1,
       title:'chapati chicken roll',
       category:'snacks',
       price:149,
       img:'image/chapaticheckenroll.jpg',
       description:`A fuss-free wrap with grilled chicken tikkas on a bed of onion with chipotle mayo, rolled in a soft Lachha paratha, with chipotle mayo spread. Hungry already? Order on-the-go!
       `,

    },
    {
        id:2,
        title:'bred egg omelete',
        category:'breakfast',
        price:120,
        img:'image/bred egg amlet breakfast.jpg',
        description:`Great recipe for Easy egg breakfast recipe BREAD OMELETTE.3 eggs,
        3 bread slices,
        2 tbsp each Chopped Onion tomato capsicum,
        leaves Chopped coriander,
        1/2 tsp red chilli flakes or green chilli`,
    },
    {
        id:3,
        title:'mint lemonodo',
        price:70,
        category:'snacks',
        img:'image/lemon juice.jpg',
        description:`Our tribute to the all-time-favourite lemonade with fresh mint leaves, lemon and water makes this refreshing drink an instant Summer cooler. A hint of black salt and sugar give that perfect finsh to this drink!`,
    },
    {
        id:4,
        title:'chicken burger',
        price:180,
        category:'snacks',
        img:'image/chicken burger.jpg',
        description:`In a large skillet over medium heat, heat oil. Add burger patties and cook, flipping once.These patties are spiced with smoked paprika and loaded with crunchy, bright coleslaw`,
    },
    {
        id:5,
        title:'chicken combo pack',
        price:450,
        category:'lunch',
        img:'image/chicken combo pack.jpg',
        description:`Most-loved juicy chicken tikkas with freshly ground biriyani masala and premium basmati steamed shut in the age-old dum phukt style – a delicious fare of delectable flavours. Served with Bhurani Raita.`,
    },
    {
        id:6,
        title:'prawns noodles',
        price:249,
        category:'lunch',
        img:'image/prawns noodles.jpg',
        description:`A classic Japanese dish of broiling the prawns in the wok, glazing with Teriyaki and combining the flavours of the sauce in the noodles along with fresh veggies and egg. Truly a creation. This prawns noodle bowl is a must try! All our bowls are prepared fresh on your order.`,
    },
    {
        id:7,
        title:'fried chicken wings',
        price:299,
        category:'snacks',
        img:'image/five start chicken wings.jpg',
        description:`Nothing beats indulging in a plate of crispy fried chicken wings you could easily make them at home .its so tasty and spicy at the best price `,
    },
    {
        id:8,
        title:'chicken pakodo springs',
        price:170,
        category:'snacks',
        img:"image/chicken pakodo spings.jpg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi eveniet nemo natus excepturi ipsam aperiam minus facere temporibus quo, non earum, perspiciatis maiores eaque fuga nihil nesciunt, amet ipsum.`,
    },
     {
        id:9,
        title:'chicken-butter-thali',
        price:229,
        category:'lunch',
        img:'image/butter-chicken thali.jpg',
         description:`chicken's most delicious form of curry - chicken butter masala curry along with whole wheat laccha paratha, jeera flavoured basmati rice, dal makhani, boondi raita and pickle, is going to make your meal AMAZING!` ,
 },
     {
        id:10,
        title:'chicken dhum biryani',
        price:289,
        category:'lunch',
        img:'image/ckicken dum biryani.jpg',
        description:`Chicken tikka cooked in a delicious makhani gravy and essential powdered Indian spices, fiery gravy led by onion, yogurt and spices, are DUM cooked with layers of basmati rice boiled with aromatic whole Indian spices and steamed for an explosion of flavours. Served with Bhurani Raita.`,
    },
    {
        id:11,
        title:'pepper chicken recepie',
        price:170,
        category:'lunch',
        img:'image/Pepper-Chicken_Curry.jpg',
        description:`Hawker style pepper chicken for a perfect start to your meal with its burst of spicy, savoury and a hint of sweet flavours..`,
    },
    {
        id:12,
        title:'masala dosa ',
        price:120,
        category:'breakfast',
        img:'image/masala dosa.jpg',
        description:`Masala dosa are popular South Indian rice and lentil crepes stuffed with potato masala. This  served with masala dosa , chuttny and sambar .`,
    },
    {
        id:13,
        title:'onion dosa ',
        price:99,
        category:'breakfast',
        img:'image/onion-dosa.jpg',
        description:`onion dosa are popular South Indian rice and lentil crepes stuffed with potato masala. This  served with onion dosa , chuttny and sambar .`,
    },
    {
        id:14,
        title:'idli sambar  ',
        price:159,
        category:'breakfast',
        img:'image/special idli sambar.jpg',
        description:`Idli sambar are al most inseparable members on a traditional South Indian platter. Idlies are steamed at hot vapour air .This dish serves you with 3 idli and sambar`,
    },
    {
        id:15,
        title:'mixed-fruit salad ',
        price:120,
        category:'breakfast',
        img:'image/mixed-fruit breakfast.jpg',
        description:`A steak of paneer, infused with hot and tangy habanero-jalapeno duo, is grilled, sliced and served with an exciting satiating trio of mexican tomato-paprika brown rice, spicy refried beans, crunchy roasted-corn salsa and dill sour cream.`,
    },
    {
        id:16,
        title:'chicken-fried fingers ',
        price:220,
        category:'snacks',
        img:'image/chicken-spring roll.jpg',
        description:`Our chicken-steak bowl isn’t just delicious but a KETO meal too! Slices of peri-peri spiced, grilled chicken breast is served with peppered, assorted veggies and a basil-flavoured cheese `,
    },
    {
        description:`These crispy cousins of the now-famous chicken popcorn are, and believe us when we say this, quite addictive. Succulent chunks of deboned chicken rested-well in a spicy chilli-soy marinade are crumb fried until golden.divine hot and sweet chilli-plum sauce.
        `,
        id:17,
        title:'sesame-chicken bites',
        price:219,
        category:'snacks',
        img:'image/chicken pakodo spings.jpg',

    },
    
]



const menuitems=document.querySelector('.menu-container');
const btnclick= document.querySelectorAll('.btn-click');

window.addEventListener('DOMContentLoaded',function(){
    
    menudisplyitems(menuitem);
});


 function menudisplyitems(menuitem){
    let menudisply=menuitem.map(function(item){

        return `<article class="menu-information">
        <div class="img-source">
            <img src="${item.img} "alt="image">

        </div>
        <div class="menu-text">
            <div class="title-tag">
            <h3>${item.title}</h3>
            <h3 class="price">rs /- ${item.price}</h3></div>

    
        <div class="menu-descri">
            <p class="descri">${item.description}</p>
        </div></div>

    </article> `;

    });
    menudisply= menudisply.join("");
    menuitems.innerHTML= menudisply;

 }



btnclick.forEach(function(btn){
    btn.addEventListener('click',function(event){
        const categoryid= event.currentTarget.dataset.id;
        const menucatagory= menuitem.filter(function(items){
            if(items.category === categoryid){
                return items ;
            };
        });
        if(categoryid=== 'all'){
            menudisplyitems(menuitem)
            
        }
        else{
            menudisplyitems(menucatagory)
        
        }
        
    });
});


const navbars= document.querySelector('.menubars');
const menubars= document.querySelector('.navmenu');

navbars.addEventListener('click',clickonbars);

function clickonbars(){
    let value=menubars.classList.contains('sidemenubars');
    console.log(value);
    if(value){
        menubars.classList.remove('sidemenubars')
    }
    else{
        menubars.classList.add('sidemenubars')
    }
}
clickonbars();





