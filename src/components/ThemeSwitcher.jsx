import { useEffect, useState } from 'react';
import { Theme, Button } from 'react-daisyui'
import { themeChange } from 'theme-change';

export default () => {
    const [theme, setTheme] = useState('light');
    const [themeText, setThemeText] = useState('Light');
    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-theme', localStorage.getItem('theme'))
        localStorage.getItem('theme') == 'dracula' ? setThemeText('Light') : setThemeText('Dark');
        themeChange()
    }, [theme]);
    function HandleChange() {
        theme == 'dracula' ? setTheme('light') : setTheme('dracula');
        theme == 'dracula' ? setThemeText('Light') : setThemeText('Dark');
        localStorage.setItem('theme', theme)
        localStorage.getItem('theme') == 'dracula' ? setThemeText('Light') : setThemeText('Dark');
        themeChange()
    }
    return (
        <>
            <Button variant="outline" onClick={() => { HandleChange(); }}>{themeText}</Button>
        </>
    )
}