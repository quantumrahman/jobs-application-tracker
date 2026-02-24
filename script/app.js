// dom access --------------------------------------->
let allTab = document.getElementById('all-tab');
let interviewTab = document.getElementById('interview-tab');
let rejectedTab = document.getElementById('rejected-tab');

let jobsTab = document.querySelector('.jobs-tab');
let interviewsTab = document.querySelector('.interviews-tab');
let rejectsTab = document.querySelector('.rejects-tab');

// event handler ------------------------------------>
allTab.addEventListener('click', () => {
    allTab.classList.remove("bg-[#ffffff]", "border-[#F1F2F4]", "text-[#64748B]"); 
    allTab.classList.add("bg-[#3B82F6]", "border-[#3B82F6]", "text-white");

    interviewTab.classList.remove("bg-[#3B82F6]", "border-[#3B82F6]", "text-white");
    interviewTab.classList.add("bg-[#ffffff]", "border-[#F1F2F4]", "text-[#64748B]");

    rejectedTab.classList.remove("bg-[#3B82F6]", "border-[#3B82F6]", "text-white");
    rejectedTab.classList.add("bg-[#ffffff]", "border-[#F1F2F4]", "text-[#64748B]");

    jobsTab.classList.remove('hidden');
    interviewsTab.classList.add('hidden');
    rejectsTab.classList.add('hidden');
});

interviewTab.addEventListener('click', () => {
    interviewTab.classList.remove("bg-[#ffffff]", "border-[#F1F2F4]", "text-[#64748B]");
    interviewTab.classList.add("bg-[#3B82F6]", "border-[#3B82F6]", "text-white");

    allTab.classList.remove("bg-[#3B82F6]", "border-[#3B82F6]", "text-white");
    allTab.classList.add("bg-[#ffffff]", "border-[#F1F2F4]", "text-[#64748B]");

    rejectedTab.classList.remove("bg-[#3B82F6]", "border-[#3B82F6]", "text-white");
    rejectedTab.classList.add("bg-[#ffffff]", "border-[#F1F2F4]", "text-[#64748B]");

    interviewsTab.classList.remove('hidden');
    jobsTab.classList.add('hidden');
    rejectsTab.classList.add('hidden');
});

rejectedTab.addEventListener('click', () => {
    rejectedTab.classList.remove("bg-[#ffffff]", "border-[#F1F2F4]", "text-[#64748B]");
    rejectedTab.classList.add("bg-[#3B82F6]", "border-[#3B82F6]", "text-white");

    allTab.classList.remove("bg-[#3B82F6]", "border-[#3B82F6]", "text-white");
    allTab.classList.add("bg-[#ffffff]", "border-[#F1F2F4]", "text-[#64748B]");

    interviewTab.classList.remove("bg-[#3B82F6]", "border-[#3B82F6]", "text-white");
    interviewTab.classList.add("bg-[#ffffff]", "border-[#F1F2F4]", "text-[#64748B]");

    rejectsTab.classList.remove('hidden');
    jobsTab.classList.add('hidden');
    interviewsTab.classList.add('hidden');
});