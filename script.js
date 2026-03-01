function checkPassword(){
  var password = document.getElementById("passwordInput").value;
  if(password === "19523"){
    document.getElementById("passwordBox").style.display="none";
    document.getElementById("mainContent").style.display="block";
    document.getElementById("bgMusic").play();
    startCountdown();
  }else{
    alert("Wrong password bae 💔");
  }
}

function openLetter(){
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");

  // Envelope slides down
  envelope.style.transform="translateY(50px)";
  letter.style.display="block";

  typeText();
  showPhotos();
  launchFireworks();
}

// Typing effect
var text = `ဒီနေ့လေးကို စာရေးနေရတာ ကိုယ့်အတွက် အရမ်းအဓိပ္ပာယ်ရှိပါတယ်။
လောကကြီးထဲမှာ လူသန်းပေါင်းများစွာရှိပေမယ့် ကိုယ့်နှလုံးသားထဲမှာ နေရာယူထားနိုင်တဲ့သူကတော့ bae တစ်ယောက်တည်းပဲဆိုတာ သိစေချင်တယ်။

bae ကို စတင်သိခဲ့တဲ့နေ့ကစပြီး ကိုယ့်နေ့ရက်တွေ တဖြည်းဖြည်း ပြောင်းလဲလာခဲ့တယ်။
ပျော်ရွှင်မှုဆိုတာ bae ရဲ့အသံလေးထဲမှာရှိတယ်လို ခံစားရတယ်။
အေးချမ်းမှုဆိုတာ bae နဲ့စကားပြောနေတဲ့အချိန်လေးတွေထဲမှာရှိတယ်လို ခံစားရတယ်။

bae ရယ်တဲ့အခါ ကိုယ့်စိတ်ထဲလည်း အလင်းရောင်ထွန်းလာသလိုပဲ။
bae ပင်ပန်းတဲ့အခါ ကိုယ့်အနားမှာထားပြီး အေးအေးလေး နားလည်ပေးချင်တယ်။
bae စိတ်မကောင်းဖြစ်တဲ့နေ့တွေရှိရင်တောင် “baeဘက်မှာ လူတစ်ယောက်ရှိနေတယ်” လို့ ခံစားနိုင်စေချင်တယ်။

ဒီနှစ်မွေးနေ့ကစပြီး bae ရဲ့အိမ်မက်တွေ တစ်ခုချင်းစီ နီးလာပါစေ။
bae ကြိုးစားသမျှအရာတိုင်း အကျိုးရှိလာပါစေ။
bae ရဲ့နှလုံးသားနူးညံ့မှုကို လောကကြီးက တန်ဖိုးထားပေးပါစေ။

ကိုယ်က perfect မဟုတ်ဘူး၊ အမှားတွေလည်းရှိနိုင်တယ်။
ဒါပေမယ့် bae အတွက် ပိုကောင်းတဲ့လူတစ်ယောက်ဖြစ်အောင် ကြိုးစားနေမဲ့စိတ်ကတော့ တကယ်ရှိတယ်။
bae နဲ့အတူ အချိန်တွေ ကုန်ဆုံးချင်တယ်။
ပုံမှန်နေ့လေးတွေကိုတောင် အမှတ်တရဖြစ်အောင် ဖန်တီးချင်တယ်။

bae ဟာ ကိုယ့်အတွက် “ပျော်ရွှင်မှု” ဆိုတဲ့စကားလုံးကို အသက်ဝင်စေခဲ့တဲ့လူပါ။
ကိုယ့်ဘဝထဲကို ဝင်လာပေးခဲ့တာအတွက် ကျေးဇူးတင်တယ်။
ကိုယ့်ကို ယုံကြည်ပေးတဲ့အတွက် ကျေးဇူးတင်တယ်။
ကိုယ့်ဘေးမှာ ရှိနေပေးတဲ့အတွက် ကျေးဇူးတင်တယ်။

ဒီနေ့မွေးနေ့လေးမှာ bae အပြုံးလေး ပိုလှပါစေ။
bae နှလုံးသားလေး ပိုပူနွေးပါစေ။
bae ဘဝလေး ကိုယ့်အချစ်တွေနဲ့အေးချမ်းပါစေ။

I love you — not just for today,
but for every ordinary day that becomes special because of you.

Happy Birthday again, bae 🤍

— Rudd yyy`;

var i=0;
function typeText(){
  if(i<text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText,40);
  }
}

// Countdown
function startCountdown(){
  var startDate = new Date("2024-05-19");
  setInterval(function(){
    var now = new Date();
    var diff = now - startDate;
    var days = Math.floor(diff/(1000*60*60*24));
    document.getElementById("countdown").innerHTML = "Together for "+days+" days ❤️";
  },1000);
}

// Photos stagger + left/right alignment + float
function showPhotos(){
  const photos = document.querySelectorAll(".photo");
  photos.forEach((photo, index)=>{
    setTimeout(()=>{
      let rotate = Math.floor(Math.random()*20 - 10);
      let scale = Math.random()*0.3 + 0.9;
      photo.style.transform = `translateY(0) rotate(${rotate}deg) scale(${scale})`;
      photo.classList.add("show");
      photo.style.animation = "floatPic 3s ease-in-out infinite alternate";
    }, index*500);
  });
}

// Simple fireworks
function launchFireworks(){
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for(let i=0;i<150;i++){
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 2,0,Math.PI*2);
    ctx.fill();
  }
}

// Background hearts animation
const heartsBg = document.querySelector(".hearts-bg");
function createHeart(){
  const heart = document.createElement("div");
  heart.innerText="❤️";
  heart.style.position="absolute";
  heart.style.left=Math.random()*window.innerWidth+"px";
  heart.style.top=window.innerHeight+"px";
  heart.style.fontSize=(10+Math.random()*20)+"px";
  heart.style.opacity=Math.random();
  heart.style.transition="top 7s linear, opacity 7s linear";
  heartsBg.appendChild(heart);
  setTimeout(()=>{ heart.style.top="-50px"; heart.style.opacity=0; },50);
  setTimeout(()=>{ heartsBg.removeChild(heart); },7050);
}
setInterval(createHeart,300);
