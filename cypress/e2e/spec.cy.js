it('my first test', () =>{
    cy.visit('/') // visits the baseUrl
    cy.get('span')
    // .get('#Skills_Improved')
    // .first()
    // .last()
    .eq(14)

    cy.get('.et_pb_button_0_wrapper > .et_pb_button')
    // .click()
    // .click({force : true})


    cy.get('#et_pb_contact_name_0')
    .should('be.visible')
    .type('Nathanael');

    cy.contains('3 + 7')
    
    cy.get('#et_pb_contact_message_0')
    .type('Hello there!{enter}I am Nathanael Abrigo')
})

/*
.first , .last, .eq(#) if multiple elements same name or something. Just to differentiate

.should() for assersion
.should('be.check')
.should('have.text', 'groceries')
.should('have.value', 'groceries') //for input elements

cy.contains('body', 'large page')

.check and .uncheck if there is checkbox

 */