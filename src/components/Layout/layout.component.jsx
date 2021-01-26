import React, {useContext, useState} from 'react';
import ThemeContext from "../../context/ThemeContext";
import SearchBar from "../searchbar/searchbar.component";
import QueryHandler from "../../graphql/queryHandler";
import './layout.styles.css'


const Layout = () => {
    const themes = useContext(ThemeContext);

    const [userSearch, setUserSearch] = useState('');
    const [searchText, setSearchText] = useState('');



    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log("Form Submit Clicked", userSearch);
        setSearchText(userSearch);
    }
    const handleSearch = (e) => {
        setUserSearch(e.target.value);
    }

    const clearForm = (e)=> {
        e.preventDefault();
        setUserSearch("");
        console.log("Form Cleared", userSearch);
    }


            return (
            <div className='container' data-test='layoutComponent'>
                    <div className='title-div'>
                        <span><p className='title-1'>Git</p></span><span><p className='title-2'>Search</p></span>
                    </div>
                    <div className='searchdiv'>
                        <SearchBar
                            placeholder="Enter User Name"
                            onSubmit={handleSubmit}
                            onClear={clearForm}
                            handleChange={handleSearch}
                            value={userSearch}
                        /></div>
                <QueryHandler searchText={searchText}/>
            </div>
            );

}

export default Layout;

