// 1. Import Area


// 2. Function Definition Area
let AComp1 = (props) =>    // ES6 Fat Arrow
{
    let name='Amit'; // Local variable

// Every function return HTML Structure should be in form of JSX(closing tag compulsory in JSX)
    return <h1>Hello {name} {props.surname}, How are you ?</h1>;
}

// 3. Export Area
// You can export anything functions, class, variables

// 3.1 Default export
export default AComp1;
// 3.2 Named export