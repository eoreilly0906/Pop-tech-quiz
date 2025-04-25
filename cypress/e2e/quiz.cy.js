describe('Tech Quiz E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the quiz page', () => {
    cy.get('[data-testid="quiz-container"]').should('exist');
  });

  it('displays questions and answers', () => {
    // Click the Start Quiz button
    cy.get('button').contains('Start Quiz').click();
    
    // Wait for questions to load
    cy.get('[data-testid="question"]').should('be.visible');
    cy.get('[data-testid="answer-option"]').should('have.length.at.least', 2);
  });

  it('allows answering questions and shows progress', () => {
    // Click the Start Quiz button
    cy.get('button').contains('Start Quiz').click();
    
    // Wait for questions to load
    cy.get('[data-testid="answer-option"]').should('be.visible');
    cy.get('[data-testid="answer-option"]').first().click();
    cy.get('[data-testid="next-button"]').should('be.enabled');
  });

  it('shows final score after completing all questions', () => {
    // Click the Start Quiz button
    cy.get('button').contains('Start Quiz').click();
    
    // Keep answering questions until we see the final score
    const answerQuestion = () => {
      cy.get('body').then($body => {
        // If we see the final score, we're done
        if ($body.find('[data-testid="final-score"]').length > 0) {
          cy.get('[data-testid="final-score"]').should('be.visible');
          return;
        }
        
        // Otherwise, answer the current question and continue
        if ($body.find('[data-testid="answer-option"]').length > 0) {
          cy.get('[data-testid="answer-option"]').first().click();
          cy.get('[data-testid="next-button"]').click();
          answerQuestion();
        }
      });
    };
    
    answerQuestion();
  });
}); 