// Quiz questions with detailed explanations
const quizQuestions = [
  {
    title: "Understanding Alienation",
    question: "Maria works on an assembly line, installing the same part over and over. She has no control over her pace, no input on decisions, and feels like just another cog in the machine. What's happening here?",
    options: [
      "Alienation from the product of labor; they don't see the final result",
      "Alienation from the act of production; work feels mechanical and meaningless",
      "Alienation from their species-being; they've lost their human creativity",
      "Alienation from other workers; they're competing instead of cooperating"
    ],
    correctAnswer: 1,
    explanation: "Maria experiences what Marx termed alienation from the act of production. Labor becomes mechanized and stripped of creative meaning, reducing the worker to a passive participant in the production process. This form of alienation occurs when workers lack autonomy and meaningful engagement with their work."
  },
  {
    title: "Modern Consumer Culture",
    question: "James drops $300 on designer sneakers he doesn't really need; he just wants people to think he's successful. What's driving this behavior?",
    options: [
      "Rational consumer choice based on quality assessment",
      "Conspicuous consumption for social status display",
      "Economic alienation from production processes",
      "Weber's Protestant work ethic in action"
    ],
    correctAnswer: 1,
    explanation: "This exemplifies Veblen's concept of conspicuous consumption, where individuals purchase goods primarily to display social status rather than satisfy functional needs. The sneakers serve as status symbols, communicating perceived wealth and social position to others."
  },
  {
    title: "The Iron Cage",
    question: "Your workplace makes you track every minute of your day, follow rigid procedures for everything, and hit specific efficiency targets. What would Weber call this?",
    options: [
      "The Protestant work ethic encouraging hard work",
      "Bureaucratic rationalization creating an 'iron cage'",
      "Capitalist exploitation of workers' surplus value",
      "Social solidarity through shared work experiences"
    ],
    correctAnswer: 1,
    explanation: "Weber's concept of the 'iron cage' describes how modern rationalized systems, while efficient, constrain human freedom and creativity. Bureaucratic structures prioritize measurable outcomes and standardized procedures, often at the expense of individual autonomy and meaningful work."
  },
  {
    title: "Digital Age Alienation",
    question: "Your phone knows more about you than your friends do. Apps track everything you do and sell that info to advertisers. Algorithms decide what you see. What's really going on?",
    options: [
      "Democratic access to information and communication",
      "Surveillance capitalism extracting value from human experience",
      "Natural market evolution toward digital efficiency",
      "Weber's Protestant ethic adapted to the digital age"
    ],
    correctAnswer: 1,
    explanation: "This demonstrates surveillance capitalism, where technology companies extract economic value from human behavior and experience. Personal data becomes a commodity, with algorithms designed to capture attention and generate profit through targeted advertising and behavioral modification."
  },
  {
    title: "Alternative Economic Models",
    question: "A group of workers starts their own business where everyone gets an equal say in decisions and shares the profits equally. What problem does this solve?",
    options: [
      "It eliminates all forms of work-related stress",
      "It gives workers control over their labor and its products",
      "It guarantees higher wages than traditional companies",
      "It prevents technological advancement from affecting jobs"
    ],
    correctAnswer: 1,
    explanation: "Worker cooperatives address alienation by restoring democratic control over the production process. When workers collectively own and manage their enterprise, they maintain agency over their labor and retain the economic value they generate, reducing the disconnect between effort and reward."
  },
  {
    title: "Environmental Consequences",
    question: "You buy a shirt from a fast fashion store. It falls apart after three washes, so you buy another one. The old one ends up in a landfill. What's the real game here?",
    options: [
      "Efficient market response to consumer preferences",
      "How consumerism prioritizes profit over sustainability",
      "Natural evolution of manufacturing technology",
      "Democratic consumer choice in action"
    ],
    correctAnswer: 1,
    explanation: "Fast fashion employs planned obsolescence to maximize consumption cycles. This business model prioritizes short-term profits while externalizing environmental and social costs. The apparent affordability masks the true cost of resource depletion and waste generation."
  },
  {
    title: "Critical Thinking About Advertising",
    question: "A car ad shows attractive people living amazing lives, suggesting you'll be like them if you buy their luxury SUV. How should you think about this?",
    options: [
      "Accept it as informational content about product features",
      "Question what psychological needs the ad exploits and what it doesn't tell you",
      "Focus solely on whether the price is competitive",
      "Consider only the technical specifications of the vehicle"
    ],
    correctAnswer: 1,
    explanation: "Critical media literacy involves analyzing the psychological appeals used in advertising and identifying omitted information. Effective advertisements often sell aspirational identities rather than products, exploiting emotional vulnerabilities while obscuring practical consequences such as debt or environmental impact."
  },
  {
    title: "Gig Economy Analysis",
    question: "Uber drivers provide their own car, gas, and maintenance, have zero job security, and get no benefits. Meanwhile, Uber makes billions. What kind of setup is this?",
    options: [
      "Entrepreneurial opportunity and flexible work arrangement",
      "Platform capitalism shifting risks to workers while extracting value",
      "Natural technological evolution improving transportation",
      "Democratic access to income-generating opportunities"
    ],
    correctAnswer: 1,
    explanation: "This exemplifies platform capitalism, where companies extract value while transferring operational risks to workers classified as independent contractors. Despite maintaining control over pricing and operational parameters, platforms avoid traditional employer responsibilities, creating asymmetrical power relationships."
  },
  {
    title: "Social Media and Community",
    question: "Your grandparents knew their neighbors. You know your Instagram followers. What's been lost in this shift?",
    options: [
      "Technological progress improving human connection",
      "Substitution of genuine community with commodified interaction",
      "Natural evolution toward more efficient communication",
      "Democratic expansion of social networking opportunities"
    ],
    correctAnswer: 1,
    explanation: "Digital platforms often substitute authentic community bonds with commodified social interactions. These platforms prioritize user engagement metrics over meaningful relationship building, transforming social connections into data for algorithmic optimization and advertising revenue."
  },
  {
    title: "Solutions and Alternatives",
    question: "Your city lets residents vote directly on how to spend tax money instead of leaving it all to politicians and bureaucrats. What does this fix?",
    options: [
      "Economic efficiency through market mechanisms",
      "Democratic alienation by giving people control over decisions affecting them",
      "Technological innovation in government services",
      "Individual consumer choice in public services"
    ],
    correctAnswer: 1,
    explanation: "Participatory budgeting addresses democratic alienation by enabling direct citizen involvement in resource allocation decisions. This mechanism transforms residents from passive recipients of policy into active participants in governance, strengthening democratic legitimacy and civic engagement."
  }
];

