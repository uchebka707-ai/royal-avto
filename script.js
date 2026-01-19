let lang='ru';
let selectedService='';
const times=['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];

const data={
ru:{
title:'Royal Auto',
subtitle:'Lux Premium Auto Service',
servicesTitle:'Наши услуги',
whyTitle:'Почему выбирают нас',
reviewsTitle:'Отзывы клиентов',
aboutTitle:'О компании',
aboutText:'Наша компания основана в 2026 году. За этот период времени компания достигла внушительных высот...',
contactTitle:'Байланыс',
phones:'+7 777 000 0000<br>+7 777 000 0101<br>+7 777 000 0102<br>+7 777 000 0103',
address:'Астана қаласы, Иманова 48',
bookBtn:'Записаться',
date:'Дата',
time:'Время',
placeholders:['Имя','Телефон','Марка','Год'],
services:[
['Замена масла','10000 ₸','oil.jpg'],
['Шиномонтаж','12000 ₸','tire.jpg'],
['Ремонт АКПП','от 50000 ₸','akpp.jpg'],
['Кузовные работы','от 30000 ₸','body.jpg'],
['Диагностика','8000 ₸','diag.jpg'],
['Тех осмотр','6000 ₸','tech.jpg'],
['Полировка автомобиля','25000 ₸','polish.jpg'],
['Тормозной системы','18000 ₸','brake.jpg'],
['Покраска автомобиля','от 40000 ₸','paint.jpg'],
['Автоэлектрик','15000 ₸','electric.jpg']
],
why:['Премиум оборудование','Опытные мастера','Без очередей','Гарантия качества'],
reviews:['⭐⭐⭐⭐⭐ Отличный сервис','⭐⭐⭐⭐⭐ Премиум уровень','⭐⭐⭐⭐⭐ Советую','⭐⭐⭐⭐⭐ Лучшие']
},
kz:{
title:'Royal Auto',
subtitle:'Lux Premium Автосервис',
servicesTitle:'Қызметтер',
whyTitle:'Неге бізді таңдайды',
reviewsTitle:'Пікірлер',
aboutTitle:'Компания туралы',
aboutText:'Біздің компания 2026 жылы құрылған. Осы уақыт ішінде үлкен жетістіктерге жеттік...',
contactTitle:'Байланыс',
phones:'+7 777 000 0000<br>+7 777 000 0101<br>+7 777 000 0102<br>+7 777 000 0103',
address:'Астана қаласы, Иманова 48',
bookBtn:'Жазылу',
date:'Күні',
time:'Уақыты',
placeholders:['Аты-жөні','Телефон','Маркасы','Жылы'],
services:[
['Май ауыстыру','10000 ₸','oil.jpg'],
['Шиномонтаж','12000 ₸','tire.jpg'],
['АКПП жөндеу','50000 ₸ бастап','akpp.jpg'],
['Кузов жұмыстары','30000 ₸ бастап','body.jpg'],
['Диагностика','8000 ₸','diag.jpg'],
['Техосмотр','6000 ₸','tech.jpg'],
['Полировка автомобиль','25000 ₸','polish.jpg'],
['Тежегіш жүйесі','18000 ₸','brake.jpg'],
['Автокөлік бояу','от 40000 ₸','paint.jpg'],
['Автоэлектрик','15000 ₸','electric.jpg']
],
why:['Premium жабдық','Тәжірибелі мамандар','Кезексіз қызмет','Сапа кепілдігі'],
reviews:['⭐⭐⭐⭐⭐ Өте жақсы','⭐⭐⭐⭐⭐ Premium','⭐⭐⭐⭐⭐ Ұнады','⭐⭐⭐⭐⭐ Ұсынамын']
}
};

function setLang(l){
lang=l;
const d=data[l];
title.innerText=d.title;
subtitle.innerText=d.subtitle;
servicesTitle.innerText=d.servicesTitle;
whyTitle.innerText=d.whyTitle;
reviewsTitle.innerText=d.reviewsTitle;
aboutTitle.innerText=d.aboutTitle;
aboutText.innerText=d.aboutText;
contactTitle.innerText=d.contactTitle;
phones.innerHTML=d.phones;
address.innerText=d.address;
bookBtn.innerText=d.bookBtn;
dateLabel.innerText=d.date;
timeLabel.innerText=d.time;

['name','phone','brand','year'].forEach((id,i)=>{
document.getElementById(id).placeholder=d.placeholders[i];
});

services.innerHTML='';
d.services.forEach(s=>{
services.innerHTML+=`
<div class="card" onclick="openModal('${s[0]}')">
<img src="images/${s[2]}">
<h3>${s[0]}</h3>
<p>${s[1]}</p>
</div>`;
});

whyCards.innerHTML='';
d.why.forEach(w=>whyCards.innerHTML+=`<div class="card">${w}</div>`);

reviews.innerHTML='';
d.reviews.forEach(r=>reviews.innerHTML+=`<div class="card">${r}</div>`);
}
setLang('ru');

function openModal(service){
selectedService=service;
modalService.innerText=service;
modal.style.display='block';
loadTimes();
}

function closeModal(){modal.style.display='none';}

function loadTimes(){
time.innerHTML='';
const dateVal=date.value;
const booked=JSON.parse(localStorage.getItem(dateVal)||'[]');
times.forEach(t=>{if(!booked.includes(t)) time.innerHTML+=`<option>${t}</option>`});
}

date.addEventListener('change',loadTimes);

function sendWA(){
const dateVal=date.value;
const timeVal=time.value;
let booked=JSON.parse(localStorage.getItem(dateVal)||'[]');
booked.push(timeVal);
localStorage.setItem(dateVal,JSON.stringify(booked));

const msg=
`Royal Auto\n${selectedService}\n${name.value}\n${phone.value}\n${brand.value}\n${year.value}\n${dateVal} ${timeVal}`;

window.open(`https://wa.me/77770000000?text=${encodeURIComponent(msg)}`);
closeModal();
}