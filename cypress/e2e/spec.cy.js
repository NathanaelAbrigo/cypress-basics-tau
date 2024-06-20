it('my first test', () =>{
    
    const dataset = {
        name: 'Nat',
        email: 'nat.abrigo@symph.co',
        msg_one: 'Hello there!{enter}I am Nathanael Chris Abrigo.{enter}Currently a BS Computer Science Student at UST.{enter}Also a QA Intern in Symph.',
        solve_one: '10',

        msg_two: 'Hi there!{enter}I am Nathanael Chris Abrigo.{enter}I am me.',
        solve_two: '14',

        username: 'nathanaelabrigo',
        password: 'password123'
    };


    cy.visit('/')

    //FORM 1
    cy.get('#et_pb_contact_name_0')
    .should('be.visible')
    .should('be.empty')
    .type(dataset.name);

    cy.get('#et_pb_contact_email_0')
    .should('be.visible')
    .should('be.empty')
    .type(dataset.email)

    cy.get('#et_pb_contact_message_0')
    .type(dataset.msg_one)

    cy.contains('3 + 7')
    cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input')
    .type(dataset.solve_one)

    cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit')
    .click()


    //FORM 2
    cy.get('.et_pb_toggle_title')
    .click()

    cy.get('#et_pb_contact_name_1')
    .should('be.visible')
    .should('be.empty')
    .type(dataset.name);

    cy.get('#et_pb_contact_email_1')
    .should('be.visible')
    .should('be.empty')
    .type(dataset.email)

    cy.get('#et_pb_contact_message_1')
    .type(dataset.msg_two)

    cy.contains('11 + 3')
    cy.get('#et_pb_contact_form_1 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input')
    .type(dataset.solve_two)

    cy.get('#et_pb_contact_form_1 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit')
    .click()


    // Login 1
    cy.get('#user_login_6673ab779b994')
    .type(dataset.username)

    cy.get('#user_pass_6673ab77910ab')
    .type(dataset.password)

    cy.get('.et_pb_login_0 > .et_pb_newsletter_form > form > :nth-child(4) > .et_pb_newsletter_button')
    .click()
})

/*
.first , .last, .eq(#) if multiple elements same name or something. Just to differentiate

.click()
.click({force : true})

.should() for assersion
.should('be.check')
.should('have.text', 'groceries')
.should('have.value', 'groceries') //for input elements

cy.contains('body', 'large page')

.check and .uncheck if there is checkbox

 */