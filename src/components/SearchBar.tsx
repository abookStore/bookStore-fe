import * as React from 'react';
import Search from 'antd/lib/input/Search';
import { stringify } from 'qs';

// tslint:disable
export default class SearchBar extends React.Component {
    state = {
        inputValue: '',
    }

    handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({inputValue: evt.target.value})
    }

    handleSearch = () => {
        const {inputValue} = this.state
        if(!inputValue) return;
        const isIsbn = /^\d{12}[\d|X]$/.test(inputValue) || /\d{1}-\d{6}-\d{2}-\d{1}/.test(inputValue)
        const params = {
            t: isIsbn ? 'isbn' : 'name',
            q: inputValue
        }
        window.open(`/search?${stringify(params)}`)
    }

    render() {
        return (
            <div>
                <Search
                    className="AppHeader-SearchBar"
                    placeholder="您想要搜索的书名/ISBN号"
                    onSearch={this.handleSearch}
                    enterButton={true}
                    onChange={this.handleChange}
                    size="large"
                />
            </div>
        );
    }
}