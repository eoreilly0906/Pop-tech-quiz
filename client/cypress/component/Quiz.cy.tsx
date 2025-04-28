import Quiz from '../../src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.mount(<Quiz />);
  });

  it('renders initial state correctly', () => {
    cy.get('[data-testid="quiz-container"]').should('exist');
    cy.get('button').contains('Start Quiz').should('exist');
  });

  it('shows loading state when fetching questions', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('.spinner-border').should('exist');
  });

  it('handles API error gracefully', () => {
    // Intercept API call and force an error
    cy.intercept('/api/questions/random', {
      statusCode: 500,
      body: 'Server error'
    }).as('getQuestions');

    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('[data-testid="quiz-container"]').should('exist');
  });

  it('displays questions and handles answers', () => {
    // Mock API response
    cy.intercept('/api/questions/random', {
      statusCode: 200,
      body: [{
        question: 'Test Question',
        answers: [
          { text: 'Answer 1', isCorrect: true },
          { text: 'Answer 2', isCorrect: false }
        ]
      }]
    }).as('getQuestions');

    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.get('[data-testid="question"]').should('contain', 'Test Question');
    cy.get('[data-testid="answer-option"]').should('have.length', 2);
  });

  it('completes quiz and shows score', () => {
    // Mock API response with one question
    cy.intercept('/api/questions/random', {
      statusCode: 200,
      body: [{
        question: 'Test Question',
        answers: [
          { text: 'Answer 1', isCorrect: true },
          { text: 'Answer 2', isCorrect: false }
        ]
      }]
    }).as('getQuestions');

    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // Answer the question
    cy.get('[data-testid="answer-option"]').first().click();
    
    // Quiz should be completed since there's only one question
    cy.get('h2').contains('Quiz Completed').should('exist');
    cy.get('[data-testid="final-score"]').should('exist');
  });
}); 