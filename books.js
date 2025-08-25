// My personal book recommendations - these changed my thinking about economics and society
const booksILove = {
  'critical-theory': [
    {
      isbn: '9780140447576',
      title: 'The Communist Manifesto',
      author: 'Karl Marx and Friedrich Engels',
      myThoughts: 'This was my entry point into Marx. It\'s quite short but covers the main ideas about class struggle and capitalism\'s contradictions. Worth reading to understand the historical context.',
      difficulty: 'Easy start'
    },
    {
      isbn: '9780486204215', 
      title: 'The Protestant Ethic and the Spirit of Capitalism',
      author: 'Max Weber',
      myThoughts: 'Weber traces how Protestant religious ideas about hard work became embedded in capitalist culture. Helps explain why many people feel guilty about not being constantly busy or productive.',
      difficulty: 'Takes some focus'
    },
    {
      isbn: '9780140444292',
      title: 'Das Kapital', 
      author: 'Karl Marx',
      myThoughts: 'Marx\'s detailed analysis of how capitalism functions. It\'s dense and can be challenging, but contains his most thorough explanation of concepts like surplus value and alienation.',
      difficulty: 'Definitely challenging'
    },
    {
      isbn: '9780140447057',
      title: 'The Theory of the Leisure Class',
      author: 'Thorstein Veblen', 
      myThoughts: 'Veblen introduced the concept of conspicuous consumption here. His observations about status-driven spending remain relevant when looking at modern consumer behavior.',
      difficulty: 'Pretty accessible'
    }
  ],
  'modern-critique': [
    {
      isbn: '9780393317879',
      title: 'No Logo',
      author: 'Naomi Klein',
      myThoughts: 'Klein shows how brands took over everything - not just products but whole cultures and public spaces. Written in the late 90s but she basically predicted what we\'re dealing with now.',
      difficulty: 'Easy read, hard truths'
    },
    {
      isbn: '9780307279187', 
      title: 'The Shock Doctrine',
      author: 'Naomi Klein',
      myThoughts: 'Klein documents how economic crises and disasters are used to implement free-market policies that wouldn\'t otherwise be accepted. Provides historical examples from Chile to Iraq.',
      difficulty: 'Intense but important'
    },
    {
      isbn: '9780374533526',
      title: 'The Age of Surveillance Capitalism', 
      author: 'Shoshana Zuboff',
      myThoughts: 'Zuboff breaks down how tech companies turn your life into their product. Heavy academic stuff but worth the effort to understand what\'s really happening.',
      difficulty: 'Academic but worth it'
    },
    {
      isbn: '9781501172441',
      title: 'Bullshit Jobs',
      author: 'David Graeber',
      myThoughts: 'Graeber argues that many modern jobs serve no useful social function. Explores the psychological and social effects of meaningless work in contemporary capitalism.',
      difficulty: 'Super readable'
    }
  ],
  'alternative-economics': [
    {
      isbn: '9781617230035',
      title: 'Doughnut Economics',
      author: 'Kate Raworth', 
      myThoughts: 'Raworth proposes an economic model focused on human well-being within ecological limits, rather than GDP growth. Accessible introduction to alternative economic thinking.',
      difficulty: 'Surprisingly approachable'
    },
    {
      isbn: '9781784780937',
      title: 'Debt: The First 5,000 Years',
      author: 'David Graeber',
      myThoughts: 'Graeber challenges common assumptions about money, markets, and debt by examining their actual historical development. Argues that credit systems preceded barter economies.',
      difficulty: 'Long but fascinating'
    },
    {
      isbn: '9781935362234', 
      title: 'The Value of Everything',
      author: 'Mariana Mazzucato',
      myThoughts: 'Mazzucato asks who actually creates value in the economy versus who just takes it. Makes you question a lot of assumptions about how business works.',
      difficulty: 'Some economics background helps'
    },
    {
      isbn: '9781583673522',
      title: 'The Solidarity Economy Alternative', 
      author: 'Vishwas Satgar',
      myThoughts: 'Explores cooperative and community-based economic models as alternatives to traditional capitalism. Includes examples of solidarity economy initiatives from different regions.',
      difficulty: 'Academic but inspiring'
    }
  ],
  'environmental': [
    {
      isbn: '9781501127809',
      title: 'The Sixth Extinction',
      author: 'Elizabeth Kolbert',
      myThoughts: 'Kolbert travels around documenting how humans are causing mass extinction. Great science writing that shows how local changes add up to global disaster.',
      difficulty: 'Accessible science writing'
    },
    {
      isbn: '9780374277925',
      title: 'The Ministry for the Future',
      author: 'Kim Stanley Robinson', 
      myThoughts: 'Robinson imagines detailed scenarios for addressing climate change through economic and political reforms. Science fiction that engages seriously with policy questions.',
      difficulty: 'Fiction but dense with ideas'
    },
    {
      isbn: '9780143127741',
      title: 'This Changes Everything',
      author: 'Naomi Klein',
      myThoughts: 'Klein argues that addressing climate change requires fundamental changes to economic systems, not just technological solutions. Connects environmental and economic justice issues.',
      difficulty: 'Clear but comprehensive'
    },
    {
      isbn: '9780374159122',
      title: 'The Uninhabitable Earth', 
      author: 'David Wallace-Wells',
      myThoughts: 'Wallace-Wells presents detailed scenarios of climate change impacts on human systems. Focuses on consequences rather than solutions, which can be challenging to process.',
      difficulty: 'Emotionally challenging'
    }
  ]
};

