// Mock data for the EduCore application
// User data
export const currentUser = {
  id: 'user123',
  firstName: 'Emma',
  lastName: 'Wilson',
  email: 'emma.wilson@example.com',
  role: 'student',
  avatarUrl: '/img/education/w1.jpg',
  enrolledCourses: ['course1', 'course2', 'course3'],
  completedCourses: ['course4', 'course5'],
  weeklyLearningHours: 12.5,
  totalLearningHours: 156,
  notifications: [
    {
      id: 'notif1',
      message: 'New quiz available in Web Development',
      read: false,
    },
    {
      id: 'notif2',
      message: 'Your certificate for Python Basics is ready',
      read: false,
    },
    {
      id: 'notif3',
      message: 'Instructor replied to your question',
      read: false,
    },
  ],
};
// Courses data
export const courses = [
  {
    id: 'course1',
    title: 'Web Development Fundamentals',
    description:
      'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
    thumbnail: '/img/education/course1.jpg',
    instructor: 'Michael Johnson',
    instructorAvatar: '/img/education/m1.jpg',
    rating: 4.8,
    reviewCount: 1245,
    duration: '8 weeks',
    lessonsCount: 24,
    progress: 65,
    enrolled: 3450,
    tags: ['Web', 'Beginner', 'Certification'],
    category: 'Development',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'module1',
        title: 'Introduction to HTML',
        lessons: [
          {
            id: 'lesson1',
            title: 'HTML Structure',
            duration: '10:15',
            completed: true,
          },
          {
            id: 'lesson2',
            title: 'Text Elements',
            duration: '8:45',
            completed: true,
          },
          {
            id: 'lesson3',
            title: 'Links and Images',
            duration: '12:30',
            completed: true,
          },
        ],
      },
      {
        id: 'module2',
        title: 'CSS Styling',
        lessons: [
          {
            id: 'lesson4',
            title: 'CSS Selectors',
            duration: '11:20',
            completed: true,
          },
          {
            id: 'lesson5',
            title: 'Box Model',
            duration: '9:55',
            completed: false,
          },
          {
            id: 'lesson6',
            title: 'Flexbox Layout',
            duration: '14:30',
            completed: false,
          },
        ],
      },
      {
        id: 'module3',
        title: 'JavaScript Basics',
        lessons: [
          {
            id: 'lesson7',
            title: 'Variables and Data Types',
            duration: '10:45',
            completed: false,
          },
          {
            id: 'lesson8',
            title: 'Functions',
            duration: '13:20',
            completed: false,
          },
          {
            id: 'lesson9',
            title: 'DOM Manipulation',
            duration: '15:10',
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 'course2',
    title: 'Data Science Essentials',
    description:
      'Master the fundamentals of data analysis, visualization, and machine learning.',
    thumbnail: '/img/education/course2.jpg',
    instructor: 'Sarah Chen',
    instructorAvatar: '/img/education/w2.jpg',
    rating: 4.9,
    reviewCount: 982,
    duration: '10 weeks',
    lessonsCount: 32,
    progress: 25,
    enrolled: 2890,
    tags: ['Data', 'Intermediate', 'Certification'],
    category: 'Data Science',
    difficulty: 'Intermediate',
    modules: [
      {
        id: 'module1',
        title: 'Introduction to Data Science',
        lessons: [
          {
            id: 'lesson1',
            title: 'What is Data Science?',
            duration: '8:25',
            completed: true,
          },
          {
            id: 'lesson2',
            title: 'Data Science Tools',
            duration: '11:45',
            completed: true,
          },
        ],
      },
      {
        id: 'module2',
        title: 'Data Analysis with Python',
        lessons: [
          {
            id: 'lesson3',
            title: 'NumPy Basics',
            duration: '12:30',
            completed: false,
          },
          {
            id: 'lesson4',
            title: 'Pandas for Data Analysis',
            duration: '14:15',
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 'course3',
    title: 'UX/UI Design Principles',
    description:
      'Learn to create beautiful, intuitive interfaces that users love.',
    thumbnail: '/img/education/course3.jpg',
    instructor: 'David Lee',
    instructorAvatar: '/img/education/m2.jpg',
    rating: 4.7,
    reviewCount: 756,
    duration: '6 weeks',
    lessonsCount: 18,
    progress: 10,
    enrolled: 1950,
    tags: ['Design', 'Beginner', 'Free'],
    category: 'Design',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'module1',
        title: 'Design Fundamentals',
        lessons: [
          {
            id: 'lesson1',
            title: 'Color Theory',
            duration: '9:15',
            completed: true,
          },
          {
            id: 'lesson2',
            title: 'Typography',
            duration: '7:45',
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: 'course4',
    title: 'Machine Learning Fundamentals',
    description:
      'Get started with machine learning algorithms and practical applications.',
    thumbnail: '/img/education/course4.jpg',
    instructor: 'Robert Chen',
    instructorAvatar: '/img/education/m3.jpg',
    rating: 4.9,
    reviewCount: 1120,
    duration: '12 weeks',
    lessonsCount: 36,
    progress: 100,
    enrolled: 4200,
    tags: ['AI', 'Advanced', 'Certification'],
    category: 'Data Science',
    difficulty: 'Advanced',
    completed: true,
    completionDate: '2023-09-15',
  },
  {
    id: 'course5',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native.',
    thumbnail: '/img/education/course5.jpg',
    instructor: 'Jessica Wang',
    instructorAvatar: '/img/education/w3.jpg',
    rating: 4.6,
    reviewCount: 892,
    duration: '9 weeks',
    lessonsCount: 27,
    progress: 100,
    enrolled: 2760,
    tags: ['Mobile', 'Intermediate', 'Certification'],
    category: 'Development',
    difficulty: 'Intermediate',
    completed: true,
    completionDate: '2023-07-22',
  },
  {
    id: 'course6',
    title: 'Advanced JavaScript Patterns',
    description: 'Master advanced JavaScript concepts and design patterns.',
    thumbnail: '/img/education/course6.jpg',
    instructor: 'Caren Smith',
    instructorAvatar: '/img/education/w4.jpg',
    rating: 4.8,
    reviewCount: 645,
    duration: '7 weeks',
    lessonsCount: 21,
    enrolled: 1850,
    tags: ['Web', 'Advanced', 'Certification'],
    category: 'Development',
    difficulty: 'Advanced',
  },
];
// Quiz data
export const quizzes = [
  {
    id: 'quiz1',
    courseId: 'course1',
    title: 'HTML & CSS Fundamentals',
    description: 'Test your knowledge of HTML structure and CSS styling',
    timeLimit: 15,
    // minutes
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Which HTML tag is used to create a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<url>'],
        correctAnswer: '<a>',
        explanation:
          'The <a> (anchor) tag is used to create hyperlinks in HTML.',
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'CSS stands for Cascading Style Sheets.',
        correctAnswer: true,
        explanation:
          'CSS (Cascading Style Sheets) is used to style and layout web pages.',
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'Which CSS property is used to change the text color?',
        options: ['text-color', 'font-color', 'color', 'text-style'],
        correctAnswer: 'color',
        explanation:
          "The 'color' property is used to specify the color of text.",
      },
    ],
  },
  {
    id: 'quiz2',
    courseId: 'course2',
    title: 'Python Data Structures',
    description:
      'Test your knowledge of Python lists, dictionaries, and tuples',
    timeLimit: 20,
    // minutes
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Which of these is NOT a Python data structure?',
        options: ['List', 'Dictionary', 'Queue', 'Array'],
        correctAnswer: 'Array',
        explanation:
          "Python doesn't have a native Array data structure. It uses Lists instead.",
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Python dictionaries are ordered collections in Python 3.7+.',
        correctAnswer: true,
        explanation:
          'Since Python 3.7, dictionaries maintain the insertion order of items.',
      },
    ],
  },
];
// Activity data for charts
export const activityData = [
  {
    day: 'Mon',
    hours: 2.5,
  },
  {
    day: 'Tue',
    hours: 1.8,
  },
  {
    day: 'Wed',
    hours: 3.2,
  },
  {
    day: 'Thu',
    hours: 2.0,
  },
  {
    day: 'Fri',
    hours: 1.5,
  },
  {
    day: 'Sat',
    hours: 4.0,
  },
  {
    day: 'Sun',
    hours: 3.5,
  },
];
// Certification data
export const certifications = [
  {
    id: 'cert1',
    courseId: 'course4',
    title: 'Machine Learning Fundamentals',
    issueDate: 'September 15, 2023',
    expiryDate: 'September 15, 2025',
    credentialId: 'ML-FUND-2023-1234',
    issuer: 'EduCore Academy',
    skills: [
      'Python',
      'Scikit-learn',
      'Data Analysis',
      'Machine Learning Algorithms',
    ],
  },
  {
    id: 'cert2',
    courseId: 'course5',
    title: 'Mobile App Development with React Native',
    issueDate: 'July 22, 2023',
    expiryDate: 'July 22, 2025',
    credentialId: 'RN-DEV-2023-5678',
    issuer: 'EduCore Academy',
    skills: ['JavaScript', 'React', 'React Native', 'Mobile Development'],
  },
];
// Achievement data
export const achievements = [
  {
    id: 'ach1',
    title: 'First Course Completed',
    description: 'Completed your first course on EduCore',
    icon: '🏆',
    dateEarned: 'July 22, 2023',
  },
  {
    id: 'ach2',
    title: 'Perfect Quiz Score',
    description: 'Scored 100% on a quiz',
    icon: '🎯',
    dateEarned: 'August 5, 2023',
  },
  {
    id: 'ach3',
    title: '5-Day Streak',
    description: 'Logged in and studied for 5 consecutive days',
    icon: '🔥',
    dateEarned: 'September 10, 2023',
  },
  {
    id: 'ach4',
    title: 'Helpful Peer',
    description: 'Answered 10 questions from other students',
    icon: '🤝',
    dateEarned: 'September 18, 2023',
  },
];
// Upcoming deadlines
export const deadlines = [
  {
    id: 'deadline1',
    courseId: 'course1',
    title: 'Module 2: CSS Styling',
    dueDate: '2023-10-15',
  },
  {
    id: 'deadline2',
    courseId: 'course2',
    title: 'Data Analysis Project Submission',
    dueDate: '2023-10-20',
  },
  {
    id: 'deadline3',
    courseId: 'course1',
    title: 'Web Development Quiz',
    dueDate: '2023-10-25',
  },
];
// Student data
export const students = [
  {
    id: 'student1',
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    progress: 85,
    lastActive: '2 days ago',
  },
  {
    id: 'student2',
    name: 'Maria Garcia',
    email: 'maria.g@example.com',
    progress: 62,
    lastActive: '1 day ago',
  },
  {
    id: 'student3',
    name: 'James Wilson',
    email: 'james.w@example.com',
    progress: 45,
    lastActive: '4 hours ago',
  },
  {
    id: 'student4',
    name: 'Sarah Lee',
    email: 'sarah.l@example.com',
    progress: 92,
    lastActive: 'Just now',
  },
  {
    id: 'student5',
    name: 'Robert Chen',
    email: 'robert.c@example.com',
    progress: 78,
    lastActive: '3 days ago',
  },
];
