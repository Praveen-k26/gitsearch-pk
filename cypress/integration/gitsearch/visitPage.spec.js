describe('Visit the HomePage', ()=> {
    it('visit the app', ()=> {
        cy.visit ('http://localhost:3001/')
    });

    it("Focus on the input filed", ()=> {
        cy.visit ('http://localhost:3001/');
        cy.focused().should ('have.class', 'search-inputfield');
    });

    it('Enter Text in the input field', ()=> {
        const text = 'Enter the User Name here'
        cy.visit('http://localhost:3001/');
        cy.get('.search-inputfield').type (text).should ('have.value', text).wait(20);
    })

    it('.Submit a form', () => {
        const text = 'Praveen-k26'
        cy.visit('http://localhost:3001/');
        cy.get('.searchBarForm')
            .find('[type="text"]').type(text).wait(20)
        cy.get('.searchBarForm').submit()
    })

    it('.Clear the text', () => {
        const text = 'Enter the User Name here and clear this using the clear button'
        cy.visit('http://localhost:3001/');
        cy.get('.searchBarForm')
            .find('[type="text"]').type(text).wait(20).clear()
    })

});

