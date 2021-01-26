import React from 'react';
import { MdSearch } from "react-icons/md";
import './searchbar.styles.css';
import CustomButton from "../button/button.component";


const SearchBar = ({placeholder,searchText,setSearchText, handleChange,handleClick, label,onSubmit,onClear, value, ...otherProps}) => {


    return (
    <div className='section' data-test='searchbarsection'>
        <div className='section-center'>
            <form onSubmit={onSubmit} data-test='onsubmit' className='searchBarForm'>
                <div className='form-control'>
                    <MdSearch />
                    <input
                        autoFocus
                        type='text'
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        data-test='searchfield'
                        onClick={handleClick}
                        {...otherProps}
                        className='search-inputfield'
                    />
                    <span>
                        <CustomButton data-test='clearForm'  className='clear-Form' type='submit' onclick={onClear} >Clear</CustomButton>
                    </span>
                    <span>
                       <CustomButton data-test='submitButton' type='submit'>Submit</CustomButton>
                    </span>
                </div>

            </form>

        </div>
    </div>

)
}
export default SearchBar;