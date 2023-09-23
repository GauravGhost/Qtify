import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg'
import { Autocomplete, TextField } from '@mui/material';

const SearchDiv = ({ data }) => {
    return (
        <p>{data.title}</p>
    )
}

const Search = ({ songs }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.searchBoxWrapper}>
                <Autocomplete
                    className={styles.search}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={songs.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            variant='filled'
                            className={styles.searchBox}
                            {...params}
                            label="Search input"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />

            </div>
            <button className={styles.searchButton}>
                <SearchIcon />
            </button>
        </div>
    )
}

export default Search