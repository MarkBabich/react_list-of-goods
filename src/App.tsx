import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { ListOfGoods } from './components/ListOfGoods';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((itemPrev, itemCurr) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return itemPrev.localeCompare(itemCurr);
      case SortType.LENGTH:
        return itemPrev.length - itemCurr.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  handleReverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  handleSort = (sortType: SortType) => {
    this.setState({ sortType });
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);
    const isStateChanged = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={() => this.handleSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => this.handleSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {
            (isStateChanged) && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.handleReset}
              >
                Reset
              </button>
            )
          }
        </div>

        <ListOfGoods visibleGoods={visibleGoods} />
      </div>
    );
  }
}
