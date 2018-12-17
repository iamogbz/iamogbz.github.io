import React from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import range from "lodash/range";
import get from "lodash/get";

import { BOARD_ID, CELL_SIZE } from "./GameOfLife.constants";
import { Board, Cell } from "./GameOfLife.styles";

class GameOfLife extends React.Component {
    static propTypes = {
        background: PropTypes.bool,
        fixed: PropTypes.bool,
        interval: PropTypes.number,
        isRunning: PropTypes.bool,
    };

    static defaultProps = {
        background: false,
        fixed: false,
        interval: 100,
        isRunning: true,
    };

    constructor(props) {
        super(props);
        const { isRunning } = this.props;
        this.state = {
            cells: [],
            isRunning,
        };
    }

    componentDidMount() {
        this.runIteration();
    }

    componentWillUnmount() {
        this.stopRunning();
    }

    get size() {
        const domBoard = document.getElementById(BOARD_ID);
        if (!domBoard) {
            return null;
        }
        return {
            rows: domBoard.clientHeight / CELL_SIZE,
            cols: domBoard.clientWidth / CELL_SIZE,
        };
    }

    get board() {
        if (!this._board) {
            this._board = this.randomBoard();
        }
        return this._board;
    }

    set board(value) {
        this._board = value;
    }

    randomBoard() {
        const { size } = this;
        if (!size) {
            return null;
        }
        const board = [];
        range(0, size.rows).forEach(y => {
            board[y] = [];
            range(0, size.cols).forEach(x => {
                board[y][x] = Math.random() > 0.8;
            });
        });
        return board;
    }

    livingCells() {
        const cells = [];
        const { size } = this;
        range(0, size.rows).forEach(y => {
            range(0, size.cols).forEach(x => {
                if (get(this.board, [y, x], false)) {
                    cells.push({ x, y, n: this.calculateNeighbours(x, y) });
                }
            });
        });
        return cells;
    }

    calculateNeighbours(x, y) {
        let neighbors = 0;
        const { board } = this;
        range(-1, 2).forEach(dy => {
            range(-1, 2).forEach(dx => {
                if (
                    !(dx === 0 && dy === 0) &&
                    get(board, [y + dy, x + dx], false)
                ) {
                    neighbors += 1;
                }
            });
        });
        return neighbors;
    }

    startRunning() {
        this.setState({ isRunning: true });
        this.runIteration();
    }

    stopRunning() {
        this.setState({ isRunning: false });
        clearTimeout(this.timeoutHandler);
    }

    runIteration() {
        const { isRunning } = this.state;
        if (!isRunning) {
            return;
        }
        const { size } = this;
        if (size) {
            const board = [];
            range(0, size.rows).forEach(y => {
                board[y] = [];
                range(0, size.cols).forEach(x => {
                    const neighbors = this.calculateNeighbours(x, y);
                    board[y][x] =
                        neighbors === 3 ||
                        (neighbors === 2 && get(this.board, [y, x], false));
                });
            });
            this.board = board;
            const nextCells = this.livingCells();
            const keepRunning = !isEqual(nextCells, this.prevCells);
            const { cells } = this.state;
            this.prevCells = cells;
            this.setState({ cells: nextCells, isRunning: keepRunning });
        }
        this.timeoutHandler = setTimeout(() => {
            this.runIteration();
        }, Math.max(size ? (size.rows * size.cols) / 32 : GameOfLife.defaultProps.interval, 100));
    }

    render() {
        const { cells } = this.state;
        const { background, fixed } = this.props;
        return (
            <Board id={BOARD_ID} fixed={fixed} background={background}>
                {cells.map(c => <Cell key={`${c.x},${c.y}`} {...c} />)}
            </Board>
        );
    }
}

export default GameOfLife;
