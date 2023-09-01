const tabMain = document.getElementById("tab_main");
const videoContainer = document.getElementById("video-container");
const dataHandle = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const datas = await res.json();
  const data = datas.data;

  tabHandelar(data);
};

const tabHandelar = (datas) => {
  console.log(datas);

  datas.forEach((data) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a onclick="videoHandelar('${data.category_id}')" class="tab tab-lg bg-gray-900 bg-opacity-10 text-base text-gray-900 text-opacity-70 font-medium">${data.category}</a>
    
    
    `;
    tabMain.appendChild(div);
  });
};
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
      errorDiv.innerHTML = `
      <p class="text-red-500">No videos available for this category.</p>
    `;
      videoContainer.appendChild(errorDiv);
    } else {
      // abar error

      data.forEach((item) => {
        // new error

        // new error

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
        console.log(mytime);
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

        <p class=" text-base font-normal text-[##171717b3]"> <span>${
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

dataHandle();
