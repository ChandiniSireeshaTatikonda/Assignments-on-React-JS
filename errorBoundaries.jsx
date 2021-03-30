import React, { Component } from 'react';
class CustomErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>We are having a problem to print your name</h2>
                </div>
            );
        }
        else {
            return this.props.children;
        }
    }
}
export default CustomErrorBoundary;