# A simple Modal React component Plugin - Marilyne Destombes

## Description

Here is a plugin made using npm publish to store a reusable react modal component.

## How to install ?

```cmd
npm i marilyne-simplemodal-react
```

## How to use ?

1. Import the plugin in your project :

```javascript
import ModalPlugIn from "marilyne-simplemodal-react";
```

There are three properties :

-modalVisible : boolean,true or false

-mainTexT :string

-childrenText : string if you want to add comments

2. Example of a jsx code to call the external component :

```javascript
<ModalPlugIn
  modalVisible={true}
  mainTexT={"Main text !"}
  childrenText={"additional information"}
/>
```

## Default css

```javascript
.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 2px solid #355506;
    border-radius: 10px;
    width: 60%; /* Could be more or less, depending on screen size */
  }
```

You can custom style by editing the default css.
