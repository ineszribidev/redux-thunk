import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <ul>
        {articles.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
//mapstoprops ma3néha connectyli lpartie de state te3na eli hya liste des articles b store