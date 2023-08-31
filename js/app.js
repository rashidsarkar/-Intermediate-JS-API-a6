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
  console.log(videoID);
  const videoHandelar = async () => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${videoID}`
    );
    const datas = await res.json();
    const data = datas.data;
    console.log(data);
  };
  videoHandelar();
};

dataHandle();
