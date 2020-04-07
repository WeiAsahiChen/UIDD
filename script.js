const person_detail = [
  {
    name: '陳位旭',
    degree: '工資109',
    position: '街頭賣藥',
    motto1: '＂凡事求個圓',
    motto2: 'idea不用選＂',
    skill_img: 'https://i.imgur.com/8G4ofdP.png'
  },
  {
    name: '陳庭毅',
    degree: '航太109',
    position: '打雜工程師',
    motto1: '＂0°C=32°F',
    motto2: '0°C+0°C=64°F＂',
    skill_img: 'https://i.imgur.com/VrmBuN6.png'
  },
  {
    name: '蔡函璇',
    degree: '工資109',
    position: '工程師',
    motto1: '＂魔鬼藏在',
    motto2: '細節裡＂',
    skill_img: 'https://i.imgur.com/07LRzBd.png'
  },
  {
    name: '劉心鈺',
    degree: '工資系109',
    position:'大腿抱好抱滿的工程師',
    motto1: '＂把興趣放在',
    motto2: '比夢想更高的位置＂',
    skill_img: 'https://i.imgur.com/bKNx0r2.png',
  },
  {
    name: '王崇名',
    degree: '電機110',
    position: '工程師',
    motto1: '＂擔心未來就跟以為嚼',
    motto2: '口香糖就能解代數一樣＂',
    skill_img: 'https://i.imgur.com/Fksk3Su.png',
  },
  {
    name: '郭芮佑',
    degree: '工設碩',
    position: '設計師',
    motto1: '＂該做的就是要馬上做',
    motto2: '免得忘記＂',
    skill_img: 'https://i.imgur.com/GZhm2Te.png',
  }
]

function showModal(recordId) {
  const imgClick = $(`img[record-id='${recordId}'`)
  const htmlElement = `
  <div class="modal modal-show">
    <div class="close"></div>
    <div record-id="${recordId}" class="row profile justify-center">
      <!-- 雷達圖 -->
      <div class="left column justify-center">
        <img class="profile-img" src="${person_detail[recordId]['skill_img']}">
      </div>
  
      <!-- 個人簡介 -->
      <div class="right profile-info content-el column justify-center">
        <div>
          <h1 id="name">${person_detail[recordId]['name']}</h1>
          <p id="degree">${person_detail[recordId]['degree']}</p>
          <p id="position">${person_detail[recordId]['position']}</p>
          <h2 id="motto">${person_detail[recordId]['motto1']}</h2>
          <h3 id="motto">${person_detail[recordId]['motto2']}</h2>
        </div>
      </div>
    </div>
  </div>`
  imgClick.addClass('img-click-hid')
  $('#content').append(htmlElement)
}

function hidProfile(recordId) {
  var recordIdList = ['0', '1', '2', '3', '4', '5'];
  for (recordIdNum of recordIdList) {
    if (recordId != recordIdNum) {
      const profile = $(`img[record-id='${recordIdNum}'`)
      profile.addClass('img-hid');
    }
  }
}

$('body').delegate('img', 'click', function (e) {
  const recordId = $(this).attr('record-id');
  hidProfile(recordId)
  showModal(recordId)
});