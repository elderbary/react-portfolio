import React, { Component } from 'react';
import '../styles/pagination.css';

class Pagination extends Component {
    paginationPosition = 1;
    handleScroll = (event) => {
        if (event.deltaY < 0) {
            if (this.paginationPosition > 1)
            {
                document.getElementById('page-'+this.paginationPosition).classList.remove("square-active");
                --this.paginationPosition;
                document.getElementById('page-'+this.paginationPosition).classList.add("square-active");
                window.removeEventListener('wheel', this.handleScroll);
                setTimeout(this.enableScroll, 800);
            }
        }
        else if (event.deltaY > 0) {
            if (this.paginationPosition < 6)
            {
                document.getElementById('page-'+this.paginationPosition).classList.remove("square-active");
                ++this.paginationPosition;
                document.getElementById('page-'+this.paginationPosition).classList.add("square-active");
                window.removeEventListener('wheel', this.handleScroll);
                setTimeout(this.enableScroll, 800);
            }

        }
    }
    enableScroll = () => {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
        document.getElementById('page-1').classList.add("square-active");
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pagination">
                <div className="pagination-square" id="page-1"></div>
                <div className="pagination-square" id="page-2"></div>
                <div className="pagination-square" id="page-3"></div>
                <div className="pagination-square" id="page-4"></div>
                <div className="pagination-square" id="page-5"></div>
                <div className="pagination-square" id="page-6"></div>
            </div>
        );
    }
}

export default Pagination;