describe('Table Handling',function(){


beforeEach(function(){

    cy.viewport(1920,1080)
    cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
    cy.wait(3000)
    cy.get('#input-username').type("demo")
    cy.wait(3000)
    cy.get('#input-password').type("demo")
    cy.wait(3000)
    cy.get('button[type="submit"]').click()
    cy.wait(3000)
    cy.get('.btn-close').click()
    cy.wait(3000)

    cy.xpath("//body/div[@id='container']/nav[@id='column-left']/ul[@id='menu']/li[@id='menu-customer']/a[1]").click()
    cy.wait(3000)
    cy.get('#menu-customer>ul>li:nth-child(1)').click()
    cy.wait(3000)

})

it("Table list Test", function(){

    // Table Header Table Data(Column) Testing 
    cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', '7')
    cy.get('table[class="table table-bordered table-hover"]>thead>tr>td:nth-child(2)').should('have.text', "Customer Name")
    cy.get('table[class="table table-bordered table-hover"]>thead>tr>td:nth-child(3)').should('have.text', "E-Mail")
    cy.get('table[class="table table-bordered table-hover"]>thead>tr>td:nth-child(5)').should('have.text', "Status")

    // Table Body Table Data value(Column) Testing
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(6)>td:nth-child(3)').should('have.text', "ghh56@gmail.com")


})

})