document.addEventListener('DOMContentLoaded', () => {
  // ===== Hero Title Letters Generation =====
  const heroTitleElement = document.querySelector('.hero-title');
  const heroTitleText = 'INSPIREDESIGN';
  heroTitleElement.innerHTML = heroTitleText
    .split('')
    .map(letter => `<span class="letter">${letter}</span>`)
    .join('');

  // ===== Letter Falling Animation =====
  const letters = document.querySelectorAll('.letter');

  letters.forEach(letter => {
    letter.addEventListener('click', () => {
      letter.classList.add('fall');
      setTimeout(() => {
        letter.style.visibility = 'hidden';
        if ([...letters].every(l => l.style.visibility === 'hidden')) {
          respawnLetters();
        }
      }, 1500);
    });
  });

  function respawnLetters() {
    setTimeout(() => {
      letters.forEach(letter => {
        letter.style.visibility = 'visible';
        letter.classList.remove('fall');
      });
    }, 1000);
  }

  // ===== Timeline Data and Generation =====
  const timelineData = [
    {
      year: '1439',
      title: '구텐베르크의 금속 활자',
      info: '요하네스 구텐베르크가 금속 활자를 발명, 인쇄술의 혁신을 가져왔다.',
      imageSrc: '../image1.png',
      dataImage: 'https://via.placeholder.com/200',
    },
    {
      year: '1750',
      title: '산업 혁명',
      info: '산업 혁명이 일어나면서 대량 생산 시대가 도래, 디자인의 기계화가 시작되었다.',
      imageSrc: '../image2.png',
      dataImage: 'https://via.placeholder.com/200',
    },
    {
      year: '1907',
      title: '아르누보',
      info: '아르누보 스타일이 유럽에서 유행하며, 디자인에서 유기적이고 곡선적인 형태를 강조했다.',
      imageSrc: '../image3.png',
      dataImage: 'https://via.placeholder.com/200',
    },
    {
      year: '1920',
      title: '아르 데코',
      info: '아르 데코 스타일이 등장, 기하학적 형태와 직선을 강조하여 시대의 디자인을 대표했다.',
      imageSrc: '../image4.png',
      dataImage: 'https://via.placeholder.com/200',
    },
    {
      year: '1940',
      title: '모던 디자인',
      info: '모던 디자인이 확립되며, 기능성에 초점을 맞춘 디자인이 주류를 이뤘다.',
      imageSrc: '../image5.png',
      dataImage: 'https://via.placeholder.com/200',
    },
    {
      year: '1960',
      title: '팝 아트',
      info: '팝 아트의 영향으로 대중문화가 디자인에 반영, 디자인이 더 대중적이고 경쾌하게 변했다.',
      imageSrc: '../image6.png',
      dataImage: 'https://via.placeholder.com/200',
    },
    {
      year: '1980',
      title: '컴퓨터 디자인',
      info: '컴퓨터의 도입으로 디지털 디자인이 발전, 그래픽 디자인의 가능성이 확장되었다.',
      imageSrc: '../image7.png',
      dataImage: 'https://via.placeholder.com/200',
    },
    {
      year: '1990',
      title: '웹 디자인',
      info: '웹 디자인이 산업으로 자리잡기 시작, 인터넷과 함께 웹페이지 디자인이 중요한 역할을 하게 되었다.',
      imageSrc: '../image8.png',
      dataImage: 'https://via.placeholder.com/200',
    },
    {
      year: '2000',
      title: '모바일 디자인',
      info: '모바일 기기 사용 증가로 모바일 디자인의 중요성이 커졌다, UI/UX 디자인이 주목받기 시작했다.',
      imageSrc: '../image9.png',
      dataImage: 'https://via.placeholder.com/200',
    },
    {
      year: '2020',
      title: '지속 가능성 디자인',
      info: '지속 가능한 디자인의 중요성이 강조되며, 친환경적이고 지속 가능한 디자인 패러다임이 자리잡았다.',
      imageSrc: '../image10.png',
      dataImage: 'https://via.placeholder.com/200',
    },
  ];

  const timelineContainer = document.getElementById('timeline-container');

  timelineData.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline-item');
    timelineItem.dataset.title = `${item.year}: ${item.title}`;
    timelineItem.dataset.info = item.info;
    timelineItem.dataset.image = item.dataImage;

    timelineItem.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-image">
          <img src="${item.imageSrc}" alt="${item.title}">
        </div>
        <div class="timeline-text">
          <h4 class="timeline-year">${item.year}</h4>
          <h3 class="timeline-title">${item.title}</h3>
        </div>
      </div>
    `;

    timelineContainer.appendChild(timelineItem);
  });

  // ===== Popup Functionality =====
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popup-title');
  const popupDetails = document.getElementById('popup-details');
  const popupImage = popup.querySelector('.popup-image img');
  const popupClose = document.querySelector('.popup-close');

  timelineContainer.addEventListener('click', (e) => {
    const item = e.target.closest('.timeline-item');
    if (item) {
      openPopup(item);
    }
  });

  popupClose.addEventListener('click', closePopup);
  popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
  });

  function openPopup(item) {
    popupTitle.textContent = item.dataset.title;
    popupDetails.textContent = item.dataset.info;
    popupImage.src = item.dataset.image;
    popup.classList.add('active');
  }

  function closePopup() {
    popup.classList.remove('active');
  }

  // ===== Timeline Item Animation =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });

  // ===== Quiz Functionality =====
  const quizQuestions = [
    {
      question: "요하네스 구텐베르크가 금속 활자를 발명한 해는?",
      options: ["1439년", "1450년", "1500년", "1550년"],
      answer: "1439년",
    },
    {
      question: "산업 혁명이 시작된 시기는?",
      options: ["1750년", "1800년", "1850년", "1900년"],
      answer: "1750년",
    },
    {
      question: "아르누보 스타일이 유행한 해는?",
      options: ["1907년", "1910년", "1920년", "1930년"],
      answer: "1907년",
    },
    {
      question: "아르 데코 스타일이 등장한 시기는?",
      options: ["1920년", "1930년", "1940년", "1950년"],
      answer: "1920년",
    },
    {
      question: "모던 디자인이 주류가 된 시기는?",
      options: ["1940년", "1950년", "1960년", "1970년"],
      answer: "1940년",
    },
    {
      question: "팝 아트가 디자인에 영향을 준 시기는?",
      options: ["1960년", "1970년", "1980년", "1990년"],
      answer: "1960년",
    },
    {
      question: "디지털 디자인이 발전하기 시작한 시기는?",
      options: ["1980년", "1990년", "2000년", "2010년"],
      answer: "1980년",
    },
    {
      question: "웹 디자인이 중요한 역할을 하게 된 시기는?",
      options: ["1990년", "2000년", "2010년", "2020년"],
      answer: "1990년",
    },
    {
      question: "모바일 디자인의 중요성이 커진 시기는?",
      options: ["2000년", "2005년", "2010년", "2015년"],
      answer: "2000년",
    },
    {
      question: "지속 가능한 디자인이 강조된 해는?",
      options: ["2020년", "2018년", "2015년", "2010년"],
      answer: "2020년",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  const totalTimePerQuestion = 30;
  let timerInterval;

  const startQuizButton = document.getElementById("start-quiz-button");
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("quiz-question");
  const optionsElement = document.getElementById("quiz-options");
  const nextButton = document.getElementById("next-button");
  const progressElement = document.getElementById("progress");
  const timerFill = document.querySelector('.timer-fill');

  startQuizButton.addEventListener("click", startQuiz);

  function startQuiz() {
    startQuizButton.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    shuffleArray(quizQuestions);
    showQuestion();
  }

  function showQuestion() {
    resetState();
    startTimer();
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    progressElement.innerText = `문제 ${currentQuestionIndex + 1} / ${quizQuestions.length}`;

    shuffleArray(currentQuestion.options);

    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("option-button");
      button.addEventListener("click", selectOption);
      optionsElement.appendChild(button);
    });
  }

  function resetState() {
    clearInterval(timerInterval);
    timerFill.style.width = '100%';
    timerFill.classList.remove('low-time');
    nextButton.classList.add("hidden");
    optionsElement.innerHTML = "";
  }

  function startTimer() {
    timerFill.style.width = '100%';
    timerFill.classList.remove('low-time');
    const timerDuration = totalTimePerQuestion * 1000;
    const interval = 100;
    let timeElapsed = 0;

    timerInterval = setInterval(() => {
      timeElapsed += interval;
      const timeLeft = (timerDuration - timeElapsed) / 1000;
      const timePercent = ((timerDuration - timeElapsed) / timerDuration) * 100;
      timerFill.style.width = `${timePercent}%`;

      if (timeLeft <= 5) {
        timerFill.classList.add('low-time');
      }

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        handleTimeOut();
      }
    }, interval);
  }

  function handleTimeOut() {
    disableOptions();
    nextButton.classList.remove("hidden");
  }

  function selectOption(e) {
    clearInterval(timerInterval);
    const selectedButton = e.target;
    const selectedAnswer = selectedButton.innerText;
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("incorrect");
      Array.from(optionsElement.children).forEach((button) => {
        if (button.innerText === correctAnswer) {
          button.classList.add("correct");
        }
      });
    }

    disableOptions();
    nextButton.classList.remove("hidden");
  }

  function disableOptions() {
    Array.from(optionsElement.children).forEach((button) => {
      button.disabled = true;
    });
  }

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    questionElement.classList.add('hidden');
    optionsElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    progressElement.classList.add('hidden');
    document.querySelector('.timer-bar').classList.add('hidden');

    const resultsContainer = document.getElementById('quiz-results');
    resultsContainer.innerHTML = `
      <h2>퀴즈 완료!</h2>
      <p>당신의 점수: ${score} / ${quizQuestions.length}</p>
      <button id="restart-button" class="quiz-start-btn">다시 풀기</button>
    `;
    resultsContainer.classList.remove('hidden');

    document.getElementById('restart-button').addEventListener('click', restartQuiz);
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    const resultsContainer = document.getElementById('quiz-results');
    resultsContainer.classList.add('hidden');
    resultsContainer.innerHTML = '';

    questionElement.classList.remove('hidden');
    optionsElement.classList.remove('hidden');
    progressElement.classList.remove('hidden');
    document.querySelector('.timer-bar').classList.remove('hidden');

    shuffleArray(quizQuestions);
    showQuestion();
  }

  function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
  }
});
