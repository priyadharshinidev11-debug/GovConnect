const SERVICES=[
{n:"Aadhaar: update details",c:"Identity",v:1,d:"Update address online, or other details at an enrolment centre.",u:"https://myaadhaar.uidai.gov.in",k:"Mobile number registered with Aadhaar; proof-of-address document (see UIDAI document list)",s:["Online update is offered for address. Log in to the myAadhaar portal with your Aadhaar number; an OTP goes to your registered mobile.","Upload a supporting proof-of-address document from UIDAI’s list. It is verified later by UIDAI’s processing team.","Name, date of birth, gender, mobile, email and biometrics are updated at an Aadhaar Enrolment Centre, where an operator and a verifier check your originals.","You receive an acknowledgement with an Update Request Number (URN) or Enrolment ID. Use it to track status.","No registered mobile? Visit a Permanent Enrolment Centre to register one first. UIDAI helpline: 1947."]},
{n:"Aadhaar: download e-Aadhaar",c:"Identity",v:1,d:"Download Aadhaar, order a PVC card or generate a VID.",u:"https://myaadhaar.uidai.gov.in",k:"Aadhaar number or enrolment ID, mobile registered with Aadhaar",s:["Open the My Aadhaar portal and choose Download Aadhaar.","Verify with the OTP sent to your registered mobile.","Download the PDF. The Aadhaar app can also download e-Aadhaar, lock biometrics and show authentication history.","The same portal offers Order PVC Card, Generate VID and Retrieve Lost UID."]},
{n:"PAN: instant e-PAN",c:"Tax",v:1,d:"Free e-PAN for individuals who have Aadhaar but no PAN.",u:"https://www.incometax.gov.in/iec/foportal/",k:"Aadhaar number and the mobile linked to it. No documents to upload",s:["On the e-Filing portal home page, click Instant e-PAN.","Click Get New e-PAN.","Enter your 12-digit Aadhaar number, tick the confirmation box and continue.","Enter the 6-digit OTP sent to your Aadhaar-linked mobile.","Check the Aadhaar e-KYC details and submit. When allotted, use View e-PAN or Download e-PAN."]},
{n:"PAN: link with Aadhaar",c:"Tax",d:"Link your PAN to Aadhaar on the e-Filing portal.",u:"https://www.incometax.gov.in/iec/foportal/",k:"PAN, Aadhaar, linked mobile",s:["Open the e-Filing portal and find Link Aadhaar under Quick Links.","Enter your PAN and Aadhaar number.","Pay any fee the portal asks for, then validate with OTP.","Check the link status on the same page."]},
{n:"Passport",c:"Travel",v:1,d:"Apply for a fresh passport or reissue one.",u:"https://www.passportindia.gov.in",k:"Originals of the documents listed in the portal’s Document Advisor",s:["Register on the Passport Seva portal, then log in.","Click Apply for Fresh Passport / Re-issue of Passport. Choose Fresh only if you never held a passport of that category.","Fill the form online (e-Form) and submit.","Pay the fee online. Payment is mandatory before booking at all Passport Seva Kendras.","Book an appointment at a Passport Seva Kendra and print the application receipt.","Visit within 90 days with originals, or you must resubmit the form. Track status online."]},
{n:"Voter ID",c:"Identity",d:"Register as a voter, correct entries, download e-EPIC.",u:"https://voters.eci.gov.in",k:"Age proof, address proof, photo",s:["Open the Election Commission voter portal and sign up with your mobile number.","Choose new registration (Form 6) or correction of entries.","Fill the form and upload documents.","Note the reference ID and track the application.","After approval, download e-EPIC from the portal."]},
{n:"Driving Licence",c:"Travel",d:"Learner’s licence, permanent licence, renewal.",u:"https://parivahan.gov.in",k:"Age proof, address proof, passport photo, medical certificate where required",s:["Open the Parivahan Sarathi service and select your state.","Choose Apply for Learner’s Licence and fill the form.","Upload documents, pay the fee and book a test slot.","After the learner’s period, apply for the permanent licence and book the driving test.","Track status and download or collect the licence."]},
{n:"DigiLocker",c:"Documents",d:"Keep and share government-issued documents digitally.",u:"https://www.digilocker.gov.in",k:"Mobile number; Aadhaar for verification",s:["Sign up with your mobile number and verify with OTP.","Set a security PIN and link your Aadhaar.","Open Issued Documents or search an issuer to fetch licence, marksheets and more.","Share a document with a link when required."]},
{n:"Income Tax Return",c:"Tax",d:"File your return and track refunds.",u:"https://www.incometax.gov.in/iec/foportal/",k:"PAN, Form 16, bank details",s:["Log in to the e-Filing portal with your PAN.","Select File Income Tax Return, the assessment year and the filing type.","Review the pre-filled details and add what is missing.","Submit and e-verify.","Track processing and refund from the dashboard."]},
{n:"EPF and UAN",c:"Employment",d:"Activate your UAN, check passbook, claim PF.",u:"https://unifiedportal-mem.epfindia.gov.in/memberinterface/",k:"UAN, mobile linked to UAN, bank and KYC details",s:["Open the EPFO Member portal and choose Activate UAN.","Verify with your UAN and the OTP on your mobile.","Log in and use View > Passbook to see your balance.","For withdrawals, use Online Services > Claim and follow the form."]},
{n:"Birth and death certificate",c:"Documents",d:"Register events and get certificates.",u:"https://crsorgi.gov.in",k:"Hospital or event proof, ID of parent or applicant",s:["Open the Civil Registration System portal or your state’s registrar site.","Choose Birth or Death registration or certificate download.","Enter details and upload proofs.","Collect or download the certificate after approval."]},
{n:"Scholarships",c:"Education",d:"Apply for central and state scholarships.",u:"https://scholarships.gov.in",k:"Aadhaar, bank account, income and caste certificates, marksheets",s:["Open the National Scholarship Portal and register as a student.","Log in and fill the application for the scheme you qualify for.","Upload documents and submit.","Your institute verifies the application. Track it on the portal."]},
{n:"ABHA health ID",c:"Health",d:"Create an Ayushman Bharat Health Account number.",u:"https://abha.abdm.gov.in",k:"Aadhaar or driving licence, mobile",s:["Open the ABHA site and choose Create ABHA number.","Verify with Aadhaar or driving licence and an OTP.","Choose an ABHA address and finish.","Download your ABHA card."]},
{n:"PM-Kisan",c:"Farmers",d:"Register for the farmer income support scheme.",u:"https://pmkisan.gov.in",k:"Aadhaar, bank account, land records",s:["Open the PM-Kisan portal and choose New Farmer Registration.","Enter Aadhaar, mobile and state.","Fill land and bank details and submit.","Check beneficiary status from the portal."]},
{n:"GST registration",c:"Business",d:"Register a business for GST.",u:"https://www.gst.gov.in",k:"PAN, Aadhaar, business address proof, bank details",s:["Open the GST portal and go to Services > Registration > New Registration.","Complete Part A with PAN, mobile and email, and verify OTPs.","Fill Part B, upload documents and verify with Aadhaar or DSC.","Note the ARN and track the application."]},
{n:"Tamil Nadu eSevai",c:"State services",d:"Community, income and nativity certificates for Tamil Nadu.",u:"https://tnesevai.tn.gov.in",k:"Ration card, Aadhaar, proof for the certificate",s:["Open the TN eSevai portal and register or log in.","Pick the certificate service you need.","Fill the form and upload documents.","Pay the fee if any, and track the application.","Download the certificate when issued."]},
{n:"UMANG app",c:"Documents",d:"One app for many central and state services.",u:"https://web.umang.gov.in",k:"Mobile number",s:["Open UMANG on web or install the app.","Register with your mobile number and OTP.","Search the service you need and follow its screens."]}];
const EXAMS=[
{n:"UPSC",f:"Civil Services and other central recruitment",e:"Bachelor’s degree; age and attempt limits depend on category.",sy:"Prelims (General Studies, CSAT), Mains (essay and four GS papers, optional), Interview.",u:"https://upsc.gov.in"},
{n:"SSC",f:"CGL, CHSL, MTS and more",e:"Varies by post; most require a graduate or 12th-pass qualification.",sy:"Reasoning, quantitative aptitude, English and general awareness.",u:"https://ssc.gov.in"},
{n:"TNPSC",f:"Group 1, 2 and 4 for Tamil Nadu",e:"Qualification and age limits differ per group; Tamil language eligibility applies.",sy:"General studies, aptitude and Tamil eligibility test.",u:"https://www.tnpsc.gov.in"},
{n:"RRB (Railways)",f:"NTPC, Group D, ALP",e:"Varies by post and level.",sy:"General awareness, maths, reasoning, general science.",u:"https://indianrailways.gov.in"},
{n:"NTA (NEET, JEE, CUET)",f:"Entrance exams",e:"Set per exam in the information bulletin.",sy:"Published in each exam’s bulletin.",u:"https://nta.ac.in"},
{n:"Banking",f:"IBPS PO and Clerk, SBI PO and Clerk",e:"Graduate in any discipline; age limits by category.",sy:"Reasoning, quantitative aptitude, English and banking awareness.",u:"https://www.ibps.in"}];
const $=s=>document.querySelector(s),esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

