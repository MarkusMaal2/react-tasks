describe('Todo List', function() {
  it('should display a list of todo-items', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.task-list')
        .should('be.visible')
        .and('have.length.greaterThan', 0);
  });
});

describe('Add Todo Item', function() {
  it('should add a new todo-item', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.new-task__controls').children().first().children().last()
        .type('Buy milk')
        .should('have.value', 'Buy milk');
    cy.get('.new-task__controls').children().eq(1).children().last()
        .type('2023-10-10')
        .should('have.value', '2023-10-10');
    cy.get('#add-task-btn')
        .click();
    cy.get('.task-list')
        .contains('Buy milk')
        .should('be.visible');
  });
});

describe('Add Medium Priority Task', function() {
  it('should add a new todo-item with medium priority', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.new-task__controls').children().first().children().last()
        .type('Buy milk')
        .should('have.value', 'Buy milk');
    cy.get('.new-task__controls').children().eq(1).children().last()
        .type('2023-10-10')
        .should('have.value', '2023-10-10');
    cy.get('.new-task__controls').children().last().children().last()
        .select('2')
        .should('have.value', '2');
    cy.get('#add-task-btn')
        .click();
    cy.get('.task-list')
        .contains('Buy milk')
        .should('be.visible');
  });
});

describe('Filter tasks by priority', function() {
  it('only medium priority items should be visible when selecting medium from the priority dropdown', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.new-task__controls').children().first().children().last()
        .type('Buy milk')
        .should('have.value', 'Buy milk');
    cy.get('.new-task__controls').children().eq(1).children().last()
        .type('2023-10-10')
        .should('have.value', '2023-10-10');
    cy.get('.new-task__controls').children().last().children().last()
        .select('2')
        .should('have.value', '2');
    cy.get('#add-task-btn')
        .click();
    cy.get('.task-list')
        .contains('Buy milk')
        .should('be.visible');
    cy.get('.tasks-filter__control').children().last()
        .contains('medium');

    cy.get('.tasks-filter__control').children().last()
        .select('2')
        .should('have.value', '2');
    cy.get('.task-list')
        .contains('Buy milk')
        .should('be.visible');
    cy.get('.tasks-filter__control').children().last().children()
        .contains('medium');
    cy.get('.tasks-filter__control').children().last()
        .select('3')
        .should('have.value', '3');
    cy.get('.tasks-filter__control').children()
        .contains('Buy milk')
        .should('not.exist');
  });
});