// Using Open Library API to get book info
const OPEN_LIBRARY_API = 'https://openlibrary.org';

// Wait for page to load then set everything up
document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.getElementById('search-btn');
  const searchBox = document.getElementById('book-search');
  
  // Load my book recommendations
  loadMyBooks();
  
  // Set up search
  searchBtn.addEventListener('click', searchForBooks);
  searchBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchForBooks();
    }
  });
});

// Load all my book recommendations
async function loadMyBooks() {
  showLoading(true);
  
  // Go through each section and load the books
  const sections = [
    { key: 'critical-theory', id: 'critical-theory-books' },
    { key: 'modern-critique', id: 'modern-critique-books' },
    { key: 'alternative-economics', id: 'alternative-economics-books' },
    { key: 'environmental', id: 'environmental-books' }
  ];
  
  for (let section of sections) {
    await loadBooksForSection(section.key, section.id);
  }
  
  showLoading(false);
}

async function loadBooksForSection(sectionName, containerId) {
  const container = document.getElementById(containerId);
  const books = booksILove[sectionName];
  
  if (!container || !books) {
    console.log('Missing container or books for section:', sectionName);
    return;
  }
  
  console.log(`Loading ${books.length} books for section: ${sectionName}`);
  
  // Load each book one by one
  for (let book of books) {
    try {
      // Always ensure we have an Open Library link
      const bookWithLink = {
        ...book,
        openLibraryLink: `https://openlibrary.org/isbn/${book.isbn}`
      };
      
      // Try to get book info from API
      const apiData = await getBookFromAPI(book.isbn);
      if (apiData) {
        const completeBook = { ...bookWithLink, ...apiData };
        console.log('Book loaded with API data:', completeBook.title, 'Link:', completeBook.openLibraryLink);
        const bookElement = makeBookCard(completeBook);
        container.appendChild(bookElement);
      } else {
        // Just use what we have if API fails
        console.log('API failed for book:', book.title, 'Using basic data with ISBN:', book.isbn);
        const bookElement = makeBookCard(bookWithLink);
        container.appendChild(bookElement);
      }
    } catch (error) {
      console.log('Error loading book:', book.title, error);
      // Still show the book with basic info but ensure we have the link
      const bookWithLink = {
        ...book,
        openLibraryLink: `https://openlibrary.org/isbn/${book.isbn}`
      };
      const bookElement = makeBookCard(bookWithLink);
      container.appendChild(bookElement);
    }
    
    // Small delay so it doesn't hammer the API
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`Finished loading section: ${sectionName}`);
}

// Get book details from Open Library
async function getBookFromAPI(isbn) {
  try {
    // Set a timeout to avoid hanging on CORS issues
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const response = await fetch(`${OPEN_LIBRARY_API}/isbn/${isbn}.json`, {
      signal: controller.signal,
      mode: 'cors',
      cache: 'no-cache'
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      console.log('API request failed:', response.status);
      return null;
    }
    
    const bookData = await response.json();
    
    // Try to get the description from the work (but don't let it block)
    let description = 'No description available';
    if (bookData.works && bookData.works[0]) {
      try {
        const workController = new AbortController();
        const workTimeoutId = setTimeout(() => workController.abort(), 3000);
        
        const workResponse = await fetch(`${OPEN_LIBRARY_API}${bookData.works[0].key}.json`, {
          signal: workController.signal,
          mode: 'cors'
        });
        
        clearTimeout(workTimeoutId);
        
        if (workResponse.ok) {
          const work = await workResponse.json();
          if (work.description) {
            description = typeof work.description === 'string' 
              ? work.description 
              : work.description.value;
          }
        }
      } catch (e) {
        console.log('Could not fetch work description:', e.name);
      }
    }
    
    return {
      fullTitle: bookData.title,
      publishYear: bookData.publish_date,
      description: description,
      coverImage: `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`,
      openLibraryLink: `https://openlibrary.org/isbn/${isbn}`
    };
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('API request timed out for ISBN:', isbn);
    } else {
      console.log('Error getting book from API:', error.name, error.message);
    }
    return null;
  }
}

