---
title: 'How to make a modal with ReactJs'
date: '2023-02-05'
---

In this tutorial, we will be making a modal with React useState and css.
The main purpose of this tutorial is to demonstrate to the reader how a modal can be made using the techniques stated above.
Understanding of the content of this article will enable the reader to be able to deploy the techniques in any way that suits
his/her need.

In case you are starting from start, run the command below to create react app.
Run the command in the folder you want to create the app.

```sh
npx create-react-app name_of_your_app
# replace 'name_of_your_app' with the name your want to give to your app
```

In the __src__ folder of the created app, I will a create folder called __components__. Then inside this folder I will make a
file and name it __ModalPage.js__. This file will contain two React components as follows

The first component is the __Modal__. This component will accept two props as defined below:

- __isModalOpen__: This is a react state that signifies if the modal is closed or not.
  It is of Boolean type that is, it is either __true__ or __false__.
  When it is __true__, it implies the modal is opened while being __false__ implies the modal is closed

- __closeModal:__ This is a function to close the modal. Hence this function will set the __isModalOpen__ state value to __false__.

```js
const Modal = ({isModalOpen, closeModal}) => {
  return (
    // 
    <div className={`${isModalOpen? 'modal open' : 'modal'}`}>
        <div className='modal-content'>
            <p>Modal opened click the close button below to close modal</p>
            <button className='btn close-modal' onClick={closeModal}>close modal</button>
        </div>
    </div>
  )
}
```

The second component is the __ModalPage__ described as below. This the page where the modal will be opened.

In this component we define a state variable __isModalOpen__ and corresponding function, __setIsModalOpen__
to toggle its value using the React useState hook. __isModalOpen__ is passed as prop to the __Modal__ component.

Two functions are defined:

- __closeModal__: This function is used to set the value of __isModalOpen__ to *false*,
  thereby closing the __Modal__. This function is passed as prop value to the __Modal__ component.

- __openModal:__ This function is used to set the value of __isModalOpen__ to *true*
  thereby opening the __Modal__.

```js
const ModalPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const closeModal = () => {
        setIsModalOpen(false)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }
    return (
        <>
            <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
            <main>
                <section className='page-element'>
                    <h1>Page content</h1>
                    <button className='btn open-modal' onClick={openModal}>open modal</button>
                </section>
            </main>
        </>
    )
}

export default ModalPage
```

__Note__: In case your __Modal__ and __ModalPage__ components are not in the same file, ensure
you import the __Modal__ component into the file containing the __ModalPage__ component. Also, you can
name your components whatever you like as long as they conform to React components naming convention.

Then write the following css inside your index.css located in the source folder of your react app.

```css
.btn {
  cursor: pointer;
  border: none;
  padding: .5rem;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  display: none;
}

.modal.open {
  display: grid;
  place-items: center;
  background-color: rgb(87, 85, 85);
}
.modal-content {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;
  padding: 1rem;
  background-color: #ffffff;
}

.close-modal {
  background-color: #d11a2a;
  color: #ffffff;
}
```

And in the __App.js__ located in __src__ folder of the created app, import the __ModalPage__ component.

```js
import ModalPage from './components/ModalPage';
function App() {
  return (
    <div>
      <ModalPage />
    </div>
  );
}

export default App;
```

Then render your App in the __index.js__ located in the __src__ folder of the created app

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
