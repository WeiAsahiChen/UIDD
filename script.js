const person_detail = [
  {
    name: "陳位旭",
    degree: "工資109",
    position: "街頭賣藥",
    motto: "凡事求個緣, idea不用選",
    skill_img: "./public/profile_01.png",
  },
  {
    name: "陳庭毅",
    degree: "航太109",
    position: "打雜工程師",
    motto: "0°C=32°F, 0°C+0°C=64°F",
    skill_img: "./public/profile_02.png",
  },
  {
    name: "蔡函璇",
    degree: "工資109",
    position: "工程師",
    motto: "魔鬼藏在細節裡",
    skill_img: "./public/profile_03.png",
  },
  {
    name: "劉心鈺",
    degree: "工資系109",
    position: "大腿抱好抱滿的工程師",
    motto: "把興趣放在比夢想更高得位置",
    skill_img: "./public/profile_04.png",
  },
  {
    name: "王崇名",
    degree: "電機110",
    position: "工程師",
    motto: "擔心未來就跟以為嚼口香糖就能解代數一樣",
    skill_img: "./public/profile_05.png",
  },
  {
    name: "郭芮佑",
    degree: "工設碩",
    position: "設計師",
    motto: "該做的就是要馬上做免得忘記",
    skill_img: "./public/profile_06.png",
  },
];

$(".profile").ready(() => {
  $(".profile").empty().append(modalContent(0));
});

function modalContent(index) {
  const person = person_detail[index];
  return `
      <div class="left column justify-center">
        <img class="profile-img" src="${person.skill_img}">
      </div>

      <div class="right profile-info content-el column justify-center">
        <div>
          <h1 id="name">${person.name}</h1>
          <p id="degree">${person.degree}</p>
          <p id="position">${person.position}</p>
          <h2 id="motto">"${person.motto}"</h2>
        </div>
      </div>
      `;
}

function showModal(index) {
  $(".profile").empty().append(modalContent(index));
}