// Search for books
async function searchForBooks() {
  const searchBox = document.getElementById('book-search');
  const query = searchBox.value.trim();
  
  if (!query) return;
  
  showLoading(true);
  const resultsSection = document.getElementById('search-results');
  const resultsGrid = document.getElementById('search-results-grid');
  
  resultsSection.style.display = 'block';
  resultsGrid.innerHTML = '';
  
  try {
    const searchUrl = `${OPEN_LIBRARY_API}/search.json?q=${encodeURIComponent(query)}&limit=10`;
    
    // Add timeout for search requests too
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout for search
    
    const response = await fetch(searchUrl, {
      signal: controller.signal,
      mode: 'cors'
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`Search failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    const books = data.docs || [];
    
    if (books.length === 0) {
      resultsGrid.innerHTML = '<div class="error-message">No books found. Try a different search.</div>';
    } else {
      books.forEach(book => {
        const bookElement = makeSearchResultCard(book);
        resultsGrid.appendChild(bookElement);
      });
    }
    
  } catch (error) {
    console.log('Search error:', error.name, error.message);
    if (error.name === 'AbortError') {
      resultsGrid.innerHTML = '<div class="error-message">Search timed out. Please try again.</div>';
    } else {
      resultsGrid.innerHTML = '<div class="error-message">Search failed. Please check your connection and try again.</div>';
    }
  }
  
  showLoading(false);
}

function makeSearchResultCard(book) {
  const title = book.title || 'Unknown Title';
  const author = book.author_name ? book.author_name.join(', ') : 'Unknown Author';
  const year = book.first_publish_year || 'Unknown Year';
  const isbn = book.isbn && book.isbn[0] ? book.isbn[0] : null;
  const coverUrl = isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg` : null;
  
  // Always try to provide an Open Library link
  let linkUrl = null;
  if (book.key) {
    linkUrl = `https://openlibrary.org${book.key}`;
  } else if (isbn) {
    linkUrl = `https://openlibrary.org/isbn/${isbn}`;
  }
  
  return makeBookCard({
    title: title,
    author: author,
    publishYear: year,
    myThoughts: 'Found through search. May provide additional perspective on these topics.',
    difficulty: 'Unknown',
    coverImage: coverUrl,
    openLibraryLink: linkUrl,
    isbn: isbn
  });
}

// Make a book card element
function makeBookCard(book) {
  const card = document.createElement('div');
  card.className = 'book-card';
  
  // Get the basic info
  const title = book.title || book.fullTitle || 'Unknown Title';
  const author = book.author || 'Unknown Author';
  const year = book.publishYear || 'Unknown Year';
  
  // Handle cover image
  const defaultCover = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgODAgMTIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMzQ0OTVlIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjNGE1NTY4IiByeD0iNCIvPgo8dGV4dCB4PSI0MCIgeT0iNTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iI2VjZjBmMSI+Tm88L3RleHQ+Cjx0ZXh0IHg9IjQwIiB5PSI3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSIjZWNmMGYxIj5Db3ZlcjwvdGV4dD4KPHRleHQgeD0iNDAiIHk9Ijg1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNlY2YwZjEiPkF2YWlsYWJsZTwvdGV4dD4KPC9zdmc+';
  const coverImage = book.coverImage || defaultCover;
  
  // Trim description if it's too long
  let description = book.description || 'No description available';
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }
  
  // Build the HTML
  let html = `
    <div class="book-header">
      <img src="${coverImage}" alt="${title} cover" class="book-cover" 
           onerror="this.src='${defaultCover}'" />
      <div class="book-info">
        <div class="book-title">${title}</div>
        <div class="book-author">${author}</div>
        <div class="book-year">${year}</div>
      </div>
    </div>
    
    <div class="book-description">${description}</div>
  `;
  
  // Add my thoughts if this is one of my recommendations
  if (book.myThoughts) {
    html += `
      <div class="curator-note">
        <div class="curator-note-title">My thoughts:</div>
        <div class="curator-note-text">${book.myThoughts}</div>
      </div>
    `;
  }
  
  // Add links
  html += '<div class="book-links">';
  
  // Always show Open Library link - either from API or construct it from ISBN
  if (book.openLibraryLink) {
    console.log('Using Open Library link from book data:', book.openLibraryLink);
    html += `<a href="${book.openLibraryLink}" target="_blank" class="book-link book-link--primary">Open Library</a>`;
  } else if (book.isbn) {
    const fallbackLink = `https://openlibrary.org/isbn/${book.isbn}`;
    console.log('Creating fallback Open Library link:', fallbackLink);
    html += `<a href="${fallbackLink}" target="_blank" class="book-link book-link--primary">Open Library</a>`;
  } else {
    console.log('No ISBN available for Open Library link:', book.title);
  }
  
  if (book.isbn) {
    html += `<a href="https://www.worldcat.org/isbn/${book.isbn}" target="_blank" class="book-link book-link--secondary">Find in Library</a>`;
    html += `<a href="https://www.thriftbooks.com/browse/?b.search=${book.isbn}" target="_blank" class="book-link book-link--secondary">Used Books</a>`;
  }
  
  if (title && title !== 'Unknown Title') {
    html += `<a href="https://www.goodreads.com/search?q=${encodeURIComponent(title)}" target="_blank" class="book-link book-link--secondary">Reviews</a>`;
  }
  
  html += '</div>';
  
  card.innerHTML = html;
  return card;
}

// Simple loading indicator
function showLoading(show) {
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.display = show ? 'block' : 'none';
  }
}