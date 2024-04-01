Feature: Gridwall Filter products

  Scenario: Apply tab filter
    Given the user is on the "<page>" page, on "<device-preset>"
    When the user clicks on the filter named "Apple"
    Then page should display Apple products 

    Examples:
      | page                     | device-preset |
      | smartphones              | desktop       |
      | smartphones              | mobile        |
