Feature: Regresivas de API

    Scenario: Realizar una consulta a la API
        Given Deseo realizar un request METHOD con el body REQUESTBODY
        When Recibimos el response
        Then Espero un response con el status 2xx
        And Espero un response con la key: KEY & value: VALUE

#MODIFICAR
#METHOD por el metodo que vamos a utilizar en el request
#REQUESTBODY por el nombre del json a utilizar
#2xx cambiar por el status que esperamos
#KEY por la key que vamos a validar
#VALUE por el valor que tiene que tener esa key
