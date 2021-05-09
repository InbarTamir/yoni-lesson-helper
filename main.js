'use strict'

function init() {
  initTable()
}

function initTable() {
  let strHTML = `
    <div class="row header blue">
        <div class="cell lesson-num">שיעור מס'</div>
        <div class="cell date">תאריך</div>
        <div class="cell">נושאי השיעור</div>
        <div class="cell link">קישור</div>
        <div class="cell file">קובץ</div>
        <div class="cell homework">ש"ב</div>
        <div class="cell appendix">נספחים</div>
    </div>`
  for (let i = 0; i < lessons.length; i++) {
    const currLesson = lessons[i]
    const dateStr = new Date(currLesson.date).toLocaleString('he')
    strHTML += `    
      <div class="row">
        <div class="cell lesson-num" data-title="lessonNum">${currLesson.id}</div>
        <div class="cell date">${dateStr.substring(0, dateStr.indexOf(',')).replace(/\./g, '/')}</div>
        <div class="cell subject">${currLesson.subjects.map(({ title, desc }) => `<span>${title}</span>- ${desc}<br>`).join('')}</div>
        <div class="cell link"><a class="text-green" href="${currLesson.link.url}">וידאו שיעור ${currLesson.id}</a></div>
        <div class="cell file"><a class="text-orange" href="${currLesson.file.url}">מחברת שיעור ${currLesson.id}</a></div>
        <div class="cell homework"><a class="text-blue" href="${currLesson.homework.url}">שיעור בית ${currLesson.id}</a></div>
        <div class="cell appendix"></div>
      </div>`
  }

  document.querySelector('.lessons').innerHTML = strHTML
}