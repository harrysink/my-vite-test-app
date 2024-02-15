const pageStyle = {
    padding: 20,
    background: 'black',
    colour: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
function MissingPage() {
    return (
        <div className="main" style={pageStyle}>
            <h1>Oops! Page not found</h1> <br></br>
            <h6>please return to the previous page and try again</h6>
        </div>
    )
}

export default MissingPage;