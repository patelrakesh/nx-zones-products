Feature: Accessibility

  Checks that the contents of the grid wall area meet accessibility requirements.

  Scenario: Grid Wall pages accessibility
    Given the user is visiting the "<page>" page, on "<device-preset>"
    Then there hould be no accessibility issues in the grid-wall area

    Examples:
      | page                     | device-preset |
      | smartphones              | desktop       |
      | smartphones              | mobile        |
      | free-cell-phones         | desktop       |
      | shop-samsung-smartphones | desktop       |
