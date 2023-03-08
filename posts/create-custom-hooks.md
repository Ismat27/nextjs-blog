---
title: "Create a custom hook in ReactJs"
date: "2023-02-24"
---

In this tutorial, we are going to be looking at how to create a custom hook. This custom hook will be used to handle form element values and form submission. Basically, we wil be building a form whose and handle this form usinh cusstom hook.

Now let's create our custom hook. Note, our custom hook must be wrapped in a React component and the name of this component must start with __use__. Let's create the custom hook in a file and let's name the file `useFormHook.js`. Again the name the React component must start with __use__ for React to recommend it as a custom hook.

```js
import useState from "react"

const useFormHook = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return {
        name, SetName,
        email, setEmail,
        message, setMessage
    }
}
export default useFormHook
```

In our custom hook above, we define three state values corresponding to the form elements in `MyForm` component. Then we return an object with six key-value pairs which are React states and corresponding functions to update their values.
Note you can return any JavaScript data type from a custom hook.
In our case our, the return value of the custom hook will be as below:

```js
{
    name: 'value of React state', // string
    setName: 'function returned by React useState', // function
    email: 'value of React state', // string
    setEmai: 'function returned by React useState', //function
    message: 'value of React state', // string
    setName: 'function returned by React useState', // function
}
```

First let's create a form in a file `MyForm.js`. In our `MyForm.js` we will import the and invoke the `useFormhook` hook we created. Then we will use its return value to build controlled form elements.

```js
// import our custom hook
import useFormHook from './useFormHook'

const MyForm = () => {
    const data = useFormHook() // call the useFormHook to get its return value
    // destruture the data
    const {
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage
    }
    return (
        <>
            <form>
                <div className="form-field">
                    <label>Fullname</label>
                    <input name="fullname" value={name} onChange={(event) => setName(event.target.value)}  placeholder="firstname lastname"/>
                </div>
                <div className="form-field">
                    <label>First name</label>
                    <input type='email' name='email' value={email} onChange={(event) => setEmail(event.target.value)}  placeholder="email"/>
                </div>
                <div className="form-field">
                    <label>Message</label>
                    <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)}  placeholder="your message"/>
                </div>
            </form>
        </>
    )
}

export default MyForm
```
