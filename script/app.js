const jobsData = [
    {
        id: 1,
        company: "Mobile First Corp",
        title: "React Native Developer",
        type: "Full-time",
        location: "Remote",
        salary: "$130,000 - $175,000",
        status: "not applied",
        description:
            "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 2,
        company: "TechNova Solutions",
        title: "Frontend Developer",
        type: "Full-time",
        location: "Remote",
        salary: "$90,000 - $120,000",
        status: "not applied",
        description:
            "Develop modern and responsive web applications using React and Tailwind CSS."
    },
    {
        id: 3,
        company: "CodeCrafters Ltd",
        title: "Backend Developer",
        type: "Part-time",
        location: "Onsite",
        salary: "$70,000 - $95,000",
        status: "not applied",
        description:
            "Build scalable REST APIs using Node.js and Express with MongoDB integration."
    },
    {
        id: 4,
        company: "NextGen IT",
        title: "JavaScript Developer",
        type: "Full-time",
        location: "Remote",
        salary: "$85,000 - $110,000",
        status: "not applied",
        description:
            "Work with modern JavaScript (ES6+) to build interactive and high-performance applications."
    },
    {
        id: 5,
        company: "PixelSoft Studio",
        title: "UI/UX Designer",
        type: "Contract",
        location: "Remote",
        salary: "$60,000 - $80,000",
        status: "not applied",
        description:
            "Design user-friendly and visually appealing interfaces for web and mobile applications."
    },
    {
        id: 6,
        company: "CloudMatrix Inc",
        title: "DevOps Engineer",
        type: "Full-time",
        location: "Hybrid",
        salary: "$110,000 - $150,000",
        status: "not applied",
        description:
            "Manage CI/CD pipelines and cloud infrastructure using AWS and Docker."
    },
    {
        id: 7,
        company: "DataWave Analytics",
        title: "Data Analyst",
        type: "Full-time",
        location: "Onsite",
        salary: "$75,000 - $100,000",
        status: "not applied",
        description:
            "Analyze datasets and generate business insights using SQL and Python."
    },
    {
        id: 8,
        company: "InnovateX Labs",
        title: "Full Stack Developer",
        type: "Full-time",
        location: "Remote",
        salary: "$100,000 - $140,000",
        status: "not applied",
        description:
            "Develop end-to-end web applications using React, Node.js, and MongoDB."
    }
];

// dom access --------------------------------------->
let allTab = document.getElementById('all-tab');
let interviewTab = document.getElementById('interview-tab');
let rejectedTab = document.getElementById('rejected-tab');

let jobsTab = document.querySelector('.jobs-tab');
let interviewsTab = document.querySelector('.interviews-tab');
let rejectsTab = document.querySelector('.rejects-tab');

let allContainer = document.getElementById('all-container');

let jobsCount = document.getElementById('jobs-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let totalCount = document.getElementById('total-count');

// empty array -------------------------------------->
let interviewJobArr = [];
let rejectedJobArr = [];

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

jobsData.forEach((job) => {
    const jobCardDiv = document.createElement('div');
    jobCardDiv.className = "w-full p-6 bg-[#ffffff] border border-[#F1F2F4] rounded-lg space-y-5";
    
    jobCardDiv.innerHTML = `
        <div class="w-full flex items-center justify-between">
            <div class="w-auto space-y-1">
                <p class="font-geist text-[#002C5C] text-lg font-semibold capitalize">${job.company}</p>
                <p class="font-geist text-[#64748B] text-base font-normal capitalize">${job.title}</p>
            </div>
            <div class="w-10 h-10 bg-[#ffffff] border border-[#F1F2F4] rounded-full flex items-center justify-center cursor-pointer">
                <i class="fa-regular fa-trash-can text-sm text-[#64748B]"></i>
            </div>
        </div>
        <div class="w-full flex items-center justify-start gap-2">
            <p class="font-geist text-[#64748B] text-sm font-normal capitalize">${job.location}</p>
            <i class="fa-solid fa-circle text-[4px] text-[#64748B]"></i>
            <p class="font-geist text-[#64748B] text-sm font-normal capitalize">${job.type}</p>
            <i class="fa-solid fa-circle text-[4px] text-[#64748B]"></i>
            <p class="font-geist text-[#64748B] text-sm font-normal capitalize">${job.salary}</p>
        </div>
        <div class="w-full space-y-2">
            <div class="job-badge w-[115px] py-2 px-3 bg-[#EEF4FF] border border-[#EEF4FF] rounded-sm text-center">
                <span class="job-status font-geist text-[#002C5C] text-sm font-medium uppercase">${job.status}</span>
            </div>
            <p class="font-geist text-[#323B49] text-sm font-normal">${job.description}</p>
        </div>
        <div class="w-full flex items-center justify-start gap-2">
            <button class="interview-btn w-[100px] py-2 px-3 bg-[#10B981]/10 border border-[#10B981] rounded-sm font-geist text-[#10B981] text-sm font-semibold uppercase cursor-pointer">interview</button>
            <button class="rejected-btn w-[100px] py-2 px-3 bg-[#EF4444]/10 border border-[#EF4444] rounded-sm font-geist text-[#EF4444] text-sm font-semibold uppercase cursor-pointer">rejected</button>
        </div>
    `;

    let jobBadge = jobCardDiv.querySelector('.job-badge');
    let jobStatus = jobCardDiv.querySelector('.job-status');

    let intBtn = jobCardDiv.querySelector('.interview-btn');
    let rejBtn = jobCardDiv.querySelector('.rejected-btn');

    intBtn.addEventListener('click', () => {
        job.status = 'interview';
        jobStatus.textContent = job.status;

        jobBadge.classList.remove("bg-[#EEF4FF]", "border-[#EEF4FF]", "bg-[#EF4444]/10", "border-[#EF4444]/10");
        jobBadge.classList.add("bg-[#10B981]/10", "border-[#10B981]/10");

        jobStatus.classList.remove("text-[#002C5C]", "text-[#EF4444]");
        jobStatus.classList.add("text-[#10B981]");

        interviewJobArr = interviewJobArr.filter((jobItem) => jobItem.id !== job.id);
        rejectedJobArr = rejectedJobArr.filter((jobItem) => jobItem.id !== job.id);

        interviewJobArr.push(job);
        interviewCount.textContent = interviewJobArr.length;
        rejectedCount.textContent = rejectedJobArr.length;
    });

    rejBtn.addEventListener('click', () => {
        job.status = 'rejected';
        jobStatus.textContent = job.status;

        jobBadge.classList.remove("bg-[#EEF4FF]", "border-[#EEF4FF]", "bg-[#10B981]/10", "border-[#10B981]/10");
        jobBadge.classList.add("bg-[#EF4444]/10", "border-[#EF4444]/10");

        jobStatus.classList.remove("text-[#002C5C]", "text-[#10B981]");
        jobStatus.classList.add("text-[#EF4444]");

        rejectedJobArr = rejectedJobArr.filter((jobItem) => jobItem.id !== job.id);
        interviewJobArr = interviewJobArr.filter((jobItem) => jobItem.id !== job.id);

        rejectedJobArr.push(job);
        rejectedCount.textContent = rejectedJobArr.length;
        interviewCount.textContent = interviewJobArr.length;
    });

    allContainer.appendChild(jobCardDiv);
});

// function ----------------------------------------->
function renderJobsCount() {
    jobsCount.textContent = jobsData.length;
    totalCount.textContent = jobsData.length;
};

// function call ------------------------------------>
renderJobsCount();