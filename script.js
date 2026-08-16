const form=document.getElementById("loanForm");
const offer=document.getElementById("offer");
const offerText=document.getElementById("offerText");
const confirmBtn=document.getElementById("confirmBtn");
const success=document.getElementById("success");
const resetBtn=document.getElementById("resetBtn");

form.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(form);
  const amount=Number(data.get("amount")||0);
  const income=Number(data.get("income")||0);
  if(!document.getElementById("docs").files.length){alert("Please select the requested documents.");return;}
  // Demo-only indicative calculation. A real site must use server-side lender/eligibility rules.
  const indicative=Math.min(Math.max(amount||200000,100000),Math.max(income*12,100000));
  offerText.textContent=`Based on the information entered, an indicative loan amount of ₹${indicative.toLocaleString("en-IN")} may be considered. Final eligibility, interest rate, fees and approval are determined by the authorized lender after verification.`;
  form.classList.add("hidden");
  offer.classList.remove("hidden");
  window.scrollTo({top:offer.offsetTop-100,behavior:"smooth"});
});

resetBtn.addEventListener("click",()=>{
  offer.classList.add("hidden"); form.classList.remove("hidden");
});

document.getElementById("payBtn").addEventListener("click",()=>{
  success.classList.remove("hidden");
  confirmBtn.classList.remove("hidden");
});

confirmBtn.addEventListener("click",()=>{
  alert("Demo: application submitted successfully. Production version must verify Razorpay payment server-side before showing this message.");
  confirmBtn.textContent="✓ Submission received";
  confirmBtn.disabled=true;
});