// Book recommendations based on score ranges
const bookRecommendations = {
  excellent: [
    { title: "The Age of Surveillance Capitalism", author: "Shoshana Zuboff" },
    { title: "Debt: The First 5,000 Years", author: "David Graeber" },
    { title: "Doughnut Economics", author: "Kate Raworth" }
  ],
  good: [
    { title: "No Logo", author: "Naomi Klein" },
    { title: "Bullshit Jobs", author: "David Graeber" },
    { title: "The Shock Doctrine", author: "Naomi Klein" }
  ],
  needsImprovement: [
    { title: "The Communist Manifesto", author: "Karl Marx" },
    { title: "The Theory of the Leisure Class", author: "Thorstein Veblen" },
    { title: "This Changes Everything", author: "Naomi Klein" }
  ]
};

// Quiz state
let currentQuestionIndex = 0;
let userAnswers = [];
let quizScore = 0;
let quizStarted = false;

// DOM elements
let startButton;
let quizIntro;
let quizContainer;
let quizResults;
let progressFill;
let questionNumber;
let totalCount;
let questionTitle;
let questionText;
let quizOptions;
let quizExplanation;
let explanationText;
let prevButton;
let nextButton;
let submitButton;
let currentQuestionSpan;
let currentScoreSpan;

// Initialize the quiz
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupEventListeners();
  updateStats();
});

function initializeElements() {
  startButton = document.getElementById('start-quiz');
  quizIntro = document.getElementById('quiz-intro');
  quizContainer = document.getElementById('quiz-container');
  quizResults = document.getElementById('quiz-results');
  progressFill = document.getElementById('progress-fill');
  questionNumber = document.getElementById('question-number');
  totalCount = document.getElementById('total-count');
  questionTitle = document.getElementById('question-title');
  questionText = document.getElementById('question-text');
  quizOptions = document.getElementById('quiz-options');
  quizExplanation = document.getElementById('quiz-explanation');
  explanationText = document.getElementById('explanation-text');
  prevButton = document.getElementById('prev-question');
  nextButton = document.getElementById('next-question');
  submitButton = document.getElementById('submit-quiz');
  currentQuestionSpan = document.getElementById('current-question');
  currentScoreSpan = document.getElementById('current-score');
}

