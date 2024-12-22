const BasicExample = () => {
    return (
        /**
         * the fragment <> </> is used to wrap multiple JSX elements 
         * because JSX only allows one parent element
         * */
        <> 
            <h1>Hello World!</h1>
            <p>Another JSX element!</p>
        </>
    );
}

export default BasicExample;