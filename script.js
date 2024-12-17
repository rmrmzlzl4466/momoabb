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
          info: '요하네스 구텐베르크는 금속 활자를 발명함으로써 인쇄술에 혁신을 가져왔습니다. 그의 발명은 대량 생산과 정보의 대중화를 가능하게 했으며, 르네상스와 종교 개혁과 같은 역사적 변화를 촉진시켰습니다. 구텐베르크의 인쇄술은 지식의 전파를 가속화하고, 교육과 과학의 발전에 기여했습니다. 이로 인해 책의 생산 비용이 감소하고, 더 많은 사람들이 지식에 접근할 수 있게 되어 문해율이 향상되었습니다.',
          imageSrc: 'img/img01 1.png',
          dataImage: 'img/img01 2.webp',
      },
      {
          year: '1750',
          title: '산업 혁명',
          info: '산업 혁명은 18세기 중반 영국에서 시작되어 전 세계로 확산된 급격한 경제 및 사회적 변화를 의미합니다. 이 시기에 증기 기관의 발명과 기계화된 생산 방식의 도입으로 대량 생산이 가능해졌으며, 디자인 분야에서도 기계적인 생산 방식에 맞춘 기능성과 단순성이 강조되었습니다. 이는 상품 디자인뿐만 아니라 건축, 공예 등 다양한 디자인 영역에 영향을 미쳤습니다. 산업 혁명은 또한 도시화와 노동자의 생활 조건 변화 등을 초래하여 사회 전반에 걸친 변화를 가져왔습니다.',
          imageSrc: 'img/img02 1.png',
          dataImage: 'img/img02 2.png',
      },
      {
          year: '1907',
          title: '아르누보',
          info: '아르누보는 19세기 말부터 20세기 초에 걸쳐 유럽에서 유행한 예술 및 디자인 운동으로, 자연에서 영감을 받은 유기적이고 곡선적인 형태가 특징입니다. 이 스타일은 건축, 가구, 그래픽 디자인, 패션 등 다양한 분야에 영향을 미쳤으며, 세련된 곡선과 장식적인 요소를 통해 인간의 감성을 자극했습니다. 아르누보는 현대 디자인의 발전에 중요한 기반을 마련했으며, 전통적인 장식과 현대적인 기능성을 조화시켰습니다.',
          imageSrc: 'img/img03 1.png',
          dataImage: 'img/img03 2.png',
      },
      {
          year: '1920',
          title: '아르 데코',
          info: '아르 데코는 1920년대에 등장한 디자인 스타일로, 기하학적 형태와 직선을 강조하며 화려한 장식과 고급스러운 소재를 사용했습니다. 이 스타일은 건축, 인테리어 디자인, 패션, 그래픽 디자인 등 다양한 분야에서 인기를 끌었으며, 당시의 번영과 현대성을 상징했습니다. 아르 데코는 이후 모던 디자인의 발전에도 큰 영향을 미쳤으며, 고급스러움과 기능성을 동시에 추구하는 디자인 철학을 확립했습니다.',
          imageSrc: 'img/img04 1.png',
          dataImage: 'img/img04 2.png',
      },
      {
          year: '1940',
          title: '모던 디자인',
          info: '모던 디자인은 20세기 중반에 정립된 디자인 철학으로, 기능성과 간결함을 중시합니다. 이 스타일은 불필요한 장식을 배제하고, 깔끔한 선과 형태를 통해 실용적이고 효율적인 디자인을 추구합니다. 모던 디자인은 건축, 제품 디자인, 그래픽 디자인 등 다양한 분야에서 주류를 이루었으며, 오늘날까지도 그 영향력을 유지하고 있습니다. 이 디자인 철학은 사용자 중심의 접근법과 지속 가능한 디자인의 기초를 마련했습니다.',
          imageSrc: 'img/img05 1.png',
          dataImage: 'img/img05 2.png',
      },
      {
          year: '1960',
          title: '팝 아트',
          info: '팝 아트는 1950년대 후반부터 1960년대에 걸쳐 등장한 예술 및 디자인 운동으로, 대중문화와 상업적 이미지를 예술의 주제로 삼았습니다. 이 스타일은 광고, 만화, 대중 매체에서 영감을 받아 밝고 대담한 색상, 반복적인 패턴, 대중적인 아이콘을 활용했습니다. 팝 아트는 디자인에 있어 대중성과 접근성을 강조하며, 예술과 상업의 경계를 허물었습니다. 이는 현대 그래픽 디자인과 광고 디자인에 큰 영향을 미쳤습니다.',
          imageSrc: 'img/img06 1.png',
          dataImage: 'img/img06 2.png',
      },
      {
          year: '1990',
          title: '컴퓨터 그래픽 디자인',
          info: '1990년대는 컴퓨터 기술의 발전과 함께 디지털 디자인이 급격히 성장한 시기입니다. 그래픽 디자인 소프트웨어의 보급으로 디자이너들은 더 정교하고 복잡한 작업을 수행할 수 있게 되었으며, 애니메이션, 웹 디자인, 디지털 일러스트레이션 등이 활성화되었습니다. 컴퓨터 그래픽 디자인은 창의성과 기술의 결합을 통해 새로운 시각적 표현을 가능하게 했습니다. 이로 인해 디자인 작업의 효율성이 크게 향상되었고, 다양한 디지털 매체에서의 시각적 커뮤니케이션이 발전했습니다.',
          imageSrc: 'img/img07 1.png',
          dataImage: 'img/img07 2.png',
      },  
      {
          year: '2000',
          title: '웹 디자인',
          info: '2000년대는 인터넷의 보급과 함께 웹 디자인이 중요한 디자인 분야로 자리잡은 시기입니다. 웹사이트의 사용자 경험(UX)과 사용자 인터페이스(UI)가 강조되었으며, 반응형 디자인과 접근성, 시각적 일관성이 중요한 요소로 떠올랐습니다. HTML, CSS, JavaScript와 같은 웹 기술의 발전으로 디자이너들은 더 창의적이고 인터랙티브한 웹사이트를 구현할 수 있게 되었습니다. 웹 디자인은 브랜드 아이덴티티를 강화하고, 사용자와의 소통을 원활하게 하는 중요한 역할을 담당하게 되었습니다.',
          imageSrc: 'img/img08 1.png',
          dataImage: 'img/img08 2.png',
      },
      {
          year: '2010',
          title: 'UI/UX 디자인',
          info: '2010년대는 모바일 기기의 급속한 성장과 함께 사용자 경험(UI/UX) 디자인이 중심이 된 시기입니다. 스마트폰과 태블릿의 보급으로 디자이너들은 다양한 디바이스에서 일관된 사용자 경험을 제공하기 위해 노력했으며, 직관적인 인터페이스, 사용자 중심의 디자인, 접근성 등이 중요한 요소로 부각되었습니다. UI/UX 디자인은 제품의 성공과 직결되는 핵심 요소로 인식되었으며, 사용자 만족도를 높이기 위한 지속적인 연구와 개선이 이루어졌습니다. 이는 앱 디자인, 웹 서비스, 소프트웨어 개발 등 다양한 분야에서 중요한 역할을 했습니다.',
          imageSrc: 'img/img09 1.png',
          dataImage: 'img/img09 2.png',
      },
      {
          year: '2020',
          title: '지속 가능성 디자인',
          info: '2020년대는 환경 문제에 대한 인식이 높아지면서 지속 가능성 디자인이 중요한 트렌드로 자리잡았습니다. 친환경 소재의 사용, 에너지 효율적인 디자인, 재활용 가능성 등을 고려한 제품 및 건축 디자인이 강조되었으며, 사회적 책임을 다하는 디자인 철학이 확산되었습니다. 지속 가능성 디자인은 미래 지향적인 접근으로, 환경 보존과 인간의 삶의 질 향상을 동시에 추구합니다. 이는 순환 경제를 지향하며, 자원의 효율적인 사용과 폐기물 감소를 목표로 합니다. 또한, 지속 가능한 디자인은 기업의 브랜드 이미지를 강화하고, 소비자들에게 긍정적인 인상을 심어주는 데 기여하고 있습니다.',
          imageSrc: 'img/img10 1.png',
          dataImage: 'img/img10 2.png',
      },
  ];

  const timelineContainer = document.getElementById('timeline-container');

  timelineData.forEach(item => {
      const timelineItem = document.createElement('div');
      timelineItem.classList.add('timeline-item');

      timelineItem.id = `year-${item.year}`;

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

  // ===== Scroll to Center =====
  const navLinksElements = document.querySelectorAll('.nav-links a');

  navLinksElements.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // 기본 앵커 링크 동작 방지

          const targetId = this.getAttribute('href').substring(1); // '#' 제거
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              // 헤더 높이 계산 (고정 헤더인 경우)
              const headerHeight = document.querySelector('.site-header').offsetHeight;
              const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
              const viewportHeight = window.innerHeight;
              const elementHeight = targetElement.offsetHeight;
              
              // 중앙에 위치하도록 오프셋 계산
              const offsetPosition = elementPosition - (viewportHeight / 2) + (elementHeight / 2);

              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });

  // ===== Scroll Direction Detection and Timeline Item Animation =====
  let lastScrollTop = 0;
  const timelineItems = document.querySelectorAll('.timeline-item');

  function getScrollDirection() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 업데이트
      return direction;
  }

  function handleScroll() {
      const direction = getScrollDirection();

      timelineItems.forEach(item => {
          const rect = item.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight - 100) { // 화면에 100px 남았을 때
              if (direction === 'down') {
                  item.classList.add('visible');
              }
          } else {
              if (direction === 'up') {
                  item.classList.remove('visible');
              }
          }
      });
  }

  // Throttle 함수 (성능 최적화)
  function throttle(fn, wait) {
      let time = Date.now();
      return function() {
          if ((time + wait - Date.now()) < 0) {
              fn();
              time = Date.now();
          }
      }
  }

  window.addEventListener('scroll', throttle(handleScroll, 200));

  // 초기 실행
  handleScroll();

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
          question: "컴퓨터 그래픽 디자인이 발전하기 시작한 시기는?",
          options: ["1980년", "1990년", "2000년", "2010년"],
          answer: "1990년",
      },
      {
          question: "웹 디자인이 중요한 역할을 하게 된 시기는?",
          options: ["1990년", "2000년", "2010년", "2020년"],
          answer: "2000년",
      },
      {
          question: "UI/UX 디자인의 중요성이 커진 시기는?",
          options: ["2000년", "2005년", "2010년", "2015년"],
          answer: "2010년",
      },
      {
          question: "지속 가능한 디자인이 강조된 해는?",
          options: ["2020년", "2018년", "2015년", "2010년"],
          answer: "2020년",
      },
      // ... 나머지 퀴즈 질문 ...
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
      // startQuizButton.classList.add("hidden"); // 버튼 숨기기 제거
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
