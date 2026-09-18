const WHATSAPP_URL = "https://wa.me/2348178700908";
const PHONE_DISPLAY = "08178700908";

// Navigation scroll
function scrollToSection(id){
  document.getElementById('activeSection').value = id;
  const el = document.getElementById(id);
  if(el){
    el.scrollIntoView({behavior:'smooth', block:'start'});
    el.classList.add('ring-highlight');
    setTimeout(()=> el.classList.remove('ring-highlight'), 1200);
  }
  // update active nav
  document.querySelectorAll('.nav a').forEach(a=>{
    a.classList.toggle('active', a.dataset.target===id)
  });
  closeMobile();
  try{ window.location.hash = id }catch{}
}

// Mobile menu
function toggleMobile(){
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobile(){
  document.getElementById('mobileMenu').classList.remove('open');
}

// WhatsApp form
function generateWhatsApp(){
  const name = document.getElementById('nameInput').value.trim();
  const phone = document.getElementById('phoneInput').value.trim();
  const issue = document.getElementById('issueInput').value.trim();

  if(!name || !issue){
    alert('Please fill your name and phone issue');
    return;
  }

  const message = `Hello SKY MODERNIZE SAVE TECHNOLOGY LTD,\nName: ${name}\nPhone: ${phone}\nIssue: ${issue}`;
  window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank');
}

// Direct part / repair inquiry
function askPart(partName){
  const text = `Hello, I need ${partName} for my phone. Is it available?`;
  window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank');
}
function bookRepair(serviceName){
  const text = `Hi, I need ${serviceName} service`;
  window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank');
}

// Highlight current section on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id = entry.target.id;
      document.querySelectorAll('.nav a').forEach(a=>{
        a.classList.toggle('active', a.dataset.target===id)
      });
    }
  });
},{rootMargin:'-50% 0px -50% 0px'});

document.addEventListener('DOMContentLoaded', ()=>{
  ['parts','repairs','why','contact'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) observer.observe(el);
  });
});
