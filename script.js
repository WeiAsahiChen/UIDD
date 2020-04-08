const person_detail = [
  {
    name: "陳位旭",
    degree: "工資109",
    position: "街頭賣藥",
    motto: "凡事求個緣, <br> idea不用選",
    skill_img: "./public/profile_01.png",
  },
  {
    name: "陳庭毅",
    degree: "航太109",
    position: "打雜工程師",
    motto: "0°C=32°F, <br> 0°C+0°C=64°F",
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
    motto: "把興趣放在 <br> 比夢想更高的位置",
    skill_img: "./public/profile_04.png",
  },
  {
    name: "王崇名",
    degree: "電機110",
    position: "工程師",
    motto: "擔心未來就跟以為 <br> 嚼口香糖就能解代數一樣",
    skill_img: "./public/profile_05.png",
  },
  {
    name: "郭芮佑",
    degree: "工設碩",
    position: "設計師",
    motto: "該做的就是要馬上做 <br> 免得忘記",
    skill_img: "./public/profile_06.png",
  },
];

function modalContent(recordId) {
  const person = person_detail[recordId];
  return `
  <div class="content-el modal modal-show">
    <div class="close"></div>
    <div record-id="${recordId}" class="row profile justify-center">
      <div class="left column content-el justify-center">
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
    </div>
  </div>
      `;
}

function showModal(recordId) {
  /*$(".profile").empty().append(modalContent(index));*/
  const imgClick = $(`img[record-id='${recordId}'`);
  imgClick.addClass("img-click-hid");
  $("#content").append(modalContent(recordId));
}

function hidPerson(recordId) {
  var recordIdList = ["0", "1", "2", "3", "4", "5"];
  for (recordIdNum of recordIdList) {
    const profile = $(`img[record-id='${recordIdNum}'`);
    if (recordIdNum == "0" || recordIdNum == "2" || recordIdNum == "4") {
      console.log(recordIdNum);
      profile.removeClass("item1");
      profile.addClass("item1-click");
    }
    if (recordIdNum == "1" || recordIdNum == "3" || recordIdNum == "5") {
      profile.removeClass("item2");
      profile.addClass("item2-click");
    }
    if (recordId != recordIdNum) {
      profile.addClass("img-hid");
    }
  }
}

function hidModal(recordId) {
  $(`img[record-id='${recordId}'`).removeClass("img-click-hid");
  console.log("ok");
  $(".modal-show").remove();
}

function showPerson(recordId) {
  var recordIdList = ["0", "1", "2", "3", "4", "5"];
  for (recordIdNum of recordIdList) {
    const profile = $(`img[record-id='${recordIdNum}'`);
    if (recordIdNum == "0" || recordIdNum == "2" || recordIdNum == "4") {
      console.log(recordIdNum);
      profile.addClass("item1");
      profile.removeClass("item1-click");
    }
    if (recordIdNum == "1" || recordIdNum == "3" || recordIdNum == "5") {
      profile.addClass("item2");
      profile.removeClass("item2-click");
    }
    if (recordId != recordIdNum) {
      profile.removeClass("img-hid");
    }
  }
}

$(document).ready(() => {
  $(".item1").addClass("initial_item1");
  $(".item2").addClass("initial_item2");
});

$("body").delegate("img", "click", function (e) {
  const recordId = $(this).attr("record-id");
  hidPerson(recordId);
  showModal(recordId);
});

$("body").delegate(".close", "click", function (e) {
  const recordId = $(".img-click-hid").attr("record-id");
  hidModal(recordId);
  showPerson(recordId);
});
