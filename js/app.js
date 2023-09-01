const tabMain = document.getElementById("tab_main");
const videoContainer = document.getElementById("video-container");
const videoContainer2 = document.getElementById("video-container2");
const sortVewelement = document.getElementById("sort-vew");
const dataHandle = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const datas = await res.json();
  const data = datas.data;

  tabHandelar(data);
};

const tabHandelar = (datas) => {
  videoHandelar("1000");
  console.log(datas);

  // tab part

  // tab part

  datas.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a id="tab_active" onclick="videoHandelar('${data.category_id}'),handleTabClick(this)" class=" tab_active tab tab-lg bg-gray-900 bg-opacity-10 text-base text-gray-900 text-opacity-70 font-medium">${data.category}</a>
    
    
    `;

    tabMain.appendChild(div);
  });
  const tabAcive = document.querySelectorAll(".tab_active");
  tabAcive[0].classList.add("tab-active");
};

// new id

const handleTabClick = (tab) => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((t) => {
    t.classList.remove("tab-active");
    t.style.backgroundColor = "";
  });

  tab.classList.add("tab-active");
  tab.style.backgroundColor = "#FF1F3D";
};

// new id

// tab active
const tabEls = document.querySelectorAll(".tab");
tabEls.forEach((mytab) => {
  mytab.addEventListener("click", () => {
    const activeTab = document.querySelector(".tab-active");
    if (activeTab) {
      activeTab.classList.remove("tab-active");
    }
    mytab.classList.add("tab-active");
  });
});

// tab active

const videoHandelar = (videoID) => {
  const videoHandelar = async () => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${videoID}`
    );
    const datas = await res.json();
    const data = datas.data;

    console.log(data);
    videoContainer.innerHTML = "";

    // abar error
    if (data.length === 0) {
      const errorDiv = document.createElement("div");
      videoContainer2.innerHTML = "";
      errorDiv.innerHTML = `
     
      <div class=" flex flex-col items-center justify-center   lg:w-[413px] p-4">
      <img class="w-auto mx-auto" src="image/Icon.png" alt="" />
      <p class="text-center font-bold text-[#171717] lg:text-3xl text-xl">Oops!! Sorry, There is no <br /> content here</p>
      </div>
    `;

      videoContainer2.appendChild(errorDiv);
    } else {
      // abar error

      // sort

      // sort

      data.forEach((item) => {
        // new error

        // new error
        videoContainer2.innerHTML = "";

        const div = document.createElement("div");

        let verifed = item?.authors[0]?.verified;

        let verifedImg = (verifed) => {
          let srcImg;
          if (verifed) {
            srcImg = "image/coto_tik.png";
            return srcImg;
          } else {
            srcImg = "";
            return srcImg;
          }
        };
        let mytime = item.others.posted_date;
        // console.log(mytime);
        // let mytime = 16278;

        // time work

        function formatTimeAgo(seconds) {
          if (seconds === 0) {
            return "hidden"; // Add the "hidden" class when time is 0
          }

          const hours = Math.floor(seconds / 3600);
          const minutes = Math.floor((seconds % 3600) / 60);

          if (hours > 0) {
            if (minutes > 0) {
              return `${hours}hrs ${minutes}min ago`;
            } else {
              return `${hours}hrs ago`;
            }
          } else if (minutes > 0) {
            return `${minutes}min ago`;
          } else {
            return 0;
          }
        }
        const formattedTime = formatTimeAgo(mytime);

        // time work

        div.innerHTML = `
      <div class="main-item">
      <div class="relative">
        <img class="rounded-xl h-[205px]" src="${item?.thumbnail}" alt="">
        <div class="absolute  right-0 text-end bottom-[29px] lg:bottom-3">
          <span class="w-14 h-6 time bg-slate-800 text-sm text-white p-1 rounded hidden">3hrs 56 min ago</span>

          <span class="w-14 h-6 time bg-slate-800 text-sm text-white p-1 rounded ${
            mytime > 0 ? "" : "hidden"
          }">${mytime > 0 ? formattedTime : ""}</span>

          
        </div>
      </div>
      <div class="botom-part flex items-center my-3 gap-2">
       

        <div class="flex items-center  ">
        <img src="${
          item?.authors[0]?.profile_picture
        }" alt="" class="h-[70px] w-[70px] rounded-[50%]  " />
      </div>


        <div class="title-video relative top-[-11px] left-[8px]">
          <h3 class="text-base text-gray-900 font-bold ">
            ${item.title}
          </h3>
        </div>

      </div>
      <div class="lg:pl-[5rem] pl-12 inline-block lg:block  lg:mt-[-34px] relative lg:left-[7px] lg:bottom-[11px] left-[38px] bottom-[42px]">
        <div class="text_tik  ">
          <h3 class=" flex items-center gap-4 text-base font-normal text-[##171717b3]">${
            item.authors[0]?.profile_name
          }
            <span>
            <img src="${verifedImg(verifed)}" alt="">
            </span>
          </h3>

        </div>

        <p  class=" text-base font-normal text-[##171717b3]"> <span id="myVew" >${
          item.others.views
        }</span> views</p>
      </div>

    </div>
      `;
        div.classList.add("mx-auto");
        videoContainer?.appendChild(div);
      });
    }
  };
  videoHandelar();
};
// sort part

// ...
const sortItemElement = document.getElementById("sort_item_element");

function sortByViewsDescending(a, b) {
  const viewsA = parseFloat(a.others.views.replace("K", "")) * 1000;
  const viewsB = parseFloat(b.others.views.replace("K", "")) * 1000;

  return viewsB - viewsA;
}

// sort part

dataHandle();
