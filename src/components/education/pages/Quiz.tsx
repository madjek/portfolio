import { useNavigationStore } from '@/store/educationStore';
import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiXCircle,
} from 'react-icons/fi';
import { quizzes } from '../mockData';

export default function Quiz({ quizId }: { quizId: string }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const { setRoute } = useNavigationStore();
  // Find the quiz data
  const quiz = quizzes.find((q) => q.id === quizId) || quizzes[0]; // Fallback to first quiz if not found
  useEffect(() => {
    if (quiz) {
      setTimeLeft(quiz.timeLimit * 60); // Convert minutes to seconds
    }
  }, [quiz]);
  useEffect(() => {
    if (timeLeft <= 0 || quizSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizSubmitted]);
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const currentQuestion = quiz?.questions[currentQuestionIndex];
  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  };
  const goToNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };
  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };
  const submitQuiz = () => {
    setQuizSubmitted(true);
  };
  const calculateScore = () => {
    if (!quiz) return 0;

    let correctAnswers = 0;
    quiz.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    return Math.round((correctAnswers / quiz.questions.length) * 100);
  };

  if (!quiz) {
    return (
      <div className="mx-auto max-w-3xl p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Quiz not found</h2>
        <p className="mb-6">
          The quiz you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <button
          onClick={() => setRoute('courses')}
          className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
        >
          Browse Courses
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        {/* Quiz Header */}
        <div className="border-b border-gray-200 bg-gray-50 p-6">
          <h1 className="mb-2 text-2xl font-bold">{quiz.title}</h1>
          <p className="mb-4 text-gray-600">{quiz.description}</p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FiClock size={18} className="text-gray-500" />
              <span className="text-gray-700">
                Time Limit: {quiz.timeLimit} minutes
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700">
                Questions: {quiz.questions.length}
              </span>
            </div>
          </div>
        </div>
        {/* Timer and Progress Bar */}
        <div className="sticky top-0 z-10 border-b border-gray-200 bg-white p-4">
          {!quizSubmitted && (
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FiClock
                  size={18}
                  className={`${timeLeft < 60 ? 'text-red-500' : 'text-gray-500'}`}
                />
                <span
                  className={cn(
                    'font-medium',
                    timeLeft < 60 ? 'text-red-500' : 'text-gray-700',
                  )}
                >
                  {formatTime(timeLeft)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  Question {currentQuestionIndex + 1} of {quiz.questions.length}
                </span>
              </div>
            </div>
          )}
          <div className="h-2 w-full rounded-full bg-gray-200">
            {quizSubmitted ? (
              <div
                className={cn(
                  'h-2 rounded-full',
                  calculateScore() >= 70 ? 'bg-green-500' : 'bg-red-500',
                )}
                style={{
                  width: '100%',
                }}
              ></div>
            ) : (
              <div
                className="h-2 rounded-full bg-blue-600 duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
                }}
              ></div>
            )}
          </div>
        </div>
        {/* Quiz Content */}
        <div className="p-6">
          {quizSubmitted ? (
            <div className="py-8 text-center">
              <div
                className={cn(
                  'mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full',
                  calculateScore() >= 70 ? 'bg-green-100' : 'bg-red-100',
                )}
              >
                {calculateScore() >= 70 ? (
                  <FiCheckCircle size={48} className="text-green-500" />
                ) : (
                  <FiXCircle size={48} className="text-red-500" />
                )}
              </div>
              <h2 className="mb-2 text-2xl font-bold">
                {calculateScore() >= 70 ? 'Congratulations!' : 'Quiz Failed'}
              </h2>
              <p className="mb-6 text-gray-600">
                You scored {calculateScore()}% on this quiz.
                {calculateScore() >= 70
                  ? ' You have successfully passed this assessment.'
                  : ' You need 70% to pass this assessment.'}
              </p>
              <div className="mb-8">
                <div className="mx-auto mb-2 h-4 w-full max-w-xs rounded-full bg-gray-200">
                  <div
                    className={cn(
                      'h-4 rounded-full',
                      calculateScore() >= 70 ? 'bg-green-500' : 'bg-red-500',
                    )}
                    style={{
                      width: `${calculateScore()}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  {Math.round(
                    Object.keys(answers).filter(
                      (qId) =>
                        answers[qId] ===
                        quiz.questions.find((q) => q.id === qId)?.correctAnswer,
                    ).length,
                  )}{' '}
                  out of {quiz.questions.length} questions answered correctly
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    setQuizSubmitted(false);
                    setCurrentQuestionIndex(0);
                    setTimeLeft(quiz.timeLimit * 60);
                  }}
                  className="rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-800 hover:bg-gray-300"
                >
                  Retry Quiz
                </button>
                <button
                  onClick={() => setRoute(`/quiz/${quiz.courseId}`)}
                  className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
                >
                  Back to Course
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">
                  {currentQuestionIndex + 1}. {currentQuestion.question}
                </h3>
                {currentQuestion.type === 'multiple-choice' && (
                  <div className="space-y-3">
                    {currentQuestion?.options?.map((option, index) => (
                      <label
                        key={index}
                        className={cn(
                          'flex cursor-pointer items-center gap-3 rounded-lg border p-4',
                          answers[currentQuestion.id] === option
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300',
                        )}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestion.id}`}
                          value={option}
                          checked={answers[currentQuestion.id] === option}
                          onChange={() => handleAnswer(option)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}
                {currentQuestion.type === 'true-false' && (
                  <div className="space-y-3">
                    {[true, false].map((option, index) => (
                      <label
                        key={index}
                        className={cn(
                          'flex cursor-pointer items-center gap-3 rounded-lg border p-4',
                          answers[currentQuestion.id] === String(option)
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300',
                        )}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestion.id}`}
                          checked={
                            answers[currentQuestion.id] === String(option)
                          }
                          onChange={() => handleAnswer(String(option))}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span>{option ? 'True' : 'False'}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  onClick={goToPrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 font-medium',
                    currentQuestionIndex === 0
                      ? 'cursor-not-allowed bg-gray-100 text-gray-400'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
                  )}
                >
                  <FiChevronLeft size={18} />
                  Previous
                </button>
                {currentQuestionIndex < quiz.questions.length - 1 ? (
                  <button
                    onClick={goToNextQuestion}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                    disabled={!answers[currentQuestion.id]}
                  >
                    Next
                    <FiChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    onClick={submitQuiz}
                    className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
                    disabled={
                      Object.keys(answers).length < quiz.questions.length
                    }
                  >
                    Submit Quiz
                    <FiCheckCircle size={18} />
                  </button>
                )}
              </div>
              {/* Question Navigation */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex flex-wrap gap-2">
                  {quiz.questions.map((question, index) => (
                    <button
                      key={question.id}
                      onClick={() => setCurrentQuestionIndex(index)}
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium',
                        currentQuestionIndex === index
                          ? 'bg-blue-600 text-white'
                          : answers[question.id]
                            ? 'border border-green-300 bg-green-100 text-green-700'
                            : 'border border-gray-200 bg-gray-100 text-gray-700',
                      )}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
              {/* Warning for unanswered questions */}
              {Object.keys(answers).length < quiz.questions.length &&
                currentQuestionIndex === quiz.questions.length - 1 && (
                  <div className="mt-4 flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                    <FiAlertCircle
                      size={20}
                      className="mt-0.5 text-yellow-500"
                    />
                    <div>
                      <p className="font-medium text-yellow-800">
                        Some questions are unanswered
                      </p>
                      <p className="text-sm text-yellow-700">
                        You&apos;ve answered {Object.keys(answers).length} out
                        of {quiz.questions.length} questions. Please go back and
                        answer all questions before submitting.
                      </p>
                    </div>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
