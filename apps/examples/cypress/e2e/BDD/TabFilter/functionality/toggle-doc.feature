Feature: Readme Doc section

  Scenario: Toggle doc secton
    Given the user is on the "Nextjs App Router"
    When the user click on the link "Nextjs Rendering Pattern"
    Then page should redirect to "/ngd/examples/rendering-pattern"
