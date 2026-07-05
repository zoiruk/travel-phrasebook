(function (root) {
  var GRAMMAR = [
    {
      id: 1,
      title_ru: "Урок 1: Базовая матрица глагола",
      subtitle: "Схема 3×3 (WILL / DO-DOES / DID) · Местоимения",
      intro_ru: "После этого урока вы сможете сказать <b>любое действие</b> в любом времени. Серьёзно — всего <b>9 ячеек</b>, и вы владеете основой английского глагола. Мы разберём формулу на примере глагола <b>work</b> (работать), а потом вы легко подставите любой другой глагол.",
      pronouns: [
        { en: "I", ru: "я" }, { en: "we", ru: "мы" },
        { en: "you", ru: "ты, вы" }, { en: "they", ru: "они" },
        { en: "he", ru: "он" }, { en: "she", ru: "она" },
        { en: "it", ru: "оно, это" }
      ],
      markers: {
        past: ["yesterday", "last week", "last year", "ago"],
        present: ["every day", "usually", "always", "often"],
        future: ["tomorrow", "next week", "soon", "later"]
      },
      vocab: [
        { en: "work", ru: "работать" }, { en: "live", ru: "жить" },
        { en: "like", ru: "нравиться" }, { en: "want", ru: "хотеть" },
        { en: "travel", ru: "путешествовать" }, { en: "close", ru: "закрывать" },
        { en: "open", ru: "открывать" }, { en: "help", ru: "помогать" },
        { en: "need", ru: "нуждаться" }, { en: "know", ru: "знать" }
      ],
      matrix: {
        headers: ["Прошедшее (DID)", "Настоящее (DO/DOES)", "Будущее (WILL)"],
        rows: [
          {
            type: "❓ Вопрос",
            past: "Did I work?\nDid you work?\nDid he work?",
            present: "Do I work?\nDo you work?\nDoes he work?",
            future: "Will I work?\nWill you work?\nWill he work?"
          },
          {
            type: "✅ Утверждение",
            past: "I worked\nYou worked\nHe worked",
            present: "I work\nYou work\nHe works",
            future: "I will work\nYou will work\nHe will work"
          },
          {
            type: "❌ Отрицание",
            past: "I did not work\nYou did not work\nHe did not work",
            present: "I do not work\nYou do not work\nHe does not work",
            future: "I will not work\nYou will not work\nHe will not work"
          }
        ]
      },
      dialogs: [
        {
          title: "Разговор о работе 💼",
          lines: [
            { speaker: "A", en: "Do you work here?", ru: "Вы здесь работаете?" },
            { speaker: "B", en: "Yes, I work here every day.", ru: "Да, я работаю здесь каждый день." },
            { speaker: "A", en: "Did you work yesterday?", ru: "Вы работали вчера?" },
            { speaker: "B", en: "No, I did not work yesterday. I will work tomorrow.", ru: "Нет, вчера я не работал. Я буду работать завтра." }
          ]
        }
      ],
      examples: [
        { en: "I will work tomorrow.", transcr: "Ай уил уёк тэмороу", ru: "Я буду работать завтра." },
        { en: "Do you live here?", transcr: "Ду ю лив хиэ", ru: "Ты живёшь здесь?" },
        { en: "She worked yesterday.", transcr: "Ши уёкт йестэдэй", ru: "Она работала вчера." },
        { en: "He does not like coffee.", transcr: "Хи даз нот лайк кофи", ru: "Он не любит кофе." },
        { en: "We will travel to London.", transcr: "Уи уил трэвл ту ландэн", ru: "Мы поедем в Лондон." },
        { en: "Did you close the door?", transcr: "Дид ю клоуз зэ до", ru: "Ты закрыл дверь?" },
        { en: "They do not want to go.", transcr: "Зэй ду нот уонт ту гоу", ru: "Они не хотят идти." },
        { en: "Will they help us?", transcr: "Уил зэй хэлп ас", ru: "Они нам помогут?" },
        { en: "I liked this hotel.", transcr: "Ай лайкт зис хоутэл", ru: "Мне понравился этот отель." },
        { en: "She does not know the way.", transcr: "Ши даз нот ноу зэ уэй", ru: "Она не знает дорогу." },
        { en: "Did he open the window?", transcr: "Дид хи оупэн зэ уиндоу", ru: "Он открыл окно?" },
        { en: "We usually travel in summer.", transcr: "Уи южуэли трэвл ин самэ", ru: "Мы обычно путешествуем летом." }
      ],
      drills: [
        {
          ru: "Я буду работать завтра.",
          build: ["I", "will", "work", "tomorrow."],
          options: ["I", "will", "work", "tomorrow.", "worked", "do", "does"],
          hint: "Будущее время: подлежащее + WILL + глагол"
        },
        {
          ru: "Ты живёшь здесь?",
          build: ["Do", "you", "live", "here?"],
          options: ["Do", "you", "live", "here?", "Did", "Does", "living"],
          hint: "Вопрос в настоящем: DO/DOES + подлежащее + глагол?"
        },
        {
          ru: "Она не работала вчера.",
          build: ["She", "did", "not", "work", "yesterday."],
          options: ["She", "did", "not", "work", "yesterday.", "do", "will", "worked"],
          hint: "Отрицание в прошедшем: подлежащее + DID NOT + глагол (без -ed!)"
        },
        {
          ru: "Он нам поможет?",
          build: ["Will", "he", "help", "us?"],
          options: ["Will", "he", "help", "us?", "Do", "Did", "helps"],
          hint: "Вопрос в будущем: WILL + подлежащее + глагол?"
        },
        {
          ru: "Они не хотят идти.",
          build: ["They", "do", "not", "want", "to", "go."],
          options: ["They", "do", "not", "want", "to", "go.", "did", "will", "does"],
          hint: "Отрицание в настоящем: подлежащее + DO NOT + глагол"
        },
        {
          ru: "Она знала дорогу.",
          build: ["She", "knew", "the", "way."],
          options: ["She", "knew", "the", "way.", "know", "knows", "did"],
          hint: "Утверждение в прошедшем: подлежащее + глагол в прошедшей форме (knew — неправильный глагол)"
        }
      ],
      transforms: [
        {
          source: "I work every day.",
          task: "Сделайте вопрос ❓",
          answer: "Do I work every day?",
          options: ["Do I work every day?", "Did I work every day?", "Will I work every day?", "I do work every day."],
          hint: "Для вопроса в настоящем времени ставим DO/DOES перед подлежащим."
        },
        {
          source: "She worked yesterday.",
          task: "Сделайте отрицание ❌",
          answer: "She did not work yesterday.",
          options: ["She did not work yesterday.", "She does not work yesterday.", "She not worked yesterday.", "She will not work yesterday."],
          hint: "Отрицание в прошедшем: DID NOT + глагол без -ed (work, не worked)."
        },
        {
          source: "Will they travel?",
          task: "Сделайте утверждение ✅",
          answer: "They will travel.",
          options: ["They will travel.", "They travelled.", "They do travel.", "They did travel."],
          hint: "Утверждение в будущем: подлежащее + WILL + глагол."
        }
      ]
    },
    {
      id: 2,
      title_ru: "Урок 2: Глагол TO BE",
      subtitle: "Быть / Находиться (am/is/are · was/were · will be)",
      intro_ru: "В русском «Я в отеле» — глагол «быть» подразумевается. В английском <b>to be</b> обязателен: «I <b>am</b> in the hotel». Это самый частый глагол — он работает <b>без помощников</b> (DO/DID/WILL не нужны для вопросов и отрицаний, кроме будущего).",
      pronouns: [
        { en: "I → am", ru: "я есть" }, { en: "we → are", ru: "мы есть" },
        { en: "you → are", ru: "ты, вы есть" }, { en: "they → are", ru: "они есть" },
        { en: "he → is", ru: "он есть" }, { en: "she → is", ru: "она есть" },
        { en: "it → is", ru: "оно есть" }
      ],
      markers: {
        past: ["yesterday", "last night", "in 2020", "when I was young"],
        present: ["now", "today", "at the moment", "right now"],
        future: ["tomorrow", "next year", "soon", "in the future"]
      },
      vocab: [
        { en: "hotel", ru: "отель" }, { en: "tourist", ru: "турист" },
        { en: "free", ru: "свободный" }, { en: "ready", ru: "готовый" },
        { en: "happy", ru: "счастливый" }, { en: "tired", ru: "усталый" },
        { en: "hungry", ru: "голодный" }, { en: "late", ru: "поздний / опоздавший" },
        { en: "open", ru: "открытый" }, { en: "closed", ru: "закрытый" }
      ],
      matrix: {
        headers: ["Прошедшее (WAS/WERE)", "Настоящее (AM/IS/ARE)", "Будущее (WILL BE)"],
        rows: [
          {
            type: "❓ Вопрос",
            past: "Was I?\nWere you?\nWas he?",
            present: "Am I?\nAre you?\nIs he?",
            future: "Will I be?\nWill you be?\nWill he be?"
          },
          {
            type: "✅ Утверждение",
            past: "I was\nYou were\nHe was",
            present: "I am\nYou are\nHe is",
            future: "I will be\nYou will be\nHe will be"
          },
          {
            type: "❌ Отрицание",
            past: "I was not\nYou were not\nHe was not",
            present: "I am not\nYou are not\nHe is not",
            future: "I will not be\nYou will not be\nHe will not be"
          }
        ]
      },
      dialogs: [
        {
          title: "В отеле 🛎️",
          lines: [
            { speaker: "A", en: "Are you ready?", ru: "Вы готовы?" },
            { speaker: "B", en: "Yes, I am in the hotel lobby now.", ru: "Да, я сейчас в лобби отеля." },
            { speaker: "A", en: "Were you in your room?", ru: "Вы были в своем номере?" },
            { speaker: "B", en: "No, I was not in the room. I was at the cafe.", ru: "Нет, меня не было в номере. Я был в кафе." }
          ]
        }
      ],
      examples: [
        { en: "I am in the hotel.", transcr: "Ай эм ин зэ хоутэл", ru: "Я в отеле." },
        { en: "We were in London last week.", transcr: "Уи уё ин ландэн ласт уик", ru: "Мы были в Лондоне на прошлой неделе." },
        { en: "Will you be free tomorrow?", transcr: "Уил ю би фри тэмороу", ru: "Ты будешь свободен завтра?" },
        { en: "He is a tourist.", transcr: "Хи из э туорист", ru: "Он турист." },
        { en: "They are not at home.", transcr: "Зэй ар нот эт хоум", ru: "Они не дома." },
        { en: "She was tired after the flight.", transcr: "Ши уоз тайэд афтэ зэ флайт", ru: "Она устала после перелёта." },
        { en: "Are you ready?", transcr: "Ар ю рэди", ru: "Ты готов?" },
        { en: "The museum is open today.", transcr: "Зэ мюзиэм из оупэн тудэй", ru: "Музей сегодня открыт." },
        { en: "Were they happy?", transcr: "Уё зэй хэпи", ru: "Они были счастливы?" },
        { en: "I will not be late.", transcr: "Ай уил нот би лэйт", ru: "Я не опоздаю." },
        { en: "It was cold yesterday.", transcr: "Ит уоз коулд йестэдэй", ru: "Вчера было холодно." },
        { en: "We are hungry.", transcr: "Уи ар хангри", ru: "Мы голодны." }
      ],
      drills: [
        {
          ru: "Я в отеле.",
          build: ["I", "am", "in", "the", "hotel."],
          options: ["I", "am", "in", "the", "hotel.", "is", "was", "be"],
          hint: "I → AM (единственная форма для «я» в настоящем)."
        },
        {
          ru: "Ты будешь свободен завтра?",
          build: ["Will", "you", "be", "free", "tomorrow?"],
          options: ["Will", "you", "be", "free", "tomorrow?", "Are", "is", "do"],
          hint: "Вопрос в будущем: WILL + подлежащее + BE?"
        },
        {
          ru: "Они не дома.",
          build: ["They", "are", "not", "at", "home."],
          options: ["They", "are", "not", "at", "home.", "am", "is", "was"],
          hint: "They → ARE. Отрицание: подлежащее + ARE NOT."
        },
        {
          ru: "Она устала после перелёта.",
          build: ["She", "was", "tired", "after", "the", "flight."],
          options: ["She", "was", "tired", "after", "the", "flight.", "is", "were", "be"],
          hint: "She → WAS (прошедшее время для he/she/it)."
        },
        {
          ru: "Музей сегодня открыт.",
          build: ["The", "museum", "is", "open", "today."],
          options: ["The", "museum", "is", "open", "today.", "are", "am", "was"],
          hint: "The museum (= it) → IS."
        },
        {
          ru: "Я не опоздаю.",
          build: ["I", "will", "not", "be", "late."],
          options: ["I", "will", "not", "be", "late.", "am", "was", "is"],
          hint: "Отрицание в будущем: подлежащее + WILL NOT + BE."
        }
      ],
      transforms: [
        {
          source: "He is a tourist.",
          task: "Сделайте вопрос ❓",
          answer: "Is he a tourist?",
          options: ["Is he a tourist?", "Does he a tourist?", "Was he a tourist?", "He is a tourist?"],
          hint: "Вопрос с TO BE: переставляем IS перед подлежащим (IS he…?), без DO."
        },
        {
          source: "They were happy.",
          task: "Сделайте отрицание ❌",
          answer: "They were not happy.",
          options: ["They were not happy.", "They did not happy.", "They not were happy.", "They was not happy."],
          hint: "Отрицание: подлежащее + WERE + NOT (they → were)."
        },
        {
          source: "Is she ready?",
          task: "Сделайте утверждение ✅",
          answer: "She is ready.",
          options: ["She is ready.", "She ready.", "She does ready.", "She was ready."],
          hint: "Утверждение: переставляем IS после подлежащего."
        }
      ]
    },
    {
      id: 3,
      title_ru: "Урок 3: Притяжательные местоимения",
      subtitle: "Мой / Твой / Его / Её · Рассказ о себе",
      intro_ru: "В этом уроке мы научимся говорить «мой», «твой», «его», «её» по-английски. Это нужно буквально в каждом разговоре: <b>my name</b> (моё имя), <b>your hotel</b> (ваш отель), <b>his passport</b> (его паспорт).",
      pronouns: [
        { en: "I → my", ru: "мой" }, { en: "you → your", ru: "твой, ваш" },
        { en: "he → his", ru: "его" }, { en: "she → her", ru: "её" },
        { en: "it → its", ru: "его (для вещей)" },
        { en: "we → our", ru: "наш" }, { en: "they → their", ru: "их" }
      ],
      vocab: [
        { en: "name", ru: "имя" }, { en: "passport", ru: "паспорт" },
        { en: "ticket", ru: "билет" }, { en: "bag", ru: "сумка" },
        { en: "room", ru: "комната, номер" }, { en: "phone", ru: "телефон" },
        { en: "key", ru: "ключ" }, { en: "friend", ru: "друг" },
        { en: "city", ru: "город" }, { en: "country", ru: "страна" }
      ],
      markers: {
        past: ["was", "had"],
        present: ["is", "have / has"],
        future: ["will be", "will have"]
      },
      examples: [
        { en: "My name is Alex.", transcr: "Май нэйм из Алекс", ru: "Меня зовут Алекс." },
        { en: "Where is your passport?", transcr: "Уэа из ё паспот", ru: "Где ваш паспорт?" },
        { en: "His ticket is on the table.", transcr: "Хиз тикит из он зэ тэйбл", ru: "Его билет на столе." },
        { en: "Her bag is very heavy.", transcr: "Хё бэг из вэри хэви", ru: "Её сумка очень тяжёлая." },
        { en: "Our room is on the second floor.", transcr: "Ауэ рум из он зэ сэконд фло", ru: "Наш номер на втором этаже." },
        { en: "Their city is beautiful.", transcr: "Зэа сити из бьютифул", ru: "Их город красивый." },
        { en: "I lost my key.", transcr: "Ай лост май ки", ru: "Я потерял ключ." },
        { en: "Is this your phone?", transcr: "Из зис ё фоун", ru: "Это ваш телефон?" },
        { en: "She called her friend.", transcr: "Ши колд хё фрэнд", ru: "Она позвонила своей подруге." },
        { en: "We love our country.", transcr: "Уи лав ауэ кантри", ru: "Мы любим нашу страну." },
        { en: "His room was clean.", transcr: "Хиз рум уоз клин", ru: "Его номер был чистым." },
        { en: "Where is their hotel?", transcr: "Уэа из зэа хоутэл", ru: "Где их отель?" }
      ],
      drills: [
        {
          ru: "Меня зовут Алекс.",
          build: ["My", "name", "is", "Alex."],
          options: ["My", "name", "is", "Alex.", "His", "Your", "am"],
          hint: "I → MY. «Меня зовут» = My name is…"
        },
        {
          ru: "Где ваш паспорт?",
          build: ["Where", "is", "your", "passport?"],
          options: ["Where", "is", "your", "passport?", "my", "his", "are"],
          hint: "You → YOUR (ваш)."
        },
        {
          ru: "Её сумка очень тяжёлая.",
          build: ["Her", "bag", "is", "very", "heavy."],
          options: ["Her", "bag", "is", "very", "heavy.", "His", "My", "are"],
          hint: "She → HER (её)."
        },
        {
          ru: "Наш номер на втором этаже.",
          build: ["Our", "room", "is", "on", "the", "second", "floor."],
          options: ["Our", "room", "is", "on", "the", "second", "floor.", "Their", "Your", "my"],
          hint: "We → OUR (наш)."
        },
        {
          ru: "Это ваш телефон?",
          build: ["Is", "this", "your", "phone?"],
          options: ["Is", "this", "your", "phone?", "my", "his", "Are"],
          hint: "Вопрос с TO BE: IS + this + YOUR…?"
        },
        {
          ru: "Я потерял ключ.",
          build: ["I", "lost", "my", "key."],
          options: ["I", "lost", "my", "key.", "his", "your", "lose"],
          hint: "I → MY (мой ключ = my key)."
        }
      ],
      transforms: [
        {
          source: "my passport",
          task: "Чей паспорт, если он принадлежит ЕЙ? 👩",
          answer: "her passport",
          options: ["her passport", "his passport", "our passport", "their passport"],
          hint: "She → HER."
        },
        {
          source: "your room",
          task: "Замените на «наш номер» 👥",
          answer: "our room",
          options: ["our room", "my room", "their room", "his room"],
          hint: "We → OUR."
        },
        {
          source: "I lost his key.",
          task: "Замените HIS на «их» 👫",
          answer: "I lost their key.",
          options: ["I lost their key.", "I lost our key.", "I lost her key.", "I lost your key."],
          hint: "They → THEIR."
        }
      ]
    },
    {
      id: 4,
      title_ru: "Урок 4: Вопросительные слова",
      subtitle: "Кто? Что? Где? Когда? Сколько? Почему?",
      intro_ru: "Чтобы задать вопрос, нужно знать <b>вопросительное слово</b> + формулу из Урока 1 или 2. В туристической поездке вы будете задавать вопросы постоянно: «Где метро?», «Сколько стоит?», «Когда открывается?».",
      vocab: [
        { en: "what", ru: "что, какой" }, { en: "where", ru: "где, куда" },
        { en: "when", ru: "когда" }, { en: "who", ru: "кто" },
        { en: "why", ru: "почему" }, { en: "how", ru: "как" },
        { en: "how much", ru: "сколько (цена)" }, { en: "how many", ru: "сколько (кол-во)" },
        { en: "which", ru: "который" }, { en: "how long", ru: "как долго" }
      ],
      examples: [
        { en: "What is your name?", transcr: "Уот из ё нэйм", ru: "Как вас зовут?" },
        { en: "Where is the metro station?", transcr: "Уэа из зэ мэтроу стэйшн", ru: "Где станция метро?" },
        { en: "When does the museum open?", transcr: "Уэн даз зэ мюзиэм оупэн", ru: "Когда открывается музей?" },
        { en: "Who is this man?", transcr: "Ху из зис мэн", ru: "Кто этот человек?" },
        { en: "Why did you come here?", transcr: "Уай дид ю кам хиэ", ru: "Почему ты сюда приехал?" },
        { en: "How do I get to the airport?", transcr: "Хау ду ай гет ту зи эапот", ru: "Как мне добраться до аэропорта?" },
        { en: "How much does this cost?", transcr: "Хау мач даз зис кост", ru: "Сколько это стоит?" },
        { en: "How many tickets do you need?", transcr: "Хау мэни тикитс ду ю нид", ru: "Сколько билетов вам нужно?" },
        { en: "Which bus goes to the centre?", transcr: "Уич бас гоуз ту зэ сэнтэ", ru: "Какой автобус идёт в центр?" },
        { en: "How long will you stay?", transcr: "Хау лонг уил ю стэй", ru: "Как долго вы останетесь?" },
        { en: "Where did you buy this?", transcr: "Уэа дид ю бай зис", ru: "Где ты это купил?" },
        { en: "What time is it?", transcr: "Уот тайм из ит", ru: "Который час?" }
      ],
      drills: [
        {
          ru: "Где станция метро?",
          build: ["Where", "is", "the", "metro", "station?"],
          options: ["Where", "is", "the", "metro", "station?", "What", "are", "How"],
          hint: "WHERE = Где. С TO BE: Where + IS + …?"
        },
        {
          ru: "Сколько это стоит?",
          build: ["How", "much", "does", "this", "cost?"],
          options: ["How", "much", "does", "this", "cost?", "many", "do", "did"],
          hint: "HOW MUCH = Сколько (цена). + DOES (this = 3-е лицо)."
        },
        {
          ru: "Когда открывается музей?",
          build: ["When", "does", "the", "museum", "open?"],
          options: ["When", "does", "the", "museum", "open?", "do", "is", "Where"],
          hint: "WHEN = Когда. + DOES (museum = 3-е лицо)."
        },
        {
          ru: "Как мне добраться до аэропорта?",
          build: ["How", "do", "I", "get", "to", "the", "airport?"],
          options: ["How", "do", "I", "get", "to", "the", "airport?", "does", "did", "Where"],
          hint: "HOW = Как. + DO (I = 1-е лицо)."
        },
        {
          ru: "Почему ты сюда приехал?",
          build: ["Why", "did", "you", "come", "here?"],
          options: ["Why", "did", "you", "come", "here?", "do", "does", "came"],
          hint: "WHY = Почему. Прошедшее время: DID + глагол без -ed (come, не came)."
        },
        {
          ru: "Как долго вы останетесь?",
          build: ["How", "long", "will", "you", "stay?"],
          options: ["How", "long", "will", "you", "stay?", "do", "much", "did"],
          hint: "HOW LONG = Как долго. Будущее: WILL."
        }
      ],
      transforms: [
        {
          source: "The museum opens at 10.",
          task: "Спросите КОГДА ⏰",
          answer: "When does the museum open?",
          options: ["When does the museum open?", "What does the museum open?", "Where does the museum open?", "When is the museum open?"],
          hint: "WHEN + DOES + подлежащее + глагол?"
        },
        {
          source: "This costs 50 pounds.",
          task: "Спросите СКОЛЬКО 💰",
          answer: "How much does this cost?",
          options: ["How much does this cost?", "How many does this cost?", "What does this cost?", "How much is this cost?"],
          hint: "HOW MUCH (цена) + DOES + подлежащее + глагол?"
        },
        {
          source: "He came here.",
          task: "Спросите ПОЧЕМУ 🤔",
          answer: "Why did he come here?",
          options: ["Why did he come here?", "Why he came here?", "Why does he come here?", "Why he come here?"],
          hint: "WHY + DID + подлежащее + глагол (come, не came)?"
        }
      ]
    },
    {
      id: 5,
      title_ru: "Урок 5: Прилагательные и степени сравнения",
      subtitle: "Описание предметов · -er / -est · more / most",
      intro_ru: "Прилагательные описывают всё вокруг: <b>big</b> (большой), <b>cheap</b> (дешёвый), <b>beautiful</b> (красивый). Чтобы сравнить, добавляем <b>-er</b> (для коротких) или <b>more</b> (для длинных): «cheaper» (дешевле), «more comfortable» (удобнее).",
      vocab: [
        { en: "big — bigger — biggest", ru: "большой" },
        { en: "small — smaller — smallest", ru: "маленький" },
        { en: "cheap — cheaper — cheapest", ru: "дешёвый" },
        { en: "expensive — more expensive", ru: "дорогой" },
        { en: "comfortable — more comfortable", ru: "удобный" },
        { en: "beautiful — more beautiful", ru: "красивый" },
        { en: "good — better — best", ru: "хороший (исключение!)" },
        { en: "bad — worse — worst", ru: "плохой (исключение!)" },
        { en: "hot — hotter — hottest", ru: "горячий, жаркий" },
        { en: "cold — colder — coldest", ru: "холодный" }
      ],
      examples: [
        { en: "This hotel is cheaper.", transcr: "Зис хоутэл из чипэ", ru: "Этот отель дешевле." },
        { en: "London is bigger than Paris.", transcr: "Ландэн из бигэ зэн Пэрис", ru: "Лондон больше Парижа." },
        { en: "This room is more comfortable.", transcr: "Зис рум из мо камфтэбл", ru: "Этот номер удобнее." },
        { en: "The weather is colder today.", transcr: "Зэ уэзэ из коулдэ тудэй", ru: "Погода сегодня холоднее." },
        { en: "This is the best restaurant.", transcr: "Зис из зэ бэст рэстрант", ru: "Это лучший ресторан." },
        { en: "The train is faster than the bus.", transcr: "Зэ трэйн из фастэ зэн зэ бас", ru: "Поезд быстрее автобуса." },
        { en: "She is taller than her sister.", transcr: "Ши из толэ зэн хё систэ", ru: "Она выше своей сестры." },
        { en: "This is the most beautiful city.", transcr: "Зис из зэ моуст бьютифул сити", ru: "Это самый красивый город." },
        { en: "My bag is heavier than yours.", transcr: "Май бэг из хэвиэ зэн ёз", ru: "Моя сумка тяжелее твоей." },
        { en: "This coffee is worse.", transcr: "Зис кофи из уёс", ru: "Этот кофе хуже." },
        { en: "Today is hotter than yesterday.", transcr: "Тудэй из хотэ зэн йестэдэй", ru: "Сегодня жарче, чем вчера." },
        { en: "He is the oldest in our group.", transcr: "Хи из зи оулдэст ин ауэ груп", ru: "Он самый старший в нашей группе." }
      ],
      drills: [
        {
          ru: "Этот отель дешевле.",
          build: ["This", "hotel", "is", "cheaper."],
          options: ["This", "hotel", "is", "cheaper.", "cheap", "cheapest", "more"],
          hint: "Cheap — короткое: cheap + ER = cheaper."
        },
        {
          ru: "Лондон больше Парижа.",
          build: ["London", "is", "bigger", "than", "Paris."],
          options: ["London", "is", "bigger", "than", "Paris.", "big", "more", "biggest"],
          hint: "Big → biggER. Сравнение: … + THAN."
        },
        {
          ru: "Это лучший ресторан.",
          build: ["This", "is", "the", "best", "restaurant."],
          options: ["This", "is", "the", "best", "restaurant.", "better", "good", "most"],
          hint: "Good → better → BEST (исключение)."
        },
        {
          ru: "Этот номер удобнее.",
          build: ["This", "room", "is", "more", "comfortable."],
          options: ["This", "room", "is", "more", "comfortable.", "comfortabler", "most", "the"],
          hint: "Comfortable — длинное слово: MORE + comfortable."
        },
        {
          ru: "Поезд быстрее автобуса.",
          build: ["The", "train", "is", "faster", "than", "the", "bus."],
          options: ["The", "train", "is", "faster", "than", "the", "bus.", "more", "fast", "fastest"],
          hint: "Fast → fastER. Сравнение: … + THAN."
        },
        {
          ru: "Это самый красивый город.",
          build: ["This", "is", "the", "most", "beautiful", "city."],
          options: ["This", "is", "the", "most", "beautiful", "city.", "more", "beautifulest", "better"],
          hint: "Beautiful — длинное: THE MOST + beautiful."
        }
      ],
      transforms: [
        {
          source: "This hotel is cheap.",
          task: "Сделайте сравнение: «дешевле ЧЕМ тот» 📊",
          answer: "This hotel is cheaper than that one.",
          options: ["This hotel is cheaper than that one.", "This hotel is more cheap than that one.", "This hotel is cheapest than that one.", "This hotel is cheap than that one."],
          hint: "Cheap — короткое слово → cheapER + THAN."
        },
        {
          source: "good",
          task: "Как будет «лучший» (превосходная степень)? 🏆",
          answer: "best",
          options: ["best", "goodest", "more good", "better"],
          hint: "Good → better → BEST (исключение, нужно запомнить)."
        },
        {
          source: "This city is beautiful.",
          task: "Скажите «самый красивый» 🌟",
          answer: "This city is the most beautiful.",
          options: ["This city is the most beautiful.", "This city is the beautifulest.", "This city is more beautiful.", "This city is the best beautiful."],
          hint: "Beautiful — длинное: THE MOST + beautiful."
        }
      ]
    },
    {
      id: 6,
      title_ru: "Урок 6: Модальные глаголы",
      subtitle: "Can / Must / Should · Would like · Вежливые просьбы",
      intro_ru: "Модальные глаголы — это ваш главный инструмент вежливости. <b>Can I…?</b> (Могу ли я…?), <b>Could you…?</b> (Не могли бы вы…?), <b>I would like…</b> (Я бы хотел…). Они не изменяются по лицам (без -s!) и не нуждаются в DO/DOES.",
      vocab: [
        { en: "can", ru: "могу, умею" }, { en: "could", ru: "мог бы (вежливо)" },
        { en: "must", ru: "должен (обязан)" }, { en: "should", ru: "следует" },
        { en: "would like", ru: "хотел бы" }, { en: "may", ru: "можно (разрешение)" },
        { en: "need", ru: "нуждаться" }, { en: "have to", ru: "должен (необходимость)" },
        { en: "order", ru: "заказывать" }, { en: "change", ru: "менять, сдача" }
      ],
      examples: [
        { en: "Can I have the menu, please?", transcr: "Кэн ай хэв зэ мэню, плиз", ru: "Можно мне меню, пожалуйста?" },
        { en: "Could you help me?", transcr: "Куд ю хэлп ми", ru: "Не могли бы вы мне помочь?" },
        { en: "I would like a cup of tea.", transcr: "Ай вуд лайк э кап ов ти", ru: "Я бы хотел чашку чая." },
        { en: "You should try this dish.", transcr: "Ю шуд трай зис диш", ru: "Вам стоит попробовать это блюдо." },
        { en: "You must show your passport.", transcr: "Ю маст шоу ё паспот", ru: "Вы должны показать паспорт." },
        { en: "She can speak three languages.", transcr: "Ши кэн спик сри лэнгвиджиз", ru: "Она может говорить на трёх языках." },
        { en: "May I sit here?", transcr: "Мэй ай сит хиэ", ru: "Можно мне сесть здесь?" },
        { en: "We have to check out by noon.", transcr: "Уи хэв ту чек аут бай нун", ru: "Мы должны выселиться до полудня." },
        { en: "I cannot find my luggage.", transcr: "Ай кэнот файнд май лагидж", ru: "Я не могу найти свой багаж." },
        { en: "Could you call a taxi?", transcr: "Куд ю кол э тэкси", ru: "Не могли бы вы вызвать такси?" },
        { en: "Should I book in advance?", transcr: "Шуд ай бук ин эдванс", ru: "Мне стоит забронировать заранее?" },
        { en: "You should not miss this.", transcr: "Ю шуд нот мис зис", ru: "Вам не стоит это пропускать." }
      ],
      drills: [
        {
          ru: "Можно мне меню, пожалуйста?",
          build: ["Can", "I", "have", "the", "menu,", "please?"],
          options: ["Can", "I", "have", "the", "menu,", "please?", "Do", "Does", "must"],
          hint: "CAN I + глагол — вежливая просьба."
        },
        {
          ru: "Не могли бы вы мне помочь?",
          build: ["Could", "you", "help", "me?"],
          options: ["Could", "you", "help", "me?", "Can", "Do", "helps"],
          hint: "COULD YOU — более вежливая форма, чем CAN YOU."
        },
        {
          ru: "Я бы хотел чашку чая.",
          build: ["I", "would", "like", "a", "cup", "of", "tea."],
          options: ["I", "would", "like", "a", "cup", "of", "tea.", "want", "can", "will"],
          hint: "I WOULD LIKE — вежливая форма «я хочу»."
        },
        {
          ru: "Вы должны показать паспорт.",
          build: ["You", "must", "show", "your", "passport."],
          options: ["You", "must", "show", "your", "passport.", "should", "can", "shows"],
          hint: "MUST — обязательное требование."
        },
        {
          ru: "Мне стоит забронировать заранее?",
          build: ["Should", "I", "book", "in", "advance?"],
          options: ["Should", "I", "book", "in", "advance?", "Must", "Can", "Do"],
          hint: "SHOULD I — вопрос-совет (стоит ли мне…?)."
        },
        {
          ru: "Она может говорить на трёх языках.",
          build: ["She", "can", "speak", "three", "languages."],
          options: ["She", "can", "speak", "three", "languages.", "cans", "does", "speaks"],
          hint: "CAN + глагол без -s (can speak, не can speaks)."
        }
      ],
      transforms: [
        {
          source: "I want a cup of tea.",
          task: "Скажите вежливо 🎩",
          answer: "I would like a cup of tea.",
          options: ["I would like a cup of tea.", "I can a cup of tea.", "I must a cup of tea.", "I should a cup of tea."],
          hint: "I WANT → I WOULD LIKE (вежливая замена)."
        },
        {
          source: "Help me.",
          task: "Попросите вежливо 🙏",
          answer: "Could you help me?",
          options: ["Could you help me?", "Must you help me?", "Should you help me?", "You help me?"],
          hint: "COULD YOU + глагол? — самая вежливая форма просьбы."
        },
        {
          source: "She speaks three languages.",
          task: "Выразите способность (умеет) 💪",
          answer: "She can speak three languages.",
          options: ["She can speak three languages.", "She must speak three languages.", "She cans speak three languages.", "She can speaks three languages."],
          hint: "CAN + глагол (без -s!) = умеет/может."
        }
      ]
    },
    {
      id: 7,
      title_ru: "Урок 7: Путешествие и движение",
      subtitle: "Глаголы движения (go, come, fly) · Направление (to / from)",
      intro_ru: "Глаголы движения — основа любого перемещения. Направление выражается предлогом <b>to</b> (к, в), а место отправления — <b>from</b> (из). <i>Обратите внимание:</i> со словом <b>home</b> предлог TO не используется: «go home» (идти домой).",
      vocab: [
        { en: "go", ru: "идти, ехать" }, { en: "come", ru: "приходить, приезжать" },
        { en: "fly", ru: "лететь" }, { en: "leave", ru: "уходить, уезжать" },
        { en: "arrive", ru: "прибывать" }, { en: "walk", ru: "гулять, ходить пешком" },
        { en: "station", ru: "станция, вокзал" }, { en: "airport", ru: "аэропорт" },
        { en: "home", ru: "домой / дома" }, { en: "abroad", ru: "за границу" }
      ],
      markers: {
        past: ["went", "came", "flew", "arrived"],
        present: ["go / goes", "come / comes", "fly / flies"],
        future: ["will go", "will come", "will fly"]
      },
      examples: [
        { en: "We go to the airport.", transcr: "Уи гоу ту зи эапот", ru: "Мы едем в аэропорт." },
        { en: "She arrived from London yesterday.", transcr: "Ши эрайвд фром ландэн йестэдэй", ru: "Вчера она приехала из Лондона." },
        { en: "Let's walk to the park.", transcr: "Лэтс уок ту зэ пак", ru: "Давай прогуляемся до парка." },
        { en: "He went home.", transcr: "Хи уэнт хоум", ru: "Он пошел домой." },
        { en: "They will fly to New York tomorrow.", transcr: "Зэй уил флай ту Нью Йок тэмороу", ru: "Они полетят в Нью-Йорк завтра." },
        { en: "I came to the hotel by taxi.", transcr: "Ай кэйм ту зэ хоутэл бай тэкси", ru: "Я приехал в отель на такси." },
        { en: "When do you leave?", transcr: "Уэн ду ю лив", ru: "Когда вы уезжаете?" },
        { en: "We want to go abroad this summer.", transcr: "Уи уонт ту гоу эброд зис самэ", ru: "Мы хотим поехать за границу этим летом." },
        { en: "Did they arrive at the station?", transcr: "Дид зэй эрайв эт зэ стэйшн", ru: "Они прибыли на вокзал?" },
        { en: "He walks in the park every morning.", transcr: "Хи уокс ин зэ пак эври монинг", ru: "Он гуляет в парке каждое утро." },
        { en: "I will go to the office later.", transcr: "Ай уил гоу ту зи офис лэйтэ", ru: "Я пойду в офис позже." },
        { en: "She is coming back tomorrow.", transcr: "Ши из каминг бэк тэмороу", ru: "Она возвращается завтра." }
      ],
      drills: [
        {
          ru: "Мы едем в аэропорт.",
          build: ["We", "go", "to", "the", "airport."],
          options: ["We", "go", "to", "the", "airport.", "from", "at", "going"],
          hint: "Направление движения К цели: TO the airport."
        },
        {
          ru: "Вчера она приехала из Лондона.",
          build: ["She", "arrived", "from", "London", "yesterday."],
          options: ["She", "arrived", "from", "London", "yesterday.", "to", "at", "arrive"],
          hint: "Прибытие ОТКУДА-то: FROM London. Прошедшее время: arrived."
        },
        {
          ru: "Он пошел домой.",
          build: ["He", "went", "home."],
          options: ["He", "went", "home.", "go", "to", "went to"],
          hint: "Со словом HOME предлог направления TO никогда не ставится! Went = прошедшее от go."
        },
        {
          ru: "Они полетят в Нью-Йорк завтра.",
          build: ["They", "will", "fly", "to", "New", "York", "tomorrow."],
          options: ["They", "will", "fly", "to", "New", "York", "tomorrow.", "flew", "go", "at"],
          hint: "Будущее время: WILL + fly. Направление: TO."
        },
        {
          ru: "Когда вы уезжаете?",
          build: ["When", "do", "you", "leave?"],
          options: ["When", "do", "you", "leave?", "did", "are", "leaves"],
          hint: "Вопросительное слово WHEN + вспомогательный DO + подлежащее + глагол."
        },
        {
          ru: "Давай прогуляемся до парка.",
          build: ["Let's", "walk", "to", "the", "park."],
          options: ["Let's", "walk", "to", "the", "park.", "Let", "walking", "at"],
          hint: "Давай сделаем: Let's + глагол без to. До парка: TO the park."
        }
      ],
      transforms: [
        {
          source: "I go to the hotel.",
          task: "Сделайте прошедшее время ⏳",
          answer: "I went to the hotel.",
          options: ["I went to the hotel.", "I did go to the hotel.", "I goed to the hotel.", "I was go to the hotel."],
          hint: "Прошедшее время глагола go — это неправильная форма WENT."
        },
        {
          source: "She arrives from Berlin.",
          task: "Спросите «Откуда она приезжает?» ❓",
          answer: "Where does she arrive from?",
          options: ["Where does she arrive from?", "Where arrives she from?", "From where she arrives?", "Where did she arrive from?"],
          hint: "Вопрос в настоящем: WHERE + DOES + she + arrive + FROM?"
        },
        {
          source: "We will fly to Paris.",
          task: "Сделайте отрицание ❌",
          answer: "We will not fly to Paris.",
          options: ["We will not fly to Paris.", "We will not to Paris.", "We don't will fly to Paris.", "We won't flew to Paris."],
          hint: "Отрицание в будущем: WILL + NOT + глагол."
        }
      ]
    },
    {
      id: 8,
      title_ru: "Урок 8: Предлоги места и времени",
      subtitle: "Где и когда? (in, on, at, under, behind, near)",
      intro_ru: "Предлоги связывают слова в предложения. Важно запомнить базовые пары: <b>in</b> (внутри, в), <b>on</b> (на поверхности), <b>at</b> (у конкретной точки, также с часами: «at 5 o'clock»).",
      vocab: [
        { en: "in", ru: "в, внутри" }, { en: "on", ru: "на" },
        { en: "at", ru: "в (точке), у" }, { en: "under", ru: "под" },
        { en: "behind", ru: "за, позади" }, { en: "near", ru: "рядом, около" },
        { en: "table", ru: "стол" }, { en: "room", ru: "комната" },
        { en: "street", ru: "улица" }, { en: "corner", ru: "угол" }
      ],
      markers: {
        past: ["in the past", "on Monday"],
        present: ["at the moment", "in the room"],
        future: ["in 5 minutes", "on Friday"]
      },
      examples: [
        { en: "The keys are in my bag.", transcr: "Зэ киз ар ин май бэг", ru: "Ключи в моей сумке." },
        { en: "Your book is on the table.", transcr: "Ё бук из он зэ тэйбл", ru: "Твоя книга на столе." },
        { en: "I am waiting at the bus stop.", transcr: "Ай эм уэйтинг эт зэ бас стоп", ru: "Я жду на автобусной остановке." },
        { en: "We met at 7 o'clock.", transcr: "Уи мэт эт сэвн оклок", ru: "Мы встретились в 7 часов." },
        { en: "The shop is near the hotel.", transcr: "Зэ шоп из ниэ зэ хоутэл", ru: "Магазин находится рядом с отелем." },
        { en: "The cat is under the bed.", transcr: "Зэ кэт из андэ зэ бэд", ru: "Кошка под кроватью." },
        { en: "The car was behind the building.", transcr: "Зэ ка уоз бихайнд зэ билдинг", ru: "Машина была за зданием." },
        { en: "We will arrive in five minutes.", transcr: "Уи уил эрайв ин файв минитс", ru: "Мы прибудем через пять минут." },
        { en: "The museum is closed on Mondays.", transcr: "Зэ мюзиэм из клоузд он мандейз", ru: "Музей закрыт по понедельникам." },
        { en: "He lives in Moscow.", transcr: "Хи ливз ин Москоу", ru: "Он живет в Москве." },
        { en: "She was at school yesterday.", transcr: "Ши уоз эт скул йестэдэй", ru: "Вчера она была в школе." },
        { en: "The keys were on the corner of the table.", transcr: "Зэ киз уёр он зэ конэ ов зэ тэйбл", ru: "Ключи лежали на углу стола." }
      ],
      drills: [
        {
          ru: "Ключи в моей сумке.",
          build: ["The", "keys", "are", "in", "my", "bag."],
          options: ["The", "keys", "are", "in", "my", "bag.", "on", "at", "is"],
          hint: "Внутри сумки: предлог IN."
        },
        {
          ru: "Твоя книга на столе.",
          build: ["Your", "book", "is", "on", "the", "table."],
          options: ["Your", "book", "is", "on", "the", "table.", "in", "at", "are"],
          hint: "На поверхности стола: предлог ON."
        },
        {
          ru: "Мы встретились в 7 часов.",
          build: ["We", "met", "at", "7", "o'clock."],
          options: ["We", "met", "at", "7", "o'clock.", "in", "on", "meet"],
          hint: "Точное время (часы): всегда используется предлог AT."
        },
        {
          ru: "Магазин находится рядом с отелем.",
          build: ["The", "shop", "is", "near", "the", "hotel."],
          options: ["The", "shop", "is", "near", "the", "hotel.", "under", "behind", "at"],
          hint: "Рядом с: предлог NEAR."
        },
        {
          ru: "Мы прибудем через пять минут.",
          build: ["We", "will", "arrive", "in", "five", "minutes."],
          options: ["We", "will", "arrive", "in", "five", "minutes.", "on", "at", "after"],
          hint: "Через какое-то время (в будущем): предлог IN (in five minutes)."
        },
        {
          ru: "Музей закрыт по понедельникам.",
          build: ["The", "museum", "is", "closed", "on", "Mondays."],
          options: ["The", "museum", "is", "closed", "on", "Mondays.", "in", "at", "by"],
          hint: "С днями недели всегда употребляется предлог ON."
        }
      ],
      transforms: [
        {
          source: "The keys are inside the room.",
          task: "Замените «внутри» на «на столе» 📖",
          answer: "The keys are on the table.",
          options: ["The keys are on the table.", "The keys are in the table.", "The keys are at the table.", "The keys are near table."],
          hint: "На поверхности: ON the table."
        },
        {
          source: "We arrived on Monday.",
          task: "Спросите «Когда вы прибыли?» ❓",
          answer: "When did you arrive?",
          options: ["When did you arrive?", "When do you arrive?", "When you arrived?", "When did you arrived?"],
          hint: "Прошедшее время: When + DID + подлежащее + глагол без -ed."
        },
        {
          source: "She lives in Moscow.",
          task: "Спросите «Где она живет?» ❓",
          answer: "Where does she live?",
          options: ["Where does she live?", "Where lives she?", "Where does she lives?", "Where did she live?"],
          hint: "Настоящее время, 3-е лицо: Where + DOES + she + live?"
        }
      ]
    },
    {
      id: 9,
      title_ru: "Урок 9: Артикли и указатели",
      subtitle: "Неопределенный и определенный артикли · This / These",
      intro_ru: "Артикли пугают многих, но правило простое. <b>A / AN</b> (один из многих) используется, когда мы говорим о предмете впервые. <b>THE</b> (тот самый конкретный) — когда собеседник уже знает, о каком предмете речь. Указатели: <b>this</b> (этот), <b>these</b> (эти).",
      vocab: [
        { en: "a / an", ru: "какой-то один (артикль)" }, { en: "the", ru: "конкретный (артикль)" },
        { en: "this", ru: "этот" }, { en: "that", ru: "тот" },
        { en: "these", ru: "эти" }, { en: "those", ru: "те" },
        { en: "shop", ru: "магазин" }, { en: "bus", ru: "автобус" },
        { en: "taxi", ru: "такси" }, { en: "window", ru: "окно" }
      ],
      markers: {
        past: ["this morning"],
        present: ["this week"],
        future: ["this evening"]
      },
      examples: [
        { en: "I need a room.", transcr: "Ай нид э рум", ru: "Мне нужен номер (какой-нибудь)." },
        { en: "The room is very comfortable.", transcr: "Зэ рум из вэри камфтэбл", ru: "Этот (конкретный) номер очень удобный." },
        { en: "This is a good hotel.", transcr: "Зис из э гуд хоутэл", ru: "Это хороший отель." },
        { en: "These rooms are closed.", transcr: "Зиз румз ар клоузд", ru: "Эти номера закрыты." },
        { en: "That taxi was expensive.", transcr: "Зэт тэкси уоз икспэнсив", ru: "То такси было дорогим." },
        { en: "Open the window, please.", transcr: "Оупэн зэ уиндоу, плиз", ru: "Откройте окно, пожалуйста (конкретное в комнате)." },
        { en: "I saw an elephant.", transcr: "Ай со эн элифэнт", ru: "Я видел слона (одного из многих)." },
        { en: "Who is that man?", transcr: "Ху из зэт мэн", ru: "Кто тот мужчина?" },
        { en: "Give me those tickets, please.", transcr: "Гив ми зоуз тикитс, плиз", ru: "Дайте мне те билеты, пожалуйста." },
        { en: "This city is very big.", transcr: "Зис сити из вэри биг", ru: "Этот город очень большой." },
        { en: "Is there a shop near here?", transcr: "Из зэа э шоп ниэ хиэ", ru: "Здесь поблизости есть какой-нибудь магазин?" },
        { en: "The food was delicious.", transcr: "Зэ фуд уоз дилишэс", ru: "Еда была восхитительной (конкретная, которую ели)." }
      ],
      drills: [
        {
          ru: "Мне нужен номер.",
          build: ["I", "need", "a", "room."],
          options: ["I", "need", "a", "room.", "the", "an", "this"],
          hint: "Впервые упоминаем абстрактный номер: артикль A."
        },
        {
          ru: "Этот номер очень удобный.",
          build: ["The", "room", "is", "very", "comfortable."],
          options: ["The", "room", "is", "very", "comfortable.", "A", "An", "these"],
          hint: "Конкретный номер, о котором только что говорили: артикль THE."
        },
        {
          ru: "Это хороший отель.",
          build: ["This", "is", "a", "good", "hotel."],
          options: ["This", "is", "a", "good", "hotel.", "the", "an", "these"],
          hint: "Указатель «это»: This is… И далее классификация: A good hotel."
        },
        {
          ru: "Эти номера закрыты.",
          build: ["These", "rooms", "are", "closed."],
          options: ["These", "rooms", "are", "closed.", "This", "Those", "is"],
          hint: "Множественное число рядом (эти): THESE + rooms + are."
        },
        {
          ru: "Откройте окно, пожалуйста.",
          build: ["Open", "the", "window,", "please."],
          options: ["Open", "the", "window,", "please.", "a", "an", "this"],
          hint: "Окно в комнате конкретное: Open THE window."
        },
        {
          ru: "Дайте мне те билеты, пожалуйста.",
          build: ["Give", "me", "those", "tickets,", "please."],
          options: ["Give", "me", "those", "tickets,", "please.", "these", "that", "the"],
          hint: "Множественное число вдали (те): THOSE + tickets."
        }
      ],
      transforms: [
        {
          source: "this room",
          task: "Сделайте во множественном числе (эти номера) 👥",
          answer: "these rooms",
          options: ["these rooms", "those rooms", "this rooms", "these room"],
          hint: "This -> These, room -> rooms."
        },
        {
          source: "that hotel",
          task: "Сделайте во множественном числе (те отели) 🏨",
          answer: "those hotels",
          options: ["those hotels", "these hotels", "that hotels", "those hotel"],
          hint: "That -> Those, hotel -> hotels."
        },
        {
          source: "I need a ticket.",
          task: "Спросите «Мне нужен этот билет?» ❓",
          answer: "Do I need this ticket?",
          options: ["Do I need this ticket?", "Do I need these ticket?", "Am I need this ticket?", "I need this ticket?"],
          hint: "Вопрос в настоящем: Do + I + need + this ticket?"
        }
      ]
    },
    {
      id: 10,
      title_ru: "Урок 10: Словообразование и люди",
      subtitle: "Множественное число · Исключения (men, women, children)",
      intro_ru: "Обычно к существительным добавляют <b>-s</b> (dog -> dogs). Но для людей есть важные исключения, которые нужно знать наизусть: <b>man -> men</b> (мужчины), <b>woman -> women</b> (женщины), <b>child -> children</b> (дети).",
      pronouns: [
        { en: "man → men", ru: "мужчина → мужчины" },
        { en: "woman → women", ru: "женщина → женщины" },
        { en: "child → children", ru: "ребенок → дети" },
        { en: "person → people", ru: "человек → люди" }
      ],
      vocab: [
        { en: "man / men", ru: "мужчина / мужчины" },
        { en: "woman / women", ru: "женщина / женщины" },
        { en: "child / children", ru: "ребенок / дети" },
        { en: "person / people", ru: "человек / люди" },
        { en: "family", ru: "семья" }, { en: "group", ru: "группа" },
        { en: "guide", ru: "гид" }, { en: "driver", ru: "водитель" },
        { en: "worker", ru: "работник" }, { en: "baby", ru: "младенец" }
      ],
      markers: {
        past: ["with children"],
        present: ["many people"],
        future: ["with family"]
      },
      examples: [
        { en: "There are many people here.", transcr: "Зэа ар мэни пипл хиэ", ru: "Здесь много людей." },
        { en: "The children are playing.", transcr: "Зэ чилдрэн ар плэйинг", ru: "Дети играют." },
        { en: "These men are doctors.", transcr: "Зиз мэн ар доктэз", ru: "Эти мужчины — врачи." },
        { en: "Those women speak English.", transcr: "Зоуз уимин спик инглиш", ru: "Те женщины говорят по-английски." },
        { en: "He is a very nice person.", transcr: "Хи из э вэри найс пёсн", ru: "Он очень приятный человек." },
        { en: "Our guide was very friendly.", transcr: "Ауэ гайд уоз вэри фрэндли", ru: "Наш гид был очень дружелюбным." },
        { en: "Do you have children?", transcr: "Ду ю хэв чилдрэн", ru: "У вас есть дети?" },
        { en: "How many people will come?", transcr: "Хау мэни пипл уил кам", ru: "Сколько людей придет?" },
        { en: "I saw three women at the office.", transcr: "Ай со сри уимин эт зи офис", ru: "Я видел трех женщин в офисе." },
        { en: "He travelled with his family.", transcr: "Хи трэвлд уиз хиз фэмили", ru: "Он путешествовал со своей семьей." },
        { en: "The driver was late.", transcr: "Зэ драйвэ уоз лэйт", ru: "Водитель опоздал." },
        { en: "She works with children.", transcr: "Ши уокс уиз чилдрэн", ru: "Она работает с детьми." }
      ],
      drills: [
        {
          ru: "Здесь много людей.",
          build: ["There", "are", "many", "people", "here."],
          options: ["There", "are", "many", "people", "here.", "persons", "is", "a"],
          hint: "Исключение: множественное число от person — это PEOPLE. С ними глагол ARE."
        },
        {
          ru: "Дети играют.",
          build: ["The", "children", "are", "playing."],
          options: ["The", "children", "are", "playing.", "childs", "is", "child"],
          hint: "Множественное число от child — это CHILDREN."
        },
        {
          ru: "Эти мужчины — врачи.",
          build: ["These", "men", "are", "doctors."],
          options: ["These", "men", "are", "doctors.", "mans", "man", "is"],
          hint: "Множественное число от man — это MEN."
        },
        {
          ru: "У вас есть дети?",
          build: ["Do", "you", "have", "children?"],
          options: ["Do", "you", "have", "children?", "childs", "child", "does"],
          hint: "Вопрос в настоящем времени: Do you have + children?"
        },
        {
          ru: "Сколько людей придет?",
          build: ["How", "many", "people", "will", "come?"],
          options: ["How", "many", "people", "will", "come?", "persons", "much", "do"],
          hint: "Людей можно посчитать, поэтому HOW MANY + people + WILL come?"
        },
        {
          ru: "Водитель опоздал.",
          build: ["The", "driver", "was", "late."],
          options: ["The", "driver", "was", "late.", "drivers", "were", "is"],
          hint: "Driver (= he) в прошедшем времени требует WAS."
        }
      ],
      transforms: [
        {
          source: "a beautiful woman",
          task: "Сделайте во множественном числе (красивые женщины) 💃",
          answer: "beautiful women",
          options: ["beautiful women", "beautiful womans", "beautiful woman", "beautiful womens"],
          hint: "Исключение: woman -> women (произносится как «уимин»)."
        },
        {
          source: "He is a good man.",
          task: "Сделайте во множественном числе (Они хорошие мужчины) 👥",
          answer: "They are good men.",
          options: ["They are good men.", "They are good mans.", "They is good men.", "They was good men."],
          hint: "He -> They, is -> are, man -> men."
        },
        {
          source: "She has one child.",
          task: "Скажите, что у нее ТРОЕ детей 🧒🧒🧒",
          answer: "She has three children.",
          options: ["She has three children.", "She has three childs.", "She have three children.", "She has three child."],
          hint: "После числительных больше 1 используем форму множественного числа children."
        }
      ]
    },
    {
      id: 11,
      title_ru: "Урок 11: Наречия и мнение",
      subtitle: "Характеристика действия · Как? (slowly, well) · I think",
      intro_ru: "Наречия описывают, <b>как</b> совершается действие. Они образуются от прилагательных добавлением суффикса <b>-ly</b> (slow -> slowly). Исключения: <b>good -> well</b> (хорошо), <b>fast -> fast</b> (быстро). Учимся высказывать мнение фразой «I think» (Я думаю).",
      vocab: [
        { en: "slowly", ru: "медленно" }, { en: "quickly", ru: "быстро" },
        { en: "well", ru: "хорошо (исключение!)" }, { en: "badly", ru: "плохо" },
        { en: "perfectly", ru: "прекрасно, отлично" }, { en: "politely", ru: "вежливо" },
        { en: "think", ru: "думать" }, { en: "speak", ru: "говорить" },
        { en: "understand", ru: "понимать" }, { en: "explain", ru: "объяснять" }
      ],
      markers: {
        past: ["spoke slowly", "explained well"],
        present: ["understand perfectly", "think usually"],
        future: ["will explain quickly"]
      },
      examples: [
        { en: "Please speak slowly.", transcr: "Плиз спик слоули", ru: "Пожалуйста, говорите медленнее." },
        { en: "I think you speak English very well.", transcr: "Ай синк ю спик инглиш вэри уэл", ru: "Я думаю, вы очень хорошо говорите по-английски." },
        { en: "He drives too quickly.", transcr: "Хи драйвз ту куикли", ru: "Он водит слишком быстро." },
        { en: "She explained the rule perfectly.", transcr: "Ши иксплэинд зэ рул пёфиктли", ru: "Она прекрасно объяснила правило." },
        { en: "I don't think he understands us.", transcr: "Ай доунт синк хи андэстэндз ас", ru: "Не думаю, что он понимает нас." },
        { en: "They speak politely.", transcr: "Зэй спик пэлайтли", ru: "Они разговаривают вежливо." },
        { en: "I think we are late.", transcr: "Ай синк уи ар лэйт", ru: "Я думаю, мы опоздали." },
        { en: "He speaks English badly.", transcr: "Хи спикс инглиш бэдли", ru: "Он плохо говорит по-английски." },
        { en: "We understood everything perfectly.", transcr: "Уи андэстуд эврисинг пёфиктли", ru: "Мы всё прекрасно поняли." },
        { en: "I will explain everything quickly.", transcr: "Ай уил иксплэин эврисинг куикли", ru: "Я всё быстро объясню." },
        { en: "Do you think she will come?", transcr: "Ду ю синк ши уил кам", ru: "Как ты думаешь, она придет?" },
        { en: "She did it well.", transcr: "Ши дид ит уэл", ru: "Она сделала это хорошо." }
      ],
      drills: [
        {
          ru: "Пожалуйста, говорите медленнее.",
          build: ["Please", "speak", "slowly."],
          options: ["Please", "speak", "slowly.", "slow", "slowlier", "quickly"],
          hint: "Как? Медленно: speak + slowly."
        },
        {
          ru: "Я думаю, вы говорите хорошо.",
          build: ["I", "think", "you", "speak", "well."],
          options: ["I", "think", "you", "speak", "well.", "good", "goodly", "thinked"],
          hint: "Исключение: хорошо = WELL (от прилагательного good)."
        },
        {
          ru: "Он водит слишком быстро.",
          build: ["He", "drives", "too", "quickly."],
          options: ["He", "drives", "too", "quickly.", "quick", "quicklier", "drive"],
          hint: "Как? Быстро: drives + quickly."
        },
        {
          ru: "Она прекрасно объяснила правило.",
          build: ["She", "explained", "the", "rule", "perfectly."],
          options: ["She", "explained", "the", "rule", "perfectly.", "perfect", "explain", "perfects"],
          hint: "Прошедшее время: explained. Наречие: perfectly."
        },
        {
          ru: "Не думаю, что он понимает нас.",
          build: ["I", "don't", "think", "he", "understands", "us."],
          options: ["I", "don't", "think", "he", "understands", "us.", "no think", "understands he", "not think"],
          hint: "Отрицание: I don't think + придаточное предложение he understands us."
        },
        {
          ru: "Я всё быстро объясню.",
          build: ["I", "will", "explain", "everything", "quickly."],
          options: ["I", "will", "explain", "everything", "quickly.", "quick", "explained", "do"],
          hint: "Будущее время: I will explain + наречие quickly."
        }
      ],
      transforms: [
        {
          source: "He is a slow driver.",
          task: "Перефразируйте: «Он водит медленно» 🚗",
          answer: "He drives slowly.",
          options: ["He drives slowly.", "He drives slow.", "He drive slowly.", "He is drive slowly."],
          hint: "Глагол (drives) требует наречия (slowly)."
        },
        {
          source: "She is a good speaker.",
          task: "Перефразируйте: «Она говорит хорошо» 🗣️",
          answer: "She speaks well.",
          options: ["She speaks well.", "She speaks good.", "She speak well.", "She speaks goodly."],
          hint: "Исключение: говорить как? -> WELL."
        },
        {
          source: "I think she is at home.",
          task: "Сделайте отрицание «Я не думаю…» ❌",
          answer: "I don't think she is at home.",
          options: ["I don't think she is at home.", "I think she is not at home.", "I not think she is at home.", "I think not she is at home."],
          hint: "Отрицание строится в главном предложении: I don't think…"
        }
      ]
    },
    {
      id: 12,
      title_ru: "Урок 12: Числительные, время и даты",
      subtitle: "Порядковые числа · Время (half past) · Погода",
      intro_ru: "Числа окружают нас: цены, даты, время, номера комнат. Порядковые числительные отвечают на вопрос «какой по счету?» и образуются суффиксом <b>-th</b>. Исключения: <b>first</b> (первый), <b>second</b> (второй), <b>third</b> (третий).",
      vocab: [
        { en: "first", ru: "первый" }, { en: "second", ru: "второй" },
        { en: "third", ru: "третий" }, { en: "fourth", ru: "четвертый" },
        { en: "half past", ru: "половина после (например, 7:30)" },
        { en: "quarter", ru: "четверть часа" }, { en: "weather", ru: "погода" },
        { en: "it is raining", ru: "идет дождь" }, { en: "it is snowing", ru: "идет снег" },
        { en: "warm", ru: "теплый" }
      ],
      markers: {
        past: ["yesterday at 5"],
        present: ["now", "at quarter past"],
        future: ["tomorrow morning"]
      },
      examples: [
        { en: "It is half past eight.", transcr: "Ит из хаф паст эйт", ru: "Сейчас половина девятого (8:30)." },
        { en: "My room is on the third floor.", transcr: "Май рум из он зэ сёд фло", ru: "Моя комната на третьем этаже." },
        { en: "The weather is very warm today.", transcr: "Зэ уэзэ из вэри уом тудэй", ru: "Погода сегодня очень теплая." },
        { en: "It is raining now.", transcr: "Ит из рэйнинг нау", ru: "Сейчас идет дождь." },
        { en: "We will leave at a quarter to ten.", transcr: "Уи уил лив эт э куотэ ту тэн", ru: "Мы уедем без четверти десять (9:45)." },
        { en: "This is my first time in London.", transcr: "Зис из май фёст тайм ин ландэн", ru: "Я в Лондоне в первый раз." },
        { en: "Yesterday it was snowing.", transcr: "Йестэдэй ит уоз сноуинг", ru: "Вчера шел снег." },
        { en: "His birthday is on the second of May.", transcr: "Хиз бёсдэй из он зэ сэконд ов мэй", ru: "Его день рождения второго мая." },
        { en: "What time is the meeting?", transcr: "Уот тайм из зэ митинг", ru: "В какое время встреча?" },
        { en: "It will be sunny tomorrow.", transcr: "Ит уил би сани тэмороу", ru: "Завтра будет солнечно." },
        { en: "It is quarter past seven.", transcr: "Ит из куотэ паст сэвн", ru: "Сейчас пятнадцать минут восьмого (7:15)." },
        { en: "She finished the work second.", transcr: "Ши финишт зэ уёк сэконд", ru: "Она закончила работу второй." }
      ],
      drills: [
        {
          ru: "Сейчас половина девятого.",
          build: ["It", "is", "half", "past", "eight."],
          options: ["It", "is", "half", "past", "eight.", "are", "time", "to"],
          hint: "«Половина после восьми» = half past eight."
        },
        {
          ru: "Моя комната на третьем этаже.",
          build: ["My", "room", "is", "on", "the", "third", "floor."],
          options: ["My", "room", "is", "on", "the", "third", "floor.", "three", "first", "at"],
          hint: "Исключение: третий = THIRD. На этаже = ON the floor."
        },
        {
          ru: "Погода сегодня очень теплая.",
          build: ["The", "weather", "is", "very", "warm", "today."],
          options: ["The", "weather", "is", "very", "warm", "today.", "it", "are", "colder"],
          hint: "Подлежащее (the weather) -> глагол IS."
        },
        {
          ru: "Сейчас идет дождь.",
          build: ["It", "is", "raining", "now."],
          options: ["It", "is", "raining", "now.", "rains", "doing", "was"],
          hint: "Процесс прямо сейчас: It is + raining (глагол с -ing)."
        },
        {
          ru: "Я в Лондоне в первый раз.",
          build: ["This", "is", "my", "first", "time", "in", "London."],
          options: ["This", "is", "my", "first", "time", "in", "London.", "one", "second", "on"],
          hint: "Первый раз = first time."
        },
        {
          ru: "Завтра будет солнечно.",
          build: ["It", "will", "be", "sunny", "tomorrow."],
          options: ["It", "will", "be", "sunny", "tomorrow.", "is", "was", "be sunny"],
          hint: "Будущее безличных предложений: It will be + прилагательное."
        }
      ],
      transforms: [
        {
          source: "It is 8:15.",
          task: "Скажите время словами ⏱",
          answer: "It is quarter past eight.",
          options: ["It is quarter past eight.", "It is quarter to eight.", "It is half past eight.", "It is fifteen eight."],
          hint: "15 минут после 8: quarter past eight."
        },
        {
          source: "floor number 1",
          task: "Назовите этаж «первый этаж» 🏢",
          answer: "first floor",
          options: ["first floor", "one floor", "once floor", "firstly floor"],
          hint: "Исключение: первый = FIRST."
        },
        {
          source: "It is raining.",
          task: "Сделайте прошедшее время (Вчера шел дождь) 🌧️",
          answer: "It was raining yesterday.",
          options: ["It was raining yesterday.", "It did raining yesterday.", "It rained yesterday.", "It is raining yesterday."],
          hint: "Прошедшее время процесса: is -> WAS + yesterday."
        }
      ]
    },
    {
      id: 13,
      title_ru: "Урок 13: Повелительное наклонение и Let's",
      subtitle: "Просьбы и приказы (Do it!) · Предложения (Let's go)",
      intro_ru: "Повелительное наклонение выражает просьбу или приказ. Мы просто убираем местоимение и начинаем с глагола: «<b>Come in!</b>» (Войдите!). Отрицание — через DO NOT: «<b>Don't touch!</b>» (Не трогай!). Призыв к совместному действию — «<b>Let's…</b>» (Давайте…).",
      vocab: [
        { en: "come in", ru: "войти" }, { en: "sit down", ru: "сесть" },
        { en: "give", ru: "дать" }, { en: "tell", ru: "рассказать, сказать" },
        { en: "touch", ru: "трогать" }, { en: "worry", ru: "беспокоиться" },
        { en: "let's", ru: "давай, давайте" }, { en: "buy", ru: "купить" },
        { en: "take", ru: "взять" }, { en: "wait", ru: "ждать" }
      ],
      markers: {
        past: ["did not let"],
        present: ["let's do it now"],
        future: ["will let you know"]
      },
      examples: [
        { en: "Please come in and sit down.", transcr: "Плиз кам ин энд сит даун", ru: "Пожалуйста, войдите и присаживайтесь." },
        { en: "Let's go to the restaurant tonight.", transcr: "Лэтс гоу ту зэ рэстрант тунайт", ru: "Давайте пойдем в ресторан сегодня вечером." },
        { en: "Don't worry, everything is fine.", transcr: "Доунт уари, эврисинг из файн", ru: "Не беспокойтесь, все в порядке." },
        { en: "Give me the key, please.", transcr: "Гив ми зэ ки, плиз", ru: "Дайте мне ключ, пожалуйста." },
        { en: "Don't touch this machine.", transcr: "Доунт тач зис мэшин", ru: "Не трогайте этот аппарат." },
        { en: "Let's buy these tickets.", transcr: "Лэтс бай зиз тикитс", ru: "Давайте купим эти билеты." },
        { en: "Tell me the truth.", transcr: "Тэл ми зэ трус", ru: "Скажи мне правду." },
        { en: "Wait for me near the hotel.", transcr: "Уэйт фо ми ниэ зэ хоутэл", ru: "Подождите меня около отеля." },
        { en: "Don't be late.", transcr: "Доунт би лэйт", ru: "Не опаздывайте." },
        { en: "Let's take a taxi.", transcr: "Лэтс тэйк э тэкси", ru: "Давайте возьмем такси." },
        { en: "Close the door, please.", transcr: "Клоуз зэ до, плиз", ru: "Закройте дверь, пожалуйста." },
        { en: "Don't open the window.", transcr: "Доунт оупэн зэ уиндоу", ru: "Не открывайте окно." }
      ],
      drills: [
        {
          ru: "Пожалуйста, войдите и присаживайтесь.",
          build: ["Please", "come", "in", "and", "sit", "down."],
          options: ["Please", "come", "in", "and", "sit", "down.", "do", "coming", "sitting"],
          hint: "Повелительное наклонение начинается прямо с глаголов действия."
        },
        {
          ru: "Давайте пойдем в ресторан сегодня вечером.",
          build: ["Let's", "go", "to", "the", "restaurant", "tonight."],
          options: ["Let's", "go", "to", "the", "restaurant", "tonight.", "Let", "going", "we go"],
          hint: "Давай(те) сделаем что-то = Let's + глагол."
        },
        {
          ru: "Не беспокойтесь, все в порядке.",
          build: ["Don't", "worry,", "everything", "is", "fine."],
          options: ["Don't", "worry,", "everything", "is", "fine.", "Not", "No", "are"],
          hint: "Запрет/отрицательное повеление: DON'T + глагол."
        },
        {
          ru: "Дайте мне ключ, пожалуйста.",
          build: ["Give", "me", "the", "key,", "please."],
          options: ["Give", "me", "the", "key,", "please.", "Giving", "Gave", "to me"],
          hint: "Повеление: Give + кому (me) + что (the key)."
        },
        {
          ru: "Не опаздывайте.",
          build: ["Don't", "be", "late."],
          options: ["Don't", "be", "late.", "Not", "No", "being"],
          hint: "Отрицательный призыв с глаголом быть: Don't + be + late."
        },
        {
          ru: "Давайте возьмем такси.",
          build: ["Let's", "take", "a", "taxi."],
          options: ["Let's", "take", "a", "taxi.", "Let", "taking", "do"],
          hint: "Давайте сделаем: Let's + глагол (take)."
        }
      ],
      transforms: [
        {
          source: "You close the door.",
          task: "Сделайте приказ «Закрой дверь!» 🚪",
          answer: "Close the door.",
          options: ["Close the door.", "Do close the door.", "Closing the door.", "Let's close the door."],
          hint: "Просто убираем подлежащее (you)."
        },
        {
          source: "We go home.",
          task: "Предложите совместное действие «Давайте пойдем домой» 🏠",
          answer: "Let's go home.",
          options: ["Let's go home.", "Let's went home.", "Don't go home.", "Let's go to home."],
          hint: "Let's + первая форма глагола (go home без предлога TO!)."
        },
        {
          source: "You open the box.",
          task: "Сделайте запрет «Не открывай коробку!» 📦",
          answer: "Don't open the box.",
          options: ["Don't open the box.", "Not open the box.", "No open the box.", "Don't opened the box."],
          hint: "Запрет строится с помощью Don't + глагол в начальной форме."
        }
      ]
    },
    {
      id: 14,
      title_ru: "Урок 14: Фразовые глаголы",
      subtitle: "Глаголы с предлогами · Изменение значения (get in, look for)",
      intro_ru: "Фразовые глаголы — это сочетание глагола с предлогом, которое превращается в новое значение. Они крайне важны для путешественника: <b>get in</b> (садиться в машину), <b>check in</b> (регистрироваться), <b>look for</b> (искать).",
      vocab: [
        { en: "get in / out of", ru: "садиться / выходить (из машины)" },
        { en: "get on / off", ru: "садиться / выходить (общественный транспорт)" },
        { en: "check in / out", ru: "заселяться / выселяться (отель)" },
        { en: "look for", ru: "искать" }, { en: "go back", ru: "возвращаться" },
        { en: "take off", ru: "взлетать / снимать одежду" },
        { en: "wake up", ru: "просыпаться" }, { en: "give up", ru: "сдаваться, бросать" }
      ],
      markers: {
        past: ["checked in", "woke up", "got on"],
        present: ["check in", "wake up", "get on"],
        future: ["will check in", "will wake up", "will get on"]
      },
      examples: [
        { en: "We checked in at three o'clock.", transcr: "Уи чект ин эт сри оклок", ru: "Мы заселились в три часа." },
        { en: "I am looking for my passport.", transcr: "Ай эм лукинг фо май паспот", ru: "Я ищу свой паспорт." },
        { en: "He got on the bus.", transcr: "Хи гот он зэ бас", ru: "Он сел в автобус." },
        { en: "Get out of the car, please.", transcr: "Гет аут ов зэ ка, плиз", ru: "Выйдите из машины, пожалуйста." },
        { en: "The plane will take off soon.", transcr: "Зэ плэйн уил тэйк оф сун", ru: "Самолет скоро взлетит." },
        { en: "We need to go back to the hotel.", transcr: "Уи нид ту гоу бэк ту зэ хоутэл", ru: "Нам нужно вернуться в отель." },
        { en: "I wake up early.", transcr: "Ай уэйк ап ёли", ru: "Я просыпаюсь рано." },
        { en: "Let's check out now.", transcr: "Лэтс чек аут нау", ru: "Давайте выселимся сейчас." },
        { en: "She got off the train.", transcr: "Ши гот оф зэ трэйн", ru: "Она вышла из поезда." },
        { en: "Please get in the car.", transcr: "Плиз гет ин зэ ка", ru: "Пожалуйста, садитесь в машину." },
        { en: "What are you looking for?", transcr: "Уот ар ю лукинг фо", ru: "Что вы ищете?" },
        { en: "He woke up at seven.", transcr: "Хи уоук ап эт сэвн", ru: "Он проснулся в семь часов." }
      ],
      drills: [
        {
          ru: "Мы заселились в три часа.",
          build: ["We", "checked", "in", "at", "three", "o'clock."],
          options: ["We", "checked", "in", "at", "three", "o'clock.", "check", "out", "on"],
          hint: "Заселиться (в отель) = check in. Прошедшее время: checked in."
        },
        {
          ru: "Он сел в автобус.",
          build: ["He", "got", "on", "the", "bus."],
          options: ["He", "got", "on", "the", "bus.", "get", "in", "off"],
          hint: "Сесть на общественный транспорт = get ON. Прошедшее от get — GOT."
        },
        {
          ru: "Я ищу свой паспорт.",
          build: ["I", "am", "looking", "for", "my", "passport."],
          options: ["I", "am", "looking", "for", "my", "passport.", "look", "at", "to"],
          hint: "Искать что-то = look FOR. В данный момент: am looking."
        },
        {
          ru: "Нам нужно вернуться в отель.",
          build: ["We", "need", "to", "go", "back", "to", "the", "hotel."],
          options: ["We", "need", "to", "go", "back", "to", "the", "hotel.", "went", "come", "in"],
          hint: "Вернуться назад = go back."
        },
        {
          ru: "Самолет скоро взлетит.",
          build: ["The", "plane", "will", "take", "off", "soon."],
          options: ["The", "plane", "will", "take", "off", "soon.", "take in", "took", "up"],
          hint: "Взлетать = take off. Будущее: will take off."
        },
        {
          ru: "Выйдите из машины, пожалуйста.",
          build: ["Get", "out", "of", "the", "car,", "please."],
          options: ["Get", "out", "of", "the", "car,", "please.", "Get off", "Get in", "on"],
          hint: "Выйти из легковой машины = get out of."
        }
      ],
      transforms: [
        {
          source: "I search my bag.",
          task: "Используйте фразовый глагол «искать» (look for) 🔍",
          answer: "I look for my bag.",
          options: ["I look for my bag.", "I look at my bag.", "I look out my bag.", "I look in my bag."],
          hint: "Искать = look for."
        },
        {
          source: "We will leave the hotel room.",
          task: "Замените «освободить номер» фразовым глаголом 🏨",
          answer: "We will check out.",
          options: ["We will check out.", "We will check in.", "We will check off.", "We will check of."],
          hint: "Выселиться из отеля = check out."
        },
        {
          source: "He enters the taxi.",
          task: "Замените «сесть в такси» на фразовый глагол 🚕",
          answer: "He gets in the taxi.",
          options: ["He gets in the taxi.", "He gets on the taxi.", "He gets off the taxi.", "He gets out the taxi."],
          hint: "Сесть в легковое авто/такси = get in."
        }
      ]
    },
    {
      id: 15,
      title_ru: "Урок 15: Условные предложения",
      subtitle: "Связь «Если ..., то ...» · Будущее время (If it rains...)",
      intro_ru: "Условные предложения связывают условия с результатом: «Если будет погода, мы поедем». Важнейшее английское правило: в части с <b>IF</b> (если) или <b>WHEN</b> (когда) будущее время <b>не используется</b> (ставим настоящее, а WILL — только во второй части!).",
      vocab: [
        { en: "if", ru: "если" }, { en: "when", ru: "когда" },
        { en: "rain", ru: "дождь / идти дождю" }, { en: "stay", ru: "оставаться" },
        { en: "time", ru: "время" }, { en: "money", ru: "деньги" },
        { en: "buy", ru: "купить" }, { en: "find", ru: "найти" },
        { en: "ask", ru: "спросить" }, { en: "tell", ru: "сказать" }
      ],
      markers: {
        past: ["if I had"],
        present: ["if I have", "if it rains"],
        future: ["we will stay"]
      },
      examples: [
        { en: "If it rains, we will stay at home.", transcr: "Иф ит рэйнз, уи уил стэй эт хоум", ru: "Если пойдет дождь, мы останемся дома." },
        { en: "If I have money, I will buy a ticket.", transcr: "Иф ай хэв мани, ай уил бай э тикит", ru: "Если у меня будут деньги, я куплю билет." },
        { en: "When they arrive, we will go to the hotel.", transcr: "Уэн зэй эрайв, уи уил гоу ту зэ хоутэл", ru: "Когда они приедут, мы пойдем в отель." },
        { en: "If you need help, ask me.", transcr: "Иф ю нид хэлп, аск ми", ru: "Если вам нужна помощь, спросите меня." },
        { en: "I will call you if I find the key.", transcr: "Ай уил кол ю иф ай файнд зэ ки", ru: "Я позвоню тебе, если найду ключ." },
        { en: "If she has time, she will help us.", transcr: "Иф ши хэз тайм, ши уил хэлп ас", ru: "Если у нее будет время, она поможет нам." },
        { en: "We will start when he comes.", transcr: "Уи уил стат уэн хи камз", ru: "Мы начнем, когда он придет." },
        { en: "If you close the window, it will be warm.", transcr: "Иф ю клоуз зэ уиндоу, ит уил би уом", ru: "Если ты закроешь окно, будет тепло." },
        { en: "I will buy this bag if I like it.", transcr: "Ай уил бай зис бэг иф ай лайк ит", ru: "Я куплю эту сумку, если она мне понравится." },
        { en: "If they don't help, what will you do?", transcr: "Иф зэй доунт хэлп, уот уил ю ду", ru: "Если они не помогут, что ты будешь делать?" },
        { en: "When the weather is good, we walk.", transcr: "Уэн зэ уэзэ из гуд, уи уок", ru: "Когда погода хорошая, мы гуляем." },
        { en: "If he is ready, tell me.", transcr: "Иф хи из рэди, тэл ми", ru: "Если он готов, скажи мне." }
      ],
      drills: [
        {
          ru: "Если пойдет дождь, мы останемся дома.",
          build: ["If", "it", "rains,", "we", "will", "stay", "at", "home."],
          options: ["If", "it", "rains,", "we", "will", "stay", "at", "home.", "will rain,", "stayed"],
          hint: "После IF ставится настоящее время (it rains), во второй части — будущее (we will stay)."
        },
        {
          ru: "Если у меня будут деньги, я куплю билет.",
          build: ["If", "I", "have", "money,", "I", "will", "buy", "a", "ticket."],
          options: ["If", "I", "have", "money,", "I", "will", "buy", "a", "ticket.", "will have", "bought"],
          hint: "После IF настоящее (I have), в главном — будущее (I will buy)."
        },
        {
          ru: "Когда они приедут, мы пойдем в отель.",
          build: ["When", "they", "arrive,", "we", "will", "go", "to", "the", "hotel."],
          options: ["When", "they", "arrive,", "we", "will", "go", "to", "the", "hotel.", "will arrive,", "went"],
          hint: "После WHEN настоящее (they arrive), в главном — будущее (we will go)."
        },
        {
          ru: "Если у нее будет время, она поможет нам.",
          build: ["If", "she", "has", "time,", "she", "will", "help", "us."],
          options: ["If", "she", "has", "time,", "she", "will", "help", "us.", "will have", "helps", "had"],
          hint: "После IF настоящее, 3-е лицо: she HAS. Главное: she will help."
        },
        {
          ru: "Я позвоню тебе, если найду ключ.",
          build: ["I", "will", "call", "you", "if", "I", "find", "the", "key."],
          options: ["I", "will", "call", "you", "if", "I", "find", "the", "key.", "will find", "found", "do"],
          hint: "Главная часть сначала (будущее: I will call), после IF настоящее (I find)."
        },
        {
          ru: "Мы начнем, когда он придет.",
          build: ["We", "will", "start", "when", "he", "comes."],
          options: ["We", "will", "start", "when", "he", "comes.", "will come.", "come.", "came."],
          hint: "Главное: We will start. После WHEN настоящее, 3-е лицо: he COMES."
        }
      ],
      transforms: [
        {
          source: "She will come. She will help.",
          task: "Объедините: «Если она придет, она поможет» 🔗",
          answer: "If she comes, she will help.",
          options: ["If she comes, she will help.", "If she will come, she will help.", "If she come, she will help.", "If she comes she helps."],
          hint: "После IF ставится Present Simple: she comes (с окончанием -s!)."
        },
        {
          source: "I will buy a map. I will need it.",
          task: "Объедините: «Я куплю карту, если она мне понадобится» 🗺️",
          answer: "I will buy a map if I need it.",
          options: ["I will buy a map if I need it.", "I will buy a map if I will need it.", "I buy a map if I will need it.", "I will buy a map when I need it."],
          hint: "После IF — настоящее время (I need)."
        },
        {
          source: "He will arrive. We will go.",
          task: "Объедините: «Когда он приедет, мы пойдем» 🚶",
          answer: "When he arrives, we will go.",
          options: ["When he arrives, we will go.", "When he will arrive, we will go.", "When he arrive, we will go.", "When he arrives, we go."],
          hint: "После WHEN — настоящее время (he arrives), в главной части — будущее (we will go)."
        }
      ]
    },
    {
      id: 16,
      title_ru: "Урок 16: Итоговое повторение",
      subtitle: "Закрепление всего курса · Основные формулы",
      intro_ru: "Поздравляем! Вы прошли весь курс. В этом уроке мы повторим <b>все ключевые темы</b>: базовую матрицу глагола (Урок 1), глагол to be (Урок 2), местоимения, предлоги и условные предложения. Это финальная проверка ваших знаний.",
      vocab: [
        { en: "all", ru: "все, всё" }, { en: "course", ru: "курс" },
        { en: "remember", ru: "помнить" }, { en: "forget", ru: "забывать" },
        { en: "learn", ru: "учить" }, { en: "speak", ru: "разговаривать" },
        { en: "say", ru: "сказать" }, { en: "ask", ru: "спрашивать" },
        { en: "answer", ru: "отвечать" }, { en: "practise", ru: "практиковаться" }
      ],
      markers: {
        past: ["learned everything", "spoke well"],
        present: ["remember the matrix", "practise every day"],
        future: ["will never forget"]
      },
      examples: [
        { en: "I remember the grammar matrix.", transcr: "Ай римэмбэ зэ грэмэ мэйтрикс", ru: "Я помню грамматическую матрицу." },
        { en: "Do you speak English now?", transcr: "Ду ю спик инглиш нау", ru: "Ты говоришь по-английски теперь?" },
        { en: "We learned many new words.", transcr: "Уи лёнд мэни нью уёдз", ru: "Мы выучили много новых слов." },
        { en: "I will never forget this trip.", transcr: "Ай уил нэвэ фэгет зис трип", ru: "Я никогда не забуду эту поездку." },
        { en: "She did not answer my question.", transcr: "Ши дид нот ансэ май куэсчн", ru: "Она не ответила на мой вопрос." },
        { en: "If you practise, you will speak well.", transcr: "Иф ю прэктис, ю уил спик уэл", ru: "Если вы будете практиковаться, вы будете говорить хорошо." },
        { en: "Could you repeat that, please?", transcr: "Куд ю рипит зэт, плиз", ru: "Не могли бы вы повторить это, пожалуйста?" },
        { en: "I am ready to go home.", transcr: "Ай эм рэди ту гоу хоум", ru: "Я готов ехать домой." },
        { en: "Where did you buy this book?", transcr: "Уэа дид ю бай зис бук", ru: "Где вы купили эту книгу?" },
        { en: "We will stay in a good hotel.", transcr: "Уи уил стэй ин э гуд хоутэл", ru: "Мы остановимся в хорошем отеле." },
        { en: "He does not work on Sundays.", transcr: "Хи даз нот уёк он сандэйз", ru: "Он не работает по воскресеньям." },
        { en: "Let's check out from the room.", transcr: "Лэтс чек аут фром зэ рум", ru: "Давайте выселимся из номера." }
      ],
      drills: [
        {
          ru: "Я помню грамматическую матрицу.",
          build: ["I", "remember", "the", "grammar", "matrix."],
          options: ["I", "remember", "the", "grammar", "matrix.", "remembers", "will", "am"],
          hint: "Настоящее время: I + глагол в первой форме."
        },
        {
          ru: "Ты говоришь по-английски теперь?",
          build: ["Do", "you", "speak", "English", "now?"],
          options: ["Do", "you", "speak", "English", "now?", "Does", "Did", "are"],
          hint: "Вопрос в настоящем времени: Do + you + глагол?"
        },
        {
          ru: "Мы выучили много новых слов.",
          build: ["We", "learned", "many", "new", "words."],
          options: ["We", "learned", "many", "new", "words.", "learns", "learn", "did"],
          hint: "Прошедшее время: We + глагол во 2-й форме (learned)."
        },
        {
          ru: "Я никогда не забуду эту поездку.",
          build: ["I", "will", "never", "forget", "this", "trip."],
          options: ["I", "will", "never", "forget", "this", "trip.", "do", "am", "forgot"],
          hint: "Будущее время с отрицанием: I will never + глагол."
        },
        {
          ru: "Она не ответила на мой вопрос.",
          build: ["She", "did", "not", "answer", "my", "question."],
          options: ["She", "did", "not", "answer", "my", "question.", "does", "will", "answered"],
          hint: "Отрицание в прошедшем: She did not + глагол в первой форме (answer)."
        },
        {
          ru: "Если вы будете практиковаться, вы будете говорить хорошо.",
          build: ["If", "you", "practise,", "you", "will", "speak", "well."],
          options: ["If", "you", "practise,", "you", "will", "speak", "well.", "will practise,", "good"],
          hint: "Условное предложение: после IF настоящее время (you practise), далее будущее (you will speak) + наречие well."
        }
      ],
      transforms: [
        {
          source: "I forget my keys.",
          task: "Сделайте прошедшее время (Я забыл свои ключи) 🔑",
          answer: "I forgot my keys.",
          options: ["I forgot my keys.", "I did forgot my keys.", "I forgetted my keys.", "I was forget my keys."],
          hint: "Прошедшее время от forget — это неправильная форма FORGOT."
        },
        {
          source: "We are at home.",
          task: "Сделайте отрицание в будущем (Мы не будем дома) 🏠",
          answer: "We will not be at home.",
          options: ["We will not be at home.", "We will not at home.", "We won't at home.", "We don't will be at home."],
          hint: "Будущее отрицание с to be: We will not be…"
        },
        {
          source: "He spoke quickly.",
          task: "Спросите «Он говорил быстро?» ❓",
          answer: "Did he speak quickly?",
          options: ["Did he speak quickly?", "Did he spoke quickly?", "Does he speak quickly?", "Was he speak quickly?"],
          hint: "Вопрос в прошедшем: Did + he + глагол в первой форме (speak)?"
        }
      ]
    }
  ];

  root.GRAMMAR = GRAMMAR;
})(window);