function setupEventListeners() {
  startButton.addEventListener('click', startQuiz);
  prevButton.addEventListener('click', previousQuestion);
  nextButton.addEventListener('click', nextQuestion);
  submitButton.addEventListener('click', submitQuiz);
  
  document.getElementById('retake-quiz').addEventListener('click', retakeQuiz);
  document.getElementById('share-results').addEventListener('click', shareResults);
}

function startQuiz() {
  quizStarted = true;
  currentQuestionIndex = 0;
  userAnswers = [];
  quizScore = 0;
  
  quizIntro.style.display = 'none';
  quizContainer.style.display = 'block';
  quizResults.style.display = 'none';
  
  loadQuestion();
}

function loadQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  
  // Update progress
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
  progressFill.style.width = progress + '%';
  
  // Update question counter
  questionNumber.textContent = currentQuestionIndex + 1;
  totalCount.textContent = quizQuestions.length;
  
  // Update question content
  questionTitle.textContent = question.title;
  questionText.textContent = question.question;
  
  // Create options
  quizOptions.innerHTML = '';
  question.options.forEach((option, index) => {
    const optionCard = document.createElement('div');
    optionCard.className = 'option-card';
    optionCard.dataset.optionIndex = index;
    
    optionCard.innerHTML = `
      <div class="option-letter">${String.fromCharCode(65 + index)}</div>
      <div class="option-text">${option}</div>
    `;
    
    optionCard.addEventListener('click', () => selectOption(index));
    quizOptions.appendChild(optionCard);
  });
  
  // Hide explanation initially
  quizExplanation.style.display = 'none';
  
  // Update button visibility
  prevButton.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
  nextButton.style.display = 'none';
  submitButton.style.display = 'none';
  
  // Select previously chosen answer if returning to question
  if (userAnswers[currentQuestionIndex] !== undefined) {
    selectOption(userAnswers[currentQuestionIndex], true);
    showExplanation();
  }
  
  updateStats();
}

function selectOption(optionIndex, skipExplanation = false) {
  // Remove previous selections
  document.querySelectorAll('.option-card').forEach(card => {
    card.classList.remove('selected', 'correct', 'incorrect');
  });
  
  // Mark selected option
  const selectedCard = document.querySelector(`[data-option-index="${optionIndex}"]`);
  selectedCard.classList.add('selected');
  
  // Store answer
  userAnswers[currentQuestionIndex] = optionIndex;
  
  if (!skipExplanation) {
    // Show correct answer after a brief delay
    setTimeout(() => {
      showExplanation();
    }, 500);
  }
}

function showExplanation() {
  const question = quizQuestions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];
  const correctAnswer = question.correctAnswer;
  
  // Highlight correct and incorrect answers
  document.querySelectorAll('.option-card').forEach((card, index) => {
    if (index === correctAnswer) {
      card.classList.add('correct');
    } else if (index === userAnswer && userAnswer !== correctAnswer) {
      card.classList.add('incorrect');
    }
  });
  
  // Show explanation
  explanationText.textContent = question.explanation;
  quizExplanation.style.display = 'block';
  
  // Show appropriate navigation button
  if (currentQuestionIndex < quizQuestions.length - 1) {
    nextButton.style.display = 'inline-block';
  } else {
    submitButton.style.display = 'inline-block';
  }
  
  updateStats();
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
}

function submitQuiz() {
  calculateScore();
  showResults();
  saveQuizResults();
}

function calculateScore() {
  quizScore = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === quizQuestions[index].correctAnswer) {
      quizScore++;
    }
  });
}

function showResults() {
  quizContainer.style.display = 'none';
  quizResults.style.display = 'block';
  
  const percentage = Math.round((quizScore / quizQuestions.length) * 100);
  document.getElementById('final-score').textContent = percentage + '%';
  
  // Generate feedback
  const feedback = generateFeedback(percentage);
  const feedbackContainer = document.getElementById('results-feedback');
  feedbackContainer.className = `results-feedback ${feedback.class}`;
  feedbackContainer.innerHTML = `
    <div class="feedback-title">${feedback.title}</div>
    <div class="feedback-text">${feedback.text}</div>
  `;
  
  // Generate breakdown
  generateBreakdown();
  
  // Generate book recommendations
  generateBookRecommendations(percentage);
}

