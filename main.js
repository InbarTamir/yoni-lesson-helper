'use strict'

async function init() {
  await loadLessons()
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
    const subjects = currLesson.subjects.filter(({ title, desc }) => title || desc)
    strHTML += `    
      <div class="row">
        <div class="cell lesson-num" data-title="שיעור מס\'">${currLesson.lessonNum}</div>
        <div class="cell date" data-title="תאריך">${dateStr.substring(0, dateStr.indexOf(',')).replace(/\./g, '/')}</div>
        <div class="cell subject" data-title="נושא">${subjects.map(({ title, desc }) => `<span>${title}</span>- ${desc}<br>`).join('')}</div>
        <div class="cell link" data-title="קישור">${currLesson.links.lesson && `<a class="text-green" href="${currLesson.links.lesson}">וידאו שיעור ${currLesson.lessonNum}</a>`}</div>
        <div class="cell file" data-title="קובץ">${currLesson.links.notebook && `<a class="text-orange" href="${currLesson.links.notebook}">מחברת שיעור ${currLesson.lessonNum}</a>`}</div>
        <div class="cell homework" data-title="ש\"ב">${currLesson.links.homework && `<a class="text-blue" href="${currLesson.links.homework}">שיעורי בית ${currLesson.lessonNum}</a>`}</div>
        <div class="cell appendix" data-title="נספחים"></div>
      </div>`
  }

  document.querySelector('.lessons').innerHTML = strHTML
}

async function onSubmitLesson(ev) {
  ev.preventDefault()
  const elForm = document.querySelector('.add-lesson-modal form')
  const lessonNum = elForm.querySelector('.lesson-num-input').value
  const date = new Date(elForm.querySelector('.date-input').value).getTime()
  const lesson = elForm.querySelector('.lesson-input').value
  const notebook = elForm.querySelector('.notebook-input').value
  const homework = elForm.querySelector('.homework-input').value
  const links = { lesson, notebook, homework }
  const subjects = []

  const elSubjectTitles = elForm.querySelectorAll('.subjects .subject-title-input')
  const elSubjectDescs = elForm.querySelectorAll('.subjects .subject-desc-input')
  for (let i = 0; i < elSubjectTitles.length; i++) {
    const subject = {
      title: elSubjectTitles[i].value,
      desc: elSubjectDescs[i].value
    }
    subjects.push(subject)
  }
  await saveLesson({ lessonNum, date, subjects, links })
  initTable()
  onToggleLessonModal()
}

function onToggleLessonModal() {
  const elModal = document.querySelector('.add-lesson-modal')
  if (!elModal.classList.contains('hide')) elModal.querySelector('form').reset()
  elModal.classList.toggle('hide')
}

function onAddSubjectInput() {
  const elSubjects = document.querySelector('.subjects')
  elSubjects.innerHTML += `
    <label class="flex">
      <input type="text" class="subject-title-input" />
      תיאור:
      <textarea class="subject-desc-input" cols="40" rows="1"></textarea>
    </label>`
}