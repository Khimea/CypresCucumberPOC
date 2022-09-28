# CypressCucumberPOC
POC de Cypress con cucumber testeando Backend


## MODIFICACION DEL FEATURE

```
 Feature: Regresivas de API
   Scenario: Realizar una consulta a la API
        Given Deseo realizar un request METHOD con el body REQUESTBODY
        When Recibimos el response
        Then Espero un response con el status 2xx
        And Espero un response con la key: KEY & value: VALUE
```


METHOD por el metodo que vamos a utilizar en el request.<br />
REQUESTBODY por el nombre del json a utilizar.<br />
2xx cambiar por el status que esperamos.<br />
KEY por la key que vamos a validar.<br />
VALUE por el valor que tiene que tener esa key.<br />

## package.Json
```
"cypress-cucumber-preprocessor": {
    "stepDefinitions": [
      "cypress/e2e/[filepath]/**/*.{js,ts}",
      "cypress/e2e/[filepath].{js,ts}",
      "cypress/support/step_definitions/**/*.{js,ts}"
    ]
  }
```  
  Aca declararemos la ubicacion de los archivos a utilizar para realizar el testing