function generateFeedback(percentage) {
  if (percentage >= 80) {
    return {
      class: 'excellent',
      title: 'Excellent Critical Thinking!',
      text: 'You demonstrate a strong understanding of consumerism, alienation, and economic systems. You can identify the underlying structures and power dynamics that shape modern society. Consider diving deeper into advanced texts on political economy and social theory.'
    };
  } else if (percentage >= 60) {
    return {
      class: 'good',
      title: 'Good Analytical Skills',
      text: 'You grasp many key concepts about consumerism and economic systems. With some additional reading and reflection, you can develop even stronger critical thinking skills. Focus on connecting theoretical concepts to real-world examples.'
    };
  } else {
    return {
      class: 'needs-improvement',
      title: 'Room for Growth',
      text: 'This is a great starting point for developing critical thinking about economic systems. Consider beginning with introductory texts that explain the basics of how consumerism and capitalism shape daily life. The journey of understanding these complex topics takes time.'
    };
  }
}

function generateBreakdown() {
  const breakdownContainer = document.getElementById('results-breakdown');
  breakdownContainer.innerHTML = '<h4 style="color: #f1c40f; margin-bottom: 1rem;">Question Breakdown</h4>';
  
  userAnswers.forEach((answer, index) => {
    const question = quizQuestions[index];
    const isCorrect = answer === question.correctAnswer;
    
    const breakdownItem = document.createElement('div');
    breakdownItem.className = 'breakdown-item';
    breakdownItem.innerHTML = `
      <div class="breakdown-question">${index + 1}. ${question.title}</div>
      <div class="breakdown-result ${isCorrect ? 'correct' : 'incorrect'}">
        ${isCorrect ? 'Correct' : 'Incorrect'}
      </div>
    `;
    
    breakdownContainer.appendChild(breakdownItem);
  });
}

function generateBookRecommendations(percentage) {
  const recommendationsContainer = document.getElementById('recommended-books');
  let books;
  
  if (percentage >= 80) {
    books = bookRecommendations.excellent;
  } else if (percentage >= 60) {
    books = bookRecommendations.good;
  } else {
    books = bookRecommendations.needsImprovement;
  }
  
  books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.className = 'recommended-book';
    bookElement.innerHTML = `
      <div class="recommended-book-title">${book.title}</div>
      <div class="recommended-book-author">${book.author}</div>
    `;
    recommendationsContainer.appendChild(bookElement);
  });
}

function retakeQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  quizScore = 0;
  startQuiz();
}

function shareResults() {
  const percentage = Math.round((quizScore / quizQuestions.length) * 100);
  const text = `I scored ${percentage}% on the Critical Thinking Quiz about consumerism and economic systems! Test your understanding at: ${window.location.href}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Critical Thinking Quiz Results',
      text: text,
      url: window.location.href
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
      alert('Results copied to clipboard!');
    }).catch(() => {
      // Ultimate fallback: show modal with text
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.8); display: flex; align-items: center;
        justify-content: center; z-index: 1000;
      `;
      modal.innerHTML = `
        <div style="background: var(--background-card); padding: 2rem; border-radius: 8px; max-width: 500px;">
          <h3 style="color: #f1c40f; margin-bottom: 1rem;">Share Your Results</h3>
          <p style="color: #ecf0f1; margin-bottom: 1rem;">Copy this text to share:</p>
          <textarea readonly style="width: 100%; height: 100px; background: var(--background-dark); color: #ecf0f1; border: 1px solid #4a5568; border-radius: 4px; padding: 0.5rem; margin-bottom: 1rem;">${text}</textarea>
          <button onclick="this.parentElement.parentElement.remove()" style="background: #e67e22; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">Close</button>
        </div>
      `;
      document.body.appendChild(modal);
    });
  }
}

function updateStats() {
  currentQuestionSpan.textContent = userAnswers.filter(answer => answer !== undefined).length;
  
  const answeredCorrectly = userAnswers.filter((answer, index) => 
    answer !== undefined && answer === quizQuestions[index].correctAnswer
  ).length;
  
  const percentage = userAnswers.length > 0 ? Math.round((answeredCorrectly / userAnswers.length) * 100) : 0;
  currentScoreSpan.textContent = percentage + '%';
}

function saveQuizResults() {
  const results = {
    score: quizScore,
    totalQuestions: quizQuestions.length,
    percentage: Math.round((quizScore / quizQuestions.length) * 100),
    date: new Date().toISOString(),
    answers: userAnswers
  };
  
  try {
    const existingResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    existingResults.push(results);
    localStorage.setItem('quizResults', JSON.stringify(existingResults));
  } catch (error) {
    console.error('Error saving quiz results:', error);
  }
}

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    quizQuestions,
    calculateScore,
    generateFeedback
  };
}