const db = firebase.firestore()
const collection = db.collection('lesson')
async function initializeLessons() {
  await collection.get().then(res => res.forEach(doc => collection.doc(doc.id).delete()))
  const lessonss = [
    {
      id: 1,
      date: 1612648800000,
      subjects: [
        { title: 'א\"ש', desc: 'ממעלה ראשונה' },
        { title: 'חיתוך ואיחוד', desc: 'פתרונות' },
        { title: 'א\"ש', desc: 'ממעלה שניה' },
        { title: 'א\"ש הזויים', desc: '(כל שאר הא\"ש)' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EUlxPLbDsBtHonq9WERClPYBn9hWhQanurHZpGU7Fq6ywQ?e=VncGMB',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EU_dlmwtdLdImm8BM6hw_fYBuDlv49QR_LEIAMI3BejM_g?e=vrXeLS',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/Eb0ZMQMO9PBKmPho0ygsz-cBMOMHYKVp20VpnU5rSkWTXA?e=zwN0v9',
        barcode: ''
      },
    },
    {
      id: 2,
      date: 1612908000000,
      subjects: [
        { title: 'א\"ש הזויים', desc: 'המשך תרגול' },
        { title: 'נגזרות', desc: 'חמישה חוקי גזירה' },
        { title: 'אנליטית', desc: '1)הקו הישר, 2)דיסטנס, 3)אמצע קטע, 4)מצבים הדדיים, 5)ניצבות, 6)תיאור נקודה כללית על ישר, 7)קשר בין שיפוע וזווית' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EUAsuqDnlDlDvjkh_MaG_wsB5dAzmMMwouzbhaPJoUuw7A?e=TdqOWi',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EQqmaxoxBx5DlQksWpkJ4JIBWr0ZDdcRlSubCg6bCYI_bg?e=MqcFsD',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EZ54Klf1hlFPlKAqoq3oymEBymjXHiLExGB0hZU1ta2Hig?e=g3nVma',
        barcode: ''
      },
    },
    {
      id: 3,
      date: 1613253600000,
      subjects: [
        { title: 'סדרות חשבוניות', desc: '1)איבר כללי 2)הוכחת סדרה חשבונית' },
        { title: 'חדוא רציו ואי רציו', desc: '1)משמעות נגזרת 2)משיק 3)פונ\' א\"ז וזוגית 4)קיצון פנימי' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EZXQmDBJg7pNtmMsM_AnFwEBuNsu-toDarfqyygiFpcAvg?e=Nrj8Uk',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/ETmmsu9D9jtGogbwbieT23kBWC-JU_QhJEu4RcTydFWsRg?e=oLrBOO',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EUCXIIh-Av5Os5OunB50JXkBZDSGJFMV-zvMjZvOgiYOVA?e=ngOEX1',
        barcode: ''
      },
    },
    {
      id: 4,
      date: 1613512800000,
      subjects: [
        { title: 'הסתברות-מבוא', desc: '1)מרחב מדגם 2)מאורעות 3)הגדרת הסתברות 4)חיתוך ואיחוד 5)דיאגרמת ון 6)מאורעות זרים 7)מאורעות מוכלים' },
        { title: 'טריגו\' במישור', desc: '1)ס.מ.י. ק.ל.י. ט.מ.ל. פיתגורס 2)שטח באמצעות שתי צלעות וזווית כלואה 3)שטח באמצעות צלע ושלוש זוויות' },
        { title: 'גאומטריה', desc: 'תאלס, תאלס מורחב, תאלס הפוך' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EZRJ_a2SZcZCh5Enmplng9EBjkLhNDqgtwdKxSx1-ToVGg?e=oJ97PY',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/ERLfHbgWpchCmZJL523mDzEBXz_v3k9j4ccansko5w_0dw?e=VSJVkS',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EZJIRZDauBFFknmF3ffa3UwB1g0USv34yorRvTeXpxuFVg?e=vgDerj',
        barcode: ''
      },
    },
    {
      id: 5,
      date: 1613858400000,
      subjects: [
        { title: 'סדרות חשבוניות', desc: '1)סכום סדרה חשבונית 2)פיתוח נוסחת סכום 3)מציאת מיקום איבר בסדרה זוגית וא\"ז 4)סכימת איברים אחרונים' },
        { title: 'חדוא רציו ואי רציו', desc: 'חוק תחום הגדרה + 1)קיצון קצה 2)מינ\' ומקס\' מוחלט 3)סיווג ע\"י נגזרת שניה (מלאה ומקוצרת) 4)אסימ\' אנכית וחורים' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EXTQGNsjApNBiidmjK_VUuMBZRNMONzN92ZLYGLMwe2bJA?e=A5YRiV',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EfuDh8Al1LRAivav4XUHMZ4BCy5cnC2nATYck_y0L8EQvg?e=z2IINy',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/Ee7poBlZ6itHkNl_fN-O7LsBPfnZxujcpOdAemKDgsNZvw?e=kGnlmz',
        barcode: ''
      },
    },
    {
      id: 6,
      date: 1614117600000,
      subjects: [
        { title: 'חדוא רציו ואי רציו', desc: '1)טסימ אנכיות בפונ\' רציו ואי רציו 2)אסימ אופקית בפונ\' רציו ואי רציו' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EcseU6oF5dNOgFzdbnsbDR8BBUszurOM5RNxIy6T38Mz9Q?e=kX2Bm7',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/Efy-9F6z2ZlDllP_YhTN27wBO6JAKV3V0v2yNgGA0RUyYw?e=uDWLLK',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EfZ9bS3fjblNrZkOyw1CLFQB_Q9Qf3PSYrADyUmvy93fwQ?e=fxSwy9',
        barcode: ''
      },
    },
    {
      id: 7,
      date: 1614722400000,
      subjects: [
        { title: 'הסתברות', desc: 'טבלה דו מימדית' },
        { title: 'סדרות', desc: '1)חשבוניות: סכימת זוגיים וא\"ז 2)הנדסיות: איבר כללי 3)הוכחת סדרה הנדסית' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/ERpv1TLxhgZNphfFDNntgmgBJGLUyVmofLwubp6ZMp78og?e=qZXDlX',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EX3SyZTQGkdDvPgzyqYlGAcBvCWtkMRFsgjEiYB9vS5yig?e=ueBL9I',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EQZdX2LFUEhJgxDpjhKQGVYBgD1fuERgo_B1vtMzHKaZvw?e=OudDeQ',
        barcode: ''
      },
    },
    {
      id: 8,
      date: 1615068000000,
      subjects: [
        { title: 'חדוא רציו ואי רציו', desc: '1)פיתולים 2)קעירויות 3)טבלה של קשר גרפי בין פונ לנגזרותיה 4)חקירה מלאה של פונ רציו ללא פרמטרים 5)חקירה מלאה של פונ אי רציו ללא פרמטרים 6)חקירה מלאה של פונ אי רציו מבגרות הכוללת פרמטרים' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EeLlBfiZQsFPmJh83yzqOdQB7_mFSrsQEvVHG0Pgz5ELxQ?e=Alu3Pv',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/ES2RVxay4ApEqvolTlV8xuUBUh2yk0YR7K876uj_emPeVA?e=YU3MxU',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EezBjyK_ADBKhg6lWPiQbj8B1ml69Zq3xVf53gV9dLuASQ?e=2QGPRk',
        barcode: ''
      },
    },
    {
      id: 9,
      date: 1615327200000,
      subjects: [
        { title: 'חדוא טריגו', desc: '1)זהויות יסודיות 2)תרגול 4 זהויות ראשונות 3)תבניות פתרון 4)טבלת זוויות שמורות 5)גרפים אלמנטריים ומסקנות העולות מהם 6)השישיה 7)משוואות טריגו עד משוואות המצריכות שיקופים -לא כולל-' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/ESKOQctuSZRKqS4v-eb-DakBnqd1Zq0uoNpKUkQtQbbLHg?e=Cu4lfP',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/Edkg3069BWJBkU7jwKGs9wwBbK2R-q_Pbj2ruq9r5Xk2Vg?e=YueLXY',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EfL_knBc42pKnDqrFgz5HToBd-NaZJeKndgXZG5rcWmqYQ?e=VD9J0B',
        barcode: ''
      },
    },
    {
      id: 10,
      date: 1615672800000,
      subjects: [
        { title: 'חדוא מעריכית ולוגריתמית', desc: '1)משוואות מעריכיות 2)גרפים אלמנטריים 3)תבניות פתרון ע\"פ חוקי חזקות (חידוד חוקים)' },
        { title: 'חדוא טריגו-מעגל היחידה', desc: '1)שיקופים 2)השישיה-פתרון בהבנת מעגל היחידה' },
        { title: 'גיאומטריה', desc: 'דמיון משולשים (משפטי דמיון ותאלס)' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EVwTtlR3IgdKrXgjyNLY0kwBQsh0886OwCeJDQqLglbtdA?e=XUuUos',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EV7IlxqX-HtDkTXUTkzg8ScBWlKIwfDl9mhJNa82--KUpQ?e=4ewtq9',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EZrQy5Mj13ZAt96N7GHTTlQB1zbFJKRpDTw-u0AzEQ31dQ?e=7rfVhD',
        barcode: ''
      },
    },
    {
      id: 11,
      date: 1615932000000,
      subjects: [
        { title: 'סדרות', desc: '1)סכום סדרה הנדסית 2)סכימת אחרונים 3)סכימת זוגיים וא\"ז 4)שינויים שכיחית בהנדסיות' },
        { title: 'הסתברות', desc: 'הסתברות מותנית בטבלה 2x2 עם נעלמים' },
        { title: 'חדוא טריגו', desc: '1)משוואה מיוחדת בה מחלקים בקוסינוס 2)משוואות שמתרגלות זהויות 4-8' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/Ees3Ubq3KI1OlAKlv_euEzUBeUjJbFh5cOqTUc0jaPaBrg?e=C7KCRG',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EUuhnSSGb4tGsqqs2882_soBIkFFEjjv031_KVXLKAwe0g?e=JBhLX5',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EUsCz0MIJ3dDqw0xo18DezYB6vc742WK1iATO3XsOjr6vA?e=cAVy9g',
        barcode: ''
      },
    },
    {
      id: 12,
      date: 1616277600000,
      subjects: [
        { title: 'וקטורים', desc: 'הגדרה ופעולות 1)הזזת וקטור במרחב 2)שוויון בין וקטורים 3)כפל של וקטור בסקלר 4)חיבור בשיטת ראש-זנב 5)הפרש של וקטורים 6)זוויות בין וקטורים 7)תלות לינארית בין 2 וקטורים (3 הגדרות תלויות)' },
        { title: 'חדוא רציו ואי רציו - טרנספורמציות', desc: '1)טרנספורמציות עם שיעורי ה y ביחס לציר x (6 סה\"כ) 2)טרנספורמציות עם שיעור ה x ביחס לציר y (2 סה\"כ)' },
        { title: 'גיאומטריה', desc: 'משפט חוצה זווית וההפוך לו' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EQ6OaAClC5RIniCxlAWjmtUBL6Crl-nJsoAzMBC6WHkQUQ?e=1s0l0n',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EbkxAFK9yDxMvAYQvaoIDykBYF8SZ2NPGO8hjMh6CjdC1A?e=k2T6MS',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EYwZW5VTVm1KpKcIfJleZ04B_G7a6KEcdnBtkq53flaXpA?e=xroyL1',
        barcode: ''
      },
    },
    {
      id: 13,
      date: 1616536800000,
      subjects: [
        { title: 'אנליטית', desc: '1)חלוקת קטע ביחס נתון 2)מצב הדדי בין שני ישרים במישור - בתצוגה מפורשת ובתצוגה כללית 3)מרחק בין ישרים מקבילים 4)מרחק בין נקודה לישר' },
        { title: 'חדוא טריגו', desc: '1)חוקי גזירה 2)הגדרת הרדיאן 3)חקירת פונ\' טריגונומטרית' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EX4XAYEWW0JNrtJtOEwSKL4B9IMdLLLkHanfRZOcOFTGyg?e=hfqRbQ',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EXAij3jPo4VFst9FFurQyBoBjV4YRldWRC7hUTlovEozFg?e=PB6Qw5',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EbrzxMG_Fy5MgNbtw5IPHdIBjlssHbxSjpViE8oTzF63pQ?e=1821Kq',
        barcode: ''
      },
    },
    {
      id: 14,
      date: 1617483600000,
      subjects: [
        { title: 'וקטורים', desc: 'מכפלה סקלרית' },
        { title: 'טריגו במישור', desc: '1)סינוסים כולל רשימת הערות 2)קוסינוסים 3)שטח משולש ב-2 צורות 4)שטח מרובע' },
        { title: 'גיאומטריה', desc: 'פרופו\' במעגל (שלושה משפטים אחרונים ברשימות)' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EQdHe1NlOidFjQX1q_IeiZ0BDVbrbSaLiAVC5FUZ5ObPtA?e=M8i9fP',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EcLvfkSCEEFBkWedCEpaFZQBxATfmKc-KDW75bHQfjoVBA?e=yB94PF',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EVcEOG7QactIn8G9PN4f4BIBGrdRbKjdXS7tTsfYEXZ9eg?e=c0pQ8x',
        barcode: ''
      },
    },
    {
      id: 15,
      date: 1617742800000,
      subjects: [
        { title: 'הסתברות', desc: '1)טבלאות 2x3 2)עצי הסתברות' },
        { title: 'אנליטית', desc: '1)הבדל בין תצוגה מפורשת לכללית של ישר 2)תרגול מתקדם של מרחק נקודה מישר' },
        { title: 'סדרות', desc: 'סדרה הנדסית אינסופית מתכנסת' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/ESlgt3bkEWpBhxWXpgG8XgcB3htbQBZlBPZjgXAnTKkiFw?e=7sapNm',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EWf1K_VMTQ1BiUnxU8j65JkBq4mCnBoBpjwy69XUe7_qyg?e=4e7hhg',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EdfTAZb9VbNEkO1cdfO108kBMf5Li8XrgpY0qR6_q_SomA?e=4cej6Z',
        barcode: ''
      },
    },
    {
      id: 16,
      date: 1618088400000,
      subjects: [
        { title: 'חדוא רציו ואי רציו-אינטגרלים', desc: 'אינטגרל על פולינום 2)אינטגרל על ביטוי לינארי בסוגרים עם חזקה 3)אינטגרלים מורכבים 4)יישומי האינטגרל - מציאת פונ\' קדומה, חישוב שטח פשוט, מפוצל, נדמה כמפוצל ושטח מורכב' },
        { title: 'בעיות מילוליות - בעיות תנועה', desc: 'מבוא מקיף והגדרת יחידות דרך זמן ומהירות + דוגמא' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EUsZaohx8oNDk6NFzWdz3hIBf29bq1mdlpuuPXBqxRvbzQ?e=zWv49Z',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/Eeq3f8OqlWxFvVCbJgr4tw4BQzjawzxrSAHhnnPR_Ky9NQ?e=jGOQQe',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EflP75KG3sFOrbChLF6eawkBmTN_dG2Wl03hb8Vx2cNQVQ?e=2JbzfM',
        barcode: ''
      },
    },
    {
      id: 17,
      date: 1618261200000,
      subjects: [
        { title: 'בעיות קיצון', desc: 'גאומטריות ב: משולשים, מרובעים ומעגל עם פרמטרים' },
        { title: 'וקטורים', desc: 'וקטורים אלגבריים: 1)מערכת צירים תלת מימדית 2)וקטור בין שתי נקודות במרחב 3)אוקטנטים 4)מרחק בין 2 נק\' 5)אמצע וחלוקת קטע ביחס נתון 6)שוויון בין וקטורים 7)פעולות בוקטור ופעולות בין וקטור לסקלר' },
        { title: 'גיאומטריה', desc: 'יחסים במשולשים דומים' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EeKQSs4eyC5Pi2cDRgjDwEkBKCf9YnRXMbwMGvsDWBSeUQ?e=CpOnXn',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/Ea1x0l8DwuNErSX1qWDuFrkBpRunanTfHDAxAnElpi7oTg?e=GWFuRI',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EeXWqJWmfUhEhqudUISh3sIBA1Oc2dXV6IrBGC9ZDr5SqQ?e=xT3cRb',
        barcode: ''
      },
    },
    {
      id: 18,
      date: 1618693200000,
      subjects: [
        { title: 'הסתברות', desc: 'ברנולי ללא נעלמים והתניות' },
        { title: 'טריגו במישור', desc: 'תרגילי בגרות' },
        { title: 'סדרות', desc: 'הפקת נוסחת איבר כללי מתוך נוסחת סכום פלוס תרגיל בגרות ליישום' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/EZbLMBCTTUlPkOmLRU4sz3QBONcKp6NEgYW5RDPVvHT-IQ?e=haOdD8',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EYfB4c3L6LBPgs3EqlOXDFgBl_cq1LJUUMRNMCDzTaJnpA?e=uCy0s1',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/ERSTkiE0r-ZLtKFTJaVpudoBxUu6mp5PebaIRb3kj1YYoQ?e=5wIM2R',
        barcode: ''
      },
    },
    {
      id: 19,
      date: 1618952400000,
      subjects: [
        { title: 'בעיות תנועה', desc: 'תרגילי בגרות עם: מהירות יחסית, זרמים וסקיצות מסובכות שמתוכן בונים משוואות' },
        { title: 'בעיות קיצון', desc: '1)פונקציות וגרפים 2)טריגונומטרים עם אופי גיאומטרי 3)טריגונומטרי בגרפים' },
        { title: 'חדוא טריגו', desc: 'קיצון קצה ששיפועו אפס + תרגיל בגרות' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/Ebg-yrl5qw9Dk3oiVII6fn4BS9v-sfgHNskf6_9MbPSWyQ?e=QcVJqB',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EWoKD92kAplOouUWIBSeZbgBhfk1XFyynlHEPyE-SE6vxQ?e=NNAiYo',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/ESAjJva2NTdPjevxBmITJwQBNWKfs2cdKmzw625RsdSasA?e=b2Wofp',
        barcode: ''
      },
    },
    {
      id: '20',
      date: 1619298000000,
      subjects: [
        { title: 'חדוא רציו ואי רציו-אינטגרלים', desc: '1)אינטגרל עיוור 2)אינטגרל על פונ ללא גרף 3)אינטגרל עם פרמטר 4)חקירת ריבועית עם פרמטר במקדם הרכיב הריבועי' },
        { title: 'בעיות קיצון', desc: 'בעיית קיצון עם אינטגרל' },
        { title: 'הסתברות', desc: 'ברנולי עם נעלמים ועם התניה' },
      ],
      link: {
        url: 'https://golomati-my.sharepoint.com/:v:/g/personal/office3647_golomati_onmicrosoft_com/Eb2buwPFqs5JqySMD4qVh3EBFE192ScPXm6JTwYxjIawDw?e=jAbQk3',
        barcode: ''
      },
      file: {
        url: 'https://golomati-my.sharepoint.com/:b:/g/personal/office3647_golomati_onmicrosoft_com/EWDncuB4BK5Fq16vWORbHhwBWcS5KoyZ-L5Lp7fSOuJYiA?e=DDxdMf',
        barcode: ''
      },
      homework: {
        url: 'https://golomati-my.sharepoint.com/:w:/g/personal/office3647_golomati_onmicrosoft_com/EewT4oWEO3JKvWu9he7KtiQB1-r0h1I_upEn0gbCN6d4jw?e=b0Kn2L',
        barcode: ''
      },
    },
  ]
  lessonss.forEach(lesson => {
    collection.add({
      date: lesson.date,
      lessonNum: lesson.id,
      links: {
        homework: lesson.homework.url,
        lesson: lesson.link.url,
        notebook: lesson.file.url
      },
      subjects: lesson.subjects
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id)
      })
      .catch((error) => {
        console.error("Error adding document: ", error)
      })
  })
}

async function getLessons() {
  const lessons = []
  const res = await collection.orderBy('date').get()
  res.forEach(doc => {
    lessons.push({ _id: doc.id, ...doc.data() })
  })
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

async function deleteLesson(id) {
  await collection.doc(id).delete()
    .then(() => {
      console.log("Document successfully deleted!")
    }).catch((error) => {
      console.error("Error removing document: ", error)
    })
}