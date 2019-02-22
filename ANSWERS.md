# What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

- PropTypes are used to validate what kind of information is being passed into a component through props. It is important to help other developers realize what kind of data is required, and checking if something is not performing as expected.

# Describe a life-cycle event in React?

- A life cycle event happens during the Creation, Updating, or Death of a React Component. For example, componentDidMount is a life cycle event to describe the period after a component was created and mounted to the DOM. This allows you to define when certain features need to happen and prevent odd side effects.

# Explain the details of a Higher Order Component?

- A higher order component takes one or more other components as arguments. It can be used for tasks such as conditional rendering, or can be used for components that need to share similar logic, such as forms. A create user form and a add user form may have slightly different logic, but the base state will stay the same. It makes the code more DRY to use a higher order component that contains all of the base logic for these form components to run and extend on.

# What are three different ways to style components in React? Explain some of the benefits of each.

- Styled components is a form of writing CSS in JS files. This allows us to consolidate code base and prevent any style leaks that may happen using external CSS files.
- Component libraries such as Reactstrap or Material UI have predefined components with styling. This allows for rapid prototyping, but has more time required to learn up front.
- Vanilla CSS/LESS/Sass allows us to write CSS as we normally would for non-React projects. We can import the CSS file where it is needed and reference the tags/classes/ids to accomplish what we need. This can lead to some style leaking, though.
