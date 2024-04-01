Feature: Grid Wall Top Tab Filter Visibility

  Scenario: Tab Bar filter is visible
    Given the user is on the "<page>" page, on "<device-preset>"
    When the page is srolled to the top
    Then different filter tabs are visible

    Examples:
      | page                     | device-preset |
      | smartphones              | desktop       |
      | smartphones              | mobile        |
      | shop-samsung-smartphones | desktop       |
