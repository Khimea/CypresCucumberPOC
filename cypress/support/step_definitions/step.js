import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const {expect} = require('chai')

let res;

Given(/^Deseo realizar un request (.*) con el body (.*)$/, (method ,json) => {
    cy.fixture(json).then((data) => {
        cy.request({
            method: method,
            url: Cypress.env("PATH"),
            /*
            failOnStatusCode : false,  
            Al estar en false, ignora los status code, es decir la prueba sigue adelante.
            si no utilziamos este parametros, cualquier code que sea diferente a 200 rompera las pruebas
            */
            headers:{
              'APIKEY': Cypress.env("APIKEY")
            },
            body: data,
      }).then((response) => {
       res = response;
      })
  })
})

When("Recibimos el response", async  ()=> {
    //VALIDAMOS QUE EL SERVICIO AL MENOS HAYA RESPONDIDO
    await expect(res.status).to.not.eql(502);
    await expect(res.status).to.not.eql(503);
    await expect(res.status).to.not.eql(504);
})

//EXIGIMOS UN ENTERO YA QUE ESTAMOS HABLANDO DE UN HTTP CODE
Then("Espero un response con el status {int}", code => {
    expect(res).property('status').to.eql(code)
    });


Then(/^Espero un response con la key: (.*) & value: (.*)$/,(field, value) => {
        expect(res.body).to.have.property(field,value)
  }
);