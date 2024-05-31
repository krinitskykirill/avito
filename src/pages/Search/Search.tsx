import Input from '../../components/Input/Input.tsx';
import Button from '../../components/Button/Button.tsx';
import './Search.scss';

const Search = () => {
    //TODO стилизовать каретку у input
    return (
        <div className="search__wrapper">
            <h1>Поиск видео</h1>
            <div className={'search__container'}>
                <Input className={'search__input'}
                       placeholder={'Что хотите посмотреть?'}/>
                <Button className={'search__button'}
                        isAccept={true}>Найти</Button>
            </div>
        </div>
    );
};

export default Search;