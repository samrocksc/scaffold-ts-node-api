Feature: Providing a health check end point
    Everyone wants to hook up our api microservice

  Scenario: Return a health check
    Given I have a URL "http://localhost:3000/healthz"
    When I visit the URL
    Then I should be returned status OK
