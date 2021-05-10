'use strict'

let lessons
async function loadLessons() {
  lessons = await getLessons()
}

async function saveLesson(lesson) {
  await addLesson(lesson)
  await loadLessons()
}

async function removeLesson(id) {
  deleteLesson(id)
  const lessonIdx = lessons.findIndex(lesson => lesson._id === id)
  lessons.splice(lessonIdx, 1)
}