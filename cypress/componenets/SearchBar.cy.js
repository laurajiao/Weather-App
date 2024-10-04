

import React from 'react';
import SearchBar from '../../src/components/SearchBar';

describe('<SearchBar />', () => {
  it('allows the user to type and submit a search', () => {

    const mockOnSearch = cy.stub().as('onSearch');

   
    cy.mount(<SearchBar onSearch={mockOnSearch} />);

   
    cy.get('input[type="text"]').type('Sydney');

 
    cy.get('button[type="submit"]').click();

  
    cy.get('@onSearch').should('have.been.calledOnceWith', 'Sydney');


    cy.get('input[type="text"]').should('have.value', '');
  });
});

  