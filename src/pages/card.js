import React from "react";
import { connect } from 'react-redux';
import { getData } from '../redux/actions/data';

class Card extends React.Component {
    constructor() {
        super();
    }

    static getDerivedStateFromProps() {
        console.log("asdfjasdfjlkas")
    }
}



const mapDispatchToProps = dispatch => {
    return {
        getData: () => {
            dispatch(getData());
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Card);