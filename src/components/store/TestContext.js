import React, { useState } from "react"

const TestContext = React.createContext({
    loggedIn: false,
    onLogin: () => { },
    onLogout: () => { },
}
)

export const TestContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)

    const handleLogIn = () => setLoggedIn(true)
    const handleLogOut = () => setLoggedIn(false)

    return (
        <TestContext.Provider value={{ loggedIn: loggedIn, onLogout: handleLogOut, onLogin: handleLogIn }}>{props.children}</TestContext.Provider>
    )

}

export default TestContext