describe('Tech Quiz E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the quiz page', () => {
    cy.get('[data-testid="quiz-container"]').should('exist');
  });

  it('displays questions and answers', () => {
    cy.get('[data-testid="question"]').should('be.visible');
    cy.get('[data-testid="answer-option"]').should('have.length.at.least', 2);
  });

  it('allows answering questions and shows progress', () => {
    cy.get('[data-testid="answer-option"]').first().click();
    cy.get('[data-testid="next-button"]').should('be.enabled');
  });

  it('shows final score after completing all questions', () => {
    // Answer all questions
    cy.get('[data-testid="answer-option"]').first().click();
    cy.get('[data-testid="next-button"]').click();
    // Add more question answering logic here
    
    cy.get('[data-testid="final-score"]').should('be.visible');
  });
}); 