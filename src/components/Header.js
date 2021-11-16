import React from 'react';

const Header = (props) => {
    const { search, onInputchange,onsearchClick } = props;
    return (
        <div className='jumbotron'>
            <h1 className='display-1'><span className="material-icons brand-icon">
                dinner_dining
            </span>Food Recipe</h1>
            <div class="input-group w-50 mx-auto">
                <input type="text" class="form-control" placeholder="Search Recipe" aria-label="Recipient's username" aria-describedby="basic-addon2" value={search} onChange={onInputchange} />
                <div class="input-group-append">
                    <button type='button' className='btn btn-danger' onClick={onsearchClick}>Search </button>
                </div>
            </div>

        </div>
    )
}

export default Header;