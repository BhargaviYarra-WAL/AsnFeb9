function Login(){
    let title="this is login component title";
    let description="this is description"
    function signIn(){
        alert('You are signed in');
    }
    return(
        <div className="Login">
            <h1>{title}</h1>
            <h2>{description}</h2>
            {signIn()}
            5+4={5+4}
            <br/>
            <input type="name" name="name"></input><br/>
            <input type="password" name="password"></input><br/>
            <button onClick={signIn}>Sign In</button>
        </div>
    );
}
export default Login;