/* Theme */
const THEMES=["light","dark","saffron"],root=document.documentElement,tb=$("#theme");
function setTheme(t){root.dataset.theme=t;tb.textContent="Theme: "+t[0].toUpperCase()+t.slice(1);store.set("gc-theme",t)}
let cur=store.get("gc-theme");if(!THEMES.includes(cur))cur=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";setTheme(cur);
tb.onclick=()=>setTheme(THEMES[(THEMES.indexOf(root.dataset.theme)+1)%THEMES.length]);

/* Mobile menu */
const nav=$("#nav"),mb=$("#menu");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nav.addEventListener("click",e=>{if(e.target.tagName==="A")nav.classList.remove("open")});
const links=[...nav.querySelectorAll("a")];
new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+x.target.id))}),{rootMargin:"-40% 0px -55% 0px"}).observe&&["home","about","gallery","contact","reviews"].forEach(id=>{const el=document.getElementById(id);if(el)new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+id))}),{rootMargin:"-40% 0px -55% 0px"}).observe(el)});

/* Exams */
const tabs=$("#examTabs");
function showExam(i){[...tabs.children].forEach((b,j)=>b.setAttribute("aria-selected",i===j));const x=EXAMS[i];
$("#examPanel").innerHTML=`<h3>${x.n}: ${x.f}</h3><dl><dt>Eligibility</dt><dd>${x.e}</dd><dt>Syllabus outline</dt><dd>${x.sy}</dd><dt>Dates</dt><dd>Published in each year’s official notification.</dd></dl><a class="btn" href="${x.u}" target="_blank" rel="noopener">Official site and registration</a>`}
EXAMS.forEach((x,i)=>{const b=document.createElement("button");b.className="chip";b.role="tab";b.textContent=x.n;b.onclick=()=>showExam(i);tabs.append(b)});showExam(0);

