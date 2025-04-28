describe('Quiz E2E', () => {
  beforeEach(() => {
    cy.visit('/');
    // Intercept API calls to ensure they complete
    cy.intercept('GET', '/api/questions/random').as('getQuestions');
  });

  it('should display the start quiz button', () => {
    cy.get('[data-testid="quiz-container"]').should('exist');
    cy.get('button').contains('Start Quiz').should('exist');
  });

  it('should start the quiz when the start button is clicked', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('[data-testid="question"]').should('exist');
  });

  it('should display answer options and allow interaction', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('[data-testid="answer-option"]')
      .should('have.length.at.least', 1)
      .first()
      .click();
    cy.get('[data-testid="next-button"]').should('exist');
  });

  it('should complete the quiz and show final score', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // Keep answering questions until we see the completion screen or run out of questions
    function answerUntilComplete(attempt = 0) {
      if (attempt >= 5) return; // Safety limit

      cy.get('body').then($body => {
        // If we see the completion screen, we're done
        if ($body.find('h2:contains("Quiz Completed")').length > 0) {
          return;
        }

        // If we still see questions, answer them
        if ($body.find('[data-testid="answer-option"]').length > 0) {
          cy.get('[data-testid="answer-option"]').first().click();
          cy.get('[data-testid="next-button"]').click();
          answerUntilComplete(attempt + 1);
        }
      });
    }

    answerUntilComplete();

    // After answering all questions, verify completion
    cy.get('h2', { timeout: 10000 }).contains('Quiz Completed').should('exist');
    cy.get('[data-testid="final-score"]').should('exist');
  });

  it('should allow starting a new quiz after completion', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // Answer questions until completion
    function answerUntilComplete(attempt = 0) {
      if (attempt >= 5) return; // Safety limit

      cy.get('body').then($body => {
        if ($body.find('h2:contains("Quiz Completed")').length > 0) {
          return;
        }

        if ($body.find('[data-testid="answer-option"]').length > 0) {
          cy.get('[data-testid="answer-option"]').first().click();
          cy.get('[data-testid="next-button"]').click();
          answerUntilComplete(attempt + 1);
        }
      });
    }

    answerUntilComplete();

    // Verify completion and start new quiz
    cy.get('h2', { timeout: 10000 }).contains('Quiz Completed').should('exist');
    cy.get('button').contains('Take New Quiz').click();
    cy.wait('@getQuestions');
    cy.get('[data-testid="question"]').should('exist');
  });
}); 