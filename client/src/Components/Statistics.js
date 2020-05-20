import React, { Component } from "react";
import "../styles/statistics.css";

class Statistics extends Component {
    render() {
        return (
            <div className="statistics-container">
                <h2>{this.props.score}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Statistics;