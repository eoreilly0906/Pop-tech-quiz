import React from 'react';
import { Quiz } from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders without crashing', () => {
    cy.mount(<Quiz />);
  });

  it('displays the first question', () => {
    cy.mount(<Quiz />);
    cy.get('[data-testid="question"]').should('exist');
  });

  it('allows selecting an answer', () => {
    cy.mount(<Quiz />);
    cy.get('[data-testid="answer-option"]').first().click();
  });

  it('shows score after completing all questions', () => {
    cy.mount(<Quiz />);
    // Add test implementation
  });
}); 