function Hello() {

    let myName = "Hello";
    let fullName = () => {
        return 'Jitu Mandal';
    }

    return <p>
      {myName} FULL STACK DEVELOPER {fullName()}
    </p>
}

export default Hello;