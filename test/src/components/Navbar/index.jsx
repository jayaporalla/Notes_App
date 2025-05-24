import logo from '../../assets/116920_clipboard_512x512.png'

export const Navbar = () => {
    return (
        <header style={{display: 'flex', padding: '3px 9px', gap: '3px', borderBottomWidth: '2px', borderBottomColor: 'Gray'}}>
            <div style={{width: '3rem', height: '3rem'}}>
                <img style={{width: '100%', height: '100%'}} src={logo} alt='logo'/>
            </div>
            <h1 style={{ color: '#3730a3', fontSize: '36px', fontWeight: 'bold'}}>Notes App</h1>
        </header>
    )
}