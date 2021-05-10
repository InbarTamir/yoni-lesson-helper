
const db = firebase.firestore()
const collection = db.collection('lesson')
// initializeLessons()
// function initializeLessons() {
//   lessons.forEach(lesson => {
//     collection.add({
//       date: lesson.date,
//       lessonNum: lesson.id,
//       links: {
//         homework: lesson.homework.url,
//         lesson: lesson.link.url,
//         notebook: lesson.file.url
//       },
//       subjects: lesson.subjects
//     })
//       .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id)
//       })
//       .catch((error) => {
//         console.error("Error adding document: ", error)
//       })
//   })
// }

async function getLessons() {
  const lessons = []
  const res = await collection.orderBy('date').get()
  res.forEach(doc => lessons.push(doc.data()))
  console.log(lessons)
  return lessons
}

async function addLesson(lesson) {
  await collection.add(lesson)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error)
    })
}