/* Services */
let cat="All",term="";const cats=["All",...new Set(SERVICES.map(s=>s.c))];
function drawFilters(){$("#filters").innerHTML="";cats.forEach(c=>{const b=document.createElement("button");b.className="chip";b.textContent=c;b.setAttribute("aria-pressed",c===cat);b.onclick=()=>{cat=c;drawFilters();drawServices()};$("#filters").append(b)})}
function drawServices(){const list=SERVICES.map((s,i)=>({s,i})).filter(({s})=>(cat==="All"||s.c===cat)&&(s.n+s.d).toLowerCase().includes(term));
$("#services").innerHTML=list.map(({s,i})=>`<article class="card"><span class="tag">${s.c}</span><h3>${s.n}</h3><p>${s.d}</p><button class="btn ghost" data-i="${i}">View guide</button></article>`).join("");$("#empty").hidden=list.length>0}
$("#services").onclick=e=>{const b=e.target.closest("button");if(!b)return;const s=SERVICES[b.dataset.i];$("#dt").textContent=s.n+" guide";$("#ds").innerHTML=s.s.map(t=>`<li>${t}</li>`).join("");$("#dk").textContent=s.k;$("#dl").href=s.u;$("#dv").textContent=s.v?"Checked against the official site":"Summary. Confirm steps on the official portal.";$("#dlg").showModal()};
$("#dc").onclick=()=>$("#dlg").close();
$("#dlg").addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
$("#heroSearch").onsubmit=e=>{e.preventDefault();term=$("#q").value.trim().toLowerCase();cat="All";drawFilters();drawServices();$("#gallery").scrollIntoView()};
drawFilters();drawServices();

/* Contact */
$("#contactForm").onsubmit=e=>{e.preventDefault();const n=$("#cn").value.trim(),m=$("#cm").value.trim(),em=$("#ce");
$("#cnote").textContent=!n||!m||!em.value.trim()||!em.checkValidity()?"Enter your name, a valid email and a message.":"Thanks, "+n+". We have your message (demo: nothing is sent yet).";
if(n&&m&&em.checkValidity())e.target.reset()};

/* Reviews */
const seed=[{n:"Divya R.",r:5,t:"Found the passport steps and the right link in two minutes."},{n:"Karthik S.",r:4,t:"Handy exam summary for TNPSC. Would love email alerts."},{n:"Aisha M.",r:5,t:"Clear enough that my parents could follow the PAN guide."}];
let revs=seed;try{const s=JSON.parse(store.get("gc-reviews")||"null");if(Array.isArray(s))revs=s}catch(e){}
function drawRevs(){$("#reviewList").innerHTML=revs.map(r=>`<article class="card"><span class="stars" aria-label="${r.r} out of 5">${"★".repeat(r.r)}${"☆".repeat(5-r.r)}</span><p>${esc(r.t)}</p><h3 style="font-size:.95rem;margin:0">${esc(r.n)}</h3></article>`).join("")}
$("#reviewForm").onsubmit=e=>{e.preventDefault();const n=$("#rn").value.trim(),t=$("#rt").value.trim();if(!n||!t){$("#rnote").textContent="Enter your name and a review.";return}
revs=[{n,r:+$("#rr").value,t},...revs];store.set("gc-reviews",JSON.stringify(revs));drawRevs();e.target.reset();$("#rnote").textContent="Review posted."};
drawRevs();
