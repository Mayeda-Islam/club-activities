import React from 'react';
import './QuesAns.css'

const QuesAns = () => {
    return (
        <div className='qus-ans-section'>
            <section>
            <h1>How does react work?</h1>
            <p>Ans:ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components
                 as necessary without cluttering your code.</p>
            </section>
            <section>
                <h1>Difference between state and props.</h1>
                <p>While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component
                     (similar to variables declared within a function).</p>
                <br />
                <h3>State</h3>
                <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the
                component or by the component directly.</p>
                <h3>Props</h3>
                <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
            </section>
            <section>
                <h1>How does UseEffect works?</h1>
                <p> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
            </section>
        </div>
    );
};

export default QuesAns;