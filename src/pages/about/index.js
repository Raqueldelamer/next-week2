function MyButton() {
    return (
        <button style = {{color: "yellow"}}>I'm a button</button>
    );
}

export default function About() {
    return (
    <div>
        <h2>This is all about my button!</h2>

        <MyButton />
        
    </div>
    );
}

